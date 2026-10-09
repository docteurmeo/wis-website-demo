(function(global){
  'use strict';
  function esc(value){return String(value||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]})}
  function asset(path){return (global.WIS_CASE_ASSET_ROOT||'assets').replace(/\/$/,'')+'/'+path.replace(/^\//,'')}
  function ids(data){var all=[data.cover&&data.cover.lead];(data.decisions||[]).forEach(function(d){all=all.concat(d.images||[])});all=all.concat(data.proof||[]);if(data.closing)all.push(data.closing.image);return all.filter(Boolean)}
  function validate(data){
    var errors=[],all=ids(data),images=data.images||{};
    ['slug','identity','images','cover','firstBrief','credits'].forEach(function(key){if(!data[key])errors.push('Missing '+key)});
    if(!data.cover||!data.cover.lead)errors.push('A case needs one cover image.');
    if((data.decisions||[]).length<2||(data.decisions||[]).length>4)errors.push('A case needs 2–4 decisions.');
    (data.decisions||[]).forEach(function(d,index){if(!d.title||!d.rationale||(d.images||[]).length!==3)errors.push('Decision '+(index+1)+' needs title, rationale and exactly 3 images.');});
    if((data.proof||[]).length<6)errors.push('A compact case needs at least 6 proof images.');
    all.forEach(function(id){if(!images[id])errors.push('Unknown image ID: '+id)});
    if(new Set(all).size!==all.length)errors.push('An image ID is used more than once.');
    return {valid:errors.length===0,errors:errors,usedImages:all.length};
  }
  function image(data,id,slot){var item=data.images[id];return '<figure class="case-media case-media--'+slot+'"><img loading="lazy" decoding="async" src="'+esc(asset(item.src))+'" alt="'+esc(item.alt)+'" style="--focal:'+esc(item.focal||'50% 50%')+'"></figure>'}
  function decision(data,item){return '<article class="case-decision"><header class="case-decision__head"><div><span class="case-kicker">'+esc(item.kind)+'</span><h2 class="case-decision__title">'+esc(item.title)+'</h2></div><div class="case-copy case-decision__copy"><p>'+esc(item.rationale)+'</p></div></header><div class="case-decision__lead">'+image(data,item.images[0],'lead')+'</div><div class="case-decision__support">'+image(data,item.images[1],'secondary')+image(data,item.images[2],'secondary')+'</div></article>'}
  function render(data,target){
    var report=validate(data);if(!report.valid)throw new Error('Invalid WIS case data:\n'+report.errors.join('\n'));
    var i=data.identity;
    target.innerHTML='<main class="case-page">'+
      '<section class="case-shell case-cover"><div class="case-cover__intro"><span class="case-kicker">'+esc(data.firstBrief.kicker||'A Glory Story')+'</span><h1 class="case-cover__title">'+esc(i.title)+'</h1><div class="case-copy"><p>'+esc(data.firstBrief.copy)+'</p></div><div class="case-cover__facts"><span>'+esc(i.couple)+'</span><span>'+esc(i.year)+'</span><span>'+esc(i.location)+'</span></div></div>'+image(data,data.cover.lead,'hero')+'</section>'+
      '<section class="case-shell case-brief"><div class="case-brief__copy">'+esc(data.firstBrief.expanded)+'</div></section>'+
      '<section class="case-shell case-decisions">'+data.decisions.map(function(item){return decision(data,item)}).join('')+'</section>'+
      '<section class="case-proof"><div class="case-shell"><h2 class="case-proof__heading">The day, in evidence.</h2><div class="case-proof__grid">'+data.proof.map(function(id){return image(data,id,'proof')}).join('')+'</div></div></section>'+
      '<section class="case-shell case-closing">'+image(data,data.closing.image,'closing')+(data.closing.copy?'<p class="case-closing__copy">'+esc(data.closing.copy)+'</p>':'')+'</section>'+
      '<section class="case-shell case-ledger">'+data.credits.map(function(c){return '<div class="case-ledger__item"><span class="case-label">'+esc(c.label)+'</span><span class="case-ledger__value">'+esc(c.value)+'</span></div>'}).join('')+'</section>'+
      '</main>';
    return report;
  }
  function fixture(){var images={};for(var i=1;i<=30;i++)images['fixture-'+i]={src:'fixtures/'+i+'.jpg',alt:'Fixture '+i};return {slug:'fixture',identity:{title:'Fixture'},images:images,cover:{lead:'fixture-1'},firstBrief:{copy:'Fixture'},credits:[{label:'x',value:'x'}],decisions:[{title:'One',kind:'Place',rationale:'x',images:['fixture-2','fixture-3','fixture-4']},{title:'Two',kind:'Ritual',rationale:'x',images:['fixture-5','fixture-6','fixture-7']},{title:'Three',kind:'Object',rationale:'x',images:['fixture-8','fixture-9','fixture-10']},{title:'Four',kind:'Gathering',rationale:'x',images:['fixture-11','fixture-12','fixture-13']}],proof:['fixture-14','fixture-15','fixture-16','fixture-17','fixture-18','fixture-19','fixture-20','fixture-21','fixture-22','fixture-23','fixture-24','fixture-25','fixture-26','fixture-27','fixture-28'],closing:{image:'fixture-29'}}}
  global.WISCaseTemplate={render:render,validate:validate,fixture:fixture};
})(window);
