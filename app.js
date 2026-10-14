'use strict';
const rows = window.RRWR_RESULTS || [];
const tbody = document.querySelector('#model-rows');
let family = 'all';
function renderResults() {
 const query = document.querySelector('#model-search').value.trim().toLowerCase();
 const visible = rows.filter(r => (family === 'all' || r.family === family) && r.model.toLowerCase().includes(query));
 tbody.replaceChildren();
 visible.forEach(r => {
  const tr = document.createElement('tr');
  const th = document.createElement('th'); th.scope = 'row'; th.textContent = r.model; tr.append(th);
  [r.baseline.toFixed(2), r.asv.toFixed(2), (r.baseline-r.asv).toFixed(2), r.retention.toFixed(2), r.miou.toFixed(4)].forEach((value,i) => {
   const td = document.createElement('td'); td.textContent=value;if(i===2)td.className='reduction';tr.append(td);
  }); tbody.append(tr);
 });
 if(!visible.length){const tr=document.createElement('tr');const td=document.createElement('td');td.colSpan=6;td.textContent='No models match this search.';td.style.textAlign='left';tr.append(td);tbody.append(tr);}
 document.querySelector('#table-status').textContent=`Showing ${visible.length} of 13 models`;
}
document.querySelectorAll('[data-family]').forEach(button=>button.addEventListener('click',()=>{
 family=button.dataset.family;
 document.querySelectorAll('[data-family]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderResults();
}));
document.querySelector('#model-search').addEventListener('input',renderResults);
document.querySelectorAll('[data-query]').forEach(button=>button.addEventListener('click',()=>{
 const negative=button.dataset.query==='negative';
 document.querySelector('#query-relation').textContent=negative?'behind':'in front of';
 document.querySelector('.query').classList.toggle('negative',negative);
 const verdict=document.querySelector('#query-verdict');verdict.textContent=negative?'× Unsupported relation':'✓ Supported reference';verdict.classList.toggle('negative',negative);
 document.querySelectorAll('[data-query]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
}));
renderResults();
