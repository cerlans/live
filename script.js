(function () {
  let burger = document.getElementById('burgerDirect');
  let closeMark = document.getElementById('closeMark');
  burger.addEventListener('click',()=>{
    let hiddenMenu = document.getElementById('hiddenMenu');
    hiddenMenu.style.display = 'block';
  })
  closeMark.addEventListener('click',()=>{
       let hiddenMenu = document.getElementById('hiddenMenu');
    hiddenMenu.style.display = 'none';
  })
})();