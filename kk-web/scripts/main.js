// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sun.jpeg'){
        myImage.setAttribute('src', 'images/dog.png');
    } else {
        myImage.setAttribute('src', 'images/sun.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else {
     localStorage.setItem('name', myName);
     myHeading.textContent = myName + "真的酷毙了";
     setFontSize("head-id", 70);
    }
}

if(!localStorage.getItem('name')){
    setUserName();
    setFontSize("head-id", 70);
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + "你又来了，真的超级酷333333";
    setFontSize("head-id", 35);
    
}

function setFontSize(id, size){
   let header = document.getElementById(id);
//    header.size = size;
   let style = header.style
   style.fontSize = size + "px"
}

myButton.onclick = () => {
    setUserName();
}