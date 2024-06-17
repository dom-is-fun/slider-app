
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const smallBoxList = $$('.box-picture-small')
const smallBoxListimg = $$('.box-picture-small img')
const bigBox = $('.box-big-picture img')
const prevArrow = $('.arrow-left')
const nextArrow = $('.arrow-right')
let curentIndex = 0





//Bắt dự kiện click img trong dãy ảnh nhỏ phía dưới 
smallBoxList.forEach((val, index) =>{
    val.addEventListener('click', (e) =>{
        const imgSmall = val.querySelector('img').src
       const oldId = bigBox.src //tại sao lại không gán được xuống line 46
       bigBox.src = imgSmall
       const activePicture = document.querySelector('.box-picture-small.active')
      if(activePicture){
        activePicture.classList.remove('active')
      }
      val.classList.add('active')
      curentIndex = index
    })
})

// hàm xử lý dự kiện click của arrows
function getCurenIndex(curentIndex){
  console.log(curentIndex);
  const activePicture = document.querySelector('.box-picture-small.active')
  bigBox.src = smallBoxList[curentIndex].querySelector('img').src
  if(activePicture){
    activePicture.classList.remove('active')
  }
  smallBoxList[curentIndex].classList.add('active')
}


//hàm nhận vào index truyền vào của ảnh và add vào xử lý cho dự kiện click arrow
nextArrow.onclick = () =>{
  if(curentIndex == 8)
  {
    curentIndex = 0
  }
  else{
    ++curentIndex
  }
  getCurenIndex(curentIndex)
}

//hàm nhận vào index truyền vào của ảnh và add vào xử lý cho dự kiện click arrow
prevArrow.onclick = () =>{
  if(curentIndex == 0)
  {
    curentIndex = 8 
  }
  else{
    --curentIndex
  }
  getCurenIndex(curentIndex)
}











