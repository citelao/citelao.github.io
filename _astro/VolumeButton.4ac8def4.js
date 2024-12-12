import{j as t}from"./jsx-runtime.7d759e48.js";import{r as i}from"./index.8365acb2.js";import{S as s}from"./VolumeButton_module.16c4f9c3.638f2aef.js";function x(e){const n=()=>{window.speechSynthesis.pause(),window.speechSynthesis.cancel(),window.speechSynthesis.resume();const l=new SpeechSynthesisUtterance(e.text);l.voice=e.voice||null,l.rate=e.rate===void 0?1:e.rate,l.volume=e.volume===void 0?.5:e.volume,l.addEventListener("end",()=>{e.onReadCompleted&&e.onReadCompleted()}),window.speechSynthesis.speak(l),e.onReadStarted&&e.onReadStarted()};return t.jsx("button",{onClick:n,className:s.volumeButton,"aria-label":e.label,title:e.label,children:e.displayText})}function v(e){e.animate([{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)"}],{duration:600})}function V(e){const[n,l]=i.useState(60),[w,c]=i.useState("paused"),[d,N]=i.useState(null),[r,C]=i.useState(1.5),[a,f]=i.useState(e.style??"win11"),[h,m]=i.useState(null),o=i.useRef(null),u=a==="win10"?`volume ${n}%`:`${n}%, volume`,p=a==="win10"?`volume ${n-10}%`:`${n-10}%, volume`,j=()=>{o.current&&v(o.current),m(u),l(Math.min(100,n+5)),c("playing")},b=()=>{o.current&&v(o.current),m(p),l(Math.max(10,n-5)),c("playing")},S=()=>{c("paused")},R=()=>{f(a==="win10"?"win11":"win10")},y=a==="win10"?"'Volume' first (Win10 style)":"Percentage first (Win11 style)",g=!e.style;return t.jsxs("figure",{className:s.volumeSimulator,"aria-label":y,children:[t.jsxs("div",{className:s.volumeStatus,children:[t.jsx("pre",{className:s.volumeOutput,"aria-label":"Output",children:h?t.jsx("span",{ref:o,children:h}):t.jsx("span",{className:s.placeholder,children:u})}),t.jsx("div",{className:s.playing,children:w==="playing"?t.jsx("span",{title:"Playing",style:{cursor:"default"},"aria-label":"Playing",children:"🔊"}):t.jsx("span",{style:{opacity:.2,cursor:"default"},title:"Not playing","aria-label":"Not playing",children:"🔈"})})]}),t.jsxs("div",{className:s.buttonGroup,children:[t.jsx(x,{displayText:"-",label:"Decrease volume",voice:d,rate:r,volume:(n-5)/100,text:p,onReadStarted:b,onReadCompleted:S}),t.jsx(x,{displayText:"+",label:"Increase volume",voice:d,rate:r,volume:n/100,text:u,onReadStarted:j,onReadCompleted:S})]}),t.jsx("div",{className:s.volumeOptions,children:t.jsxs("div",{style:{display:"flex",gap:"0.2rem"},children:[y,g?t.jsx("button",{title:a==="win10"?"Switch to Win11 style":"Switch to Win10 style","aria-label":a==="win10"?"Switch to Win11 style":"Switch to Win10 style",onClick:R,children:"🔄"}):null]})})]})}export{V as default};