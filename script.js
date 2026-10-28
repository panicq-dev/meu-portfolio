(function(){
 var b=document.body;
 document.querySelectorAll('[data-t]').forEach(function(p){
  p.addEventListener('mouseenter',function(){b.dataset.theme=p.dataset.t});
  p.addEventListener('mouseleave',function(){b.dataset.theme='base'});
  p.addEventListener('focus',function(){b.dataset.theme=p.dataset.t});
  p.addEventListener('blur',function(){b.dataset.theme='base'});
 });
 var st=document.getElementById('stage'),sk=document.getElementById('stack'),it=document.querySelectorAll('[data-k]');
 function on(k){it.forEach(function(e){e.classList.toggle('on',e.dataset.k===k)})}
 it.forEach(function(e){['mouseenter','focus','click'].forEach(function(v){e.addEventListener(v,function(){on(e.dataset.k)})})});
 on('2');
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 function tilt(x,y){var r=st.getBoundingClientRect();sk.style.setProperty('--rx',(58+((y-r.top)/r.height-.5)*-16)+'deg');sk.style.setProperty('--rz',(-38+((x-r.left)/r.width-.5)*40)+'deg')}
 st.addEventListener('mousemove',function(e){tilt(e.clientX,e.clientY)});
 st.addEventListener('touchmove',function(e){tilt(e.touches[0].clientX,e.touches[0].clientY)},{passive:true});
 st.addEventListener('mouseleave',function(){sk.style.setProperty('--rx','58deg');sk.style.setProperty('--rz','-38deg')});
})();

var photo = document.querySelector('.photo img');
if (photo) {
 photo.addEventListener('error', function() {
  photo.style.display = 'none';
  photo.nextElementSibling.style.display = 'flex';
 });
}

