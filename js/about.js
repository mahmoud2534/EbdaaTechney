

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
$("#contactBtn").click(function(){
    $(".whats").fadeToggle();
}); 
$('.qustion').click(function(){
    prompt('thanks for contact us ,anything else?');
    $(".whats").hide();
})
$('#ourTeam').click(function(){
    $(".srtoklit").fadeToggle();
})
$('#strokBtn').click(function(){
    prompt('We will contact you soon, anything else?');
    $(".srtoklit").hide();
})
$("#Button").click(function(){
    $(".Whats").fadeToggle();
}); 
$('.Qustion').click(function(){
    prompt('thanks, We reseved your qustion, anything else?');
    $(".Whats").hide();
})
