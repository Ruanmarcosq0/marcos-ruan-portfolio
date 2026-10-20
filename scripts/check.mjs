import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {profile,projects} from '../content.mjs';
const root=path.resolve('dist');
let pages=0,links=0;
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())await walk(f);else if(e.name.endsWith('.html')){
const h=await readFile(f,'utf8');pages++;
assert.equal((h.match(/<h1[ >]/g)||[]).length,1,`One H1: ${f}`);
assert(h.includes('lang="pt-BR"'));assert(h.includes('name="viewport"'));assert(h.includes('rel="canonical"'));assert(h.includes('property="og:image"'));
for(const m of h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g))JSON.parse(m[1]);
const ids=new Set([...h.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const m of h.matchAll(/(?:href|src)="([^"]+)"/g)){
 const u=m[1];links++;
 if(u.startsWith('#'))assert(ids.has(u.slice(1)),`Broken anchor ${u} in ${f}`);
 if(u.startsWith('/')){const [file,anchor]=u.split('#');const target=path.join(root,file.endsWith('/')?file+'index.html':file);assert((await stat(target)).isFile(),`Missing ${u}`);if(anchor){const targetHtml=await readFile(target,'utf8');assert(targetHtml.includes(`id="${anchor}"`),`Missing anchor ${u}`);}}
 if(u.startsWith('https://wa.me/'))assert(u.startsWith('https://wa.me/'+profile.whatsapp+'?text='));
}
}}}
await walk(root);assert.equal(projects.length,11);assert.equal(pages,14);
const sitemap=await readFile('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<url>/g)||[]).length,13);
assert((await readFile('dist/robots.txt','utf8')).includes(profile.url+'/sitemap.xml'));
console.log(`PASS: ${pages} HTML pages; ${links} asset/link references; 11 cases; 13 sitemap URLs; JSON-LD; H1; WhatsApp destination.`);
