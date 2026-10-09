(function(){
  'use strict';
  var doc=document;
  var isV2=/\/v2\//.test(location.pathname);
  var root=isV2?'../assets/':'assets/';
  var home=isV2?'Homepage_codex_alt.html':'Homepage.html';
  var file=(location.pathname.split('/').pop()||home).toLowerCase();
  var css=doc.createElement('link');css.rel='stylesheet';css.href=root+'site-menu.css?v=3';doc.head.appendChild(css);
  var wm=doc.getElementById('wm');if(!wm)return;
  var isDestination=/^(destination|venues|venue_)/.test(file);
  var isServices=/^(services|service_)/.test(file);
  var isWorks=/^(ourworks|case_)/.test(file);
  function state(name,active){return active?' is-current':''}
  function current(href){return file===href.toLowerCase()?' aria-current="page"':''}
  wm.innerHTML='<div class="wm-bg" data-wm-close></div><div class="wm-in" role="dialog" aria-modal="true" aria-label="Site navigation"><div class="wm-head"><a class="wm-brand" href="'+home+'"><img src="'+root+'wis_logo_mark.svg" alt="Wed in Style"></a><button class="wm-close" type="button" data-wm-close>Close</button></div><div class="wm-body"><nav class="wm-nav" aria-label="Main navigation">'+
    '<div class="wm-item'+state('works',isWorks)+'"><span class="wm-index">01</span><a class="wm-word" href="OurWorks.html"'+current('OurWorks.html')+'>Our Works</a></div>'+
    '<div class="wm-item'+state('destination',isDestination)+'"><span class="wm-index">02</span><a class="wm-word" href="Destination.html"'+current('Destination.html')+'>Destination Weddings</a><span class="wm-subnav"><a href="Venues.html"'+current('Venues.html')+'>Vietnam Destinations</a></span></div>'+
    '<div class="wm-item'+state('approach',file==='approach.html')+'"><span class="wm-index">03</span><a class="wm-word" href="Approach.html"'+current('Approach.html')+'>Approach</a></div>'+
    '<div class="wm-item'+state('services',isServices)+'"><span class="wm-index">04</span><a class="wm-word" href="Services.html"'+current('Services.html')+'>Services</a><span class="wm-subnav"><a href="Service_Standard.html"'+current('Service_Standard.html')+'>Standard</a><a href="Service_Premium.html"'+current('Service_Premium.html')+'>Premium</a><a href="Service_Elopement.html"'+current('Service_Elopement.html')+'>Elopement</a><a href="Service_Decoration.html"'+current('Service_Decoration.html')+'>Decoration</a></span></div>'+
    '<div class="wm-item'+state('journal',file==='journal.html')+'"><span class="wm-index">05</span><a class="wm-word" href="Journal.html"'+current('Journal.html')+'>Journal</a></div>'+
    '<div class="wm-item'+state('contact',file==='contact.html')+'"><span class="wm-index">06</span><a class="wm-word" href="Contact.html"'+current('Contact.html')+'>Contact</a></div>'+
    '</nav><aside class="wm-aside" aria-hidden="true"></aside></div></div>';
  var lastFocus=null;
  var openers=[].slice.call(doc.querySelectorAll('[data-wm-open]'));
  /* Legacy pages sometimes contain two overlapping controls. Keep one,
     and make a text-link opener accessible when it is the primary control. */
  openers.forEach(function(opener,index){
    if(opener.tagName==='A'){opener.setAttribute('role','button');opener.setAttribute('aria-label','Open menu')}
    if(index>0){opener.hidden=true;opener.setAttribute('aria-hidden','true')}
  });
  openers=openers.slice(0,1);
  function focusable(){return [].slice.call(wm.querySelectorAll('a[href],button:not([disabled])'))}
  function open(event){if(event)event.preventDefault();lastFocus=doc.activeElement;wm.classList.add('open');wm.setAttribute('aria-hidden','false');doc.documentElement.style.overflow='hidden';var close=wm.querySelector('[data-wm-close]');if(close)close.focus()}
  function close(){if(!wm.classList.contains('open'))return;wm.classList.remove('open');wm.setAttribute('aria-hidden','true');doc.documentElement.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus()}
  openers.forEach(function(opener){opener.addEventListener('click',open)});
  wm.querySelectorAll('[data-wm-close]').forEach(function(closer){closer.addEventListener('click',close)});
  doc.addEventListener('keydown',function(event){if(!wm.classList.contains('open'))return;if(event.key==='Escape'){close();return}if(event.key==='Tab'){var list=focusable();if(!list.length)return;var first=list[0],last=list[list.length-1];if(event.shiftKey&&doc.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&doc.activeElement===last){event.preventDefault();first.focus()}}});
  var logo=doc.querySelector('.site-hd .hd-logo');if(logo&&logo.parentElement.tagName!=='A'){var link=doc.createElement('a');link.className='site-home-link';link.href=home;logo.parentNode.insertBefore(link,logo);link.appendChild(logo)}
})();
