$('.nav li a').click(function(){

    $(this).addClass('active').parent().siblings().find('a').removeClass('active') ; 

});

$(window).scroll(function(){

    $('.block').each(function () {
        
        if($(window).scrollTop() > $(this).offset().top)
        {
            var block = $(this).attr('id') ; 
            $('.nav a ').removeClass('active') ; 
            $('.nav li a[data-scroll="' +block+'"]').addClass('active'); 
        }
    })
})