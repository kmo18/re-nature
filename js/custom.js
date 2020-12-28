$(document).ready(function() {
    
    //공통
    $(window).scroll(function( ) {
			
        /* ===== 냅바 ===== */
        if($(this).scrollTop( ) > 90) {
            $('#nav-first').css('display','none').css('animation', 'slow-btn 1s');		
            $('#nav-fixed').css('margin-top', '0px').css('display','block');				
        }else {
            $('#nav-first').css('margin-top', '0px').css('display','block');
            $('#nav-fixed').css('display','none').css('animation', 'slow-btn 1s');				
        }
    });


    /* ===== 냅바 : 서브메뉴 ====== */
    $('.main-menu li').mouseover(function() {
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('.main-menu li').mouseout(function() {
        $(this).find('.sub-menu').stop().slideUp();
    });

    /* recipe */

    /***** vegan recipe modal *****/
    $('a.caponata').click(function( ) { $('div.caponata').fadeIn( ); });
    $('a.soup').click(function( ) { $('div.soup').fadeIn( ); });
    $('a.smoothie').click(function( ) { $('div.smoothie').fadeIn( ); });
    $('a.tarte').click(function( ) { $('div.tarte').fadeIn( ); });
    $('a.roll').click(function( ) { $('div.roll').fadeIn( ); });
    $('a.sandwich').click(function( ) { $('div.sandwich').fadeIn( ); });
    $('a.pudding').click(function( ) { $('div.pudding').fadeIn( ); });
    $('a.gambas').click(function( ) { $('div.gambas').fadeIn( ); });
    $('a.burger').click(function( ) { $('div.burger').fadeIn( ); });
    $('.recipe-modal-close').click(function( ) { $('.recipe-modal').fadeOut( ); });

    $(document).mouseup(function (e) {
        var container = $('.recipe-modal');
        if( container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });


    /* map */
    var mapSlide = document.querySelectorAll('.map-slide');
    var mapSlideWidth = $('.map-slider').width();
    var mapSlideLen = mapSlide.length;
    var startNum = 0;
    var curIdx = startNum;

    $('.map-slider img').css({ 'width': mapSlideWidth + 'px' });

    $('.map-modal').hide();
    $('.map-search-list li').click(function() {
        $('.map-modal').show();
        $(this).addClass('.active-list');
        $('.map-slide-list').css('left', 0);
        curIdx = 0;
    });
    $('.map-modal-close').click(function(e) {
        e.preventDefault();
        $('.map-modal').hide();
        $('.map-search-list li').removeClass('.active-list');
    });

    // map slider
    $('.map-slide-list').width(mapSlideWidth * mapSlideLen);

    $('#map-prev').click(function(e) {
        e.preventDefault();
        if(curIdx != 0) {
            $('.map-slide-list').css({
                'transition': 'left ' + .3 + 's',
                'left': -mapSlideWidth * (curIdx - 1) + 'px'
            });
            curIdx--;
        }
    });

    $('#map-next').click(function(e) {
        e.preventDefault();
        if(curIdx < mapSlideLen - 1) {
            $('.map-slide-list').css({
                'transition': 'left ' + .3 + 's',
                'left': -mapSlideWidth * (curIdx + 1) + 'px'
            });
            curIdx++;
        }
    });
});