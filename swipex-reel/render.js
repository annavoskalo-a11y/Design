const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+__dirname+'/reel.html');fs.mkdirSync(process.argv[2],{recursive:true});
const N=9*30;for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/30);await p.screenshot({path:`${process.argv[2]}/f${String(i).padStart(4,'0')}.png`});}
await b.close()})();
