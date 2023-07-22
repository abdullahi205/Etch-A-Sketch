const container = document.querySelector('.container')
const color = document.querySelector('.color')
const sizeEl = document.querySelector('.size')
const btn = document.querySelector('.btn')
let size = sizeEl.value
let draw = false;

function getGrid(size){
  container.style.setProperty('--size', size)
  for(let i = 0; i < size * size; i++){
    const div = document.createElement('div')
    div.classList.add('grid')
    container.appendChild(div)

    div.addEventListener('mouseover', function(){
      if(!draw) return
      div.style.backgroundColor = color.value
    })
    div.addEventListener('mousedown', function(){
      div.style.backgroundColor = color.value
    })
    container.appendChild(div)
  }
}
window.addEventListener('mousedown', function(){
  draw = true;
})
window.addEventListener('mouseup', function(){
  draw = false;
})

function reset(){
  container.innerHTML = '';
  getGrid(size)
}
btn.addEventListener('click', reset)
sizeEl.addEventListener('change', function(){
  size = sizeEl.value
  reset()
})
getGrid(size)