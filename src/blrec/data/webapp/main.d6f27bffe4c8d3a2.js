"use strict";(self.webpackChunkblrec=self.webpackChunkblrec||[]).push([[179],{8809:(ht,ge,m)=>{m.d(ge,{T6:()=>ne,VD:()=>re,WE:()=>H,Yt:()=>ke,lC:()=>I,py:()=>z,rW:()=>r,s:()=>L,ve:()=>q,vq:()=>S});var s=m(2567);function r(ee,Pe,Y){return{r:255*(0,s.sh)(ee,255),g:255*(0,s.sh)(Pe,255),b:255*(0,s.sh)(Y,255)}}function I(ee,Pe,Y){ee=(0,s.sh)(ee,255),Pe=(0,s.sh)(Pe,255),Y=(0,s.sh)(Y,255);var we=Math.max(ee,Pe,Y),le=Math.min(ee,Pe,Y),Fe=0,Oe=0,K=(we+le)/2;if(we===le)Oe=0,Fe=0;else{var ae=we-le;switch(Oe=K>.5?ae/(2-we-le):ae/(we+le),we){case ee:Fe=(Pe-Y)/ae+(Pe<Y?6:0);break;case Pe:Fe=(Y-ee)/ae+2;break;case Y:Fe=(ee-Pe)/ae+4}Fe/=6}return{h:Fe,s:Oe,l:K}}function G(ee,Pe,Y){return Y<0&&(Y+=1),Y>1&&(Y-=1),Y<1/6?ee+6*Y*(Pe-ee):Y<.5?Pe:Y<2/3?ee+(Pe-ee)*(2/3-Y)*6:ee}function q(ee,Pe,Y){var we,le,Fe;if(ee=(0,s.sh)(ee,360),Pe=(0,s.sh)(Pe,100),Y=(0,s.sh)(Y,100),0===Pe)le=Y,Fe=Y,we=Y;else{var Oe=Y<.5?Y*(1+Pe):Y+Pe-Y*Pe,K=2*Y-Oe;we=G(K,Oe,ee+1/3),le=G(K,Oe,ee),Fe=G(K,Oe,ee-1/3)}return{r:255*we,g:255*le,b:255*Fe}}function z(ee,Pe,Y){ee=(0,s.sh)(ee,255),Pe=(0,s.sh)(Pe,255),Y=(0,s.sh)(Y,255);var we=Math.max(ee,Pe,Y),le=Math.min(ee,Pe,Y),Fe=0,Oe=we,K=we-le,ae=0===we?0:K/we;if(we===le)Fe=0;else{switch(we){case ee:Fe=(Pe-Y)/K+(Pe<Y?6:0);break;case Pe:Fe=(Y-ee)/K+2;break;case Y:Fe=(ee-Pe)/K+4}Fe/=6}return{h:Fe,s:ae,v:Oe}}function H(ee,Pe,Y){ee=6*(0,s.sh)(ee,360),Pe=(0,s.sh)(Pe,100),Y=(0,s.sh)(Y,100);var we=Math.floor(ee),le=ee-we,Fe=Y*(1-Pe),Oe=Y*(1-le*Pe),K=Y*(1-(1-le)*Pe),ae=we%6;return{r:255*[Y,Oe,Fe,Fe,K,Y][ae],g:255*[K,Y,Y,Oe,Fe,Fe][ae],b:255*[Fe,Fe,K,Y,Y,Oe][ae]}}function S(ee,Pe,Y,we){var le=[(0,s.FZ)(Math.round(ee).toString(16)),(0,s.FZ)(Math.round(Pe).toString(16)),(0,s.FZ)(Math.round(Y).toString(16))];return we&&le[0].startsWith(le[0].charAt(1))&&le[1].startsWith(le[1].charAt(1))&&le[2].startsWith(le[2].charAt(1))?le[0].charAt(0)+le[1].charAt(0)+le[2].charAt(0):le.join("")}function L(ee,Pe,Y,we,le){var Fe=[(0,s.FZ)(Math.round(ee).toString(16)),(0,s.FZ)(Math.round(Pe).toString(16)),(0,s.FZ)(Math.round(Y).toString(16)),(0,s.FZ)(J(we))];return le&&Fe[0].startsWith(Fe[0].charAt(1))&&Fe[1].startsWith(Fe[1].charAt(1))&&Fe[2].startsWith(Fe[2].charAt(1))&&Fe[3].startsWith(Fe[3].charAt(1))?Fe[0].charAt(0)+Fe[1].charAt(0)+Fe[2].charAt(0)+Fe[3].charAt(0):Fe.join("")}function J(ee){return Math.round(255*parseFloat(ee)).toString(16)}function ne(ee){return re(ee)/255}function re(ee){return parseInt(ee,16)}function ke(ee){return{r:ee>>16,g:(65280&ee)>>8,b:255&ee}}},3487:(ht,ge,m)=>{m.d(ge,{R:()=>s});var s={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},7952:(ht,ge,m)=>{m.d(ge,{uA:()=>G});var s=m(8809),r=m(3487),I=m(2567);function G(re){var ke={r:0,g:0,b:0},ee=1,Pe=null,Y=null,we=null,le=!1,Fe=!1;return"string"==typeof re&&(re=function J(re){if(0===(re=re.trim().toLowerCase()).length)return!1;var ke=!1;if(r.R[re])re=r.R[re],ke=!0;else if("transparent"===re)return{r:0,g:0,b:0,a:0,format:"name"};var ee=U.rgb.exec(re);return ee?{r:ee[1],g:ee[2],b:ee[3]}:(ee=U.rgba.exec(re))?{r:ee[1],g:ee[2],b:ee[3],a:ee[4]}:(ee=U.hsl.exec(re))?{h:ee[1],s:ee[2],l:ee[3]}:(ee=U.hsla.exec(re))?{h:ee[1],s:ee[2],l:ee[3],a:ee[4]}:(ee=U.hsv.exec(re))?{h:ee[1],s:ee[2],v:ee[3]}:(ee=U.hsva.exec(re))?{h:ee[1],s:ee[2],v:ee[3],a:ee[4]}:(ee=U.hex8.exec(re))?{r:(0,s.VD)(ee[1]),g:(0,s.VD)(ee[2]),b:(0,s.VD)(ee[3]),a:(0,s.T6)(ee[4]),format:ke?"name":"hex8"}:(ee=U.hex6.exec(re))?{r:(0,s.VD)(ee[1]),g:(0,s.VD)(ee[2]),b:(0,s.VD)(ee[3]),format:ke?"name":"hex"}:(ee=U.hex4.exec(re))?{r:(0,s.VD)(ee[1]+ee[1]),g:(0,s.VD)(ee[2]+ee[2]),b:(0,s.VD)(ee[3]+ee[3]),a:(0,s.T6)(ee[4]+ee[4]),format:ke?"name":"hex8"}:!!(ee=U.hex3.exec(re))&&{r:(0,s.VD)(ee[1]+ee[1]),g:(0,s.VD)(ee[2]+ee[2]),b:(0,s.VD)(ee[3]+ee[3]),format:ke?"name":"hex"}}(re)),"object"==typeof re&&(ne(re.r)&&ne(re.g)&&ne(re.b)?(ke=(0,s.rW)(re.r,re.g,re.b),le=!0,Fe="%"===String(re.r).substr(-1)?"prgb":"rgb"):ne(re.h)&&ne(re.s)&&ne(re.v)?(Pe=(0,I.JX)(re.s),Y=(0,I.JX)(re.v),ke=(0,s.WE)(re.h,Pe,Y),le=!0,Fe="hsv"):ne(re.h)&&ne(re.s)&&ne(re.l)&&(Pe=(0,I.JX)(re.s),we=(0,I.JX)(re.l),ke=(0,s.ve)(re.h,Pe,we),le=!0,Fe="hsl"),Object.prototype.hasOwnProperty.call(re,"a")&&(ee=re.a)),ee=(0,I.Yq)(ee),{ok:le,format:re.format||Fe,r:Math.min(255,Math.max(ke.r,0)),g:Math.min(255,Math.max(ke.g,0)),b:Math.min(255,Math.max(ke.b,0)),a:ee}}var H="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),S="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),L="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),U={CSS_UNIT:new RegExp(H),rgb:new RegExp("rgb"+S),rgba:new RegExp("rgba"+L),hsl:new RegExp("hsl"+S),hsla:new RegExp("hsla"+L),hsv:new RegExp("hsv"+S),hsva:new RegExp("hsva"+L),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ne(re){return Boolean(U.CSS_UNIT.exec(String(re)))}},5192:(ht,ge,m)=>{m.d(ge,{C:()=>q});var s=m(8809),r=m(3487),I=m(7952),G=m(2567),q=function(){function H(S,L){var U;if(void 0===S&&(S=""),void 0===L&&(L={}),S instanceof H)return S;"number"==typeof S&&(S=(0,s.Yt)(S)),this.originalInput=S;var J=(0,I.uA)(S);this.originalInput=S,this.r=J.r,this.g=J.g,this.b=J.b,this.a=J.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(U=L.format)&&void 0!==U?U:J.format,this.gradientType=L.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=J.ok}return H.prototype.isDark=function(){return this.getBrightness()<128},H.prototype.isLight=function(){return!this.isDark()},H.prototype.getBrightness=function(){var S=this.toRgb();return(299*S.r+587*S.g+114*S.b)/1e3},H.prototype.getLuminance=function(){var S=this.toRgb(),ne=S.r/255,re=S.g/255,ke=S.b/255;return.2126*(ne<=.03928?ne/12.92:Math.pow((ne+.055)/1.055,2.4))+.7152*(re<=.03928?re/12.92:Math.pow((re+.055)/1.055,2.4))+.0722*(ke<=.03928?ke/12.92:Math.pow((ke+.055)/1.055,2.4))},H.prototype.getAlpha=function(){return this.a},H.prototype.setAlpha=function(S){return this.a=(0,G.Yq)(S),this.roundA=Math.round(100*this.a)/100,this},H.prototype.isMonochrome=function(){return 0===this.toHsl().s},H.prototype.toHsv=function(){var S=(0,s.py)(this.r,this.g,this.b);return{h:360*S.h,s:S.s,v:S.v,a:this.a}},H.prototype.toHsvString=function(){var S=(0,s.py)(this.r,this.g,this.b),L=Math.round(360*S.h),U=Math.round(100*S.s),J=Math.round(100*S.v);return 1===this.a?"hsv(".concat(L,", ").concat(U,"%, ").concat(J,"%)"):"hsva(".concat(L,", ").concat(U,"%, ").concat(J,"%, ").concat(this.roundA,")")},H.prototype.toHsl=function(){var S=(0,s.lC)(this.r,this.g,this.b);return{h:360*S.h,s:S.s,l:S.l,a:this.a}},H.prototype.toHslString=function(){var S=(0,s.lC)(this.r,this.g,this.b),L=Math.round(360*S.h),U=Math.round(100*S.s),J=Math.round(100*S.l);return 1===this.a?"hsl(".concat(L,", ").concat(U,"%, ").concat(J,"%)"):"hsla(".concat(L,", ").concat(U,"%, ").concat(J,"%, ").concat(this.roundA,")")},H.prototype.toHex=function(S){return void 0===S&&(S=!1),(0,s.vq)(this.r,this.g,this.b,S)},H.prototype.toHexString=function(S){return void 0===S&&(S=!1),"#"+this.toHex(S)},H.prototype.toHex8=function(S){return void 0===S&&(S=!1),(0,s.s)(this.r,this.g,this.b,this.a,S)},H.prototype.toHex8String=function(S){return void 0===S&&(S=!1),"#"+this.toHex8(S)},H.prototype.toHexShortString=function(S){return void 0===S&&(S=!1),1===this.a?this.toHexString(S):this.toHex8String(S)},H.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},H.prototype.toRgbString=function(){var S=Math.round(this.r),L=Math.round(this.g),U=Math.round(this.b);return 1===this.a?"rgb(".concat(S,", ").concat(L,", ").concat(U,")"):"rgba(".concat(S,", ").concat(L,", ").concat(U,", ").concat(this.roundA,")")},H.prototype.toPercentageRgb=function(){var S=function(L){return"".concat(Math.round(100*(0,G.sh)(L,255)),"%")};return{r:S(this.r),g:S(this.g),b:S(this.b),a:this.a}},H.prototype.toPercentageRgbString=function(){var S=function(L){return Math.round(100*(0,G.sh)(L,255))};return 1===this.a?"rgb(".concat(S(this.r),"%, ").concat(S(this.g),"%, ").concat(S(this.b),"%)"):"rgba(".concat(S(this.r),"%, ").concat(S(this.g),"%, ").concat(S(this.b),"%, ").concat(this.roundA,")")},H.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var S="#"+(0,s.vq)(this.r,this.g,this.b,!1),L=0,U=Object.entries(r.R);L<U.length;L++){var J=U[L];if(S===J[1])return J[0]}return!1},H.prototype.toString=function(S){var L=Boolean(S);S=S??this.format;var U=!1;return!L&&this.a<1&&this.a>=0&&(S.startsWith("hex")||"name"===S)?"name"===S&&0===this.a?this.toName():this.toRgbString():("rgb"===S&&(U=this.toRgbString()),"prgb"===S&&(U=this.toPercentageRgbString()),("hex"===S||"hex6"===S)&&(U=this.toHexString()),"hex3"===S&&(U=this.toHexString(!0)),"hex4"===S&&(U=this.toHex8String(!0)),"hex8"===S&&(U=this.toHex8String()),"name"===S&&(U=this.toName()),"hsl"===S&&(U=this.toHslString()),"hsv"===S&&(U=this.toHsvString()),U||this.toHexString())},H.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},H.prototype.clone=function(){return new H(this.toString())},H.prototype.lighten=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.l+=S/100,L.l=(0,G.V2)(L.l),new H(L)},H.prototype.brighten=function(S){void 0===S&&(S=10);var L=this.toRgb();return L.r=Math.max(0,Math.min(255,L.r-Math.round(-S/100*255))),L.g=Math.max(0,Math.min(255,L.g-Math.round(-S/100*255))),L.b=Math.max(0,Math.min(255,L.b-Math.round(-S/100*255))),new H(L)},H.prototype.darken=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.l-=S/100,L.l=(0,G.V2)(L.l),new H(L)},H.prototype.tint=function(S){return void 0===S&&(S=10),this.mix("white",S)},H.prototype.shade=function(S){return void 0===S&&(S=10),this.mix("black",S)},H.prototype.desaturate=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.s-=S/100,L.s=(0,G.V2)(L.s),new H(L)},H.prototype.saturate=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.s+=S/100,L.s=(0,G.V2)(L.s),new H(L)},H.prototype.greyscale=function(){return this.desaturate(100)},H.prototype.spin=function(S){var L=this.toHsl(),U=(L.h+S)%360;return L.h=U<0?360+U:U,new H(L)},H.prototype.mix=function(S,L){void 0===L&&(L=50);var U=this.toRgb(),J=new H(S).toRgb(),ne=L/100;return new H({r:(J.r-U.r)*ne+U.r,g:(J.g-U.g)*ne+U.g,b:(J.b-U.b)*ne+U.b,a:(J.a-U.a)*ne+U.a})},H.prototype.analogous=function(S,L){void 0===S&&(S=6),void 0===L&&(L=30);var U=this.toHsl(),J=360/L,ne=[this];for(U.h=(U.h-(J*S>>1)+720)%360;--S;)U.h=(U.h+J)%360,ne.push(new H(U));return ne},H.prototype.complement=function(){var S=this.toHsl();return S.h=(S.h+180)%360,new H(S)},H.prototype.monochromatic=function(S){void 0===S&&(S=6);for(var L=this.toHsv(),U=L.h,J=L.s,ne=L.v,re=[],ke=1/S;S--;)re.push(new H({h:U,s:J,v:ne})),ne=(ne+ke)%1;return re},H.prototype.splitcomplement=function(){var S=this.toHsl(),L=S.h;return[this,new H({h:(L+72)%360,s:S.s,l:S.l}),new H({h:(L+216)%360,s:S.s,l:S.l})]},H.prototype.onBackground=function(S){var L=this.toRgb(),U=new H(S).toRgb(),J=L.a+U.a*(1-L.a);return new H({r:(L.r*L.a+U.r*U.a*(1-L.a))/J,g:(L.g*L.a+U.g*U.a*(1-L.a))/J,b:(L.b*L.a+U.b*U.a*(1-L.a))/J,a:J})},H.prototype.triad=function(){return this.polyad(3)},H.prototype.tetrad=function(){return this.polyad(4)},H.prototype.polyad=function(S){for(var L=this.toHsl(),U=L.h,J=[this],ne=360/S,re=1;re<S;re++)J.push(new H({h:(U+re*ne)%360,s:L.s,l:L.l}));return J},H.prototype.equals=function(S){return this.toRgbString()===new H(S).toRgbString()},H}()},2567:(ht,ge,m)=>{function s(S,L){(function I(S){return"string"==typeof S&&-1!==S.indexOf(".")&&1===parseFloat(S)})(S)&&(S="100%");var U=function G(S){return"string"==typeof S&&-1!==S.indexOf("%")}(S);return S=360===L?S:Math.min(L,Math.max(0,parseFloat(S))),U&&(S=parseInt(String(S*L),10)/100),Math.abs(S-L)<1e-6?1:S=360===L?(S<0?S%L+L:S%L)/parseFloat(String(L)):S%L/�n{��h��춻�q�^v��ț��]��\�WK^ܝ\Ζț����\��\ۙ[��K�X]\�\Ζ܋�SڗKX�Ό��\�΍K�ۜ�Ζ�Ș���ۛ�X�Yݙ\�^H�������ۛ�X�Yݙ\�^H��������ۛ�X�Yݙ\�^SܚY�[������ۛ�X�Yݙ\�^S�[������ۛ�X�Yݙ\�^T��][ۜȋ����ۛ�X�Yݙ\�^T\�����\�����[�]�[�\���ݙ\�^S�]�YP�X�ȋ�]X�����][ې�[��H�Kțݙ\�^H�����ۛ�X�Yݙ\�^H�K�K�[�]��\������\�ȋ����[H������[�[X][ۈ�K�K�[�]��\X�۝[��K�K�[�]��\X\���ȗK�K�[�]��\X\����X�۝[�������[H�K�K�[�]��\Z[��\�������[H�K������[��[\]S�]]������[��[\]S�]]�۝^�WK[\]N��[��[ۊ�K�J^�I��I����S���K�LK���][\]H�K���S�K�����ݙ\�^S�]�YP�X�ȋ�[��[ۊJ^ܙ]\���K�ې�X���]�YJJ_JJ�]X���[��[ۊ
^ܙ]\���K�YJ
_JJ���][ې�[��H��[��[ۊJ^ܙ]\���K�۔��][ې�[��JJ_JJK���I����M������ۛ�X�Yݙ\�^SܚY�[���K�ܚY�[�J����ۛ�X�Yݙ\�^S�[���K�ݚ\�X�JJ����ۛ�X�Yݙ\�^T��][ۜȋ�K����][ۜ�J����ۛ�X�Yݙ\�^T\��L
J���\�����[�]�[�\���K���\�����[�]�[�\�_K\[�[��Y\Ζ�K�Z�K��K�K�K���K�K�K�K[��\�[][ێ��]N��[�[X][ێ��K��_K�[��Q]X�[ێ�JKY_JJ
KYOJ

OO���\��Y^�\�]\��YK�L��Y�X�Y�[��[ۊ�J^ܙ]\���]��_YJ_KYK�L��[[�\���P��\N�Y_JKYK�L��Z[��\��Ҕ��[\ܝΖ�YK��K�^�K�N�K��K�M�K��_JKY_JJ
_K̍��KJOO��K�
�KَN�
OO��َ�
OO��Kގ�
OO�_JNݘ\��[JL�JK�[J�L
KO[JM��K�[JLNLJKO[J��K�[JL�
K[J
K�[JM��JK[J��KO[J���K�[J�LJK�O[JM�N
K�O^�K�O^�Nٝ[��[ۈYJYJ^ٛ܊�\�]V�K�LL�OLәOYK�[��әJ�LJ^ݘ\��\�V�YVәWWN�Y���YOOX�
]����]�\��܊�[��[Y�\�X�\�
��YVәWJȊH�Nݘ\�]L̉���Y�
�J�	�L�JO�]
S��MN�[�^ݘ\��LI�����LK]�\�
��OOV�L�M�͍�V�
KS�L_\�]\��]H�P��Q��R��S��T��U��V�X��Y��Z��[��\��]��^�L��M��J��H���]
��K��ܑXX�
�[��[ۊYK]
^ܙV�YWO]]�V�]OZY_JNݘ\��O[J�MJN��ۜ�OH���S�����T���ӑ�QȎ��\���^��ۜ��X�܊]
^�\˘�ۙ�Y�]\˗��ۙJ]
_Y�]]�[

^ܙ]\��\˘�ۙ�Y˛]�[Y�]�\��\���]�[

^ܙ]\��\˘�ۙ�Y˜�\��\���]�[]\]P�ۙ�Y�]
^�\˘�ۙ�Y�]\˗��ۙJ]
_\\�X[\]P�ۙ�Y�]
^�]	��ؚ�X���^\�]
K��ܑXX�
�O��\˘�ۙ�Y�ӗO]]ӗ_J_Y�]�ۙ�Y�
^ܙ]\��\˗��ۙJ\˘�ۙ�Y�_W��ۙJ]
^��ۜ��^�]�[��[Nܙ]\��ؚ�X���^\�]
K��ܑXX�
O�Ӗ�O]]�_JK�_X�ۜ��OH���S�����T���ӑ�Q��S��S�WѐP�ԖH���\�����ݚYP�ۙ�Y�[��[�J]
^ܙ]\���]��J]
__X�ۜ�YOH���S�����T��PTT���T��P�H��]YOJ

OO���\��Y^��ۜ��X�܊�^�\˚�X��[�S�\˜��\��SX\�X�O[�]�X\\˛����][ې�X�O[�]�X\Y�]����][ۊ�
^��ۜ��O]\˙�]�X��[�J�N�Y�S�J\�]\��K�يJٚ[S�[YN���[�S�[X�\����[[��[X�\��JN��ۜ��]\˙�]��[��][ۊ�JN�Y�S��[�X�T��\��SX\�\�]\��K�يJ�
N��ۜ�]]\˙�]��\��SX\��][ۊ�JNܙ]\��\˙�]��\��SX\
]�
_Y�]�X��[�J�^��ۜ�[�]�\��܎��^����X�]���^�]�Mܙ]\����X�˜�]
���V�K�[��Y\����Έ�_
�
�LJK��X�˜�]
���V��
�����YY�\�
W_X�]�ܙ]\���[__Y�]��[��][ۊ�^��ۜ�S��\�[�^ي�ȊN�]�OS��[�^ي�H�NәO	���O]��Y
N��ۜ�]S���X���[��
�K�JK��]
���Nܙ]\���OOQ]�[���ٚ[S�[YN�]�K[�S�[X�\���]�WK��[[��[X�\���]̗_N�ٚ[S�[YN��[�ۛ�ۈ�[�S�[X�\����[[��[X�\��_Y�]�[��[S��][ۊ�^�]S��[�^ي��N�	��S��\�[�^ي��K	��S��\�[�^ي��JJN�]�OS��[�^ي�H�Nܙ]\���O	���O]��Y
K���X���[��
�K�J_Y�]��\��SX\��][ۊ�^��ۜ�]\˙�]�[��[S��][ۊ�K�OV��X���[���\�[�^ي���JNܙ]\���K��X���[���K�\�[�^ي���JJȋ�X\�Y�]X\[���
^�]�OL�L]L��ۜ��S��X\[��˜�]
�ȊNٛ܊]�L����[����
��^�]]L��ۜ�[���K��]
��Nٛ܊]�L՝�[��՝
��^��ۜ��YYJ՝JN�Y���[���M	��]
�R��K�J�R��WK�
�R�̗K]
�R���JK�OOV�[�S�[X�\�^�Y�]OOV���[[��[X�\�\�]\��ٚ[S�[YN�����\��\�әWK[�S�[X�\�����[[��[X�\��]N�Y��
�OOOY�[��
\�]\��ٚ[S�[YN�����\��\�әWK[�S�[X�\�����[[��[X�\��___\�]\��ٚ[S�[YN��[�ۛ�ۈ�[�S�[X�\����[[��[X�\��_Y�]��\��SX\
�
^��ۜ��O[�]�˘U���U��K�X	���[S�[Y_N���[�S�[X�\�N�����[[��[X�\�X�Y�\˛����][ې�X�K�\��
J\�]\��\˛����][ې�X�K��]
�
N�\˜��\��SX\�X�K�\��_
\˚�X��[��\˜��\��SX\�X�K��]
�\˚�X��[��[�J�JK�\J
��
J�O��[��[��[و˖��K
�JJ�O�����JK
˖
J�K
�
JJJJN��ۜ��K�\��܊������\���[���]��\��[X\�X�]\�H�X��[�\����ݚYY�[�H�YY�[\ܝ�Y[�[�[H�K\˜��\��SX\�X�K��]
�
K�يJ�[
JJJN��ۜ�]]\˜��\��SX\�X�K��]
�K�\J
�JJ�O���\˙�]X\[���
N�
K
K��J

OO�K�يJ
JK
�
JJJNܙ]\��\˛����][ې�X�K��]
�]
K]_\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJJ����˚��
J_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X�JKY_JJ
N��ۜ��OH���S�����T��QUQUW��T��P�H��]OJ

OO���\��Y^��ۜ��X�܊�^�\˙]T\OS�X��\]U[Y\�[\
�^��ۜ�J
OO��]�]JK��T����[��
Nܙ]\����[Y\�[\�ܛX]�\˙]T\O�\˙]T\K��[�ٛܛJ�]�]K��[Y\�[\�ܛX]
N��ۜ��K�\��܊������\���[��\�H[YT�[\�ܛX]�X�]\�H]T\H\����ݚYY�[�H�YY��ݚYH]T\H�K

JN�

_Y�]Y]Y]J��K�
^��ۜ�]^�]�[��Y][ۘ[��Nܙ]\��]�Y\��Y�OS�I����[��[ۈ�O]\[و�OәJ
N��K]�[Y\�[\]\˘��\]U[Y\�[\

K]_\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJJ�����K�UK
J_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X�JKY_JJ
N��ۜ�YOH���S�����T�ԕST���T��P�H��]J

OO���\��Y^���[�[ܚ]\���K�
^ܙ]\��V�\�X�P�ۜ��S���[�ɉ���V�]�[\��[�[�\��\���K�
^ܙ]\��HV��\��\����[��\�	����V��\��\���]�[\��[�[[ۚ]܊��K�
^ܙ]\��\˜��[�[ܚ]\���K�
_\˜��[�[�\��\���K�
__\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJ_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X�JKY_JJ
N��ۜ��OH���S�����T���T��T���T��P�H��]�OJ

OO���\��Y^��ۜ��X�܊�^�\˚�X��[�S�\�X�\�Q\��ܓؚ�X�
�^ܙ]\���˜�X��\�X�\�PY][ۘ[\�[Y]\���^ܙ]\���[OS�۝[���X\

�JOO���^ܙ]\��[��[��[و\��܏�\˜�X�\�Q\��ܓؚ�X�

N��ؚ�X��O]\[و	����Ӌ���[��Y�J
K
_X�]�ܙ]\��HY][ۘ[�ә_WH�[YH��[���H\��Y\�[����Ӌ���[��Y�J
K�_J_\�X�\�SY\��Y�J�^��^�Y��[��[��[و\��܊\�]\��\˜�X�\�Q\��ܓؚ�X�
�NȜ��[�ȈO]\[و����R��Ӌ���[��Y�J��[�J_X�]�ӏI�H�ݚYY�Y\��Y�H��[YH��[���H\��Y�]��Ӌ���[��Y�J
K��\�]\���X[\��\]Y\�
�^ܙ]\���[��۔�\��\���J^�Y�]\˚�X��[�
\�]\���ۜ��K�\��܊������\���[����ۈ�\��\��X�]\�H�X��[�\����ݚYY�[�H�YY�[\ܝ�Y[�[�[H�K
K�يJ�[
N�]�[�]�˘U�������_�JK]JK�يJ�
N��ۜ��]\˘[\��\]Y\�
�
Nܙ]\��˘�J�
O�][����]JK�يJ�
N��ۜ��K��\��������\��[\��\]Y\��]\��Y[�[��[Y�\]Y\��\�[��Y�][ۙH[��XY�K]�\J
���J�O���\˚�X��[��[�J�
N��ۜ��K��\��������\��[\��\]Y\��]\��Y[�[��[Y�\]Y\�
؜�\��X�JK�\�[��Y�][ۙH[��XY�K\˚�X��[��[�J�
JJK
��
J�O��[��[��[و˖��K
�JJ�O�����JJ_X�\��Z\�T�\]Y\���J�^ܙ]\���\�[���\��\��
^��ۜ��O^ˋ���NәK�Y][ۘ[]\˜�X�\�PY][ۘ[\�[Y]\���K�Y][ۘ[
K�K�Y\��Y�O]\˜�X�\�SY\��Y�J�K�Y\��Y�JN��ۜ��]\˘�\��Z\�T�\]Y\���J�JK]V��\��RXY\���]�˕�N�]�\���۝[�U\H�_]��]
��۝[�U\H��\X�][ۋڜ�ۈ�K\˛��۔�\��\���\��\����[��\���XY\�Α]\�[\Ζ��\��R\�[\��]�˓K�\�ۜ�U\N���\�ۜ�U\_���ۈ��]ܙY[�X[Ζ��]ܙY[�X[�L_JK�\J
K��J�O��ۜ��K�\��܊������\���Z[Y���ۈ�\��\���
K
K��J�
JJJK��X��ܚX�J
__\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJJ����˚��
J_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X�JKY_JJ
N��ۜ��OH���S�����T��ԒUT���T��P�H�ݘ\�OJ

OO�ܙ]\��YOS_
O^�JJV�YK��P�OLOH��P�H�YV�YK�P�Q�LWOH�P�QȋYV�YK�S���L�OH�S��ȋYV�YK���L�OH��ȋYV�YK��T��MOH��T���YV�YK�T��ԏMWOH�T��Ԉ�YV�YK��USM�OH��US�YV�YK�ё�M�OH�ё��Nݘ\�Y_JJ
N��ۜ�OVȜ\�H��X[��ܘ^H��ܘ^H���Y���Y���Y�N�]	OJ

OO���\��Y^��ۜ��X�܊�^�\˜]�ܛRYS�\˜�\\�SY]T��[�ѝ[���V�\˙�][Y\�[\�ܚ]K\˙�]]�[�ܚ]K\˙�]�[Q]Z[��ܚ]K\˙�]�۝^�ܚ]WK\˚\�QOJ�K���J�I���]�Y�]܉���]�Y�]܋�\�\�Y�[�	��JLOOO[�]�Y�]܋�\�\�Y�[��[�^ي�T�QH�I��[�]�Y�]܋�\�\�Y�[��X]�
��Y[���I��[�]�Y�]܋�\�\�Y�[��X]�
�Y�W��JK\˛�ѝ[��]\˚\�QO�\˛��QK��[�
\�N�\˛��[�\����[�
\�_Y�][Y\�[\�ܚ]J�
^ܙ]\����[Y\�[\Y�]]�[�ܚ]J�
^ܙ]\��VӋ�]�[_Y�]�[Q]Z[��ܚ]J�
^ܙ]\��LOOV�\�X�Q�[Q]Z[�Ȉ���Ӌ��[S�[Y_N�Ӌ�[�S�[X�\�N�Ӌ���[[��[X�\�WXY�]�۝^�ܚ]J�
^ܙ]\����۝^�����۝^_X���\�\\�SY]T��[���
^�]�OH��ܙ]\��\˜�\\�SY]T��[�ѝ[��˙�ܑXX�
�O���ۜ�]X�
�
N�]	���OS�JȈ��]
_JK�K��[J
_Y�]��܊�
^�Y���]�[OOSK�ё�\�]\�����ܔ��[YO��JVӋ�]�[_[��QJ��J^��ۜ��S��Y][ۘ[�N���]�
��]�[
^��\�HK��T����ۜ��K��\��	ә_H��Y\��Y�K����
N؜�XZ���\�HK�T��Ԏ��\�HK��US��ۜ��K�\��܊	ә_H��Y\��Y�K����
N؜�XZ���\�HK�S��Θ�ۜ��K�[���	ә_H��Y\��Y�K����
N؜�XZ��Y�][��ۜ��K���	ә_H��Y\��Y�K����
__[��[�\����J^��ۜ��]\˙�]��܊�
K]S��Y][ۘ[�N���]�
��]�[
^��\�HK��T����ۜ��K��\��	X�ә_X��܎���X��Y\��Y�K���]
N؜�XZ���\�HK�T��Ԏ��\�HK��US��ۜ��K�\��܊	X�ә_X��܎���X��Y\��Y�K���]
N؜�XZ���\�HK�S��Θ�ۜ��K�[���	X�ә_X��܎���X��Y\��Y�K���]
N؜�XZ���\�HK�P�QΘ�ۜ��K�X�Y�	X�ә_X��܎���X��Y\��Y�K���]
N؜�XZ��Y�][��ۜ��K���	X�ә_X��܎���X��Y\��Y�K���]
__]ܚ]SY\��Y�J�
^��ۜ��O]\˜�\\�SY]T��[���
N�\˛�ѝ[����J__\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJJ�������JJ_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X�JKY_JJ
K�OJ

OO���\��Y^��ۜ��X�܊��K�]��
^�\˛Y]Y]T�\��X�OS�K\˜�[T�\��X�OX�\˛X\\��\��X�OQ]\˝ܚ]\��\��X�O[�\˜�\��\��\��X�OP�\˘�ۙ�Y�[��[�OV��ݚYP�ۙ�Y�[��[�J�_Y�]]�[

^ܙ]\��\˘�ۙ�Y�[��[�K�]�[Y�]�\��\���]�[

^ܙ]\��\˘�ۙ�Y�[��[�K��\��\���]�[]�X�J����
^�\˗���K��P�K�
_YX�Y�����
^�\˗���K�P�Q��
_Z[�������
^�\˗���K�S����
_[������
^�\˗���K����
_]�\������
^�\˗���K��T���
_Y\��܊����
^�\˗���K�T��ԋ�
_Y�][
����
^�\˗���K��US�
_\�]�\��RXY\���^��ۜ�]\˙�]�ۙ�Y�ۘ\��

N���\��RXY\��S�\˝\]P�ۙ�Y�
_\�]�\��T\�[\��^��ۜ�]\˙�]�ۙ�Y�ۘ\��

N���\��R\�[\�S�\˝\]P�ۙ�Y�
_\�]�]ܙY[�X[��[ە�[YJ�^��ۜ�]\˙�]�ۙ�Y�ۘ\��

N���]ܙY[�X[�S�\˝\]P�ۙ�Y�
_\�Y�\�\�[ۚ]܊�^�\˗����\�[ۚ]܏S�]\]P�ۙ�Y��^�\˘�ۙ�Y�[��[�K�\]P�ۙ�Y��_\\�X[\]P�ۙ�Y��^�\˘�ۙ�Y�[��[�K�\�X[\]P�ۙ�Y��_Y�]�ۙ�Y�ۘ\��

^ܙ]\��\˘�ۙ�Y�[��[�K��]�ۙ�Y�
_W�����OV�J^��ۜ��]\˘�ۙ�Y�[��[�K��]�ۙ�Y�
K]]\˜�[T�\��X�K���[�[ܚ]\����JK�]\˜�[T�\��X�K���[�[�\��\����JK�]\˜�[T�\��X�K���[�[[ۚ]܊���JN�Y�Q]	��[�	��P�
\�]\����ۜ�]]\˛Y]Y]T�\��X�K��]Y]Y]J���JN�\˛X\\��\��X�K��]����][ۊ�]
K�\J
�K�JJJJK��X��ܚX�JO��	��]��[S�[YOY��[S�[YK]�[�S�[X�\�Y�[�S�[X�\�]���[[��[X�\�Y���[[��[X�\�K�	��\˗����\�[ۚ]܉��\˗����\�[ۚ]܋�ۓ��]�
K]	��\˝ܚ]\��\��X�K�ܚ]SY\��Y�J]�
K�	��\˜�\��\��\��X�K��[���\��\�]�
_J__\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJJ����JK�����JK�����JK����YJK����YJK�����JK�����JJ_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X��ݚYY[�������JKY_JJ
K�OJ

OO���\��Y^��ۜ��X�܊��K�]��
^�\˛���\�S�\˘�ۙ�Y�[��[�Q�X�ܞOV\˛Y]Y]T�\��X�OS�K\˜�[T�\��X�OX�\˛X\\��\��X�OQ]\˝ܚ]\��\��X�O[�\˜�\��\��\��X�OP�XܙX]J��K�
^ܙ]\��\˙�]�]�[��[��J��ۙ�YΓ��\��\��\��X�N���[ۚ]܎��KX\\��\��X�N��J_Y�]�]�[��[��J�^��ۜ�[�]��J�˘�ۙ�Y���\˛���\���]�ۙ�Y�ۘ\��

K�˘�ۙ�Y�[��[�Q�X�ܞO��\˘�ۙ�Y�[��[�Q�X�ܞK�˛Y]Y]T�\��X�O��\˛Y]Y]T�\��X�K�˜�[T�\��X�O��\˜�[T�\��X�K�˛X\\��\��X�O��\˛X\\��\��X�K�˝ܚ]\��\��X�O��\˝ܚ]\��\��X�K�˜�\��\��\��X�O��\˜�\��\��\��X�JNܙ]\���˜\�X[�ۙ�Yɉ��\�X[\]P�ۙ�Y���\�X[�ۙ�Y�K�˛��[ۚ]܉����Y�\�\�[ۚ]܊����[ۚ]܊K_\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJJ�����JK�����JK�����JK����YJK����YJK�����JK�����JJ_KYK�L��\�ݏ\��^�����[��YK�X�ܞN�YK�L��Y�X��ݚYY[�������JKY_JJ
K�J

OO���\��Y^��]X��ܔ���
�
^�Y�
^�JK��ۙ�Y��ݚY\�^�Y���ۙ�Y��ݚY\���ݚYHOO[J]����]�\��܊ܛۙ�[��X�[ۈ��[��܈�ۙ�Y��ݚY\�]��[�H	�_H[�[�H\�Y	���ۙ�Y��ݚY\���ݚY_X
_Y[�H��ۙ�Y��ݚY\�^��ݚYN�K\�U�[YN���_N�Y���ۙ�Y�[��[�Q�X�ܞT�ݚY\�^�Y���ۙ�Y�[��[�Q�X�ܞT�ݚY\���ݚYHOOS�J]����]�\��܊ܛۙ�[��X�[ۈ��[��܈�ۙ�Y�[��[�Q�X�ܞT�ݚY\�]��[�H	���_I�[�[�H\�Y	����ۙ�Y�[��[�Q�X�ܞT�ݚY\���ݚY_I�
_Y[�H��ۙ�Y�[��[�Q�X�ܞT�ݚY\�^��ݚYN��K\�P�\�Β�N�Y��Y]Y]T�ݚY\�^�Y��Y]Y]T�ݚY\���ݚYHOO[�J]����]�\��܊ܛۙ�[��X�[ۈ��[��܈Y]Y]T�ݚY\�]��[�H	���_I�[�[�H\�Y	���Y]Y]T�ݚY\���ݚY_I�
_Y[�H�Y]Y]T�ݚY\�^��ݚYN��K\�P�\�Β_N�Y���[T�ݚY\�^�Y���[T�ݚY\���ݚYHOOTYJ]����]�\��܊ܛۙ�[��X�[ۈ��[��܈�[T�ݚY\�]��[�H	��Y_I�[�[�H\�Y	����[T�ݚY\���ݚY_I�
_Y[�H��[T�ݚY\�^��ݚYN�YK\�P�\�ΝN�Y��X\\��ݚY\�^�Y��X\\��ݚY\���ݚYHOOXYJ]����]�\��܊ܛۙ�[��X�[ۈ��[��܈X\\��ݚY\�]��[�H	��Y_I�[�[�H\�Y	���X\\��ݚY\���ݚY_I�
_Y[�H�X\\��ݚY\�^��ݚYN�YK\�P�\�ΛY_N�Y��ܚ]\��ݚY\�^�Y��ܚ]\��ݚY\���ݚYHOO]�J]����]�\��܊ܛۙ�[��X�[ۈ��[��܈ܚ]\��ݚY\�]��[�H	�ݙ_I�[�[�H\�Y	���ܚ]\��ݚY\���ݚY_I�
_Y[�H�ܚ]\��ݚY\�^��ݚYN��K\�P�\�Ή_N�Y���\��\��ݚY\�^�Y���\��\��ݚY\���ݚYHOOP�J]����]�\��܊ܛۙ�[��X�[ۈ��[��܈�\��\��ݚY\�]��[�H	���_I�[�[�H\�Y	���ܚ]\��ݚY\���ݚY_I�
_Y[�H��\��\��ݚY\�^��ݚYN��K\�P�\�Κ�_Nܙ]\��ۙ�[�[N�YK�ݚY\�ΖЙK��ۙ�Y��ݚY\���ۙ�Y�[��[�Q�X�ܞT�ݚY\��Y]Y]T�ݚY\���[T�ݚY\��X\\��ݚY\��ܚ]\��ݚY\���\��\��ݚY\��W__\�]X��ܐ�[

^ܙ]\��ۙ�[�[N�Y___\�]\��YK�L��Y�X�Y�[��[ۊ�^ܙ]\���]��YJ_KYK�L��[[�\���P��\N�Y_JKYK�L��Z[��\��Ҕ��[\ܝΖ���K�^�W_JKY_JJ
__KO��
��L��_WJN