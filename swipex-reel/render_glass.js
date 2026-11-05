const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const out=process.argv[2],FPS=90,DUR=11.4,N=Math.round(DUR*FPS),W=4;fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch();
await Promise.all([...Array(W).keys()].map(async w=>{const p=await b.newPage({viewport:{width:1080,height:1920}});p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('file://'+__dirname+'/glass.html');
 for(let i=w;i<N;i+=W){await p.evaluate(t=>render(t),i/FPS);await p.screenshot({path:`${out}/f${String(i).padStart(5,'0')}.jpg`,type:'jpeg',quality:94});}}));
await b.close()})();
