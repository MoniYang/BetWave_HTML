
   
     $('.Closebtn').hide();
    $('.Closebtn').click(function(){
        $('.collapse.show').removeClass('show');
        $('.Closebtn').hide();
    });
    $('.card-btn').click(function(){
        // $('.collapse.show').removeClass('show');
        $('.Closebtn').show();
    });

   
   var owlIndex = $('.index_slider');
   owlIndex.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay:true,
    animateOut: 'fadeOut',
// animateIn: 'flipInX',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
   });

   var owlIndex2 = $('.Gameicon__content');
   owlIndex2.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay:true,
    animateOut: 'fadeOut',
// animateIn: 'flipInX',
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
   });


   var footerLogo = $('.footLogo');
   footerLogo.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay:true,
    animateOut: 'fadeOut',
// animateIn: 'flipInX',
    responsive: {
        0: {
            items: 5
        },
        600: {
            items: 10
        },
        1000: {
            items: 15
        }
    }
   });

   $(".login_btn").click(function () {
    if ($(".login_form").hasClass("open")) {
        $(".login_form").removeClass('open');
        $(".login_form").slideUp()
        //  $(".law_btn").addClass('close');
    } else {
        $('.login_form.open').removeClass('open');
        $(".login_form").addClass('open').slideDown();
        //  $(".law_btn.close").removeClass('close');
    }
})


$('.livechat--btn').click(function(){
    $('.livechat .box').toggleClass('open');
    $('.livechat--btn').toggleClass('open');

});
$('.trans_btn').click(function(){
    $('.transfer_box').toggleClass('open');
    $('.trans_btn').toggleClass('open');
   
});



$('.mobileNav__btn').click(function(){
    $('.navigation').addClass('open');
    $('.navigation').removeClass('close');
    $('.mobileNav__btn').addClass('close');
     if( $('.navigation').hasClass('open')){
        $('.mobileNav--Closebtn').addClass('open');
        $('.mobileNav--Closebtn').removelass('close');
        $('.navigation').removeClass('open');
       
     }
});

$('.mobileNav--Closebtn').click(function(){
    $('.navigation').addClass('close');
    $('.navigation').removeClass('open');
    $('.mobileNav__btn').removeClass('close');
    
    if( $('.mobileNav--Closebtn').hasClass('open')){
        $('.mobileNav--Closebtn').addClass('close');
        $('.mobileNav--Closebtn').removeClass('open');
       
     }
  
});
$('.transbox--btnClick').click(function(){
    $('.upload--box').toggle();
  
});
$('.userBank--add').click(function(){
    $('.userBank__addCard').toggle();
  
});
$('.mobieUserInfo--btn').click(function(){
    $('.userInfo').toggle();
})
$('.userBank__submitBtn').click(function(){
    $('.userBank__addCard').hide();
})
$('.userInfo--edit').click(function(){
    $(".show_text").hide();
    $(".show_input").show();
});
$('.userInfo--submit').click(function(){
    $(".show_text").show();
    $(".show_input").hide();
});
$('.new_bank--click').click(function(){
    $('.bank_info').toggle();
    $('.new_bank--click').addClass('open');
    if ($('.new_bank--click.open').hasClass('open')){
        $('.new_bank--click.open').removeClass('open');
        // $('.new_bank--click.open').addClass('open');
    }
  
});

    $(".dropdown-content").on("click",function (e) {
        e.stopPropagation();

    })
   

    // var dropmenu = document.getElementById(header);
    // var dropDownBtn =  dropmenu.querySelectorAll('.dropdown');
   

    // // dropDownBtn.isShow = false; 
    // // function myFunction() {
    //     // console.log(i);
    //     for(var i=0; i<=dropDownBtn.length; i++ ){
    //         dropDownBtn[i].onmouseenter = function(){
    //             var dropDownContent = dropDownBtn[this.index].getElementsByClassName('dropdown-content');
    //             dropDownContent.style.display = "block";
    //         }
    //     };
       
        // for(var j=0; j<=dropDownContent.length; j++ ){
        //     dropDownContent[j].style.display = "block";
        //     console.log(j);
        // }
    // dropDownBtn.onmouseenter = function(){
    //     ;
    //     dropDownContent.style.display ='block';
    // };
    // myFunction();



    // function myFunction() {
    //     dropDownBtn.onclick = function() {
          
    //         for ( var i =0; i < dropDownBtn.length; i++ ){
                
    //             this.isShow = !this.isShow;
    //             console.log(1);
    //             this.isShow = !this.isShow;
              
    //         }
            
    //     };
    //   }

    //   myFunction();

   