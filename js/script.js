/*global $*/
/*global Chart*/

//FadeIn-Out
$(function(){
    const images = ['images/logo_image.jpg', 'images/board.jpg', 'images/reception.jpg', 'images/sticker.jpg', 'images/view.jpg'];    
    let count = 1;
    
    const change_image = () => {
        $('#fadein_fadeout img').animate({'opacity': '0'}, 2000, function(){
            //src属性のものをimages[1]=2.jpgにかえる
            $('#fadein_fadeout img').prop('src', images[count]);
        
            $('#fadein_fadeout img').animate({'opacity': '1'}, 2000);
            //処理が完了したらカウントを上げる
            count++;
            
            if(count === images.length){
                count = 0;
            }
        });
    }
    //タイマー処理
    setInterval(change_image, 5000);
});

//For Mobile logo
$(window).on('load',function() {
    $("#logo0").animate({
        "opacity": "1"
    }, 100),
    $("#logo1").animate({
        "height" : "180px"
    }, 450),
    $("#logo2").delay(550).animate({
       "width": "250px" 
    }, 450),
    $("#logo3").delay(1100).animate({
        "height": "250px"
    }, 450),
    $("#logo4").delay(1550).animate({
        "width": "250px"
    }, 450),
    $(".pic").delay(2000).animate({
        "opacity": 1
    }),
    $(".scrolldown").delay(2600).animate({
        "opacity": 1
    }),
    $(".top p2").delay(2600).animate({
        "opacity": 1
    })
});

