"use strict";(self.webpackChunkblrec=self.webpackChunkblrec||[]).push([[179],{8809:(dt,ge,m)=>{m.d(ge,{T6:()=>oe,VD:()=>ae,WE:()=>H,Yt:()=>Ie,lC:()=>F,py:()=>T,rW:()=>r,s:()=>L,ve:()=>q,vq:()=>S});var s=m(2567);function r(ee,Fe,j){return{r:255*(0,s.sh)(ee,255),g:255*(0,s.sh)(Fe,255),b:255*(0,s.sh)(j,255)}}function F(ee,Fe,j){ee=(0,s.sh)(ee,255),Fe=(0,s.sh)(Fe,255),j=(0,s.sh)(j,255);var Oe=Math.max(ee,Fe,j),pe=Math.min(ee,Fe,j),He=0,Pe=0,G=(Oe+pe)/2;if(Oe===pe)Pe=0,He=0;else{var se=Oe-pe;switch(Pe=G>.5?se/(2-Oe-pe):se/(Oe+pe),Oe){case ee:He=(Fe-j)/se+(Fe<j?6:0);break;case Fe:He=(j-ee)/se+2;break;case j:He=(ee-Fe)/se+4}He/=6}return{h:He,s:Pe,l:G}}function K(ee,Fe,j){return j<0&&(j+=1),j>1&&(j-=1),j<1/6?ee+6*j*(Fe-ee):j<.5?Fe:j<2/3?ee+(Fe-ee)*(2/3-j)*6:ee}function q(ee,Fe,j){var Oe,pe,He;if(ee=(0,s.sh)(ee,360),Fe=(0,s.sh)(Fe,100),j=(0,s.sh)(j,100),0===Fe)pe=j,He=j,Oe=j;else{var Pe=j<.5?j*(1+Fe):j+Fe-j*Fe,G=2*j-Pe;Oe=K(G,Pe,ee+1/3),pe=K(G,Pe,ee),He=K(G,Pe,ee-1/3)}return{r:255*Oe,g:255*pe,b:255*He}}function T(ee,Fe,j){ee=(0,s.sh)(ee,255),Fe=(0,s.sh)(Fe,255),j=(0,s.sh)(j,255);var Oe=Math.max(ee,Fe,j),pe=Math.min(ee,Fe,j),He=0,Pe=Oe,G=Oe-pe,se=0===Oe?0:G/Oe;if(Oe===pe)He=0;else{switch(Oe){case ee:He=(Fe-j)/G+(Fe<j?6:0);break;case Fe:He=(j-ee)/G+2;break;case j:He=(ee-Fe)/G+4}He/=6}return{h:He,s:se,v:Pe}}function H(ee,Fe,j){ee=6*(0,s.sh)(ee,360),Fe=(0,s.sh)(Fe,100),j=(0,s.sh)(j,100);var Oe=Math.floor(ee),pe=ee-Oe,He=j*(1-Fe),Pe=j*(1-pe*Fe),G=j*(1-(1-pe)*Fe),se=Oe%6;return{r:255*[j,Pe,He,He,G,j][se],g:255*[G,j,j,Pe,He,He][se],b:255*[He,He,G,j,j,Pe][se]}}function S(ee,Fe,j,Oe){var pe=[(0,s.FZ)(Math.round(ee).toString(16)),(0,s.FZ)(Math.round(Fe).toString(16)),(0,s.FZ)(Math.round(j).toString(16))];return Oe&&pe[0].startsWith(pe[0].charAt(1))&&pe[1].startsWith(pe[1].charAt(1))&&pe[2].startsWith(pe[2].charAt(1))?pe[0].charAt(0)+pe[1].charAt(0)+pe[2].charAt(0):pe.join("")}function L(ee,Fe,j,Oe,pe){var He=[(0,s.FZ)(Math.round(ee).toString(16)),(0,s.FZ)(Math.round(Fe).toString(16)),(0,s.FZ)(Math.round(j).toString(16)),(0,s.FZ)(J(Oe))];return pe&&He[0].startsWith(He[0].charAt(1))&&He[1].startsWith(He[1].charAt(1))&&He[2].startsWith(He[2].charAt(1))&&He[3].startsWith(He[3].charAt(1))?He[0].charAt(0)+He[1].charAt(0)+He[2].charAt(0)+He[3].charAt(0):He.join("")}function J(ee){return Math.round(255*parseFloat(ee)).toString(16)}function oe(ee){return ae(ee)/255}function ae(ee){return parseInt(ee,16)}function Ie(ee){return{r:ee>>16,g:(65280&ee)>>8,b:255&ee}}},3487:(dt,ge,m)=>{m.d(ge,{R:()=>s});var s={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},7952:(dt,ge,m)=>{m.d(ge,{uA:()=>K});var s=m(8809),r=m(3487),F=m(2567);function K(ae){var Ie={r:0,g:0,b:0},ee=1,Fe=null,j=null,Oe=null,pe=!1,He=!1;return"string"==typeof ae&&(ae=function J(ae){if(0===(ae=ae.trim().toLowerCase()).length)return!1;var Ie=!1;if(r.R[ae])ae=r.R[ae],Ie=!0;else if("transparent"===ae)return{r:0,g:0,b:0,a:0,format:"name"};var ee=$.rgb.exec(ae);return ee?{r:ee[1],g:ee[2],b:ee[3]}:(ee=$.rgba.exec(ae))?{r:ee[1],g:ee[2],b:ee[3],a:ee[4]}:(ee=$.hsl.exec(ae))?{h:ee[1],s:ee[2],l:ee[3]}:(ee=$.hsla.exec(ae))?{h:ee[1],s:ee[2],l:ee[3],a:ee[4]}:(ee=$.hsv.exec(ae))?{h:ee[1],s:ee[2],v:ee[3]}:(ee=$.hsva.exec(ae))?{h:ee[1],s:ee[2],v:ee[3],a:ee[4]}:(ee=$.hex8.exec(ae))?{r:(0,s.VD)(ee[1]),g:(0,s.VD)(ee[2]),b:(0,s.VD)(ee[3]),a:(0,s.T6)(ee[4]),format:Ie?"name":"hex8"}:(ee=$.hex6.exec(ae))?{r:(0,s.VD)(ee[1]),g:(0,s.VD)(ee[2]),b:(0,s.VD)(ee[3]),format:Ie?"name":"hex"}:(ee=$.hex4.exec(ae))?{r:(0,s.VD)(ee[1]+ee[1]),g:(0,s.VD)(ee[2]+ee[2]),b:(0,s.VD)(ee[3]+ee[3]),a:(0,s.T6)(ee[4]+ee[4]),format:Ie?"name":"hex8"}:!!(ee=$.hex3.exec(ae))&&{r:(0,s.VD)(ee[1]+ee[1]),g:(0,s.VD)(ee[2]+ee[2]),b:(0,s.VD)(ee[3]+ee[3]),format:Ie?"name":"hex"}}(ae)),"object"==typeof ae&&(oe(ae.r)&&oe(ae.g)&&oe(ae.b)?(Ie=(0,s.rW)(ae.r,ae.g,ae.b),pe=!0,He="%"===String(ae.r).substr(-1)?"prgb":"rgb"):oe(ae.h)&&oe(ae.s)&&oe(ae.v)?(Fe=(0,F.JX)(ae.s),j=(0,F.JX)(ae.v),Ie=(0,s.WE)(ae.h,Fe,j),pe=!0,He="hsv"):oe(ae.h)&&oe(ae.s)&&oe(ae.l)&&(Fe=(0,F.JX)(ae.s),Oe=(0,F.JX)(ae.l),Ie=(0,s.ve)(ae.h,Fe,Oe),pe=!0,He="hsl"),Object.prototype.hasOwnProperty.call(ae,"a")&&(ee=ae.a)),ee=(0,F.Yq)(ee),{ok:pe,format:ae.format||He,r:Math.min(255,Math.max(Ie.r,0)),g:Math.min(255,Math.max(Ie.g,0)),b:Math.min(255,Math.max(Ie.b,0)),a:ee}}var H="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),S="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),L="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),$={CSS_UNIT:new RegExp(H),rgb:new RegExp("rgb"+S),rgba:new RegExp("rgba"+L),hsl:new RegExp("hsl"+S),hsla:new RegExp("hsla"+L),hsv:new RegExp("hsv"+S),hsva:new RegExp("hsva"+L),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function oe(ae){return Boolean($.CSS_UNIT.exec(String(ae)))}},5192:(dt,ge,m)=>{m.d(ge,{C:()=>q});var s=m(8809),r=m(3487),F=m(7952),K=m(2567),q=function(){function H(S,L){var $;if(void 0===S&&(S=""),void 0===L&&(L={}),S instanceof H)return S;"number"==typeof S&&(S=(0,s.Yt)(S)),this.originalInput=S;var J=(0,F.uA)(S);this.originalInput=S,this.r=J.r,this.g=J.g,this.b=J.b,this.a=J.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==($=L.format)&&void 0!==$?$:J.format,this.gradientType=L.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=J.ok}return H.prototype.isDark=function(){return this.getBrightness()<128},H.prototype.isLight=function(){return!this.isDark()},H.prototype.getBrightness=function(){var S=this.toRgb();return(299*S.r+587*S.g+114*S.b)/1e3},H.prototype.getLuminance=function(){var S=this.toRgb(),oe=S.r/255,ae=S.g/255,Ie=S.b/255;return.2126*(oe<=.03928?oe/12.92:Math.pow((oe+.055)/1.055,2.4))+.7152*(ae<=.03928?ae/12.92:Math.pow((ae+.055)/1.055,2.4))+.0722*(Ie<=.03928?Ie/12.92:Math.pow((Ie+.055)/1.055,2.4))},H.prototype.getAlpha=function(){return this.a},H.prototype.setAlpha=function(S){return this.a=(0,K.Yq)(S),this.roundA=Math.round(100*this.a)/100,this},H.prototype.isMonochrome=function(){return 0===this.toHsl().s},H.prototype.toHsv=function(){var S=(0,s.py)(this.r,this.g,this.b);return{h:360*S.h,s:S.s,v:S.v,a:this.a}},H.prototype.toHsvString=function(){var S=(0,s.py)(this.r,this.g,this.b),L=Math.round(360*S.h),$=Math.round(100*S.s),J=Math.round(100*S.v);return 1===this.a?"hsv(".concat(L,", ").concat($,"%, ").concat(J,"%)"):"hsva(".concat(L,", ").concat($,"%, ").concat(J,"%, ").concat(this.roundA,")")},H.prototype.toHsl=function(){var S=(0,s.lC)(this.r,this.g,this.b);return{h:360*S.h,s:S.s,l:S.l,a:this.a}},H.prototype.toHslString=function(){var S=(0,s.lC)(this.r,this.g,this.b),L=Math.round(360*S.h),$=Math.round(100*S.s),J=Math.round(100*S.l);return 1===this.a?"hsl(".concat(L,", ").concat($,"%, ").concat(J,"%)"):"hsla(".concat(L,", ").concat($,"%, ").concat(J,"%, ").concat(this.roundA,")")},H.prototype.toHex=function(S){return void 0===S&&(S=!1),(0,s.vq)(this.r,this.g,this.b,S)},H.prototype.toHexString=function(S){return void 0===S&&(S=!1),"#"+this.toHex(S)},H.prototype.toHex8=function(S){return void 0===S&&(S=!1),(0,s.s)(this.r,this.g,this.b,this.a,S)},H.prototype.toHex8String=function(S){return void 0===S&&(S=!1),"#"+this.toHex8(S)},H.prototype.toHexShortString=function(S){return void 0===S&&(S=!1),1===this.a?this.toHexString(S):this.toHex8String(S)},H.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},H.prototype.toRgbString=function(){var S=Math.round(this.r),L=Math.round(this.g),$=Math.round(this.b);return 1===this.a?"rgb(".concat(S,", ").concat(L,", ").concat($,")"):"rgba(".concat(S,", ").concat(L,", ").concat($,", ").concat(this.roundA,")")},H.prototype.toPercentageRgb=function(){var S=function(L){return"".concat(Math.round(100*(0,K.sh)(L,255)),"%")};return{r:S(this.r),g:S(this.g),b:S(this.b),a:this.a}},H.prototype.toPercentageRgbString=function(){var S=function(L){return Math.round(100*(0,K.sh)(L,255))};return 1===this.a?"rgb(".concat(S(this.r),"%, ").concat(S(this.g),"%, ").concat(S(this.b),"%)"):"rgba(".concat(S(this.r),"%, ").concat(S(this.g),"%, ").concat(S(this.b),"%, ").concat(this.roundA,")")},H.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var S="#"+(0,s.vq)(this.r,this.g,this.b,!1),L=0,$=Object.entries(r.R);L<$.length;L++){var J=$[L];if(S===J[1])return J[0]}return!1},H.prototype.toString=function(S){var L=Boolean(S);S=S??this.format;var $=!1;return!L&&this.a<1&&this.a>=0&&(S.startsWith("hex")||"name"===S)?"name"===S&&0===this.a?this.toName():this.toRgbString():("rgb"===S&&($=this.toRgbString()),"prgb"===S&&($=this.toPercentageRgbString()),("hex"===S||"hex6"===S)&&($=this.toHexString()),"hex3"===S&&($=this.toHexString(!0)),"hex4"===S&&($=this.toHex8String(!0)),"hex8"===S&&($=this.toHex8String()),"name"===S&&($=this.toName()),"hsl"===S&&($=this.toHslString()),"hsv"===S&&($=this.toHsvString()),$||this.toHexString())},H.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},H.prototype.clone=function(){return new H(this.toString())},H.prototype.lighten=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.l+=S/100,L.l=(0,K.V2)(L.l),new H(L)},H.prototype.brighten=function(S){void 0===S&&(S=10);var L=this.toRgb();return L.r=Math.max(0,Math.min(255,L.r-Math.round(-S/100*255))),L.g=Math.max(0,Math.min(255,L.g-Math.round(-S/100*255))),L.b=Math.max(0,Math.min(255,L.b-Math.round(-S/100*255))),new H(L)},H.prototype.darken=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.l-=S/100,L.l=(0,K.V2)(L.l),new H(L)},H.prototype.tint=function(S){return void 0===S&&(S=10),this.mix("white",S)},H.prototype.shade=function(S){return void 0===S&&(S=10),this.mix("black",S)},H.prototype.desaturate=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.s-=S/100,L.s=(0,K.V2)(L.s),new H(L)},H.prototype.saturate=function(S){void 0===S&&(S=10);var L=this.toHsl();return L.s+=S/100,L.s=(0,K.V2)(L.s),new H(L)},H.prototype.greyscale=function(){return this.desaturate(100)},H.prototype.spin=function(S){var L=this.toHsl(),$=(L.h+S)%360;return L.h=$<0?360+$:$,new H(L)},H.prototype.mix=function(S,L){void 0===L&&(L=50);var $=this.toRgb(),J=new H(S).toRgb(),oe=L/100;return new H({r:(J.r-$.r)*oe+$.r,g:(J.g-$.g)*oe+$.g,b:(J.b-$.b)*oe+$.b,a:(J.a-$.a)*oe+$.a})},H.prototype.analogous=function(S,L){void 0===S&&(S=6),void 0===L&&(L=30);var $=this.toHsl(),J=360/L,oe=[this];for($.h=($.h-(J*S>>1)+720)%360;--S;)$.h=($.h+J)%360,oe.push(new H($));return oe},H.prototype.complement=function(){var S=this.toHsl();return S.h=(S.h+180)%360,new H(S)},H.prototype.monochromatic=function(S){void 0===S&&(S=6);for(var L=this.toHsv(),$=L.h,J=L.s,oe=L.v,ae=[],Ie=1/S;S--;)ae.push(new H({h:$,s:J,v:oe})),oe=(oe+Ie)%1;return ae},H.prototype.splitcomplement=function(){var S=this.toHsl(),L=S.h;return[this,new H({h:(L+72)%360,s:S.s,l:S.l}),new H({h:(L+216)%360,s:S.s,l:S.l})]},H.prototype.onBackground=function(S){var L=this.toRgb(),$=new H(S).toRgb(),J=L.a+$.a*(1-L.a);return new H({r:(L.r*L.a+$.r*$.a*(1-L.a))/J,g:(L.g*L.a+$.g*$.a*(1-L.a))/J,b:(L.b*L.a+$.b*$.a*(1-L.a))/J,a:J})},H.prototype.triad=function(){return this.polyad(3)},H.prototype.tetrad=function(){return this.polyad(4)},H.prototype.polyad=function(S){for(var L=this.toHsl(),$=L.h,J=[this],oe=360/S,ae=1;ae<S;ae++)J.push(new H({h:($+ae*oe)%360,s:L.s,l:L.l}));return J},H.prototype.equals=function(S){return this.toRgbString()===new H(S).toRgbString()},H}()},2567:(dt,ge,m)=>{function s(S,L){(function F(S){return"string"==typeof S&&-1!==S.indexOf(".")&&1===parseFloat(S)})(S)&&(S="100%");var $=function K(S){return"string"==typeof S&&-1!==S.indexOf("%")}(S);return S=360===L?S:Math.min(L,Math.max(0,parseFloat(S))),$&&(S=parseInt(String(S*L),10)/100),Math.abs(S-L)<1e-6?1:S=360===L?(S<0?S%L+L:S%L)/parseFloat(String(L)):S%L/Ûn7çkh‘éì¶»§q«^vÈ›ž‹]ÛÛ\—WK^Ü\Î–È›ž•ÛÛ\ÛÛ\Û™[—K™X]\™\Î–Ü‹œSÚ—KXÛÎŒ‹˜\œÎKÛÛœÝÎ–ÖÈ˜ÙÐÛÛ›™XÝYÝ™\›^H‹ˆ‹›žÛÛ›™XÝYÝ™\›^H‹ˆ‹Ë˜ÙÐÛÛ›™XÝYÝ™\›^SÜšYÚ[ˆ‹˜ÙÐÛÛ›™XÝYÝ™\›^SÜ[ˆ‹˜ÙÐÛÛ›™XÝYÝ™\›^TÜÚ][ÛœÈ‹˜ÙÐÛÛ›™XÝYÝ™\›^T\Ú‹›ž\œ›ÝÔÚ[]Ù[\ˆ‹›Ý™\›^SÝ]ÚYPÛXÚÈ‹™]XÚ‹œÜÚ][ÛÚ[™ÙH—KÈ›Ý™\›^H‹˜ÙÐÛÛ›™XÝYÝ™\›^H—KÌK˜[]ÛÛ\‹Ë›™ÐÛ\ÜÈ‹›™ÔÝ[H‹›ž“›Ð[š[X][Ûˆ—KÌK˜[]ÛÛ\XÛÛ[—KÌK˜[]ÛÛ\X\œ›ÝÈ—KÌK˜[]ÛÛ\X\œ›ÝËXÛÛ[‹Ë›™ÔÝ[H—KÌK˜[]ÛÛ\Z[›™\ˆ‹Ë›™ÔÝ[H—KÍ›ž”Ýš[™Õ[\]SÝ]]‹›ž”Ýš[™Õ[\]SÝ]]ÛÛ^—WK[\]N™[˜Ý[ÛŠÙKYJ^ÌIÙI‰Š‹–S˜ÊK‹LK›™Ë][\]H‹K‹•ÌSÊK‹“™Š›Ý™\›^SÝ]ÚYPÛXÚÈ‹[˜Ý[ÛŠJ^Ü™]\›ˆYK›ÛÛXÚÓÝ]ÚYJJ_JJ™]XÚ‹[˜Ý[ÛŠ
^Ü™]\›ˆYKšYJ
_JJœÜÚ][ÛÚ[™ÙH‹[˜Ý[ÛŠJ^Ü™]\›ˆYK›Û”ÜÚ][ÛÚ[™ÙJJ_JJK‰ÙI‰œ‹”M’Š˜ÙÐÛÛ›™XÝYÝ™\›^SÜšYÚ[ˆ‹YK›ÜšYÚ[ŠJ˜ÙÐÛÛ›™XÝYÝ™\›^SÜ[ˆ‹YK—Ýš\ÚX›JJ˜ÙÐÛÛ›™XÝYÝ™\›^TÜÚ][ÛœÈ‹YK—ÜÜÚ][ÛœÊJ˜ÙÐÛÛ›™XÝYÝ™\›^T\Ú‹L
J›ž\œ›ÝÔÚ[]Ù[\ˆ‹YK›ž\œ›ÝÔÚ[]Ù[\Š_K\[™[˜ÚY\Î–Ñ™K›ZË™K”Ë‹œKÙK™‹ÙKšKYK”K[˜Ø\Ý[][ÛŽŒ‹]NžØ[š[X][ÛŽ–Ñ‹‰×_KÚ[™ÙQ]XÝ[ÛŽŒJKY_JJ
K™OJ

OOžØÛ\ÜÈY^ß\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠÙJ^Ü™]\›ˆ™]ÊÙ_YJ_KYK—LÍ[[Ù\‹›ÐPŠÝ\NœY_JKYK—LÍZ[š\‹˜Ò”ÊÚ[\ÜÎ–ÙYK•™K™^‹‹•NÙK•ÙK™MYK™×_JKY_JJ
_KÌŠÙKJOOžÛK™
ÙKÙŽNŠ
OOšÙŽŠ
OO–YKÞŽŠ
OO“_JNÝ˜\ˆÏ[JLŽJK[JL
K[JMŠKÏ[JLNLJKO[JŽÊK[JLÌ
K[J
KÏ[JMŒJK[JÎŠK	[JŒŠK[JÍLJKÙO[JMŽN
KYO^ßKYO^ßNÙ[˜Ý[ÛˆYJYJ^Ù›ÜŠ˜\ˆV×KLL™OLÐ™OYK›[™ÝÐ™JÏLJ^Ý˜\ˆÝXYVÚYVÐ™WWNÚYŠ›ÚYOOXÝ
]›ÝÈ™]È\œ›ÜŠ’[˜[YÚ\˜XÝ\ˆ
ŠÚYVÐ™WJÈŠHŠNÝ˜\ˆLÌ‰˜ÝÚYŠ
ÏJÝ	LÌJO‹
SŠÏMNÙ[Ù^Ý˜\ˆÝLI–ÖLKœ\Ú
ÝÌOOVËLŒMÍÍ‹V–
KSL_\™]\›ˆHPÑQ‘ÒR’ÓS“ÔT”ÕU•ÖV˜X˜ÙY™ÚZšÛ[›Ü\œÝ]Þ^ŒLŒÍMÎJËÏH‹œÜ]
ˆŠK™›Ü‘XXÚ
[˜Ý[ÛŠYK
^ØYVÚYWO[YVÛOZY_JNÝ˜\ˆÙO[JŽMJNØÛÛœÝOH•ÒÑS—ÓÑÑÑT—ÐÓÓ‘’QÈŽØÛ\ÜÈ^ØÛÛœÝXÝÜŠ
^Ý\Ë˜ÛÛ™šYÏ]\Ë—ØÛÛ™J
_YÙ]]™[

^Ü™]\›ˆ\Ë˜ÛÛ™šYË›]™[YÙ]Ù\™\“ÙÓ]™[

^Ü™]\›ˆ\Ë˜ÛÛ™šYËœÙ\™\“ÙÓ]™[]\]PÛÛ™šYÊ
^Ý\Ë˜ÛÛ™šYÏ]\Ë—ØÛÛ™J
_\\X[\]PÛÛ™šYÊ
^Û	‰“Øš™XÝšÙ^\Ê
K™›Ü‘XXÚ
OžÝ\Ë˜ÛÛ™šYÖÓ—O[Ó—_J_YÙ]ÛÛ™šYÊ
^Ü™]\›ˆ\Ë—ØÛÛ™J\Ë˜ÛÛ™šYÊ_WØÛÛ™J
^ØÛÛœÝ^Û]™[›[NÜ™]\›ˆØš™XÝšÙ^\Ê
K™›Ü‘XXÚ
OžÓ–ÖO[Ö_JKŸ_XÛÛœÝOH•ÒÑS—ÓÑÑÑT—ÐÓÓ‘’Q×ÑS‘ÒS‘WÑPÕÔ–HŽØÛ\ÜÈÞÜ›ÝšYPÛÛ™šYÑ[™Ú[™J
^Ü™]\›ˆ™]ÈJ
__XÛÛœÝÙOH•ÒÑS—ÓÑÑÑT—ÓPTT—ÔÑT•’PÑHŽÛ]YOJ

OOžØÛ\ÜÈY^ØÛÛœÝXÝÜŠŠ^Ý\Ëš˜XÚÙ[™S‹\ËœÛÝ\˜ÙSX\ØXÚO[™]ÈX\\Ë›ÙÔÜÚ][ÛØXÚO[™]ÈX\YÙ]ÙÔÜÚ][ÛŠ‹
^ØÛÛœÝ™O]\Ë™Ù]ÝXÚÓ[™JŠNÚYŠP™J\™]\›Š‹›ÙŠJÙš[S˜[YNˆˆ‹[™S[X™\ŽŒÛÛ[[“[X™\ŽŒJNØÛÛœÝÝ]\Ë™Ù]ØØ[ÜÚ][ÛŠ™JNÚYŠS‹™[˜X›TÛÝ\˜ÙSX\Ê\™]\›Š‹›ÙŠJÝ
NØÛÛœÝ]\Ë™Ù]ÛÝ\˜ÙSX\ØØ][ÛŠ™JNÜ™]\›ˆ\Ë™Ù]ÛÝ\˜ÙSX\
Ý
_YÙ]ÝXÚÓ[™JŠ^ØÛÛœÝ[™]È\œ›ÜŽÝž^Ý›ÝÈXØ]ÚÝž^Û]ÝMÜ™]\›ˆœÝXÚËœÜ]
—ˆŠVÌKš[˜ÛY\Ê‹šœÎˆŠ_
Ý
ÏLJKœÝXÚËœÜ]
—ˆŠVØÝ
Ê‹œ›ÞYYÝ\ß
W_XØ]ÚÜ™]\›ˆ[__YÙ]ØØ[ÜÚ][ÛŠŠ^ØÛÛœÝS‹›\Ý[™^ÙŠ‹ÈŠNÛ]™OS‹š[™^ÙŠŠHŠNÐ™O	‰Š™O]›ÚY
NØÛÛœÝS‹œÝXœÝš[™Ê
ÌK™JKœÜ]
ŽˆŠNÜ™]\›ˆÏOOX›[™ÝÞÙš[S˜[YN˜ÌK[™S[X™\ŽŠØÌWKÛÛ[[“[X™\ŽŠØÌ—_NžÙš[S˜[YNˆ[šÛ›ÝÛˆ‹[™S[X™\ŽŒÛÛ[[“[X™\ŽŒ_YÙ]˜[œÜ[SØØ][ÛŠŠ^Û]S‹š[™^ÙŠŠŠNÖ	‰ŠS‹›\Ý[™^ÙŠŠK	‰ŠS‹›\Ý[™^ÙŠˆŠJJNÛ]™OS‹š[™^ÙŠŠHŠNÜ™]\›ˆ™O	‰Š™O]›ÚY
K‹œÝXœÝš[™Ê
ÌK™J_YÙ]ÛÝ\˜ÙSX\ØØ][ÛŠŠ^ØÛÛœÝ]\Ë™Ù]˜[œÜ[SØØ][ÛŠŠK™OVœÝXœÝš[™Ê›\Ý[™^ÙŠŽˆŠJNÜ™]\›ˆ™KœÝXœÝš[™Ê™K›\Ý[™^ÙŠŽˆŠJJÈ‹›X\ŸYÙ]X\[™Ê‹
^Û]™OLÝLLØÛÛœÝÝS‹›X\[™ÜËœÜ]
ŽÈŠNÙ›ÜŠ]]LÓ]Ý›[™ÝÓ]
ÊÊ^Û]]LØÛÛœÝ][ÝÓ]KœÜ]
‹ŠNÙ›ÜŠ]LÔ]›[™ÝÔ
ÊÊ^ØÛÛœÝ]YYJ]ÔJNÚYŠ]›[™ÝM	‰Š]
Ï\]ÌK™JÏ\]ÌWKÝ
Ï\]Ì—K
Ï\]Ì×JK]OOV›[™S[X™\Š^ÚYŠ]OOV˜ÛÛ[[“[X™\Š\™]\›žÙš[S˜[YN“‹œÛÝ\˜Ù\ÖÐ™WK[™S[X™\Ž˜ÝÛÛ[[“[X™\Ž˜NÚYŠ
ÌOOO^]›[™Ý
\™]\›žÙš[S˜[YN“‹œÛÝ\˜Ù\ÖÐ™WK[™S[X™\Ž˜ÝÛÛ[[“[X™\ŽŒ___\™]\›žÙš[S˜[YNˆ[šÛ›ÝÛˆ‹[™S[X™\ŽŒÛÛ[[“[X™\ŽŒ_YÙ]ÛÝ\˜ÙSX\
‹
^ØÛÛœÝ™O[™]ÈË˜UÊ‘ÑU‹ŠKÝX	Ö™š[S˜[Y_N‰Ö›[™S[X™\ŸN‰Ö˜ÛÛ[[“[X™\ŸXÚYŠ\Ë›ÙÔÜÚ][ÛØXÚKš\ÊÝ
J\™]\›ˆ\Ë›ÙÔÜÚ][ÛØXÚK™Ù]
Ý
NÝ\ËœÛÝ\˜ÙSX\ØXÚKš\ÊŠ_
\Ëš˜XÚÙ[™Ý\ËœÛÝ\˜ÙSX\ØXÚKœÙ]
‹\Ëš˜XÚÙ[™š[™J™JKœ\J
š
JÝO›Ý[œÝ[˜Ù[ÙˆË–›ŠK
•JJÝO›Ý˜›ÙJK
Ë–
JÊK
™
JJJJNŠÛÛœÛÛK™\œ›ÜŠ“‘ÖÙÙÙ\ˆˆØ[‰ÝÙ]ÛÝ\˜Ù[X\™XØ]\ÙH˜XÚÙ[™\È›Ý›ÝšYYˆ[ÝH™YYÈ[\ÜÛY[[Ù[HŠK\ËœÛÝ\˜ÙSX\ØXÚKœÙ]
‹
‹›ÙŠJ[
JJJNØÛÛœÝ]\ËœÛÝ\˜ÙSX\ØXÚK™Ù]
ŠKœ\J
•JJÝO›ÝÝ\Ë™Ù]X\[™ÊÝ
N–
K
	’ÊJ

OOŠ‹›ÙŠJ
JK
™
JJJNÜ™]\›ˆ\Ë›ÙÔÜÚ][ÛØXÚKœÙ]
Ý
K_\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJJ‹“‘ÊËš“‹
J_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XßJKY_JJ
NØÛÛœÝ™OH•ÒÑS—ÓÑÑÑT—ÓQUQUWÔÑT•’PÑHŽÛ]ÙOJ

OOžØÛ\ÜÈY^ØÛÛœÝXÝÜŠŠ^Ý\Ë™]T\OSŸXÛÛ\]U[Y\Ý[\
Š^ØÛÛœÝJ
OOŠ™]È]JKÒTÓÔÝš[™Ê
NÜ™]\›ˆ‹[Y\Ý[\›Ü›X]Ý\Ë™]T\OÝ\Ë™]T\K˜[œÙ›Ü›J™]È]K‹[Y\Ý[\›Ü›X]
NŠÛÛœÛÛK™\œ›ÜŠ“‘ÖÙÙÙ\ˆˆØ[‰Ý\ÙH[YTÝ[\›Ü›X]™XØ]\ÙH]T\H\È›Ý›ÝšYYˆ[ÝH™YYÈ›ÝšYH]T\HŠK

JN–

_YÙ]Y]Y]J‹™KÝ
^ØÛÛœÝ^Û]™[“‹Y][Û˜[˜ÝNÜ™]\›ˆ›Y\ÜØYÙOP™I‰ˆ™[˜Ý[ÛˆO]\[Ùˆ™OÐ™J
N™K[Y\Ý[\]\Ë˜ÛÛ\]U[Y\Ý[\

K_\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJJ‹“‘ÊÙKUK
J_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XßJKY_JJ
NØÛÛœÝYOH•ÒÑS—ÓÑÑÑT—Ô•ST×ÔÑT•’PÑHŽÛ]J

OOžØÛ\ÜÈY^ÜÚÝ[Ø[Üš]\Š‹™KÝ
^Ü™]\›ˆV™\ØX›PÛÛœÛÛSÙÙÚ[™É‰“V›]™[\ÚÝ[Ø[Ù\™\Š‹™KÝ
^Ü™]\›ˆHVœÙ\™\“ÙÙÚ[™Õ\›	‰“VœÙ\™\“ÙÓ]™[\ÚÝ[Ø[[Ûš]ÜŠ‹™KÝ
^Ü™]\›ˆ\ËœÚÝ[Ø[Üš]\Š‹™KÝ
_\ËœÚÝ[Ø[Ù\™\Š‹™KÝ
__\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJ_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XßJKY_JJ
NØÛÛœÝÙOH•ÒÑS—ÓÑÑÑT—ÔÑT•‘T—ÔÑT•’PÑHŽÛ]YOJ

OOžØÛ\ÜÈY^ØÛÛœÝXÝÜŠŠ^Ý\Ëš˜XÚÙ[™SŸ\ÙXÝ\™Q\œ›Ü“Øš™XÝ
Š^Ü™]\›ˆËœÝXÚß\ÙXÝ\™PY][Û˜[\˜[Y]\œÊŠ^Ü™]\›ˆ[OSÛ[“‹›X\

™JOOžÝž^Ü™]\›ˆ[œÝ[˜Ù[Ùˆ\œ›ÜÝ\ËœÙXÝ\™Q\œ›Ü“Øš™XÝ

NŠ›Øš™XÝO]\[Ùˆ	‰’”ÓÓ‹œÝš[™ÚYžJ
K
_XØ]ÚÜ™]\›˜HY][Û˜[ÉÐ™_WH˜[YHÛÝ[›Ý™H\œÙY\Ú[™È”ÓÓ‹œÝš[™ÚYžJ
K˜_J_\ÙXÝ\™SY\ÜØYÙJŠ^Ýž^ÚYŠˆ[œÝ[˜Ù[Ùˆ\œ›ÜŠ\™]\›ˆ\ËœÙXÝ\™Q\œ›Ü“Øš™XÝ
ŠNÈœÝš[™ÈˆO]\[Ùˆ‰‰ŠR”ÓÓ‹œÝš[™ÚYžJ‹[ŠJ_XØ]ÚÓIÕH›ÝšYY›Y\ÜØYÙHˆ˜[YHÛÝ[›Ý™H\œÙYÚ]”ÓÓ‹œÝš[™ÚYžJ
K‰ß\™]\›ˆŸX[\’™\]Y\Ý
Š^Ü™]\›ˆŸ[ÙÓÛ”Ù\™\Š‹™J^ÚYŠ]\Ëš˜XÚÙ[™
\™]\›ˆÛÛœÛÛK™\œ›ÜŠ“‘ÖÙÙÙ\ˆˆØ[‰ÝÙÈÛˆÙ\™\ˆ™XØ]\ÙH˜XÚÙ[™\È›Ý›ÝšYYˆ[ÝH™YYÈ[\ÜÛY[[Ù[HŠK
‹›ÙŠJ[
NÛ]Ý[™]ÈË˜UÊ”ÔÕ‹‹™_ßJKJ‹›ÙŠJÝ
NØÛÛœÝÝ]\Ë˜[\’™\]Y\Ý
Ý
NÜ™]\›ŠË˜ŠJÝ
OØ[Ý›ÝØJ‹›ÙŠJÝ
N˜ÛÛœÛÛKØ\›Š“‘ÖÙÙÙ\ˆˆ[\’™\]Y\Ý™]\›™Y[ˆ[˜[Y™\]Y\Ýˆ\Ú[™ÈY˜][Û™H[œÝXYŠKœ\J
‹˜ŠJ]O“]Ý\Ëš˜XÚÙ[™š[™J]
NŠÛÛœÛÛKØ\›Š“‘ÖÙÙÙ\ˆˆ[\’™\]Y\Ý™]\›™Y[ˆ[˜[Y™\]Y\Ý
ØœÙ\˜X›JKˆ\Ú[™ÈY˜][Û™H[œÝXYŠK\Ëš˜XÚÙ[™š[™JÝ
JJK
š
J]O“][œÝ[˜Ù[ÙˆË–›ŠK
•JJ]O“]˜›ÙJJ_XÝ\ÝÛZ\ÙT™\]Y\Ý›ÙJŠ^Ü™]\›ˆŸ\Ù[™ÔÙ\™\Š‹
^ØÛÛœÝ™O^Ë‹‹“ŸNÐ™K˜Y][Û˜[]\ËœÙXÝ\™PY][Û˜[\˜[Y]\œÊ™K˜Y][Û˜[
K™K›Y\ÜØYÙO]\ËœÙXÝ\™SY\ÜØYÙJ™K›Y\ÜØYÙJNØÛÛœÝÝ]\Ë˜Ý\ÝÛZ\ÙT™\]Y\Ý›ÙJ™JKV˜Ý\ÝÛRXY\œß™]ÈË•ÓNØš\ÊÛÛ[U\HŠ_œÙ]
ÛÛ[U\H‹˜\XØ][Û‹ÚœÛÛˆŠK\Ë›ÙÓÛ”Ù\™\ŠœÙ\™\“ÙÙÚ[™Õ\›ÝÚXY\œÎ˜\˜[\Î–˜Ý\ÝÛR\˜[\ß™]ÈË“K™\ÜÛœÙU\N–š™\ÜÛœÙU\_šœÛÛˆ‹Ú]Ü™Y[X[Î–Ú]Ü™Y[X[ßL_JKœ\J
	’ÊJÝOŠÛÛœÛÛK™\œ›ÜŠ“‘ÖÙÙÙ\Žˆ˜Z[YÈÙÈÛˆÙ\™\ˆ‹Ý
K
K—ÊJÝ
JJJKœÝXœØÜšX™J
__\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJJ‹“‘ÊËš“‹
J_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XßJKY_JJ
NØÛÛœÝ™OH•ÒÑS—ÓÑÑÑT—ÕÔ’UT—ÔÑT•’PÑHŽÝ˜\ˆOJ

OOžÜ™]\›ŠYOS_
O^ßJJVÚYK•PÑOLOH•PÑH‹YVÚYK‘P•QÏLWOH‘P•QÈ‹YVÚYK’S‘“ÏL—OH’S‘“È‹YVÚYK“ÑÏL×OH“ÑÈ‹YVÚYK•ÐT“MOH•ÐT“ˆ‹YVÚYK‘T”“ÔMWOH‘T”“Ôˆ‹YVÚYK‘USM—OH‘US‹YVÚYK“Ñ‘M×OH“Ñ‘ˆ‹NÝ˜\ˆY_JJ
NØÛÛœÝ™OVÈœ\œH‹X[‹™Ü˜^H‹™Ü˜^H‹œ™Y‹œ™Y‹œ™Y—NÛ]	OJ

OOžØÛ\ÜÈY^ØÛÛœÝXÝÜŠŠ^Ý\Ëœ]›Ü›RYS‹\Ëœ™\\™SY]TÝš[™Ñ[˜ÜÏVÝ\Ë™Ù][Y\Ý[\ÕÜš]K\Ë™Ù]]™[ÕÜš]K\Ë™Ù]š[Q]Z[ÕÕÜš]K\Ë™Ù]ÛÛ^ÕÜš]WK\Ëš\ÒQOJÙK“‘ŠJŠI‰›˜]šYØ]Ü‰‰›˜]šYØ]Ü‹\Ù\YÙ[	‰ˆJLOOO[˜]šYØ]Ü‹\Ù\YÙ[š[™^ÙŠ“TÒQHŠI‰ˆ[˜]šYØ]Ü‹\Ù\YÙ[›X]Ú
ÕšY[ËÊI‰ˆ[˜]šYØ]Ü‹\Ù\YÙ[›X]Ú
ÑYÙWËÊJK\Ë›ÙÑ[˜Ï]\Ëš\ÒQOÝ\Ë›ÙÒQK˜š[™
\ÊN\Ë›ÙÓ[Ù\›‹˜š[™
\Ê_YÙ][Y\Ý[\ÕÜš]J‹
^Ü™]\›ˆ‹[Y\Ý[\YÙ]]™[ÕÜš]J‹
^Ü™]\›ˆVÓ‹›]™[_YÙ]š[Q]Z[ÕÕÜš]J‹
^Ü™]\›ˆLOOV™\ØX›Qš[Q]Z[ÏÈˆŽ˜ÉÓ‹™š[S˜[Y_N‰Ó‹›[™S[X™\ŸN‰Ó‹˜ÛÛ[[“[X™\ŸWXYÙ]ÛÛ^ÕÜš]J‹
^Ü™]\›ˆ˜ÛÛ^ØÉÖ˜ÛÛ^_XˆˆŸ\™\\™SY]TÝš[™Ê‹
^Û]™OHˆŽÜ™]\›ˆ\Ëœ™\\™SY]TÝš[™Ñ[˜ÜË™›Ü‘XXÚ
ÝOžØÛÛœÝXÝ
‹
NØ	‰Š™OP™JÈˆŠØ
_JK™Kš[J
_YÙ]ÛÛÜŠ‹
^ÚYŠ‹›]™[OOSK“Ñ‘Š\™]\›Š˜ÛÛÜ”ØÚ[YOÏÞ™JVÓ‹›]™[_[ÙÒQJ‹™J^ØÛÛœÝÝS‹˜Y][Û˜[×NÜÝÚ]Ú
‹›]™[
^ØØ\ÙHK•ÐT“Ž˜ÛÛœÛÛKØ\›Š	Ð™_H‹›Y\ÜØYÙK‹‹˜Ý
NØœ™XZÎØØ\ÙHK‘T”“ÔŽ˜Ø\ÙHK‘US˜ÛÛœÛÛK™\œ›ÜŠ	Ð™_H‹›Y\ÜØYÙK‹‹˜Ý
NØœ™XZÎØØ\ÙHK’S‘“Î˜ÛÛœÛÛKš[™›Ê	Ð™_H‹›Y\ÜØYÙK‹‹˜Ý
NØœ™XZÎÙY˜][˜ÛÛœÛÛK›ÙÊ	Ð™_H‹›Y\ÜØYÙK‹‹˜Ý
__[ÙÓ[Ù\›Š‹™J^ØÛÛœÝÝ]\Ë™Ù]ÛÛÜŠ‹
KS‹˜Y][Û˜[×NÜÝÚ]Ú
‹›]™[
^ØØ\ÙHK•ÐT“Ž˜ÛÛœÛÛKØ\›Š	XÉÐ™_XÛÛÜŽ‰ØÝX‹›Y\ÜØYÙK‹‹˜
NØœ™XZÎØØ\ÙHK‘T”“ÔŽ˜Ø\ÙHK‘US˜ÛÛœÛÛK™\œ›ÜŠ	XÉÐ™_XÛÛÜŽ‰ØÝX‹›Y\ÜØYÙK‹‹˜
NØœ™XZÎØØ\ÙHK’S‘“Î˜ÛÛœÛÛKš[™›Ê	XÉÐ™_XÛÛÜŽ‰ØÝX‹›Y\ÜØYÙK‹‹˜
NØœ™XZÎØØ\ÙHK‘P•QÎ˜ÛÛœÛÛK™XYÊ	XÉÐ™_XÛÛÜŽ‰ØÝX‹›Y\ÜØYÙK‹‹˜
NØœ™XZÎÙY˜][˜ÛÛœÛÛK›ÙÊ	XÉÐ™_XÛÛÜŽ‰ØÝX‹›Y\ÜØYÙK‹‹˜
__]Üš]SY\ÜØYÙJ‹
^ØÛÛœÝ™O]\Ëœ™\\™SY]TÝš[™Ê‹
NÝ\Ë›ÙÑ[˜Ê‹™J__\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJJ‹“‘Ê‹“šJJ_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XßJKY_JJ
KYOJ

OOžØÛ\ÜÈY^ØÛÛœÝXÝÜŠ‹™KÝÝ]
^Ý\Ë›Y]Y]TÙ\šXÙOP™K\Ëœ[TÙ\šXÙOXÝ\Ë›X\\”Ù\šXÙOX\ËÜš]\”Ù\šXÙO[Ý\ËœÙ\™\”Ù\šXÙOS]\Ë˜ÛÛ™šYÑ[™Ú[™OVœ›ÝšYPÛÛ™šYÑ[™Ú[™JŠ_YÙ]]™[

^Ü™]\›ˆ\Ë˜ÛÛ™šYÑ[™Ú[™K›]™[YÙ]Ù\™\“ÙÓ]™[

^Ü™]\›ˆ\Ë˜ÛÛ™šYÑ[™Ú[™KœÙ\™\“ÙÓ]™[]˜XÙJ‹‹‹–
^Ý\Ë—ÛÙÊK•PÑK‹
_YXYÊ‹‹‹–
^Ý\Ë—ÛÙÊK‘P•QË‹
_Z[™›Ê‹‹‹–
^Ý\Ë—ÛÙÊK’S‘“Ë‹
_[ÙÊ‹‹‹–
^Ý\Ë—ÛÙÊK“ÑË‹
_]Ø\›Š‹‹‹–
^Ý\Ë—ÛÙÊK•ÐT“‹‹
_Y\œ›ÜŠ‹‹‹–
^Ý\Ë—ÛÙÊK‘T”“Ô‹‹
_Y˜][
‹‹‹–
^Ý\Ë—ÛÙÊK‘US‹
_\Ù]Ý\ÝÛRXY\œÊŠ^ØÛÛœÝ]\Ë™Ù]ÛÛ™šYÔÛ˜\ÚÝ

NÖ˜Ý\ÝÛRXY\œÏS‹\Ë\]PÛÛ™šYÊ
_\Ù]Ý\ÝÛT\˜[\ÊŠ^ØÛÛœÝ]\Ë™Ù]ÛÛ™šYÔÛ˜\ÚÝ

NÖ˜Ý\ÝÛR\˜[\ÏS‹\Ë\]PÛÛ™šYÊ
_\Ù]Ú]Ü™Y[X[ÓÜ[Û•˜[YJŠ^ØÛÛœÝ]\Ë™Ù]ÛÛ™šYÔÛ˜\ÚÝ

NÖÚ]Ü™Y[X[ÏS‹\Ë\]PÛÛ™šYÊ
_\™YÚ\Ý\“[Ûš]ÜŠŠ^Ý\Ë—ÛÙÙÙ\“[Ûš]ÜSŸ]\]PÛÛ™šYÊŠ^Ý\Ë˜ÛÛ™šYÑ[™Ú[™K\]PÛÛ™šYÊŠ_\\X[\]PÛÛ™šYÊŠ^Ý\Ë˜ÛÛ™šYÑ[™Ú[™Kœ\X[\]PÛÛ™šYÊŠ_YÙ]ÛÛ™šYÔÛ˜\ÚÝ

^Ü™]\›ˆ\Ë˜ÛÛ™šYÑ[™Ú[™K™Ù]ÛÛ™šYÊ
_WÛÙÊ‹™OV×J^ØÛÛœÝÝ]\Ë˜ÛÛ™šYÑ[™Ú[™K™Ù]ÛÛ™šYÊ
K]\Ëœ[TÙ\šXÙKœÚÝ[Ø[Üš]\Š‹Ý™JKÝ]\Ëœ[TÙ\šXÙKœÚÝ[Ø[Ù\™\Š‹Ý™JK]]\Ëœ[TÙ\šXÙKœÚÝ[Ø[[Ûš]ÜŠ‹Ý™JNÚYŠX	‰ˆ[Ý	‰ˆS]
\™]\›ŽØÛÛœÝ]]\Ë›Y]Y]TÙ\šXÙK™Ù]Y]Y]J‹Ý™JNÝ\Ë›X\\”Ù\šXÙK™Ù]ÙÔÜÚ][ÛŠÝ]
Kœ\J
ÙKœJJJJKœÝXœØÜšX™J]OžÞ]	‰Š]™š[S˜[YO^]™š[S˜[YK]›[™S[X™\^]›[™S[X™\‹]˜ÛÛ[[“[X™\^]˜ÛÛ[[“[X™\ŠK]	‰\Ë—ÛÙÙÙ\“[Ûš]Ü‰‰\Ë—ÛÙÙÙ\“[Ûš]Ü‹›Û“ÙÊ]Ý
K	‰\ËÜš]\”Ù\šXÙKÜš]SY\ÜØYÙJ]Ý
KÝ	‰\ËœÙ\™\”Ù\šXÙKœÙ[™ÔÙ\™\Š]Ý
_J__\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJJ‹“‘ÊJK‹“‘ÊJK‹“‘Ê™JK‹“‘ÊYJK‹“‘ÊÙJK‹“‘Ê™JK‹“‘ÊÙJJ_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XË›ÝšYY[Žˆœ›ÛÝŸJKY_JJ
KÙOJ

OOžØÛ\ÜÈY^ØÛÛœÝXÝÜŠ‹™KÝÝ]
^Ý\Ë›ÙÙÙ\S‹\Ë˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžOV\Ë›Y]Y]TÙ\šXÙOP™K\Ëœ[TÙ\šXÙOXÝ\Ë›X\\”Ù\šXÙOX\ËÜš]\”Ù\šXÙO[Ý\ËœÙ\™\”Ù\šXÙOS]XÜ™X]J‹™KÝ
^Ü™]\›ˆ\Ë™Ù]™]Ò[œÝ[˜ÙJØÛÛ™šYÎ“‹Ù\™\”Ù\šXÙN–ÙÓ[Ûš]ÜŽ™KX\\”Ù\šXÙN˜ÝJ_YÙ]™]Ò[œÝ[˜ÙJŠ^ØÛÛœÝ[™]ÈYJË˜ÛÛ™šYÏÏÝ\Ë›ÙÙÙ\‹™Ù]ÛÛ™šYÔÛ˜\ÚÝ

KË˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžOÏÝ\Ë˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžKË›Y]Y]TÙ\šXÙOÏÝ\Ë›Y]Y]TÙ\šXÙKËœ[TÙ\šXÙOÏÝ\Ëœ[TÙ\šXÙKË›X\\”Ù\šXÙOÏÝ\Ë›X\\”Ù\šXÙKËÜš]\”Ù\šXÙOÏÝ\ËÜš]\”Ù\šXÙKËœÙ\™\”Ù\šXÙOÏÝ\ËœÙ\™\”Ù\šXÙJNÜ™]\›ˆËœ\X[ÛÛ™šYÉ‰–œ\X[\]PÛÛ™šYÊ‹œ\X[ÛÛ™šYÊKË›ÙÓ[Ûš]Ü‰‰–œ™YÚ\Ý\“[Ûš]ÜŠ‹›ÙÓ[Ûš]ÜŠK_\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJJ‹“‘ÊYJK‹“‘ÊJK‹“‘Ê™JK‹“‘ÊYJK‹“‘ÊÙJK‹“‘Ê™JK‹“‘ÊÙJJ_KYK—LÍ\›Ý\‹–^ÊÝÚÙ[ŽšYK˜XÝÜžNšYK—LÍY˜XË›ÝšYY[Žˆœ›ÛÝŸJKY_JJ
KJ

OOžØÛ\ÜÈY^ÜÝ]XÈ›Ü”›ÛÝ
‹
^ÚYŠ
^ßJK˜ÛÛ™šYÔ›ÝšY\Š^ÚYŠ˜ÛÛ™šYÔ›ÝšY\‹œ›ÝšYHOO\J]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›ÜˆÛÛ™šYÔ›ÝšY\‹]ÚÝ[™H	Ü_H[™[ÝH\ÙY	Ö˜ÛÛ™šYÔ›ÝšY\‹œ›ÝšY_X
_Y[ÙH˜ÛÛ™šYÔ›ÝšY\^Ü›ÝšYNœK\ÙU˜[YN“Ÿß_NÚYŠ˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžT›ÝšY\Š^ÚYŠ˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžT›ÝšY\‹œ›ÝšYHOOTJ]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›ÜˆÛÛ™šYÑ[™Ú[™Q˜XÝÜžT›ÝšY\‹]ÚÝ[™H	ÉÔ_IÈ[™[ÝH\ÙY	ÉÖ˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžT›ÝšY\‹œ›ÝšY_IØ
_Y[ÙH˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžT›ÝšY\^Ü›ÝšYN”K\ÙPÛ\ÜÎ‘ßNÚYŠ›Y]Y]T›ÝšY\Š^ÚYŠ›Y]Y]T›ÝšY\‹œ›ÝšYHOO[™J]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›ÜˆY]Y]T›ÝšY\‹]ÚÝ[™H	ÉÛ™_IÈ[™[ÝH\ÙY	ÉÖ›Y]Y]T›ÝšY\‹œ›ÝšY_IØ
_Y[ÙH›Y]Y]T›ÝšY\^Ü›ÝšYN›™K\ÙPÛ\ÜÎšÙ_NÚYŠœ[T›ÝšY\Š^ÚYŠœ[T›ÝšY\‹œ›ÝšYHOO\YJ]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›Üˆ[T›ÝšY\‹]ÚÝ[™H	ÉÜY_IÈ[™[ÝH\ÙY	ÉÖœ[T›ÝšY\‹œ›ÝšY_IØ
_Y[ÙHœ[T›ÝšY\^Ü›ÝšYNœYK\ÙPÛ\ÜÎNÚYŠ›X\\”›ÝšY\Š^ÚYŠ›X\\”›ÝšY\‹œ›ÝšYHOO\ÙJ]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›ÜˆX\\”›ÝšY\‹]ÚÝ[™H	ÉÜÙ_IÈ[™[ÝH\ÙY	ÉÖ›X\\”›ÝšY\‹œ›ÝšY_IØ
_Y[ÙH›X\\”›ÝšY\^Ü›ÝšYNœÙK\ÙPÛ\ÜÎ›Y_NÚYŠÜš]\”›ÝšY\Š^ÚYŠÜš]\”›ÝšY\‹œ›ÝšYHOO]™J]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›ÜˆÜš]\”›ÝšY\‹]ÚÝ[™H	ÉÝ™_IÈ[™[ÝH\ÙY	ÉÖÜš]\”›ÝšY\‹œ›ÝšY_IØ
_Y[ÙHÜš]\”›ÝšY\^Ü›ÝšYN™K\ÙPÛ\ÜÎ‰_NÚYŠœÙ\™\”›ÝšY\Š^ÚYŠœÙ\™\”›ÝšY\‹œ›ÝšYHOOPÙJ]›ÝÈ™]È\œ›ÜŠÜ›Û™È[š™XÝ[ÛˆÚÙ[ˆ›ÜˆÙ\™\”›ÝšY\‹]ÚÝ[™H	ÉÐÙ_IÈ[™[ÝH\ÙY	ÉÖÜš]\”›ÝšY\‹œ›ÝšY_IØ
_Y[ÙHœÙ\™\”›ÝšY\^Ü›ÝšYNÙK\ÙPÛ\ÜÎ•Y_NÜ™]\›žÛ™Ó[Ù[NšYK›ÝšY\œÎ–ÖYK˜ÛÛ™šYÔ›ÝšY\‹˜ÛÛ™šYÑ[™Ú[™Q˜XÝÜžT›ÝšY\‹›Y]Y]T›ÝšY\‹œ[T›ÝšY\‹›X\\”›ÝšY\‹Üš]\”›ÝšY\‹œÙ\™\”›ÝšY\‹ÙW__\Ý]XÈ›ÜÚ[

^Ü™]\›žÛ™Ó[Ù[NšY___\™]\›ˆYK—LÍY˜XÏY[˜Ý[ÛŠŠ^Ü™]\›ˆ™]ÊŸYJ_KYK—LÍ[[Ù\‹›ÐPŠÝ\NšY_JKYK—LÍZ[š\‹˜Ò”ÊÚ[\ÜÎ–ÖÓÙK™^—W_JKY_JJ
__KOžÙ
œÏLÊ_WJN