const l=document.querySelectorAll(".container-slides .slide, .galeria-slides .slide");var e=0;let i=3e3;const t=(n,o)=>{for(let s=n;s<l.length;s++)l[s].style.display="none";l[o].style.display="block"};t(1,0);const r=()=>{setInterval(()=>{e>=l.length-1?e=0:e++,t(0,e)},i)};r();console.log("ar");
