//const { white } = require("colors");

var body_language_class
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slidecount = slide.length,
    slideheight = 160,
    prevbtn = document.querySelector('.prev'),
    nextbtn = document.querySelector('.next');

slides.style.height = slideheight * slidecount + 'px';

function moveSlide(num){
  slides.style.top = -num * 160 + 'px';
  currentIdx = num;
}

nextbtn.addEventListener('click', function(){
  if(currentIdx < slidecount - 3){
    moveSlide(currentIdx + 1);
    document.getElementsByClassName('list')[currentIdx].style.fontSize = '25px';
    document.getElementsByClassName('list')[currentIdx + 1].style.fontSize = '45px';
  }else{
    moveSlide(0);
    document.getElementsByClassName('list')[8].style.fontSize = '25px';
    document.getElementsByClassName('list')[1].style.fontSize = '45px';
  }
});

prevbtn.addEventListener('click', function(){
  if(currentIdx > 0){
    moveSlide(currentIdx - 1);   
    document.getElementsByClassName('list')[currentIdx + 2].style.fontSize = '25px';
    document.getElementsByClassName('list')[currentIdx + 1].style.fontSize = '45px';
  }else{
    moveSlide(slidecount - 3);
    document.getElementsByClassName('list')[8].style.fontSize = '45px';
  }
});

socket.on('number', (msg) => {
  console.log("get number");
  console.log(msg);
  body_language_class = msg;
  alert()
  caution()
});  

// console.log(curyrentIdx)
// console.log(body_language_class)

function alert(){
  if(((currentIdx == 1) || (currentIdx == 2) || (currentIdx == 3)) & ((body_language_class == "put") || (body_language_class == "shake"))){
    document.getElementById('alertbox_1').innerHTML = '레시피순서에 맞게 진행되고 있는지 확인해 주세요';
    document.getElementById('alertbox_1').style.backgroundColor = "white";
    document.getElementById('alertbox_1').style.color = "red";
  }
  else if(((currentIdx == 4) || (currentIdx == 5) || (currentIdx == 6) || (currentIdx == 7) || (currentIdx == 8)) & (body_language_class == "cutting")){
    document.getElementById('alertbox_1').innerHTML = '레시피순서에 맞게 진행되고 있는지 확인해 주세요';
    document.getElementById('alertbox_1').style.backgroundColor = "white";
    document.getElementById('alertbox_1').style.color = "red";
  }
  else{
    document.getElementById('alertbox_1').innerHTML = '잘 진행하고 계시네요!';
    document.getElementById('alertbox_1').style.backgroundColor = "black";
    document.getElementById('alertbox_1').style.color = "white";
  }
};

function caution(){
  if((currentIdx == 1) || (currentIdx == 2) || (currentIdx == 3) || (body_language_class == "cutting")){
    document.getElementById('alertbox_2').innerHTML ='손이 베이지 않도록 유의해 주세요!';
    document.getElementById('alertbox_2').style.backgroundColor = "white";
    document.getElementById('alertbox_2').style.color = "red";
  }
  else{
    document.getElementById('alertbox_2').innerHTML ='';
    document.getElementById('alertbox_2').style.backgroundColor = "black";
    document.getElementById('alertbox_2').style.color = "white";
  }
}


// const menu = [
//   "1. 무는 취향대로 썰어서 준비해주세요.",
//   "2. 고기는 핏기를 제거하고 적당한 크기로 썰어서 준비해주세요.",
//   "3. 대파는 송송 썰거나 어슷썰고 양파는 채 썰어 준비해주세요.",
//   "4. 냄비에 참기름 1큰술, 식용유 1큰술을 두르고 소고기를 넣어 볶아주세요.",
//   "5. 고기의 겉면이 익으면 무를 넣어 볶아주세요.",
//   "6. 고기가 익으면 물 1.5L, 간마늘 1큰술, 국간장 2큰술, 멸치액젓 2큰술을 넣고 중불에서 20분 정도 끓여주세요.",
//   "7. 소고기가 부드러워지면 양파를 넣어 끓여주세요.",
//   "8. 소금 1/2큰술로 간을 맞추고 대파, 후추를 넣어 마무리해주세요."
// ];

// const next = document.getElementById("increase");
// const previous = document.getElementById("decrease");
// const recipe = document.getElementById("recipe");

// recipe.innerHTML = menu[0];

//   class ProgressBar{
//     constructor (element, initialValue = 0){
//         this.valueElem = element.querySelector('.progress-bar-value');
//         this.fillElem = element.querySelector('.progress-bar-fill');
  
//         this.setValue(initialValue);
//     }
  
//     setValue (newValue){
//         if (newValue<0) {
//             newValue = 0;
//         }
//         if (newValue>100) {
//             newValue = 100;
//         }
  
//         this.value = newValue;
//         this.update();
//     }
//     update(){
//         const percentage = this.value + '%';
  
//         this.fillElem.style.width = percentage;
//         this.valueElem.textContent = percentage;
//     }
//   }
  
  
//   const pb1 = new ProgressBar(document.querySelector('.progress-bar'),1); 
//   var i = 0;
  
//   next.onclick = () => {
//     const index = menu.indexOf(recipe.innerHTML)
//     recipe.innerHTML = menu[index + 1];
    
//     i = i+12.5;
//     pb1.setValue(i);
//   }
  
//   previous.onclick = () => {
//     const index = menu.indexOf(recipe.innerHTML)
//     recipe.innerHTML = menu[index - 1];
//     i = i-12.5;
//     pb1.setValue(i);
//   }
  
