import{j as r}from"./jsx-runtime.9234c96e.js";import{r as i}from"./index.2f694c94.js";import{S as p}from"./LatentTextarea_module.e640cc21.0245202e.js";import j from"./LatentTextarea.6c3c710c.js";function v(s,a){let e=0,t=s.length;for(;e<s.length&&e<a.length;){let l=s[e],n=a[e];if(l===n)t--;else{t++;break}e++}return t}function L(s){const a=s.latencyMs,e="If I could stop one heart from breaking",[t,l]=i.useState(0),[n,m]=i.useState(0),h=c=>{if(t==0&&l(performance.now()),n==0){const o=c.target.value,g=o+c.key;(o==e||g==e)&&m(performance.now())}},[S,y]=i.useState(1/0),[u,d]=i.useState(0),x=c=>{let o=v(e,c.target.value);o>S&&d(u+1),y(o)};let f="(not started)";return n!=0?f=`Done: ${(n-t).toFixed(3)}ms (Errors: ${u})`:t!=0&&(f=`Started (Errors: ${u})`),r.jsxs("figure",{className:p.latentTester,children:[r.jsx("figcaption",{children:"Latency accuracy tester"}),r.jsxs("div",{className:p.group,children:[r.jsxs("p",{children:["Type:",r.jsx("br",{}),e]}),r.jsx(j,{latencyMs:a,showLatency:!1,showMeasuredLatency:!0,afterKeyDown:h,onKeyUp:x}),r.jsx("p",{children:f})]})]})}export{L as default};
