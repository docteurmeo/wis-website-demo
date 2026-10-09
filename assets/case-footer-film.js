(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function makeFilmLayer(canvas,host,seed){
    if(!canvas||!host||reduce)return null;
    var ctx=canvas.getContext('2d');if(!ctx)return null;
    var timer=null,inView=false,armed=false,active=false,last=0,rand=seed||1729,W=0,H=0,exposure=.012,exposureTarget=.012,exposureHold=0,scratches=[],dust=[];
    function rnd(){rand=(rand*1664525+1013904223)>>>0;return rand/4294967296}
    function makeScratch(){var segments=[],jitter=[],t=rnd()*.13;while(t<.94){var span=.055+rnd()*.13;segments.push([t,Math.min(.98,t+span)]);t+=span+.025+rnd()*.09}for(var j=0;j<64;j++)jitter.push((rnd()-.5)*(.7+rnd()*3));return{x:rnd()*W,y:-H*.12+rnd()*H*.98,len:H*(.2+rnd()*.66),width:.35+rnd()*1.55,alpha:.025+rnd()*.075,life:2800+rnd()*7200,age:rnd()*1700,phase:rnd()*Math.PI*2,wobble:.45+rnd()*2.4,drift:(rnd()-.5)*7,segments:segments,jitter:jitter}}
    function resetDust(d){d.x=rnd()*W;d.y=rnd()*H;d.r=.7+rnd()*5.8;d.alpha=.025+rnd()*.13;d.dx=(rnd()-.5)*.006;d.dy=-.002-rnd()*.008;d.life=900+rnd()*4200;d.age=rnd()*d.life}
    function resize(){var r=host.getBoundingClientRect(),scale=.7;W=Math.max(1,Math.round(r.width*scale));H=Math.max(1,Math.round(r.height*scale));canvas.width=W;canvas.height=H;scratches=[];dust=[];for(var i=0;i<5;i++)scratches.push(makeScratch());for(var j=0;j<38;j++){var d={};resetDust(d);dust.push(d)}}
    function drawScratch(s){var p=s.age/s.life,fade=p<.14?p/.14:(p>.82?(1-p)/.18:1);if(fade<=0)return;ctx.strokeStyle='rgba(238,230,212,'+(s.alpha*fade).toFixed(3)+')';ctx.lineWidth=s.width;ctx.lineCap='round';for(var i=0;i<s.segments.length;i++){var a=s.segments[i][0],b=s.segments[i][1];ctx.beginPath();for(var k=0;k<=12;k++){var t=a+(b-a)*k/12,y=s.y+s.len*t,ji=Math.min(63,Math.floor(t*63)),x=s.x+Math.sin(t*15+s.phase)*s.wobble+s.jitter[ji]+s.drift*t;if(k===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke()}}
    function drawDust(d){var p=d.age/d.life,fade=p<.18?p/.18:(p>.76?(1-p)/.24:1);if(fade<=0)return;ctx.fillStyle='rgba(238,230,212,'+(d.alpha*fade).toFixed(3)+')';if(d.r>3){ctx.save();ctx.shadowColor='rgba(238,230,212,.34)';ctx.shadowBlur=d.r*.9;ctx.beginPath();ctx.arc(d.x,d.y,d.r*.42,0,Math.PI*2);ctx.fill();ctx.restore()}else{ctx.beginPath();ctx.arc(d.x,d.y,d.r*.48,0,Math.PI*2);ctx.fill()}}
    function update(dt){var i,d,s;exposureHold-=dt;if(exposureHold<=0){exposureTarget=.009+rnd()*.019;if(rnd()>.82)exposureTarget+=.035+rnd()*.035;exposureHold=rnd()>.8?80+rnd()*90:330+rnd()*820}exposure+=(exposureTarget-exposure)*Math.min(1,dt*.014);for(i=0;i<scratches.length;i++){s=scratches[i];s.age+=dt;if(s.age>=s.life)scratches[i]=makeScratch()}for(i=0;i<dust.length;i++){d=dust[i];d.age+=dt;d.x+=d.dx*dt;d.y+=d.dy*dt;if(d.age>=d.life||d.y<-12)resetDust(d)}}
    function draw(){var i,clusters=Math.round(W*H/5200),grit=Math.round(W*H/1200);ctx.clearRect(0,0,W,H);ctx.fillStyle='rgba(237,210,166,'+exposure.toFixed(3)+')';ctx.fillRect(0,0,W,H);for(i=0;i<clusters;i++){var cx=rnd()*W,cy=rnd()*H,dots=2+(rnd()*5|0),radius=1.1+rnd()*3.8;for(var q=0;q<dots;q++){var size=Math.max(.8,radius*(.38+rnd()*.82)),x=cx+(rnd()-.5)*radius*4,y=cy+(rnd()-.5)*radius*4;ctx.fillStyle='rgba(238,230,212,'+(.022+rnd()*.105).toFixed(3)+')';ctx.beginPath();ctx.arc(x,y,size*.56,0,Math.PI*2);ctx.fill()}}for(i=0;i<grit;i++){var g=rnd()<.11?2:1;ctx.fillStyle='rgba(238,230,212,'+(.012+rnd()*.052).toFixed(3)+')';ctx.fillRect(rnd()*W,rnd()*H,g,g)}for(i=0;i<scratches.length;i++)drawScratch(scratches[i]);for(i=0;i<dust.length;i++)drawDust(dust[i])}
    function tick(){if(!active)return;var now=Date.now(),dt=Math.min(180,now-last||100);last=now;update(dt);draw();timer=setTimeout(tick,100)}
    function sync(){var shouldRun=armed&&inView&&!document.hidden&&!reduce;if(shouldRun===active)return;active=shouldRun;clearTimeout(timer);timer=null;if(active){last=Date.now();tick()}else ctx.clearRect(0,0,W,H)}
    resize();window.addEventListener('resize',resize);if('IntersectionObserver'in window)new IntersectionObserver(function(es){inView=es[0].isIntersecting;sync()},{threshold:.08}).observe(host);else inView=true;document.addEventListener('visibilitychange',sync);return{arm:function(){if(armed)return;armed=true;resize();sync()}}
  }
  var footer=document.querySelector('.ft'),film=makeFilmLayer(document.getElementById('ftFilmCanvas'),footer,20260909);if(film)film.arm();
})();
(function(){
  var script=document.createElement('script');
  script.src=(/\/v2\//.test(location.pathname)?'../assets/':'assets/')+'site-menu.js?v=3';
  document.head.appendChild(script);
})();
