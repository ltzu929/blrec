import http
import re
from typing import Optional
from urllib.parse import parse_qs

from starlette.responses import RedirectResponse
from starlette.types import ASGIApp, Receive, Scope, Send


class RouteRedirectMiddleware:
    def __init__(self, app: ASGIApp) -> None:
        self._app = app
        self._pattern = re.compile(r'^/(tasks|settings|about)($|/.*$)')

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope['type'] != 'http':
            await self._app(scope, receive, send)
            return

        path = scope.get('path', '')
        if self._pattern.match(path):
            status_code = http.HTTPStatus.MOVED_PERMANENTLY.value
            target = self._legacy_studio_target(scope)
            response = RedirectResponse(target or '/', status_code=status_code)
            await response(scope, receive, send)
            return

        await self._app(scope, receive, send)

    @staticmethod
    def _legacy_studio_target(scope: Scope) -> Optional[str]:
        """Keep the old injected-navigation links working after the migration.

        Older pages used ``/tasks?studio=...`` as a launcher.  The middleware
        historically redirected all Angular routes to ``/``; special-casing
        that query here lets the native Angular router receive the intended
        destination while preserving the old URL's compatibility.
        """
        if scope.get('path') != '/tasks':
            return None

        raw_query = scope.get('query_string', b'')
        if isinstance(raw_query, bytes):
            raw_query = raw_query.decode('ascii', errors='ignore')
        studio = parse_qs(raw_query, keep_blank_values=True).get('studio', [None])[0]
        return {
            'tasks': '/studio/slices',
            'uploads': '/studio/uploads',
            'settings': '/studio/settings',
        }.get(studio)
