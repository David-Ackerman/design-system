(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return Fe}));var r=n(2),o=n(0),a=n.n(o),i=n(102),c=n(111),l=n.n(c),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,b=/mailto:/i,h=/\n{2,}$/,y=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,v=/^ {2,}\n/,O=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,w=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,j=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,N=/^(?:\n *)*\n/,x=/\r\n?/g,D=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,C=/\f/g,T=/^\s*?\[(x|\s)\]/,A=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,E=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,I=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$=/&([a-z]+);/g,z=/^<!--.*?-->/,U=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,P=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,L=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,M=/^<([^ >]+@[^ >]+)>/,_=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,F=/(?:^|\n)( *)$/,q=/-([a-z])?/gi,H=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,G=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,J=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,V=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Y=/\t/g,K=/^ *\| */,Q=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,oe=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ae=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,pe=/\\([^0-9A-Z\s])/gi,de=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,fe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,be=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ye=[y,w,k,A,E,I,z,P,me,fe,H,Z];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function Oe(e,t,n){var r=n.inTable;n.inTable=!0;var o=t(e.trim(),n);n.inTable=r;var a=[[]];return o.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==o.length-1&&a.push([]):("text"===e.type&&(null==o[t+1]||"tableSeparator"===o[t+1].type)&&(e.content=e.content.replace(ee,"")),a[a.length-1].push(e))})),a}function ke(e,t,n){n.inline=!0;var r=Oe(e[1],t,n),o=function(e){return e.replace(Q,"").split("|").map(ve)}(e[2]),a=function(e,t,n){return e.trim().split("\n").map((function(e){return Oe(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:o,cells:a,header:r,type:"table"}}function we(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function je(e){function t(r,o){for(var a=[],i="";r;)for(var c=0;c<n.length;){var l=n[c],s=e[l],u=s.match(r,o,i);if(u){var p=u[0];r=r.substring(p.length);var d=s.parse(u,t,o);null==d.type&&(d.type=l),a.push(d),i=p;break}c++}return a}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,o=e[n].order;return r===o?t<n?-1:1:r-o})),function(e,n){return t(function(e){return e.replace(x,"\n").replace(C,"").replace(Y,"    ")}(e),n)}}function Ne(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function De(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Ce(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Te(e){return e.replace(pe,"$1")}function Ae(e,t,n){var r=n.inline||!1,o=n.simple||!1;n.inline=!0,n.simple=!0;var a=e(t,n);return n.inline=r,n.simple=o,a}function Ee(e,t,n){var r=n.inline||!1,o=n.simple||!1;n.inline=!1,n.simple=!0;var a=e(t,n);return n.inline=r,n.simple=o,a}function Ie(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function $e(e,t,n){return{content:Ae(t,e[1],n)}}function ze(){return{}}function Ue(){return null}function Pe(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Be(e,t,n){for(var r=e,o=t.split(".");o.length&&void 0!==(r=r[o[0]]);)o.shift();return r||n}function Le(e,t){var n=Be(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:Be(t,e+".component",e):e}function Me(e,t){function n(e,n){for(var r=Be(t.overrides,e+".props",{}),o=arguments.length,a=Array(o>2?o-2:0),c=2;c<o;c++)a[c-2]=arguments[c];return i.apply(void 0,[Le(e,t.overrides),s({},n,r,{className:Pe(n&&n.className,r.className)||void 0})].concat(a))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===X.test(e));var o=Y(C(r?e:e.replace(se,"")+"\n\n",{inline:r})),a=void 0;return o.length>1?a=n(r?"span":"div",{key:"outer"},o):1===o.length?"string"==typeof(a=o[0])&&(a=n("span",{key:"outer"},a)):a=n("span",{key:"outer"}),a}function o(e){var t=e.match(f);return t?t.reduce((function(e,t,n){var o=t.indexOf("=");if(-1!==o){var i=function(e){return-1!==e.indexOf("-")&&null===e.match(U)&&(e=e.replace(q,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,o)).trim(),c=l()(t.slice(o+1).trim()),s=p[i]||i,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ce(t):(t.match(B)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,c);(I.test(u)||P.test(u))&&(e[s]=a.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[p[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ge,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},d,t.namedCodesToUnicode):d;var i=t.createElement||a.a.createElement;var c=[],u={},x={blockQuote:{match:De(y),order:2,parse:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Se(v),order:2,parse:ze,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:De(O),order:2,parse:ze,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:De(w),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:De(k),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(j),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:De(D),order:1,parse:function(e){return c.push({footnote:e[2],identifier:e[1]}),{}},react:Ue},footnoteReference:{match:Ne(S),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Ne(T),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:De(A),order:2,parse:function(e,n,r){return{content:Ae(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:De(E),order:1,parse:function(e,t,n){return{content:Ae(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Se(z),order:2,parse:function(){return{}},react:Ue},image:{match:xe(he),order:2,parse:function(e){return{alt:e[1],target:Te(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ce(e.target)})}},link:{match:Ne(be),order:4,parse:function(e,t,n){return{content:Ee(t,e[1],n),target:Te(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Ne(_),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Ne(L),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Ne(M),order:1,parse:function(e){var t=e[1],n=e[1];return b.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=F.exec(n),o=t._list||!t.inline;return r&&o?(e=r[1]+e,fe.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],o=r.length>1,a=o?+r:void 0,i=e[0].replace(h,"\n").match(me),c=!1;return{items:i.map((function(e,r){var o=de.exec(e)[0].length,a=new RegExp("^ {1,"+o+"}","gm"),l=e.replace(a,"").replace(de,""),s=r===i.length-1,u=-1!==l.indexOf("\n\n")||s&&c;c=u;var p,d=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=l.replace(R,"\n\n")):(n.inline=!0,p=l.replace(R,""));var f=t(p,n);return n.inline=d,n._list=m,f})),ordered:o,start:a}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,o){return n("li",{key:o},t(e,r))})))}},newlineCoalescer:{match:De(N),order:4,parse:ze,react:function(){return"\n"}},paragraph:{match:De(Z),order:4,parse:$e,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Ne(G),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:Ue},refImage:{match:xe(J),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ce(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:Ne(V),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(W,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Ce(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:De(H),order:2,parse:ke,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(o,a){return n("th",{key:a,style:we(e,a)},t(o,r))})))),n("tbody",null,e.cells.map((function(o,a){return n("tr",{key:a},o.map((function(o,a){return n("td",{key:a,style:we(e,a)},t(o,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?K.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Se(le),order:5,parse:function(e){return{content:e[0].replace($,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(oe),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:xe(ae),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:xe(ce),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ie),order:4,parse:$e,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(x.htmlBlock={match:Se(I),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],a=new RegExp("^"+r,"gm"),i=e[3].replace(a,""),c=function(e){return ye.some((function(t){return t.test(e)}))}(i)?Ie:Ae,l=e[1].toLowerCase(),s=-1!==m.indexOf(l);return{attrs:o(e[2]),content:s?e[3]:c(t,i,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},x.htmlSelfClosing={match:Se(P),order:2,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var C=je(x),Y=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var o=r.key,a=[],i=!1,c=0;c<n.length;c++){r.key=c;var l=t(n[c],r),s="string"==typeof l;s&&i?a[a.length-1]+=l:a.push(l),i=s}return r.key=o,a}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(x)),Q=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return c.length&&Q.props.children.push(n("footer",{key:"footer"},c.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,Y(C(e.footnote,{inline:!0})))})))),Q}function _e(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Me(t,n),r)}var Re=function(e){var t=e.name,n=e.required,r=e.type,o=e.description;return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),a.a.createElement("td",null,a.a.createElement(_e,null,o)),a.a.createElement("td",null,a.a.createElement("code",null,r.name.replace(" | undefined",""))))},Fe=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,o=n.displayName,i=n.props,c=Object.keys(i).map((function(e){var t=i[e];return a.a.createElement(Re,Object(r.a)({key:t.name},t))}));return a.a.createElement("table",{"aria-label":"Props for "+o},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"Type"))),a.a.createElement("tbody",null,c))}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(103)),i=n(102),c=n(114),l={title:"Dropdown",description:"A dropdown allows a user to select one option from a list, and collapse the other options."},s={unversionedId:"components/dropdown",id:"components/dropdown",isDocsHomePage:!1,title:"Dropdown",description:"A dropdown allows a user to select one option from a list, and collapse the other options.",source:"@site/docs/components/dropdown.mdx",permalink:"/design-system/docs/components/dropdown",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/dropdown.mdx",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1600803804,sidebar:"docs",previous:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"},next:{title:"Link",permalink:"/design-system/docs/components/link"}},u=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Playground",id:"playground",children:[]},{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A dropdown allows a user to select one option from a list, and collapse the other options.")),Object(a.b)("h2",{id:"anatomy"},"Anatomy"),Object(a.b)("p",null,"A dropdown includes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A Text Label"),Object(a.b)("li",{parentName:"ol"},"A Selected Option Area + Icon"),Object(a.b)("li",{parentName:"ol"},"A List of Options"),Object(a.b)("li",{parentName:"ol"},"Default Text (",Object(a.b)("inlineCode",{parentName:"li"},'"Select"'),")")),Object(a.b)("h2",{id:"playground"},"Playground"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dropdown\n    label="Choose a sitcom"\n    sort="ascending"\n>\n    <Dropdown.Option>The Office</Dropdown.Option>\n    <Dropdown.Option>Community</Dropdown.Option>\n    <Dropdown.Option>Friends</Dropdown.Option>\n    <Dropdown.Option>Parks and Recreation</Dropdown.Option>\n    <Dropdown.Option>How I Met Your Mother</Dropdown.Option>\n    <Dropdown.Option>Modern Family</Dropdown.Option>\n    <Dropdown.Option>The Big Bang Theory</Dropdown.Option>\n    <Dropdown.Option>Arrested Development</Dropdown.Option>\n</Dropdown>\n')),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(c.a,{from:i.Dropdown,mdxType:"PropsTable"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Use a dropdown to select one option from a collapsed set of available options."),Object(a.b)("li",{parentName:"ul"},"By default, dropdown options are mutually exclusive. The user can only select 1 option."),Object(a.b)("li",{parentName:"ul"},"When an option is selected, the dropdown closes and the selected option updates to display that item."),Object(a.b)("li",{parentName:"ul"},"On load, the dropdown should display default text of ",Object(a.b)("inlineCode",{parentName:"li"},'"Select"'),". The user should be able to change it back to ",Object(a.b)("inlineCode",{parentName:"li"},'"Select"')," if they wish."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("kbd",null,"Down Arrow"),"/",Object(a.b)("kbd",null,"Up Arrow")," moves focus to the next/previous options, respectively."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("kbd",null,"Home")," and ",Object(a.b)("kbd",null,"End")," moves focus to the first/last options, respectively.")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Dos")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"Do keep dropdown options very concise.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If long options are unavoidable, then they can truncate when the dropdown is in a closed state, but they should wrap fully in the open state."))),Object(a.b)("li",{parentName:"ul"},"Do ensure that the clickable area includes the entire selected option area and the icon."),Object(a.b)("li",{parentName:"ul"},"Consider the most logical order to list options. Options could be listed alphabetically, chronologically, by popularity, etc.")))),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Don'ts")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"Do not start all of the options in a dropdown with the same word or phrase."),Object(a.b)("li",{parentName:"ul"},"If there are more than 6 options, consider using a combo box instead."),Object(a.b)("li",{parentName:"ul"},"If there are 2 options, consider using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"radio-buttons"}),"radio buttons")," or ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"switch"}),"switch")," instead.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If your interface needs to contain many of these selections, use dropdowns over radio buttons."))),Object(a.b)("li",{parentName:"ul"},"Do not use a dropdown when the user can multi-select options. Use checkboxes instead."),Object(a.b)("li",{parentName:"ul"},"If it is not absolutely necessary for a user to choose from a predefined set of options, then consider a ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"text-field"}),"text field")," for users to type their own information.")))))}d.isMDXComponent=!0}}]);