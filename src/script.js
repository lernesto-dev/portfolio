function handleMenu(){
  const body = document.querySelector('body')
  if(body.classList.contains('open-menu')){
    body.classList.add('close-menu')
    body.classList.remove('open-menu')
  } else {
    body.classList.add('open-menu')
    body.classList.remove('close-menu')
  }
}

function initPage(){
  const buttonMenu = document.getElementById('buttonMenu');
  buttonMenu.addEventListener('click', handleMenu)

  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear()
}

window.addEventListener('load', initPage)