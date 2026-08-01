// Small site JS: mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', (!expanded).toString());
    nav.classList.toggle('show');
  });
});
