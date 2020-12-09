const txtElement = ['Student of Universitas Klabat'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        txtIndex = 0;
    }
    setTimeout(ngetik, 100);
})();

const containerGalery = document.querySelector('.containerGalery');
const big = document.querySelector('.big');
const thumbs = document.querySelectorAll('.thumbs');

containerGalery.addEventListener('click',function(e){
    if ( e.target.className == 'tumb'){
        big.src = e.target.src;
    }
});

function ganti(){
    document.querySelector("#galery").style.background = "#212121";
    document.querySelector(".tom").style.color = "#212121"; 
    document.querySelector(".jer").style.color = "#212121";
    document.querySelector(".nam").style.color = "#eeeeee";
    document.querySelector(".tom").style.background = "#eeeeee";
    document.querySelector(".jer").style.background = "#eeeeee";
}

function ganti2(){
    document.querySelector("#galery").style.background = "#eeeeee";
    document.querySelector(".tom").style.color = "#eeeeee"; 
    document.querySelector(".jer").style.color = "#eeeeee";
    document.querySelector(".nam").style.color = "#0d7377";
    document.querySelector(".tom").style.background = "#0d7377";
    document.querySelector(".jer").style.background = "#0d7377";  
}
