
(function(){
'use strict';
var burger=document.querySelector('.burger'),nav=document.querySelector('.nav');
if(burger&&nav){burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false');});}
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e,i){if(e.isIntersecting){e.target.style.transitionDelay=Math.min(i*70,280)+'ms';e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e);});}
else{els.forEach(function(e){e.classList.add('in');});}
var f=document.getElementById('enquiry');
if(f){f.addEventListener('submit',function(ev){ev.preventDefault();
var ok=true;[['name','f-err-name'],['email','f-err-email'],['message','f-err-msg']].forEach(function(pair){
var el=document.getElementById(pair[0]),err=document.getElementById(pair[1]);err.style.display='none';el.setAttribute('aria-invalid','false');
if(!el.value.trim()||(pair[0]==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value))){err.style.display='block';el.setAttribute('aria-invalid','true');ok=false;}});
var okbox=document.getElementById('f-ok'),warn=document.getElementById('f-warn');
if(ok){okbox.style.display='block';warn.style.display='block';}else{okbox.style.display='none';}
return false;});}
document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
})();
