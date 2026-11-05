// iPhone 16 mockup (393x852pt screen) with system UI: status bar (9:41, signal, Wi-Fi, battery), Dynamic Island, home indicator, side buttons.
// phoneEl({screen:'wp'|'vohen'|'modal', w:<outer width px>}) -> element (position it yourself). el._scroll = {img, max} for wp.
(()=>{
const SW=393,SH=852,BZ=9,RIM=3,OW=SW+2*(BZ+RIM),OH=SH+2*(BZ+RIM);
const bars=c=>`<svg width="68" height="14" viewBox="0 0 68 14" fill="${c}"><rect x="0" y="9" width="3.6" height="4.5" rx="1"/><rect x="5.4" y="6.5" width="3.6" height="7" rx="1"/><rect x="10.8" y="3.5" width="3.6" height="10" rx="1"/><rect x="16.2" y="0" width="3.6" height="13.5" rx="1"/>
 <path d="M31.5 3.2c2.6 0 5 1 6.800 2.700l.9-.9C37.100 2.900 34.400 1.700 31.500 1.700s-5.600 1.200-7.700 3.300l.9.9c1.800-1.700 4.200-2.700 6.800-2.700zm0 3.600c1.600 0 3 .6 4.100 1.600l.9-.9a8.300 8.300 0 0 0-10 0l.9.9c1.100-1 2.500-1.600 4.100-1.600zm0 3.500c.8 0 1.500.3 2 .8l-2 2.100-2-2.100c.5-.5 1.200-.8 2-.8z"/>
 <rect x="43.500" y="0.5" width="22" height="12" rx="3.600" fill="none" stroke="${c}" stroke-opacity=".45"/><rect x="45.200" y="2.200" width="18.600" height="8.600" rx="2.200"/><path d="M67 4.500v4c.8-.3 1.400-1.200 1.400-2s-.6-1.700-1.400-2z" fill-opacity=".5"/></svg>`;
const CFG={
 wp:{bg:'#F8FCFF',fg:'#0B0B0B',home:'#0B0B0B',navBg:'#fff'},
 vohen:{bg:'#CC4124',fg:'#fff',home:'#fff',fill:'#151515'},
 modal:{bg:'#414141',fg:'#fff',home:'#fff',fill:'#121212'}};
window.phoneEl=(o)=>{
  const c=CFG[o.screen], s=o.w/OW, el=document.createElement('div');
  el.className='iph';el.style.cssText=`position:absolute;width:${OW*s}px;height:${OH*s}px;`;
  const sc=document.createElement('div');sc.style.cssText=`position:absolute;left:0;top:0;width:${OW}px;height:${OH}px;transform:scale(${s});transform-origin:0 0;`;
  let inner=`<div style="position:absolute;inset:0;border-radius:${55+BZ+RIM}px;background:linear-gradient(150deg,#6a6a6e,#2b2b2e 40%,#141416 70%,#3a3a3e);box-shadow:0 0 0 1px rgba(255,255,255,.08)"></div>
  <div style="position:absolute;left:${RIM}px;top:${RIM}px;right:${RIM}px;bottom:${RIM}px;border-radius:${55+BZ}px;background:#000"></div>
  <div class="scr" style="position:absolute;left:${BZ+RIM}px;top:${BZ+RIM}px;width:${SW}px;height:${SH}px;border-radius:55px;overflow:hidden;background:${c.bg}">`;
  if(o.screen==='wp'){
    const vh=SH-54-34-84;
    inner+=`<div style="position:absolute;left:0;top:54px;width:${SW}px;height:${vh}px;overflow:hidden"><img class="sc" src="../assets/wp-scroll.png" style="display:block;width:${SW}px;position:absolute;left:0;top:0"></div>
     <div style="position:absolute;left:0;top:0;width:${SW}px;height:54px;background:${c.bg}"></div>
     <div style="position:absolute;left:0;bottom:0;width:${SW}px;height:${34+84}px;background:${c.navBg}"></div>
     <img src="../assets/wp-nav.png" style="position:absolute;left:0;bottom:34px;width:${SW}px;display:block;box-shadow:0 -1px 0 #e6ecf2">`;
  }else{
    const f=o.screen==='vohen'?'vm-screen':'md-screen', ih=o.screen==='vohen'?704:792, iw=o.screen==='vohen'?390:392;
    inner+=`<div style="position:absolute;inset:0;background:${c.fill}"></div><img src="../assets/${f}.png" style="position:absolute;left:0;top:0;width:${SW}px;height:${ih*SW/iw}px;display:block">
     ${o.screen==='vohen'?'<div style="position:absolute;left:0;top:0;width:393px;height:48px;background:#CC4124"></div>':'<div style="position:absolute;left:0;top:0;width:393px;height:48px;background:#414141"></div>'}`;
  }
  inner+=`<div style="position:absolute;left:0;top:0;width:${SW}px;height:54px;font:600 17px/1 Inter,sans-serif;color:${c.fg}"><span style="position:absolute;left:52px;top:19px;letter-spacing:-.01em">9:41</span><span style="position:absolute;right:32px;top:20px;display:block">${bars(c.fg)}</span></div>
   <div style="position:absolute;left:${(SW-126)/2}px;top:11px;width:126px;height:37px;border-radius:20px;background:#000"><i style="position:absolute;right:14px;top:12px;width:12px;height:12px;border-radius:50%;background:radial-gradient(#1b2336,#05070b)"></i></div>
   <div style="position:absolute;left:${(SW-134)/2}px;bottom:8px;width:134px;height:5px;border-radius:3px;background:${c.home}"></div></div>
   <i style="position:absolute;left:-3px;top:128px;width:4px;height:34px;border-radius:2px;background:#333"></i>
   <i style="position:absolute;left:-3px;top:196px;width:4px;height:62px;border-radius:2px;background:#333"></i>
   <i style="position:absolute;left:-3px;top:274px;width:4px;height:62px;border-radius:2px;background:#333"></i>
   <i style="position:absolute;right:-3px;top:238px;width:4px;height:96px;border-radius:2px;background:#333"></i>`;
  sc.innerHTML=inner;el.appendChild(sc);
  if(o.screen==='wp'){const img=sc.querySelector('img.sc');el._scroll={img,max:2241*SW/390-(SH-54-34-84),k:1};}
  el.dataset.ow=OW;el.dataset.oh=OH;return el;};
window.PHONE_ASPECT=OH/OW;
})();
