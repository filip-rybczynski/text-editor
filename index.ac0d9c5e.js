!function(e){var t={};function s(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t,s){},,function(e,t,s){"use strict";s.r(t);s(0);var r=new Array(3).fill(document.createElement("span"));console.log(r);var o=document.createElement("span");o.textContent="Editing";for(var i=0;i<3;i++){var n=document.createElement("span");n.className="dot",n.textContent=".",o.append(n)}var a=document.querySelector(".editor__textarea"),l={text:"",isBold:!1,isItalic:!1,isBlue:!1,isGreen:!1,isRed:!1},c=document.querySelector(".load--js"),d=document.querySelector(".save--js"),u=document.querySelector(".bold--js"),m=document.querySelector(".italic--js"),v=document.querySelector(".blue--js"),L=document.querySelector(".green--js"),_=document.querySelector(".red--js"),g=document.querySelector(".default--js"),y=document.querySelector(".text-only--js"),f=document.querySelector(".auto-load--js"),x=document.querySelector(".auto-save--js"),p=document.querySelectorAll(".editor__side-buttons > .editor__button"),b=document.querySelector(".save-tracker--js"),S=function(e,t,s){var r;return function(){""!==s.innerHTML&&"Saved!!"!==s.innerHTML||(s.innerHTML="",s.appendChild(o)),clearTimeout(r),r=setTimeout((function(){e()}),t)}}(O,1500,b);function O(){localStorage.setItem("savedText",a.value),l.text=a.value;var e=JSON.stringify(l);localStorage.setItem("fullContent",e),b.innerHTML="Saved!!",setTimeout((function(){"Saved!!"===b.innerHTML&&(b.innerHTML="")}),2e3)}var E=localStorage.getItem("auto-load");if(x.checked="true"===localStorage.getItem("auto-save")||!1,"true"===E)if(f.checked=!0,x.checked&&(console.log("added!"),a.addEventListener("input",S)),"true"===localStorage.getItem("text-only")){y.checked=!0;var h=localStorage.getItem("savedText");a.value=h}else{var j=JSON.parse(localStorage.getItem("fullContent"));a.value=j.text,j.isBold&&(a.classList.add("editor__textarea--bold"),u.classList.add("isOn")),j.isItalic&&(a.classList.add("editor__textarea--italic"),m.classList.add("isOn")),j.isBlue&&(a.classList.add("editor__textarea--blue"),v.classList.add("isOn")),j.isGreen&&(a.classList.add("editor__textarea--green"),L.classList.add("isOn")),j.isRed&&(a.classList.add("editor__textarea--red"),_.classList.add("isOn"))}c.addEventListener("click",(function(){if(document.querySelector(".text-only--js").checked){var e=localStorage.getItem("savedText");a.value=e}else a.classList.remove("editor__textarea--blue","editor__textarea--italic","editor__textarea--green","editor__textarea--red","editor__textarea--bold"),u.classList.remove("isOn"),m.classList.remove("isOn"),L.classList.remove("isOn"),_.classList.remove("isOn"),v.classList.remove("isOn"),l=JSON.parse(localStorage.getItem("fullContent")),a.value=l.text,l.isBold&&(a.classList.add("editor__textarea--bold"),u.classList.add("isOn")),l.isItalic&&(a.classList.add("editor__textarea--italic"),m.classList.add("isOn")),l.isBlue&&(a.classList.add("editor__textarea--blue"),v.classList.add("isOn")),l.isGreen&&(a.classList.add("editor__textarea--green"),L.classList.add("isOn")),l.isRed&&(a.classList.add("editor__textarea--red"),_.classList.add("isOn"))})),d.addEventListener("click",O),u.addEventListener("click",(function(){a.classList.toggle("editor__textarea--bold"),l.isBold=!l.isBold,u.classList.toggle("isOn")})),m.addEventListener("click",(function(){a.classList.toggle("editor__textarea--italic"),l.isItalic=!l.isItalic,m.classList.toggle("isOn")})),v.addEventListener("click",(function(){a.classList.toggle("editor__textarea--blue"),a.classList.remove("editor__textarea--green","editor__textarea--red"),l.isBlue=!l.isBlue,l.isGreen=!1,l.isRed=!1,v.classList.toggle("isOn"),L.classList.remove("isOn"),_.classList.remove("isOn")})),L.addEventListener("click",(function(){a.classList.toggle("editor__textarea--green"),a.classList.remove("editor__textarea--blue","editor__textarea--red"),l.isGreen=!l.isGreen,l.isBlue=!1,l.isRed=!1,L.classList.toggle("isOn"),v.classList.remove("isOn"),_.classList.remove("isOn")})),_.addEventListener("click",(function(){a.classList.toggle("editor__textarea--red"),a.classList.remove("editor__textarea--green","editor__textarea--blue"),l.isRed=!l.isRed,l.isGreen=!1,l.isBlue=!1,_.classList.toggle("isOn"),L.classList.remove("isOn"),v.classList.remove("isOn")})),g.addEventListener("click",(function(){a.classList.remove("editor__textarea--blue","editor__textarea--italic","editor__textarea--green","editor__textarea--red","editor__textarea--bold"),l.isBold=!1,l.isItalic=!1,l.isRed=!1,l.isGreen=!1,l.isBlue=!1,u.classList.remove("isOn"),m.classList.remove("isOn"),v.classList.remove("isOn"),_.classList.remove("isOn"),L.classList.remove("isOn")})),y.addEventListener("change",(function(){localStorage.setItem("text-only",document.querySelector(".text-only--js").checked)})),f.addEventListener("change",(function(){localStorage.setItem("auto-load",document.querySelector(".auto-load--js").checked)})),x.addEventListener("change",(function(){x.checked?(localStorage.setItem("auto-save","true"),O(),a.addEventListener("input",S),p.forEach((function(e){return e.addEventListener("click",S)}))):(localStorage.setItem("auto-save","false"),a.removeEventListener("input",S),p.forEach((function(e){return e.removeEventListener("click",S)}))),localStorage.setItem("auto-save",document.querySelector(".auto-save--js").checked)}));var k=document.querySelector(".open--js"),q=(document.querySelector(".instructions__toggle:before"),document.querySelector(".instructions--js")),I=(q.offsetWidth,!0);k.addEventListener("click",(function(){q.classList.toggle("instructions--shown"),q.classList.toggle("instructions--hidden"),I?(document.documentElement.style.setProperty("--arrow-border-bottom","0"),document.documentElement.style.setProperty("--arrow-border-top","1em solid beige"),document.documentElement.style.setProperty("--arrow-position","-1.15em")):(document.documentElement.style.setProperty("--arrow-border-top","0"),document.documentElement.style.setProperty("--arrow-border-bottom","1em solid beige"),document.documentElement.style.setProperty("--arrow-position","1.15em")),I=!I})),k.addEventListener("keydown",(function(e){13!==e.which&&32!==e.which||(I?(q.style.right="0em",document.documentElement.style.setProperty("--arrow-border-bottom","0"),document.documentElement.style.setProperty("--arrow-border-top","1em solid beige"),document.documentElement.style.setProperty("--arrow-position","-1.15em")):(q.style.right="-36em",document.documentElement.style.setProperty("--arrow-border-top","0"),document.documentElement.style.setProperty("--arrow-border-bottom","1em solid beige"),document.documentElement.style.setProperty("--arrow-position","1.15em")),I=!I)}))}]);