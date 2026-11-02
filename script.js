(function(){
  var b=document.getElementById('burger'),r=document.documentElement;
  function set(o){r.classList.toggle('open',o);document.body.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu')}
  b.addEventListener('click',function(){set(!document.body.classList.contains('open'))});
  document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
})();
