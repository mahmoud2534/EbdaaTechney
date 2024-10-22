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

$(".Button").click(function(){
    $(".whats").fadeToggle();
}); 
$('.qustion').click(function(){
    prompt('thanks, We reseved your qustion, anything else?');
    $(".whats").hide();
})