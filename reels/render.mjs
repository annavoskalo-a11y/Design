// usage: node render.mjs <scene-dir> [fps]  -> out/<scene>.mp4  (1080x1920, deterministic frame stepping)
import {createRequire} from 'module'; const require=createRequire(import.meta.url);
const {chromium}=require('playwright'); import {spawn} from 'child_process'; import path from 'path'; import {fileURLToPath} from 'url';
const dir=process.argv[2], fps=+(process.argv[3]||30), only=process.argv[4]; // only = "t1,t2" -> png stills
const root=path.dirname(fileURLToPath(import.meta.url));
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
await p.goto('file://'+path.join(root,dir,'index.html')); await p.evaluate(()=>document.fonts.ready); await p.waitForFunction('!!window.TL');
const dur=await p.evaluate('window.TL.duration()');
if(only){for(const t of only.split(',')){await p.evaluate(t=>{window.TL.seek(+t,false);return 1},t);await p.screenshot({path:`/tmp/claude-0/-home-user-Design/c3c2846c-9f63-587b-9851-01ad9938137b/scratchpad/${dir}_${t}.png`});}await b.close();process.exit(0);}
const out=path.join(root,'out',dir+'.mp4');
const ff=spawn('ffmpeg',['-y','-v','error','-f','image2pipe','-framerate',String(fps),'-i','-','-c:v','libx264','-pix_fmt','yuv420p','-crf','16','-preset','medium','-movflags','+faststart',out],{stdio:['pipe','inherit','inherit']});
const n=Math.round(dur*fps);
for(let i=0;i<n;i++){await p.evaluate(t=>{window.TL.seek(t,false);return 1},i/fps);const buf=await p.screenshot({type:'png'});if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end(); await new Promise(r=>ff.on('close',r)); await b.close(); console.log('done',out,dur.toFixed(2)+'s',n+' frames');
