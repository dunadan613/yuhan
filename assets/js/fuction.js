function fnLogoOn(el1,el2){
  el1.classList.add('active');
  el2.setAttribute('src','./assets/images/logo_hover.png');
}
function fnLogoOff(el1,el2){
  el1.classList.remove('active');
  el2.setAttribute('src','./assets/images/logo.png');
}

function fnControlFamliySite(el){
  if(el.classList.contains('flag-close')){
    el.style.display='block';
    el.classList.replace('flag-close','flag-open');
  }
  else if(el.classList.contains('flag-open')){
    el.style.display='none';
    el.classList.replace('flag-open','flag-close');
  }
}