"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48659],{15995:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(62540);r(63696);var l=r(11750);function a({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(62540),l=r(63696),a=r(11750),o=r(7846),s=r(49519),i=r(96439),c=r(19739),u=r(66904),d=r(79244);function y(e){var t,r;return null!==(r=null===(t=l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function v({value:e,tabValues:t}){return t.some(t=>t.value===e)}var b=r(10709);function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function h({className:e,block:t,selectedValue:r,selectValue:l,tabValues:s}){let i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{let t=e.currentTarget,n=s[i.indexOf(t)].value;n!==r&&(c(t),l(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=i.indexOf(e.currentTarget)+1;n=null!==(t=i[r])&&void 0!==t?t:i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;n=null!==(r=i[t])&&void 0!==r?r:i[i.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:s.map(({value:e,label:t,attributes:l})=>(0,n.jsx)("li",p(g({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},l),{className:(0,a.A)("tabs__item","tabItem_AQgk",null==l?void 0:l.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function x({lazy:e,children:t,selectedValue:r}){let o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===r);return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function f(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,l.useMemo)(()=>{let e=null!=t?t:y(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[o,b]=(0,l.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!v({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[g,p]=function({queryString:e=!1,groupId:t}){let r=(0,s.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c.aZ)(n),(0,l.useCallback)(e=>{var t,l;if(!n)return;let a=new URLSearchParams(r.location.search);a.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),l=l={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(l)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[h,x]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Dv)(t);return[r,(0,l.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),f=(()=>{let e=null!=g?g:h;return v({value:e,tabValues:a})?e:null})();return(0,i.A)(()=>{f&&b(f)},[f]),{selectedValue:o,selectValue:(0,l.useCallback)(e=>{if(!v({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);b(e),p(e),x(e)},[p,x,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(h,g({},t,e)),(0,n.jsx)(x,g({},t,e))]})}function m(e){let t=(0,b.A)();return(0,n.jsx)(f,p(g({},e),{children:y(e.children)}),String(t))}},70361:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(62540);r(63696);var l=r(11750);let a="dot_giz1",o="bar_rrRL";function s({children:e,minHeight:t,url:r="http://localhost:3000",style:s,bodyStyle:i}){var c,u;return(0,n.jsxs)("div",{className:"browserWindow_my1Q",style:(c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},s),u=u={minHeight:t},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(u)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(u)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(u,e))}),c),children:[(0,n.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,n.jsxs)("div",{className:"buttons_uHc7",children:[(0,n.jsx)("span",{className:a,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:a,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:a,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,l.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:r}),(0,n.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:o}),(0,n.jsx)("span",{className:o}),(0,n.jsx)("span",{className:o})]})})]}),(0,n.jsx)("div",{className:"browserWindowBody_Idgs",style:i,children:e})]})}},66510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,isMacOS:()=>y,metadata:()=>n,toc:()=>v});let n=JSON.parse('{"type":"mdx","permalink":"/tests/pages/tabs-tests","source":"@site/_dogfooding/_pages tests/tabs-tests.mdx","title":"Tabs tests","description":"Tabs with dynamic default value","frontMatter":{},"lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728059214000,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/tabs-tests.mdx","unlisted":false}');var l=r(62540),a=r(43023),o=r(70361),s=r(27446),i=r(15995);let c={},u="Tabs tests",d={},y="undefined"!=typeof window&&navigator.platform.startsWith("Mac"),v=[{value:"Tabs with dynamic default value",id:"tabs-with-dynamic-default-value",level:2},{value:"Tabs sync with different heights",id:"tabs-sync-with-different-heights",level:2},{value:"Tabs with className and lazy loading",id:"tabs-with-classname-and-lazy-loading",level:2}];function b(e){let t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"tabs-tests",children:"Tabs tests"})}),"\n","\n",(0,l.jsx)(t.h2,{id:"tabs-with-dynamic-default-value",children:"Tabs with dynamic default value"}),"\n",(0,l.jsxs)(t.p,{children:["This can cause ",(0,l.jsx)(t.a,{href:"https://github.com/facebook/react-native-website/issues/2771",children:"bugs"})," when default value is different between SSR and client:"]}),"\n","\n",(0,l.jsx)(o.A,{children:(0,l.jsxs)(s.A,{defaultValue:y?"ios":"android",children:[(0,l.jsx)(i.A,{value:"android",label:"Android",children:"Android content"}),(0,l.jsx)(i.A,{value:"ios",label:"iOS",children:"iOS content"})]})}),"\n",(0,l.jsx)(t.h2,{id:"tabs-sync-with-different-heights",children:"Tabs sync with different heights"}),"\n",(0,l.jsxs)(s.A,{groupId:"operating-systems",children:[(0,l.jsx)(i.A,{value:"win",label:"Windows",children:(0,l.jsx)(t.p,{children:"Use Ctrl + C to copy."})}),(0,l.jsx)(i.A,{value:"mac",label:"macOS",children:(0,l.jsx)(t.p,{children:"very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text"})})]}),"\n",(0,l.jsxs)(s.A,{groupId:"operating-systems",children:[(0,l.jsx)(i.A,{value:"win",label:"Windows",children:(0,l.jsx)(t.p,{children:"Use Ctrl + V to paste."})}),(0,l.jsx)(i.A,{value:"mac",label:"macOS",children:(0,l.jsx)(t.p,{children:"Use Command + V to paste."})})]}),"\n",(0,l.jsx)(t.p,{children:"When clicking tabs above, they should stay under cursor and we should adjust the scroll position."}),"\n",(0,l.jsx)(t.h2,{id:"tabs-with-classname-and-lazy-loading",children:"Tabs with className and lazy loading"}),"\n",(0,l.jsxs)(s.A,{lazy:!0,children:[(0,l.jsx)(i.A,{value:"apple",label:"Apple",className:"alert alert--primary",default:!0,children:(0,l.jsx)(t.p,{children:"This is an apple \u{1F34E}"})}),(0,l.jsx)(i.A,{value:"orange",label:"Orange",className:"alert alert--secondary",children:(0,l.jsx)(t.p,{children:"This is an orange \u{1F34A}"})}),(0,l.jsx)(i.A,{value:"banana",label:"Banana",className:"alert alert--success",children:(0,l.jsx)(t.p,{children:"This is a banana \u{1F34C}"})})]})]})}function g(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},43023:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(63696);let l={},a=n.createContext(l);function o(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);