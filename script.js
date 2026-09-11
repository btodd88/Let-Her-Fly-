const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const dialog=document.getElementById('lightbox');
const dialogImg=dialog.querySelector('img');
document.querySelectorAll('[data-full]').forEach(item=>{
  item.addEventListener('click',()=>{
    dialogImg.src=item.dataset.full;
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{ if(e.target===dialog) dialog.close(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&dialog.open) dialog.close(); });
