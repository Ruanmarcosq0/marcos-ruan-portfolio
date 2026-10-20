const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){toggle?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let count=0;
 document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;if(!card.hidden)count++;});
 document.getElementById('filter-status').textContent=`${count} projeto${count===1?'':'s'} exibido${count===1?'':'s'}`;
 const other=document.querySelector('.other-grid');
 document.querySelector('.other-heading').hidden=![...other.children].some(c=>!c.hidden);
}));
const form=document.getElementById('brief-form');
form?.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);
 const text=`Olá, Marcos! Vim pelo seu portfólio.\n\nMeu nome: ${String(data.get('name')).trim()}\nNegócio: ${String(data.get('business')).trim()}\nPreciso de: ${data.get('service')}\nObjetivo: ${String(data.get('message')).trim()}\n\nPodemos conversar sobre uma proposta?`;
 const url=`https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(text)}`;
 const link=document.getElementById('form-fallback');link.href=url;link.hidden=false;
 document.getElementById('form-status').textContent='Mensagem preparada. Se uma nova aba não abrir, use o link abaixo. Revise e envie no WhatsApp.';
 window.open(url,'_blank','noopener,noreferrer');
});
