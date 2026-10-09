(function(){
  var page=document.querySelector('.service-page');
  var wm=document.getElementById('wm');
  if(wm){
    function open(){wm.classList.add('open');wm.setAttribute('aria-hidden','false');document.documentElement.style.overflow='hidden'}
    function close(){wm.classList.remove('open');wm.setAttribute('aria-hidden','true');document.documentElement.style.overflow=''}
    document.querySelectorAll('[data-wm-open]').forEach(function(button){button.addEventListener('click',open)});
    var closer=wm.querySelector('[data-wm-close]');if(closer)closer.addEventListener('click',close);
    document.addEventListener('keydown',function(event){if(event.key==='Escape')close()});
  }
  if(!page)return;
})();
