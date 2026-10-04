/* ====== EDITE AQUI ====== */
const WHATSAPP = "5561986539593"; // número com DDI+DDD, só dígitos
const PRODUCTS = [
{id:1,cat:"Copos",name:"Copo Supremo Maracujá com Brigadeiro",desc:"Creme de maracujá, brigadeiro de cacau 50% e brownie",price:22.0,img:"imagens/copo-supremo-maracuja-com-brigadeiro.jpg"},
{id:2,cat:"Copos",name:"Copo Duo com Morango",desc:"Brigadeiro de chocolate, creme de Ninho, brownie e morangos",price:22.0,img:"imagens/copo-duo-com-morango.jpg"},
{id:3,cat:"Bolo",name:"Bolo no Pote Abacaxi",desc:"Massa baunilha, recheio de Ninho e compota de abacaxi",price:16.0,img:"imagens/bolo-no-pote-abacaxi.jpg"},
{id:4,cat:"Bolo",name:"Bolo no Pote Chocolatudo",desc:"Massa de chocolate molhadinha, brigadeiro 70% e granulado",price:16.0,img:"imagens/bolo-no-pote-chocolatudo.jpg"},
{id:5,cat:"Bolo",name:"Bolo no Pote de Ninho",desc:"Massa chocolate molhadinha e creme de Ninho",price:16.0,img:"imagens/bolo-no-pote-de-ninho.jpg"},
{id:6,cat:"Bolo",name:"Bombom de Uvas",desc:"Creme de Ninho, uvas frescas e ganache de chocolate",price:17.0,img:"imagens/bombom-de-uvas.jpg"},
{id:7,cat:"Sobremesas",name:"Banoffe",desc:"Biscoito maisena, doce de leite, banana, chantilly e canela",price:17.0,img:"imagens/banoffe.jpg"},
{id:8,cat:"Sobremesas",name:"Bolo Vulcão Chocolatudo",desc:"Massa fofinha de chocolate, brigadeiro 50% e granulado",price:20.0,img:"imagens/bolo-vulcao-chocolatudo.jpg"},
{id:9,cat:"Sobremesas",name:"Bomba de Ferreiro",desc:"Ferrero Rocher inteiro, brigadeiro, amendoim e Nutella",price:17.0,img:"imagens/bomba-de-ferreiro.jpg"},
{id:10,cat:"Sobremesas",name:"Bolo Gelado de Prestígio",desc:"Massa chocolate com recheio cremoso de prestígio",price:19.0,img:"imagens/bolo-gelado-de-prestigio.jpg"},
{id:11,cat:"Sobremesas",name:"Caixinha com 4 Brigadeiros Sortidos",desc:"Caixinha com 4 sabores variados",price:14.0,img:"imagens/caixinha-com-4-brigadeiros-sortidos.jpg"},
{id:12,cat:"Sobremesas",name:"Cone Cravejado",desc:"Casquinha banhada no chocolate branco, Ninho com morango",price:22.0,img:"imagens/cone-cravejado.jpg"},
{id:13,cat:"Sobremesas",name:"Morango com Nutella e Amendoim",desc:"Morango fresco, brigadeiro, amendoim e Nutella",price:14.0,img:"imagens/morango-com-nutella-e-amendoim.jpg"},
{id:14,cat:"Sobremesas",name:"Fatia Suprema Brownie",desc:"Brownie, brigadeiro de chocolate, Nutella e amendoim",price:19.0,img:"imagens/fatia-suprema-brownie.jpg"},
{id:15,cat:"Sobremesas",name:"Morango Cravejado",desc:"Morango inteiro, brigadeiro de Ninho e chocolate branco",price:19.9,img:"imagens/morango-cravejado.jpg"},
{id:16,cat:"Sobremesas",name:"Pavê com Morangos",desc:"Mousse de Ninho, brigadeiro branco, biscoito e morangos",price:18.0,img:"imagens/pave-com-morangos.jpg"},
{id:17,cat:"Sobremesas",name:"Sanduíche de Brownie",desc:"Duas camadas de brownie chocolatudo com brigadeiro",price:14.0,img:"imagens/sanduiche-de-brownie.jpg"},
{id:18,cat:"Coxinhas",name:"Coxinha de Costela com Cream Cheese",desc:"Massa de coxinha, costela desfiada e cream cheese",price:22.0,img:"imagens/coxinha-de-costela-com-cream-cheese.jpg"},
{id:19,cat:"Coxinhas",name:"Coxinha de Frango",desc:"Massa coxinha, frango desfiado e Catupiry",price:19.0,img:"imagens/coxinha-de-frango.jpg"},
{id:20,cat:"Macarrão",name:"Bolonhesa",desc:"Espaguete ao molho bolonhesa, manjericão e parmesão",price:33.9,img:"imagens/bolonhesa.jpg"},
{id:21,cat:"Macarrão",name:"Brócolis com Bacon",desc:"Molho branco artesanal, penne, brócolis e bacon",price:33.9,img:"imagens/brocolis-com-bacon.jpg"},
{id:22,cat:"Macarrão",name:"Contra Filé em Tiras",desc:"Penne, contra filé, tomate cereja e molho artesanal",price:46.9,img:"imagens/contra-file-em-tiras.jpg"},
{id:23,cat:"Macarrão",name:"Frango em Tiras",desc:"Molho branco artesanal, peito de frango em tiras, finalizado com cheiro-verde e parmesão ralado",price:38.90,img:"imagens/frango-em-tiras.jpg"},
{id:24,cat:"Refrigerante",name:"Refrigerantes",desc:"Lata 350ml gelada",price:8.00,img:"imagens/refrigerantes.jpg"}
];
/* ======================== */
const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const $=id=>document.getElementById(id);
let cart={};
try{cart=JSON.parse(localStorage.getItem('ir_cart')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('ir_cart',JSON.stringify(cart))}catch(e){}};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const wa=t=>'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(t);

function photoInner(p){
  if(p.icon==='can') return `<span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3h10l1 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7z"/><path d="M6 7h12M9 3v4M15 3v4"/></svg></span>`;
  if(p.img) return `<img src="${esc(p.img)}" alt="${esc(p.name)}">`;
  return `<div class="ph">Imagem do produto</div>`;
}
function cardHTML(p){
  return `<article class="pcard" data-pid="${p.id}">
    <button class="pshot" type="button" data-act="popen" data-id="${p.id}" aria-label="Ver detalhes de ${esc(p.name)}">${photoInner(p)}</button>
    <div class="pinfo">
      <div class="pinfo-text"><h3>${esc(p.name)}</h3><p class="price">${brl(p.price)}</p></div>
      <div class="ctl"></div>
    </div>
  </article>`;
}
const CAT_ORDER = ["Copos","Bolo","Sobremesas","Coxinhas","Refrigerante","Macarrão"];
const CAT_LABEL = {Copos:"Copos",Bolo:"Bolos",Sobremesas:"Sobremesas",Coxinhas:"Coxinhas",Refrigerante:"Refrigerantes",Macarrão:"Macarrão"};
$('catalogo').innerHTML = CAT_ORDER.filter(c=>PRODUCTS.some(p=>p.cat===c)).map(c=>`
  <div class="cat-section">
    <h3 class="cat-title">${CAT_LABEL[c]}</h3>
    <div class="grid">${PRODUCTS.filter(p=>p.cat===c).map(cardHTML).join('')}</div>
  </div>`).join('');

function ctl(id){const n=cart[id]||0;
  return n?`<div class="pill step"><button class="js-elastico" type="button" data-act="dec" data-id="${id}" aria-label="Diminuir">−</button><span aria-live="polite">${n}</span><button class="js-elastico" type="button" data-act="inc" data-id="${id}" aria-label="Aumentar">+</button></div>`
          :`<button class="pill js-elastico" type="button" data-act="add" data-id="${id}">Adicionar</button>`}

function render(){
  const a=document.activeElement, key=a&&a.dataset&&a.dataset.act?[a.dataset.act,a.dataset.id]:null;
  document.querySelectorAll('.pcard').forEach(c=>c.querySelector('.ctl').innerHTML=ctl(c.dataset.pid));
  const lines=PRODUCTS.filter(p=>cart[p.id]);
  const count=lines.reduce((s,p)=>s+cart[p.id],0), total=lines.reduce((s,p)=>s+cart[p.id]*p.price,0);
  $('cart-count').textContent=count; $('cart-count').hidden=!count;
  $('total').textContent=brl(total);
  $('items').innerHTML=lines.length?lines.map(p=>`
    <li class="it"><b>${esc(p.name)}</b><span class="lt">${brl(cart[p.id]*p.price)}</span><span class="sub">${brl(p.price)} cada</span>
    <div class="q"><button type="button" data-act="cdec" data-id="${p.id}" aria-label="Diminuir ${esc(p.name)}">−</button><span>${cart[p.id]}</span><button type="button" data-act="cinc" data-id="${p.id}" aria-label="Aumentar ${esc(p.name)}">+</button><button class="rm" type="button" data-act="crem" data-id="${p.id}">Remover</button></div></li>`).join('')
    :'<li class="empty">Seu carrinho está vazio.<br>Adicione um produto para montar o pedido.</li>';
  const send=$('send');
  if(lines.length){
    const nm=$('cname').value.trim(), nt=$('cnote').value.trim();
    const msg='Olá, Império Recheado! Gostaria de fazer um pedido:\n\n'+lines.map(p=>`${cart[p.id]}x ${p.name} — ${brl(cart[p.id]*p.price)}`).join('\n')+`\n\nTotal: ${brl(total)}`+(nm?`\nNome: ${nm}`:'')+(nt?`\nObservações: ${nt}`:'');
    send.href=wa(msg); send.removeAttribute('aria-disabled');
  }else{send.href='#'; send.setAttribute('aria-disabled','true')}
  if(key){const q=`[data-act="${key[0]}"][data-id="${key[1]}"]`;
    const el=document.querySelector(q)||document.querySelector(`.pcard[data-pid="${key[1]}"] button`);
    if(el&&el!==document.activeElement)el.focus()}
  pmRender();
  initElastico();
}
const setQ=(id,n)=>{n>0?cart[id]=n:delete cart[id];save();render()};
const openCart=o=>{document.body.classList.toggle('cart-open',o);$('drawer').inert=!o;if(o)$('drawer').querySelector('.x').focus()};
let pmOpenId=null;
function pmRender(){
  if(pmOpenId==null)return;
  const p=PRODUCTS.find(x=>x.id===pmOpenId); if(!p)return;
  $('pm-title').textContent=p.name;
  $('pm-desc').textContent=p.desc||'';
  $('pm-price').textContent=brl(p.price);
  $('pm-photo').innerHTML='<button class="pmodal-x js-elastico" type="button" data-act="pclose" aria-label="Fechar">×</button>'+
    (p.icon==='can' ? '<span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3h10l1 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7z"/><path d="M6 7h12M9 3v4M15 3v4"/></svg></span>'
      : (p.img?`<img src="${p.img}" alt="${p.name}">`:''));
  $('pm-ctl').innerHTML=ctl(p.id);
}
const openProduct=id=>{pmOpenId=id;pmRender();document.body.classList.add('pmodal-open')};
const closeProduct=()=>{document.body.classList.remove('pmodal-open');pmOpenId=null};


document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]'); if(!b)return;
  const id=+b.dataset.id, q=cart[id]||0;
  ({add:()=>setQ(id,1),inc:()=>setQ(id,q+1),dec:()=>setQ(id,q-1),cinc:()=>setQ(id,q+1),cdec:()=>setQ(id,q-1),crem:()=>setQ(id,0),
    open:()=>openCart(true),close:()=>openCart(false),
    popen:()=>openProduct(+b.dataset.id),pclose:()=>closeProduct()})[b.dataset.act]?.();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){openCart(false);closeProduct()}});
$('cname').addEventListener('input',render);$('cnote').addEventListener('input',render);
$('send').addEventListener('click',e=>{if($('send').getAttribute('aria-disabled')==='true')e.preventDefault()});
document.querySelectorAll('[data-custom]').forEach(a=>a.href=wa('Olá, Império Recheado! Gostaria de encomendar um bolo personalizado.'));


/* ══════════════════════════════════════════════════════════
   BOTÃO ELÁSTICO — mola de verdade (velocidade + amortecimento)
   ══════════════════════════════════════════════════════════ */
window.FX = window.FX || {};

function lerp(a,b,t){ return a + (b-a)*t; }
function limitar(v,min,max){ return Math.max(min, Math.min(max, v)); }

function progressoNaTela(el){
  const r = el.getBoundingClientRect();
  const alt = window.innerHeight || 800;
  return limitar((alt - r.top) / (alt + r.height), 0, 1);
}

/* laço de animação: roda só enquanto o botão está visível E ainda no DOM */
function laco(el, passo){
  let id=null, vivo=false, respondeu=false;
  function rodar(){
    if(!el.isConnected){ desligar(); if(obs) obs.disconnect(); return; }
    passo();
    id = requestAnimationFrame(rodar);
  }
  function ligar(){ if(!vivo){ vivo=true; rodar(); } }
  function desligar(){ if(vivo){ vivo=false; cancelAnimationFrame(id); } }
  const obs = new IntersectionObserver(e=>{ respondeu=true; e[0].isIntersecting?ligar():desligar(); },{threshold:0});
  obs.observe(el);
  const espera = setTimeout(()=>{ if(!respondeu) ligar(); }, 1500);
  return ()=>{ clearTimeout(espera); cancelAnimationFrame(id); obs.disconnect(); };
}

FX.j14 = function(btn){
  let escala=1, vel=0, alvo=1;
  const apertar=()=>{ alvo=.92; };
  const soltar=()=>{ alvo=1.08; };
  btn.addEventListener('mouseenter', ()=>{ alvo=1.08; });
  btn.addEventListener('mouseleave', ()=>{ alvo=1; });
  btn.addEventListener('mousedown', apertar);
  btn.addEventListener('mouseup', soltar);
  btn.addEventListener('touchstart', apertar, {passive:true});
  btn.addEventListener('touchend', ()=>{ alvo=1; }, {passive:true});
  laco(btn, ()=>{
    const forca=(alvo-escala)*.22;
    vel=(vel+forca)*.72;
    escala+=vel;
    btn.style.transform='scale('+escala+')';
  });
};

/* aplica o efeito a qualquer .js-elastico ainda não inicializado
   (chamado no carregamento e de novo a cada render(), pois o carrinho
   recria botões de "Adicionar"/quantidade dinamicamente) */
function initElastico(){
  document.querySelectorAll('.js-elastico').forEach(btn=>{
    if(btn.dataset.fx) return;
    btn.dataset.fx='1';
    FX.j14(btn);
  });
}

/* Inicialização — roda por último, depois de FX estar definido */
render();
initElastico();
$('wa-fab').href = wa('Olá! Vim pelo site e gostaria de saber mais sobre os produtos da Império Recheado.');
