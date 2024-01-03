$(document).ready(function () {
    if ($(".topbar-slideText").length > 0) {		
        var checkItem =	$('.topbar-slideText .discount').length;	
        $('.topbar-slideText').owlCarousel({
            items:1,
            dots: false,  			
            nav: checkItem > 1 ?true:false,
            loop: checkItem > 1 ?true:false,
            autoplay:true,
            autoplayTimeout:5000,
            slideSpeed: 4000,		
            animateIn: 'flipInX'
        });
        $('.topbar-slideText').find('.owl-next').html('');
        $('.topbar-slideText').find('.owl-prev').html('');
    }
    if ($("#home-slider").length > 0) {
        $('#home-slider .owl-carousel').owlCarousel({
            items:1,
            nav: true,
            dots: true,  			
            lazyLoad: true,
            loop: $('#home-slider .slider-item').length > 1 ? true:false,
            autoplay:true,
            autoplayTimeout:8000,
            slideSpeed: 4000,
            animateIn: 'fadeIn',animateOut: 'fadeOut',
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true,
                }
            },
            onChanged: function (event) {
                setTimeout(function(){
                    $('#home-slider').find('.owl-dot').each(function(index) {
                        $(this).attr('aria-label', index + 1);
                    });
                }, 400);
            }
        });
        $('#home-slider .owl-carousel').find('.owl-next').html('');
        $('#home-slider .owl-carousel').find('.owl-prev').html('')
    }
    var prodItem_desk = 5,
		prodItem_mobile = 2;
        prodItem_desk = 6
        prodItem_mobile = 2
    $('.home-collection-1 .owl-carousel').owlCarousel({
        items: prodItem_desk,
        loop: false,
        nav: true,
        dots: false,
        lazyLoad:true,
        responsive:{
            0:{
                items: 2,
                dots: false,
                nav: false,
                stagePadding: 15
            },
            768:{
                items: 2,
                nav: false
            },
            992:{
                items: prodItem_desk
            },
            1200:{
                items: prodItem_desk,
                touchDrag: $('.home-collection-1 .product-loop').length > prodItem_desk ? true:false,
                mouseDrag: $('.home-collection-1 .product-loop').length > prodItem_desk ? true:false
            }
        },
        onChanged: function (event) {
            setTimeout(function(){
                $('.home-collection-1').find('.owl-dots button').each(function(index) {
                    $(this).attr('aria-label', index + 1);
                });
            }, 400);
        }
    });
    $('.home-collection-2 .owl-carousel').owlCarousel({
        items: prodItem_desk,
        loop: false,
        nav: true,
        dots: false,
        dotsEach: true,
        responsive:{
            0:{
                items: 2,
                dots: false,
                nav: true,
                stagePadding: 15
            },
            768:{
                items: 2,
                nav: false
            },
            992:{
                items: prodItem_desk
            },
            1200:{
                items: prodItem_desk,
                touchDrag: $('.home-collection-2 .product-loop').length > prodItem_desk ? true:false,
                mouseDrag: $('.home-collection-2 .product-loop').length > prodItem_desk ? true:false
            }
        },
        onChanged: function (event) {
            setTimeout(function(){
                $('.home-collection-2').find('.owl-dots button').each(function(index) {
                    $(this).attr('aria-label', index + 1);
                });
            }, 400);
        }
    });
    $('.home-collection-3 .owl-carousel').owlCarousel({
        items: 3,
        loop: false,
        nav: true,
        dots: false,
        dotsEach: true,
        smartSpeed:1000,
        margin: 20,
        responsive:{
            0:{
                items: 1,
                stagePadding: 30,
                margin: 8
            },
            768:{
                items: 2
            },
            992:{
                items: 2
            },
            1200:{
                items: 3,
                touchDrag: $('.home-collection-3 .row-product').length > 3 ? true:false,
                mouseDrag: $('.home-collection-3 .row-product').length > 3 ? true:false
            }
        },
        onChanged: function (event) {
            setTimeout(function(){
                $('.home-collection-3').find('.owl-dots button').each(function(index) {
                    $(this).attr('aria-label', index + 1);
                });
            }, 400);
        }
    });
    $('#owlBlog-latest').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        loop: false,	
        smartSpeed:1200,
        autoplayTimeout: 1500,
        responsive: {
            0: {
                items: 1,
                stagePadding:45
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4,
                touchDrag: $('#owlBlog-latest .article-item').length > 4 ? true:false,
                mouseDrag: $('#owlBlog-latest .article-item').length > 4 ? true:false
            }
        }
    });
    $('.header-action_clicked').click(function(e){
        e.preventDefault();		
        if($(this).parents('.header-action-item').hasClass('js-action-show')){
            $('body').removeClass('locked-scroll');
            $(this).parents('.header-action-item').removeClass('js-action-show');
            if($(window).width() < 992){
                if ($(this).parents('.header-action-item').hasClass('header-action_cart')) {
                    $('.siteCart-mobile__overlay').removeClass('show-cart');
                    $('body').removeClass('locked-scroll').removeClass('body-showcart');
                }
            }
        }
        else{
            $('body').removeClass("locked-scroll-menu");
            $('.header-action-item').removeClass('js-action-show');
            $('body').addClass('locked-scroll');
            $(this).parents('.header-action-item').addClass('js-action-show');
            if($(window).width() < 992){
                if ($(this).parents('.header-action-item').hasClass('header-action_cart'))  {

                    $('.siteCart-mobile').addClass('show-cart');
                    $('body').removeClass('locked-scroll').addClass('body-showcart');
                }
            }
        }		
    });
    $('.siteCart-mobile__header').click(function() {
        if ($(this).parents('.siteCart-mobile').hasClass('show-cart')) {
            $(this).parents('.siteCart-mobile').removeClass('show-cart');
            $('body').removeClass('locked-scroll').removeClass('body-showcart');
            $('.header-action-item.header-action_cart').removeClass('js-action-show');
        } else {	
            $('body').addClass('body-showcart');
            $(this).parents('.siteCart-mobile').addClass('show-cart');

        }
    });
    $('.siteCart-mobile__overlay').on('click', function(e){
        $(this).parents('.siteCart-mobile').removeClass('show-cart');
        $('body').removeClass('locked-scroll').removeClass('body-showcart');
        $('.header-action-item.header-action_cart').removeClass('js-action-show');
    })
    $('body').on('click', '#sitenav-overlay', function(e){
        $('body').removeClass('locked-scroll');
        $('.header-action-item').removeClass('js-action-show');
    });
    $('body').on('click', '#sitenav-overlay,.sitenav-content .btnclose', function(e){
        $('body').removeClass('locked-scroll').removeClass("locked-scroll-menu");
        $('.header-action-item').removeClass('js-action-show');
    });
    $('.footer-expand-title').on('click', function(){
        jQuery(this).toggleClass('active').parent().find('.footer-expand-collapsed').stop().slideToggle('medium');
    });
    $('.title-footer').on('click', function(){
        if ($(window).width() < 991) {
            jQuery(this).toggleClass('opened').parent().find('.block-collapse').stop().slideToggle('medium');
        }
    });
    if ($('.addThis_listSharing').length > 0){
        $('.addThis_iconContact .item-contact,.addThis_listSharing .addThis_close').on('click', function(e){
            if($('.addThis_listSharing').hasClass('active')){
                $('.addThis_listSharing').removeClass('active');
                $('.addThis_listSharing').fadeOut(150);				
            }
            else{		
                $('.addThis_listSharing').fadeIn(100);
                $('.addThis_listSharing').addClass('active');
            }
        });
        $('.listSharing_overlay').on('click', function(e){
            $('.addThis_listSharing').removeClass('active');
            $('.addThis_listSharing').fadeOut(150);				
        })
        $('.body-popupform form.contact-form').submit(function(e){
            var self = $(this);
            if($(this)[0].checkValidity() == true){
                e.preventDefault();
                grecaptcha.ready(function() {
                    grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {action: 'submit'}).then(function(token) {
                        self.find('input[name="g-recaptcha-response"]').val(token);
                        $.ajax({
                            type: 'POST',
                            url:'/contact',
                            data: $('.body-popupform form.contact-form').serialize(),			 
                            success:function(data){		
                                $('.modal-contactform.fade.show').modal('hide');
                                setTimeout(function(){ 				
                                    $('.modal-succesform').modal('show');					
                                    setTimeout(function(){	
                                        $('.modal-succesform.fade.show').modal('hide');							
                                    }, 5000);
                                },300);
                            },				
                        })
                    }); 
                });
            }
        });
        $(".modal-succesform").on('hidden.bs.modal', function(){
            location.reload();
        });
    }
    if ($('#productCarousel-slider').length > 0){
    var slider = $('#productCarousel-slider');
			var thumbnailSlider = $('#productCarousel-thumb');
			var duration = 500;	

			slider.owlCarousel({
				items:1,
				nav: true,
				dots: true,
				loop: false,	
				smartSpeed:1000
			})
			slider.on('changed.owl.carousel', function (e) {
				thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
				thumbnailSlider.find(".owl-item").removeClass("current");
				thumbnailSlider.find('.owl-item:nth-child('+ (e.item.index + 1) +')').addClass('current');
			});
			thumbnailSlider.on('initialized.owl.carousel', function() {
				thumbnailSlider.find(".owl-item").eq(0).addClass("current");
			})
			thumbnailSlider.owlCarousel({
				loop:false,	
				nav:false,
				margin:15,
				center:false,
				responsive: {
					0: {
						items: 4,	
					},
					768: {
						items: 5,
					},
					992: {
						items: 5,
					},
					1200: {
						items: 5,
					}
				}
			})
			thumbnailSlider.on('changed.owl.carousel', function (e) {
				slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
				slider.find(".owl-item").removeClass("current");
				slider.find('.owl-item:nth-child('+ (e.item.index + 1) +')').addClass('current');
			});
			thumbnailSlider.on("click", ".owl-item", function(e) {
				e.preventDefault();
				thumbnailSlider.find(".owl-item").removeClass("current");
				$(this).addClass("current");
				var number = $(this).index();
				slider.data('owl.carousel').to(number, duration, true);
			});
        }
        var popover = '.cp-icon[data-toggle="popover"]';
		$(popover).popover({
			html: true,
			animation: true,
			sanitize: false,
			placement: function ( popover, trigger ){
				var placement = jQuery(trigger).attr('data-placement');
				var dataClass = jQuery(trigger).attr('data-class');
				jQuery(trigger).addClass('is-active');
				jQuery(popover).addClass(dataClass);
				if (jQuery(trigger).offset().top - $(window).scrollTop() > 280) {
					return "top";
				}
				return placement;
			}, 
			content: function() {
				var elementId  = $(this).attr("data-popover-content");
				return $(elementId).html();
			},
			delay: {show: 60, hide: 40}
		});	
		function eventPopover(){
			if($(window).width() >= 768){	
				$(popover).on('mouseenter', function () {
					var self = this;
					jQuery(this).popover("show");
					jQuery(".popover.coupon-popover").on('mouseleave', function () {
						jQuery(self).popover('hide');
					});
				}).on('mouseleave', function () {
					var self = this;
					setTimeout(function () {
						if (!jQuery('.popover.coupon-popover:hover').length) {
							jQuery(self).popover('hide');
						}
					},300);
				});
			}
			else{
				$(popover).off('mouseenter mouseleave');	
			}				
		};
		eventPopover();	$(window).resize(function() {	eventPopover();	});
		$(popover).popover().on("hide.bs.popover", function(){		
			$(".modal-coupon--backdrop").removeClass("js-modal-show");
		});
		$(popover).popover().on("show.bs.popover", function(){				
			$(".modal-coupon--backdrop").addClass("js-modal-show");														
		});
		$(popover).popover().on("shown.bs.popover", function(){	
			$('.btn-popover-close,.modal-coupon--backdrop').click(function() {
				$(popover).not(this).popover('hide');
				var $this = $(this);
				$this.popover('hide');
			});
		});
		$('body').on('hidden.bs.popover', function (e) {
			$(e.target).data('bs.popover').inState = { click: false, hover: false, focus: false };
		});		
		$(document).on('click', '.cpi-trigger', function(e){ 
			e.preventDefault();	
			var btnPopover= $(this).attr('data-coupon');
			$(".coupon-item .cp-btn[data-coupon="+btnPopover+"]").click();		
		});
		$(document).on('click', '.popover-content__coupon .btn-popover-code', function(e){ 
			e.preventDefault();	
			var btnPopover= $(this).attr('data-coupon');
			$(".coupon-item .cp-btn[data-coupon="+btnPopover+"]").click();		
			$(this).html('Đã sao chép').addClass('disabled');	
		});
        if($('#owlProduct-related').length > 0 ){	
			$('#owlProduct-related').owlCarousel({
				items: prodItem_desk,
				nav: true,
				dots: false,
				loop: false,	
				lazyLoad:true,
				smartSpeed:1500,
				autoplayTimeout: 1500,
				responsive: {
					0: {
						items: 2,
						stagePadding: 20
					},
					768: {
						items: 2
					},
					992: {
						items: prodItem_desk,
					},
					1200: {
						items: prodItem_desk,
						touchDrag: $('#owlProduct-related').find('.product-loop').length > prodItem_desk ? true:false,
						mouseDrag: $('#owlProduct-related').find('.product-loop').length > prodItem_desk ? true:false
					}
				}
			});
		}
        if($('#listViewed').length > 0 ){	
			$('#listViewed').owlCarousel({
				items: prodItem_desk,
				nav: true,
				dots: false,
				loop: false,	
				lazyLoad:true,
				smartSpeed:1500,
				autoplayTimeout: 1500,
				responsive: {
					0: {
						items: 2,
						stagePadding: 20
					},
					768: {
						items: 2
					},
					992: {
						items: prodItem_desk,
					},
					1200: {
						items: prodItem_desk,
						touchDrag: $('#listViewed').find('.product-loop').length > prodItem_desk ? true:false,
						mouseDrag: $('#listViewed').find('.product-loop').length > prodItem_desk ? true:false
					}
				}
			});
		}
});