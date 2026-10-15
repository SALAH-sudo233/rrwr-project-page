'use strict';
const caseNames=['Object','Association','Attribute','Relation'];
let currentCase=0;
function showCase(index){
 currentCase=(index+caseNames.length)%caseNames.length;
 document.querySelectorAll('[data-slide]').forEach((slide,i)=>{slide.hidden=i!==currentCase;});
 document.querySelectorAll('[data-case]').forEach((button,i)=>{button.setAttribute('aria-pressed',String(i===currentCase));});
 document.querySelector('#case-status').textContent=`${currentCase+1} / 4 · ${caseNames[currentCase]}`;
}
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>showCase(Number(button.dataset.case))));
document.querySelector('#previous-case').addEventListener('click',()=>showCase(currentCase-1));
document.querySelector('#next-case').addEventListener('click',()=>showCase(currentCase+1));
document.querySelector('#copy-citation').addEventListener('click',async()=>{
 const text=document.querySelector('#bibtex').textContent;
 const status=document.querySelector('#copy-status');
 try{await navigator.clipboard.writeText(text);status.textContent='Copied!';}
 catch{const range=document.createRange();range.selectNodeContents(document.querySelector('#bibtex'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='Citation selected — copy to clipboard.';}
});
