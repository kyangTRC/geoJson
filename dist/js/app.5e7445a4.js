(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"09b3":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),n=o("4eb5"),a=o.n(n),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("header",[o("h1",[e._v(e._s(e.title))])]),e._m(0),o("div",{staticClass:"csvForm container-fluid",attrs:{id:"app"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm"},[o("json-to-geojson-form",{attrs:{placeholder:"Put ArcGIS JSON here"},on:{geojson:e.onGeoJson}})],1),o("div",{staticClass:"col-sm"},[o("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[o("v-map",{directives:[{name:"show",rawName:"v-show",value:e.geojson,expression:"geojson"}],ref:"map",attrs:{zoom:13,center:[47.41322,-1.219482],geojson:e.geojson}})],1)])])]),o("footer",[o("a",{staticClass:"github-button",attrs:{href:"https://github.com/gavinr/arcgis-json-to-geojson","data-show-count":"true","aria-label":"Star gavinr/arcgis-json-to-geojson on GitHub"}},[e._v("Star")]),o("br"),e._v("\n    Also: "),o("A",{attrs:{href:"http://csv.togeojson.com"}},[e._v("CSV to GeoJSON")])],1)])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"instructions"},[o("p",[e._v("Copy in some ArcGIS JSON. ("),o("a",{attrs:{href:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0/query?where=pop2000+%3E+500000&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=pjson",target:"_blank"}},[e._v("Here")]),e._v(" is an example to get you started)\n    ")])])}],l=(o("28a5"),o("7618"));o("4917"),o("a481");!function(){var e,t,r,n,a,i,s,c,u,d=window.document,p=d.location,h=window.encodeURIComponent,f=window.decodeURIComponent,m=window.Math,g=function(e){return d.createElement(e)};t="github-button",e=(/^http:/.test(p)?"http":"https")+"://buttons.github.io",r="/buttons.html",n=function(t){e=t},a="currentScript",i=!{}.hasOwnProperty.call(d,a)&&d[a]&&delete d[a]&&d[a]?d[a].src:void 0,s=function(e,t,o){e.addEventListener?e.addEventListener(""+t,o):e.attachEvent("on"+t,o)},c=function(e,t,o){var r;s(e,t,r=function(n){return e.removeEventListener?e.removeEventListener(""+t,r):e.detachEvent("on"+t,r),o(n)})},u=function(e){var t,o;/m/.test(d.readyState)||!/g/.test(d.readyState)&&!d.documentElement.doScroll?setTimeout(e):d.addEventListener?(o=0,c(d,"DOMContentLoaded",t=function(){!o&&(o=1)&&e()}),c(window,"load",t)):(t=function(){/m/.test(d.readyState)&&(d.detachEvent("onreadystatechange",t),e())},d.attachEvent("onreadystatechange",t))};var b,v,y,w,x,C,S,_,O,j,k="body{margin:0}a{color:#24292e;text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;font-weight:600;vertical-align:bottom;cursor:pointer;border:1px solid #d1d2d3;border-radius:0.25em}.btn:focus,.social-count:focus{border-color:#c8e1ff}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #e4ebf0);background-image:-moz-linear-gradient(top, #fafbfc, #e4ebf0);background-image:linear-gradient(to bottom, #fafbfc, #e4ebf0);background-repeat:repeat-x;background-size:110% 110%;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFAFBFC', endColorstr='#FFE4EBF0')\";*filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFAFBFC', endColorstr='#FFE4EBF0')}.btn:active{background-color:#e9ecef;background-image:none;border-color:#afb1b2;box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15)}.btn:hover{background-color:#e6ebf1;background-image:-webkit-linear-gradient(top, #f0f3f6, #dce3ec);background-image:-moz-linear-gradient(top, #f0f3f6, #dce3ec);background-image:linear-gradient(to bottom, #f0f3f6, #dce3ec);border-color:#afb1b2;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF0F3F6', endColorstr='#FFDCE3EC')\";*filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF0F3F6', endColorstr='#FFDCE3EC')}.social-count{position:relative;background-color:#fff}.social-count:hover{color:#0366d6}.octicon{position:relative;display:inline-block;vertical-align:top;fill:currentColor}.btn,.social-count{height:18px;padding:0 5px;line-height:18px}.btn{font-size:11px}.social-count{margin-left:5px;font-size:10px}.octicon{height:14px;top:2px}.large .btn,.large .social-count{height:26px;line-height:26px}.large .btn{padding:0 10px;font-size:12px}.large .social-count{padding:0 7px;margin-left:7px;font-size:11px}.large .octicon{height:18px;top:4px}.social-count b,.social-count i{position:absolute;top:50%;right:100%;display:block;width:0;height:0;margin-top:-4px;_font-size:0;_line-height:0;border:solid transparent;border-width:4px 4px 4px 0}.social-count b{margin-right:0;border-right-color:#d1d2d3}.social-count:focus b{border-right-color:#c8e1ff}.social-count i{margin-right:-1.5px;border-right-color:#fff}.social-count b,.social-count i{_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.large .social-count b,.large .social-count i{margin-top:-6px;border-width:6px 6px 6px 0}\n",A={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}};b=function(e,t){return e=(""+e).toLowerCase().replace(/^octicon-/,""),A.hasOwnProperty(e)||(e="mark-github"),'<svg version="1.1" width="'+t*A[e].width/A[e].height+'" height="'+t+'" viewBox="0 0 '+A[e].width+" "+A[e].height+'" class="octicon octicon-'+e+'" aria-hidden="true">'+A[e].path+"</svg>"},y={},v=function(e,t){var o,r,n,a,i,l,c,u;1<(l=y[e]||(y[e]=[])).push(t)||(a=0,r=function(){if(!a&&(a=1))for(delete y[e];t=l.shift();)t.apply(null,arguments)},(o=window.XMLHttpRequest)&&"withCredentials"in o.prototype?(u=new o,s(u,"abort",r),s(u,"error",r),s(u,"load",function(){r(200!==u.status,function(){try{return JSON.parse(u.responseText)}catch(e){}}())}),u.open("GET",e),u.send()):((n=this||window)._=function(e){n._=null,r(200!==e.meta.status,e.data)},(c=n.document.createElement("script")).async=!0,c.src=e+(/\?/.test(e)?"&":"?")+"callback=_",s(c,"error",i=function(){n._&&n._({meta:{}})}),c.readyState&&s(c,"readystatechange",function(){"loaded"===c.readyState&&i()}),n.document.getElementsByTagName("head")[0].appendChild(c)))},w=function(e,t,o){var r,n,a,i,s,l,c,u,d,p,h,f,m,g;t&&(a=this,l=e.ownerDocument,s=function(e){return l.createTextNode(e)},(c=(i=function(e){return l.createElement(e)})("style")).type="text/css",e.appendChild(c),c.styleSheet?c.styleSheet.cssText=k:c.appendChild(s(k)),(u=e.appendChild(i("div"))).className="widget"+(/^large$/i.test(t["data-size"])?" large":""),n=function(){o&&o(u)},(d=i("a")).href=t.href,d.target="_blank",/\.github\.com$/.test("."+d.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(d.href)&&(d.target="_top"):(d.href="#",d.target="_self"),d.className="btn",(p=t["aria-label"])&&d.setAttribute("aria-label",p),d.innerHTML=b(t["data-icon"],/^large$/i.test(t["data-size"])?16:14),d.appendChild(s(" ")),d.appendChild(i("span")).appendChild(s(t["data-text"]||"")),r=u.appendChild(d),/^(true|1)$/i.test(t["data-show-count"])&&"github.com"===r.hostname?!(m=r.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))||m[6]?n():(m[2]?(h="/repos/"+m[1]+"/"+m[2],m[3]?(g="subscribers_count",f="watchers"):m[4]?(g="forks_count",f="network"):m[5]?(g="open_issues_count",f="issues"):(g="stargazers_count",f="stargazers")):(h="/users/"+m[1],f=g="followers"),v.call(a,"https://api.github.com"+h,function(e,t){var o,a;e||(a=t[g],(o=i("a")).href=t.html_url+"/"+f,o.target="_blank",o.className="social-count",o.setAttribute("aria-label",a+" "+g.replace(/_count$/,"").replace("_"," ")+" on GitHub"),o.appendChild(i("b")),o.appendChild(i("i")),o.appendChild(i("span")).appendChild(l.createTextNode((""+a).replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.parentNode.insertBefore(o,r.nextSibling)),n()})):n())},x=function(){var e,o,r,n,a,i,s;if(o=[],d.querySelectorAll)o=d.querySelectorAll("a."+t);else for(r=0,a=(s=d.getElementsByTagName("a")).length;r<a;r++)~(" "+(e=s[r]).className+" ").replace(/[ \t\n\f\r]+/g," ").indexOf(" "+t+" ")&&o.push(e);for(n=0,i=o.length;n<i;n++)e=o[n],j(e)},S=window.devicePixelRatio||1,C=function(e){return(1<S?m.ceil(m.round(e*S)/S*2)/2:m.ceil(e))||0},_=function(e){var t,o,r;return r=e.scrollWidth,o=e.scrollHeight,e.getBoundingClientRect&&(t=e.getBoundingClientRect(),r=m.max(r,C(t.width||t.right-t.left)),o=m.max(o,C(t.height||t.bottom-t.top))),[r,o]},O=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},j=function(t,o){var n,a,i,s,l,u,p;if(null==t)return x();if(null==o&&(o=function(e){var t,o,r,n,a;for(n={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},o=0,r=(a=["icon","text","size","show-count"]).length;o<r;o++)n[t="data-"+(t=a[o])]=e.getAttribute(t);return null==n["data-text"]&&(n["data-text"]=e.textContent||e.innerText),n}(t)),(n=window.HTMLElement)&&n.prototype.attachShadow&&!n.prototype.attachShadow.prototype)a=g("span"),(u=o.title)&&(a.title=u),w(a.attachShadow({mode:"closed"}),o,function(){t.parentNode.replaceChild(a,t)});else{for(s in i=g("iframe"),l={allowtransparency:!0,scrolling:"no",frameBorder:0})p=l[s],i.setAttribute(s,p);O(i,[1,0]),i.style.border="none",i.src="javascript:0",c(i,"load",function(){var n;n=i.contentWindow,w.call(n,n.document.body,o,function(n){var a;a=_(n),i.parentNode.removeChild(i),c(i,"load",function(){O(i,a)}),i.src=e+r+"#"+function(e){var t,o,r;for(t in o=[],e)null!=(r=e[t])&&o.push(h(t)+"="+h(r));return o.join("&")}(o),(u=o.title)&&(i.title=u),t.parentNode.replaceChild(i,t)})}),d.body.appendChild(i)}},"function"==typeof define&&o("3c35")?define([],{render:j}):"object"==("undefined"===typeof exports?"undefined":Object(l["a"])(exports))&&"string"!=typeof exports.nodeName?exports.render=j:(i&&n(i.replace(/\/[^\/]*([?#].*)?$/,"")),p.protocol+"//"+p.host+p.pathname===e+r?w(d.body,function(e){var t,o,r,n,a,i;for(n={},t=0,o=(i=e.split("&")).length;t<o;t++)""!==(r=i[t])&&(a=r.split("="),n[f(a[0])]=null!=a[1]?f(a.slice(1).join("=")):void 0);return n}(p.hash.replace(/^#/,""))):u(x))}();var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputJson,expression:"inputJson"}],staticClass:"form-control",attrs:{rows:"10",placeholder:e.placeholder},domProps:{value:e.inputJson},on:{input:function(t){t.target.composing||(e.inputJson=t.target.value)}}})]),o("div",{staticClass:"form-group float-right"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.convert()}}},[e._v("Convert")])]),e.showWgs84Alert?o("div",{staticClass:"form-row align-items-center"},[e._m(0)]):e._e(),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"show",rawName:"v-show",value:e.showResultArea,expression:"showResultArea"},{name:"model",rawName:"v-model",value:e.resultJsonString,expression:"resultJsonString"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:e.resultJsonString},on:{input:function(t){t.target.composing||(e.resultJsonString=t.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showResultArea,expression:"showResultArea"}],staticClass:"form-row"},[o("div",{staticClass:"col d-flex align-items-center justify-content-between"},[o("label",{directives:[{name:"show",rawName:"v-show",value:e.showResultArea,expression:"showResultArea"}],staticClass:"m-0"},[e._v("Pretty Print "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.prettyPrint,expression:"prettyPrint"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.prettyPrint)?e._i(e.prettyPrint,null)>-1:e.prettyPrint},on:{change:function(t){var o=e.prettyPrint,r=t.target,n=!!r.checked;if(Array.isArray(o)){var a=null,i=e._i(o,a);r.checked?i<0&&(e.prettyPrint=o.concat([a])):i>-1&&(e.prettyPrint=o.slice(0,i).concat(o.slice(i+1)))}else e.prettyPrint=n}}})]),o("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.resultJsonString,expression:"resultJsonString",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v(e._s(e.copyText))])])])])},u=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col"},[o("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[e._v('\n        It looks like your FeatureSet has features with geometries with spatial references not in Latitude/Longitude (WGS84). In general, GeoJSON only works with WGS84, which is why the map probably looks wrong, so you probably want to change your input data to have that spatial reference. Try setting the "Output Sptaial Reference" to 4326.\n      ')])])}],d=o("b7a8"),p={name:"JsonToGeojsonForm",props:["placeholder"],data:function(){return{inputJson:"",resultJson:"",prettyPrint:!0,showWgs84Alert:!1,originalCopyText:"Copy",copyText:"Copy"}},computed:{showResultArea:function(){return""!==this.resultJson},resultJsonString:function(){return JSON.stringify(this.resultJson,null,this.prettyPrint?2:void 0)}},methods:{convert:function(){var e=!1;try{e=JSON.parse(this.inputJson)}catch(n){this.resultJson="Invalid JSON. Please check using jsonlint.com."}if(e)try{this.showWgs84Alert=!1,e.hasOwnProperty("spatialReference")&&e.spatialReference.hasOwnProperty("wkid")&&4326!==e.spatialReference.wkid&&(this.showWgs84Alert=!0);var t=e;Array.isArray(e)||(t=e.features);var o=t.map(function(e,t){var o=d["b"].arcgisToGeoJSON(e);return o.id=t,o}),r={type:"FeatureCollection",features:o};this.resultJson=r,this.$emit("geojson",r)}catch(n){this.resultJson="Invalid input."}},onCopy:function(){var e=this;this.copyText="Copied",setTimeout(function(){e.copyText=e.originalCopyText},2e3)},onError:function(){this.copyText="Can not copy"}}},h=p,f=(o("e21a"),o("2877")),m=Object(f["a"])(h,c,u,!1,null,"16268dbe",null),g=m.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"component"})},v=[],y=(o("c5f6"),o("e11e")),w=o.n(y),x=o("3023"),C=o("584d"),S=o.n(C),_=o("6397"),O=o.n(_),j=o("e2b9"),k=o.n(j);w.a.esri=x,w.a.Marker.prototype.options.icon=w.a.icon({iconRetinaUrl:S.a,iconUrl:O.a,shadowUrl:k.a,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});var A={name:"LeafletMap",data:function(){return{}},components:{},props:{options:{type:Object,default:function(){return{}}},minZoom:{type:Number,default:void 0},maxZoom:{type:Number,default:void 0},center:{type:Array,default:function(){return[-122,38]}},zoom:{type:Number,default:8},geojson:{default:function(){return{}}}},watch:{geojson:{handler:function(e){this.layer&&this.mapObject.removeLayer(this.layer),this.addGeoJSONData(e)},deep:!0}},mounted:function(){var e=this.options;Object.assign(e,{minZoom:this.minZoom,maxZoom:this.maxZoom}),null!=this.center&&(e.center=this.center),null!=this.zoom&&(e.zoom=this.zoom),this.mapObject=w.a.map(this.$el,e),w.a.esri.basemapLayer("Topographic").addTo(this.mapObject)},methods:{addGeoJSONData:function(e){setTimeout(function(){this.mapObject.fitBounds(this.layer.getBounds())}.bind(this),800),this.layer=w.a.geoJSON(e,{onEachFeature:function(e,t){var o="";for(var r in e.properties)o="".concat(o,"<strong>").concat(r,"</strong>: ").concat(e.properties[r],"<br />");t.bindPopup(o)}}),this.layer.addTo(this.mapObject)}}},N=A,F=(o("a47d"),Object(f["a"])(N,b,v,!1,null,"0462a043",null)),J=F.exports,E={name:"app",data:function(){return{title:"Convert ArcGIS JSON to GeoJSON",geojson:!1}},components:{"json-to-geojson-form":g,"v-map":J},methods:{onGeoJson:function(e){this.geojson=JSON.parse(JSON.stringify(e)),setTimeout(function(){window.dispatchEvent(new Event("resize"))},250)}}},z=E,T=(o("5c0b"),Object(f["a"])(z,i,s,!1,null,null,null)),P=T.exports;r["a"].use(a.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var r=o("5e27"),n=o.n(r);n.a},"5d82":function(e,t,o){},"5e27":function(e,t,o){},a47d:function(e,t,o){"use strict";var r=o("09b3"),n=o.n(r);n.a},e21a:function(e,t,o){"use strict";var r=o("5d82"),n=o.n(r);n.a}});
//# sourceMappingURL=app.5e7445a4.js.map