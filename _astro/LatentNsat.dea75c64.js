import{j as t}from"./jsx-runtime.9234c96e.js";import{r as h}from"./index.2f694c94.js";import{S as d}from"./LatentTextarea_module.e640cc21.0245202e.js";import j from"./LatentTextarea.6c3c710c.js";function g(a,i){const l=[],s=i;for(let o=0;o<s;o++)l.push(a[Math.floor(Math.random()*a.length)]);return l}function y(a){const i=a.potentialLatencies||[0,50,100],l=a.count||10,[s,o]=h.useState(0),[c,S]=h.useState(g(i,l)),[u,f]=h.useState([]),p=n=>{f([...u,n]),s!=="result"&&(s<c.length-1?o(s+1):o("result"))},m=()=>{if(s==="result"){const n=new Map;return c.forEach((e,r)=>{n.has(e)||n.set(e,{count:0,good:0}),n.get(e).count++,u[r]==="good"&&n.get(e).good++}),t.jsx(t.Fragment,{children:t.jsxs("div",{className:d.group,children:[t.jsx("h2",{children:"Results"}),t.jsx("ol",{children:Array.from(n.entries()).map(([e,{count:r,good:x}])=>t.jsxs("li",{children:[e.toString().padStart(5),"ms - ",x,"/",r," (",Math.round(x/r*100),"%)"]},e))}),t.jsx("ul",{children:u.map((e,r)=>t.jsx("li",{children:t.jsxs("pre",{children:[e.padStart(5)," - ",c[r],"ms"]})},r))})]})})}else return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:d.group,children:[t.jsx(j,{latencyMs:c[s],showLatency:!1}),t.jsxs("h2",{children:[s,"/",c.length]})]}),t.jsxs("div",{className:d.flex,children:[t.jsx("button",{onClick:()=>{p("good")},title:"Good",children:"👍"}),t.jsx("button",{onClick:()=>{p("bad")},title:"Bad",children:"👎"})]})]})};return t.jsxs("figure",{className:d.LatentNsat,children:[t.jsxs("figcaption",{children:["Latency NSAT (",i.length," potential)"]}),m()]})}export{y as default};
