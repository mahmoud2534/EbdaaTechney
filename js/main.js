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

$("#all").click(function(){
    $("#products1").show();
    $("#products").show();
    $("#products2").show();
    $("#products3").show();
    $("#products4").show();
    $("#products5").show();
    $("#products6").show();
});
$("#excavator").click(function(){
    $("#products").show();
    $("#products1").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products4").hide();
    $("#products5").hide();
    $("#products6").hide();
});
$("#motorgrades").click(function(){
    $("#products1").show();
    $("#products").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products4").hide();
    $("#products5").hide();
    $("#products6").hide();
});
$("#bulldozers").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products").hide();
    $("#products5").hide();
    $("#products6").hide();
    $("#products3").show();
    $("#products4").show();
});
$("#rollers").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products6").hide();
    $("#products").hide();
    $("#products4").show();
    $("#products5").show();
})

$("#whealloaders").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products").hide();
    $("#products5").hide();
    $("#products6").hide();
    $("#products3").show();
    $("#products4").hide();

});
$("#dozers").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products4").hide();
    $("#products5").hide();
    $("#products").hide();
    $("#products6").show();
});
$("#excavator1").click(function(){
    $("#products").show();
    $("#products1").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products4").hide();
    $("#products5").hide();
    $("#products6").hide();
});
$("#motorgrades1").click(function(){
    $("#products1").show();
    $("#products").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products4").hide();
    $("#products5").hide();
    $("#products6").hide();
});
$("#bulldozers1").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products").hide();
    $("#products5").hide();
    $("#products6").hide();
    $("#products3").show();
    $("#products4").show();
});
$("#rollers1").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products6").hide();
    $("#products").hide();
    $("#products4").show();
    $("#products5").show();
})

$("#whealloaders1").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products").hide();
    $("#products5").hide();
    $("#products6").hide();
    $("#products3").show();
    $("#products4").hide();

});
$("#dozers1").click(function(){
    $("#products1").hide();
    $("#products2").hide();
    $("#products3").hide();
    $("#products4").hide();
    $("#products5").hide();
    $("#products").hide();
    $("#products6").show();
});
$(".Button").click(function(){
    $(".whats").fadeToggle();
}); 
$('.qustion').click(function(){
    prompt('thanks, We reseved your qustion, anything else?');
    $(".whats").hide();
})
$('.btn1').click(function(){
    $(".srtoklit").fadeToggle();
})

$('#strokBtn').click(function(){
    prompt('thanks for subscribtion, anything else?');
    $(".srtoklit").hide();
})

