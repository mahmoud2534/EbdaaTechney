let nav =document.querySelector('.navbar');

window.onscroll=function(){
    if(this.scrollY>=20){
        nav.classList.add('show-up')
    }else{
        nav.classList.remove('show-up')
    }
}
let tabs =document.querySelectorAll('.navbar-nav li a');
let tabsArray=Array.from(tabs);
// let btn1=document.querySelector('.btn1 ')
tabsArray.forEach((ele) =>{
    ele.addEventListener('click' ,function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove('active')
        })
        ele.classList.add('active')
    })
})

$("#Qustion").click(function(){
    $(".whats").fadeToggle();
});
$('.qustion').click(function(){
    prompt('thanks, We reseved your qustion, anything else?');
    $(".whats").hide();
})
$('.heroBtn').click(function(){
    $('.srtoklit').fadeToggle();
})
$('#strokBtn').click(function(){
    prompt('thanks for subscribtion ,anything else?');
    $('.srtoklit').hide();
})
$('.btn4').click(function(){
    $('.morepara').fadeToggle();
})
//more btn
$('.less').hide();
$('.more').click(function(){
    $('.more').hide();
    $('.less').show();
})
$('.less').click(function(){
    $('.less').hide();
    $('.more').show();
})