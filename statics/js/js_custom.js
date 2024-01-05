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
        if ($('.list-blogs-related.owl-carousel').length > 0){
            $('.list-blogs-related.owl-carousel').owlCarousel({
                items: 3,
                nav: true,
                dots: false,
                loop: false,	
                margin: 30,
                smartSpeed:1200,
                autoplayTimeout: 1500,
                responsive: {
                    0: {
                        items: 2,
                        margin: 0,
                        stagePadding: 30
                    },
                    768: {
                        items: 3,
                        margin: 15
                    },
                    992: {
                        items: 3,
                        margin: 15
                    },
                    1200: {
                        items: 3,
                        touchDrag: $('.list-blogs-related.owl-carousel').length > 3 ? true:false,
                        mouseDrag: $('.list-blogs-related.owl-carousel').length > 3 ? true:false
                    }
                }
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
        if($('.productDetail--content').length > 0 ){	
            var pro_template = "style_01";
            var swatch_size = parseInt($('#add-item-form .select-swatch .swatch').length);
            jQuery(document).on('click','#add-item-form .swatch input', function(e) {  
                e.preventDefault();
                var $this = $(this);
                var _available = '';
                $this.parent().siblings().find('label').removeClass('sd');
                $this.next().addClass('sd');
                var name = $this.attr('name');
                var value = $this.val();
                $('#add-item-form select[data-option='+name+']').val(value).trigger('change');
                if(swatch_size == 2){
                    if(name.indexOf('1') != -1){
                        $('#add-item-form #variant-swatch-1 .swatch-element').find('input').prop('disabled', false);
                        $('#add-item-form #variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
                        $('#add-item-form #variant-swatch-1 .swatch-element label').removeClass('sd');
                        $('#add-item-form #variant-swatch-1 .swatch-element').removeClass('soldout');
                        $('#add-item-form .selector-wrapper .single-option-selector').eq(1).find('option').each(function(){
                            var _tam = $(this).val();
                            $(this).parent().val(_tam).trigger('change');
                            if(check_variant){
                                if(_available == '' ){
                                    _available = _tam;
                                }
                            }else{
                                $('#add-item-form #variant-swatch-1 .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
                                $('#add-item-form #variant-swatch-1 .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);
                            }
                        })
                        $('#add-item-form .selector-wrapper .single-option-selector').eq(1).val(_available).trigger('change');
                        $('#add-item-form #variant-swatch-1 .swatch-element[data-value="'+_available+'"] label').addClass('sd');
                    }
                }
                else if (swatch_size == 3){
                    var _count_op2 = $('#add-item-form #variant-swatch-1 .swatch-element').length;
                    var _count_op3 = $('#add-item-form #variant-swatch-2 .swatch-element').length;
                    if(name.indexOf('1') != -1){
                        $('#add-item-form #variant-swatch-1 .swatch-element').find('input').prop('disabled', false);
                        $('#add-item-form #variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
                        $('#add-item-form #variant-swatch-1 .swatch-element label').removeClass('sd');
                        $('#add-item-form #variant-swatch-1 .swatch-element').removeClass('soldout');
                        $('#add-item-form #variant-swatch-2 .swatch-element label').removeClass('sd');
                        $('#add-item-form #variant-swatch-2 .swatch-element').removeClass('soldout');
                        var _avi_op1 = '';
                        var _avi_op2 = '';
                        $('#add-item-form #variant-swatch-1 .swatch-element').each(function(ind,value){
                            var _key = $(this).data('value');
                            var _unavi = 0;
                            $('#add-item-form .single-option-selector').eq(1).val(_key).change();
                            $('#add-item-form #variant-swatch-2 .swatch-element label').removeClass('sd');
                            $('#add-item-form #variant-swatch-2 .swatch-element').removeClass('soldout');
                            $('#add-item-form #variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
                            $('#add-item-form #variant-swatch-2 .swatch-element').each(function(i,v){
                                var _val = $(this).data('value');
                                $('#add-item-form .single-option-selector').eq(2).val(_val).change();
                                if(check_variant == true){
                                    if(_avi_op1 == ''){
                                        _avi_op1 = _key;
                                    }
                                    if(_avi_op2 == ''){
                                        _avi_op2 = _val;
                                    }
                                }else{
                                    _unavi += 1;
                                }
                            })
                            if(_unavi == _count_op3){
                                $('#add-item-form #variant-swatch-1 .swatch-element[data-value = "'+_key+'"]').addClass('soldout');
                                setTimeout(function(){
                                    $('#add-item-form #variant-swatch-1 .swatch-element[data-value = "'+_key+'"] input').attr('disabled','disabled');
                                })
                            }
                        })
                        $('#add-item-form #variant-swatch-1 .swatch-element[data-value="'+_avi_op1+'"] input').click();
                    }
                    else if(name.indexOf('2') != -1){
                        $('#add-item-form #variant-swatch-2 .swatch-element label').removeClass('sd');
                        $('#add-item-form #variant-swatch-2 .swatch-element').removeClass('soldout');
                        $('#add-item-form #variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
                        $('#add-item-form .selector-wrapper .single-option-selector').eq(2).find('option').each(function(){
                            var _tam = $(this).val();
                            $(this).parent().val(_tam).trigger('change');
                            if(check_variant){
                                if(_available == '' ){
                                    _available = _tam;
                                }
                            }else{
                                $('#add-item-form #variant-swatch-2 .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
                                $('#add-item-form #variant-swatch-2 .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);
                            }
                        })
                        $('#add-item-form .selector-wrapper .single-option-selector').eq(2).val(_available).trigger('change');
                        $('#add-item-form #variant-swatch-2 .swatch-element[data-value="'+_available+'"] label').addClass('sd');
                    }
                }
                else{
        
                }
                if(pro_template == "style_02"){
                    //check img style 2
                    if(check_scrollstyle2 != '' && $(window).width() > 991 && fIndex == true){
                        var indeximg2 = $("div.product-gallery[data-image='"+ check_scrollstyle2 +"']").index();
                        $('html, body').animate({
                            scrollTop: $('#productScroll-slider div.product-gallery:eq('+indeximg2+')').offset().top - 15
                        }, 800);	
                    }
                }
            })
            $(document).ready(function(){
                var _chage = '';
                $('#add-item-form .swatch-element[data-value="'+$('#add-item-form .selector-wrapper .single-option-selector').eq(0).val()+'"]').find('input').click();
                $('#add-item-form .swatch-element[data-value="'+$('#add-item-form .selector-wrapper .single-option-selector').eq(1).val()+'"]').find('input').click();
                if(swatch_size == 2){
                    var _avi_op1 = '';
                    var _avi_op2 = '';
                    var _count = $('#add-item-form #variant-swatch-1 .swatch-element').length;
                    $('#add-item-form #variant-swatch-0 .swatch-element').each(function(ind,value){
                        var _key = $(this).data('value');
                        var _unavi = 0;
                        $('#add-item-form .single-option-selector').eq(0).val(_key).change();
                        $('#add-item-form #variant-swatch-1 .swatch-element').each(function(i,v){
                            var _val = $(this).data('value');
                            $('#add-item-form .single-option-selector').eq(1).val(_val).change();
                            if(check_variant == true){
                                if(_avi_op1 == ''){
                                    _avi_op1 = _key;
                                }
                                if(_avi_op2 == ''){
                                    _avi_op2 = _val;
                                }
                            }else{
                                _unavi += 1;
                            }
                        })
                    })
                    $('#add-item-form #variant-swatch-1 .swatch-element[data-value = "'+_avi_op2+'"] input').click();
                    $('#add-item-form #variant-swatch-0 .swatch-element[data-value = "'+_avi_op1+'"] input').click();
                }
                else if(swatch_size == 3){
                    var _avi_op1 = '';
                    var _avi_op2 = '';
                    var _avi_op3 = '';
                    var _size_op2 = $('#add-item-form #variant-swatch-1 .swatch-element').length;
                    var _size_op3 = $('#add-item-form #variant-swatch-2 .swatch-element').length;
                    $('#add-item-form #variant-swatch-0 .swatch-element').each(function(ind,value){
                        var _key_va1 = $(this).data('value');
                        var _count_unavi = 0;
                        $('#add-item-form .single-option-selector').eq(0).val(_key_va1).change();
                        $('#add-item-form #variant-swatch-1 .swatch-element').each(function(i,v){
                            var _key_va2 = $(this).data('value');
                            var _unavi_2 = 0;
                            $('#add-item-form .single-option-selector').eq(1).val(_key_va2).change();
                            $('#add-item-form #variant-swatch-2 .swatch-element').each(function(j,z){
                                var _key_va3 = $(this).data('value');
                                $('#add-item-form .single-option-selector').eq(2).val(_key_va3).change();
                                if(check_variant == true){
                                    if(_avi_op1 == ''){
                                        _avi_op1 = _key_va1;
                                    }
                                    if(_avi_op2 == ''){
                                        _avi_op2 = _key_va2;
                                    }
                                    if(_avi_op3 == ''){
                                        _avi_op3 = _key_va3;
                                    }
                                }else{
                                    _unavi_2 += 1;
                                }
                            })
                            if(_unavi_2 == _size_op3){
                                _count_unavi += 1;
                            }
                        })
                    })
                    $('#add-item-form #variant-swatch-0 .swatch-element[data-value = "'+_avi_op1+'"] input').click();
                }
                if (pro_template == "style_02"){
                    //stye 2
                    fIndex = true;
                    if(check_scrollstyle2 != '' && $(window).width() > 991){
                        var indeximg2 = $("div.product-gallery[data-image='"+ check_scrollstyle2 +"']").index();
                        if($(window).scrollTop() > $('.productDetail-information').offset().top){
                            $('html, body').animate({
                                scrollTop: $('#productScroll-slider div.product-gallery:eq('+indeximg2+')').offset().top - 15
                            }, 800);	
                        }
                    }
                }
            });
            $(document).ready(function(){
                var vl = $('#add-item-form .swatch .color input').val();
                $('#add-item-form .swatch .color input').parents(".swatch").find(".header strong").html(vl);
                $("#add-item-form .select-swap .color" ).hover(function() { 
                    var value = $( this ).data("value");
                    $(this).parents(".swatch").find(".header strong").html( value );
                },function(){
                    var value = $("#add-item-form .select-swap .color label.sd span").html();
                    $(this).parents(".swatch").find(".header strong").html( value );
                });
            });
        
            $(document).ready(function(){
                var vl = $('#add-item-form .swatch .color input').val();
                $('#add-item-form .swatch .color input').parents(".swatch").find(".header span").html(vl);
                $("#add-item-form .select-swap .color" ).hover(function() { 
                    var value = $( this ).data("value");
                    $(this).parents(".swatch").find(".header span").html( value );
                },function(){
                    var value = $("#add-item-form .select-swap .color label.sd span").html();
                    $(this).parents(".swatch").find(".header span").html( value );
                });
            });
        }
        if($('.collection-listproduct').length > 0 ){	
        var toc = '<div id="table-content-container" class="table-of-contents" style="margin: 20px 0px;"><strong class="htitle">Các nội dung chính <span class="toc_toggle">[<a class="icon-list" href="javascript:void(0)">Ẩn</a>]</span></strong>';
            $('h1, h2, h3, h4, h5, h6').each(function(i, el) {
                var $el, id;
                $el = $(el);
                id = $el.text().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                if (!id) {
                return;
                }
                $el.attr('id', id);
            });
            
            var level = 0;
        
            // Lặp qua tất cả các thẻ h1, h2 và h3 trong trang
            $(".description-productdetail h2,.description-productdetail h3").each(function(i) {
        
            // Lấy tiêu đề và ID của tiêu đề hiện tại
            var title = $(this).text();
            var slug = $(this).attr("id");
        
            // Xác định cấp độ của tiêu đề dựa trên tên thẻ
            var currentLevel = parseInt(this.tagName.substring(1));
        
            // Tạo các liên kết mục lục dựa trên tiêu đề và ID của tiêu đề
            if (currentLevel > level) {
                toc += (new Array(currentLevel - level + 1)).join('<ul id="toc_list">');
            } else if (currentLevel < level) {
                toc += (new Array(level - currentLevel + 1)).join("</ul>");
            }
            level = currentLevel;
        
            toc += "<li><a href='#" + slug + "'>" + title + "</a></li>";
        
            });
        
            // Đóng tất cả các thẻ ul
            if (level) {
            toc += (new Array(level + 1)).join("</ul></div>");
            }
        
            // Thêm bảng mục lục vào phần tử có ID là "toc"
            $('.description-productdetail').prepend(toc);

        // Chọn tất cả các liên kết chỉ mục
        $('a[href^="#"]').on('click', function(event) {
            // Ngăn chặn hành động mặc định của trình duyệt
            event.preventDefault();

            // Lấy giá trị href của liên kết chỉ mục
            var target = $(this).attr('href');

            // Lấy chiều cao của menu cố định ở đầu trang (nếu có)
            var headerHeight = $('.header-menu-desktop').outerHeight();

            // Lấy vị trí của phần tử được chọn
            var targetPosition = $(target).offset().top;

            // Thêm offset bằng chiều cao của menu cố định
            var offset = targetPosition - headerHeight;

            // Cuộn đến vị trí của phần tử được chọn với offset
            $('html, body').animate({
            scrollTop: offset
            }, 800);
        });
        $(".toc_toggle").click(function() {
            $("#toc_list").slideToggle();
        });
        $("#toggleButton").click(function () {
            $(".box-review").toggleClass("expanded");
            var buttonText = $(".box-review").hasClass("expanded") ? "Thu gọn" : "Xem thêm đánh giá";
            $("#toggleButton").html(buttonText);
        });
        function closeFilterMobile() {
            $('.collection-filter').find('.layered_filter_parent').removeClass('show-filter');	
            setTimeout(function(){ 
                $('.collection-filter').find('.layered_filter_parent').fadeOut();	
                $(".layered_filter_parent .overlays-rgba").remove(); 
            }, 100);
        }
        $(document).on('click', '.heading-box .title-filter', function(e){
			e.preventDefault();
			$(".layered_filter_parent").append('<div class="overlays-rgba"></div>'); 
			$('.collection-filter').find('.layered_filter_parent').fadeIn(100);	
			$('.collection-filter').find('.layered_filter_parent').addClass('show-filter');	
		});	
		$(document).on('click', '.layered_filter_parent .close_filter,.layered_filter_parent .overlays-rgba', function(e){
			e.preventDefault();
			if($('.checkbox-list li.active').length == 0){
				var originSort = $('.sort-by li.active').find('span').data('value');
				$('.checkbox-sortby li').removeClass('active');
				$('.checkbox-sortby li span[data-value="'+ originSort +'"]').parent().addClass('active');
			}
			closeFilterMobile();
		});	
		jQuery('.sort-by li').click(function(){
			hasChangeSort = true;
			if($(this).hasClass('active')){}
			else{
				var defaultSort = $(this).find('span').data('value');
				$('.sort-by li').removeClass('active');
				$('.checkbox-sortby li').removeClass('active');
				$(this).addClass('active');
				$('.checkbox-sortby li span[data-value="'+ defaultSort +'"]').parent().addClass('active');
				Stringfilter();			
			}
		})
		jQuery('.checkbox-sortby li').click(function(){
			if($(this).hasClass('active')){}
			else{
				$('.checkbox-sortby li').removeClass('active');
				$(this).addClass('active');	
			}
		})
		jQuery('.checkbox-list li > input').click(function(){
			jQuery(this).parent().toggleClass('active');	
			if(jQuery(window).width() >= 992) Stringfilter();	
			var indexTitle = jQuery(this).parents('.filter_group').index();
			if (jQuery(this).parents('.filter_group').find('li.active').length > 0 ){
				var textFilter = [];
				jQuery(this).parents('.filter_group').find('li.active').each(function(){
					var textVal = $(this).find('label').html();
					textFilter.push(textVal);
				});
				$('.filter_tags:eq('+indexTitle+') b').html(textFilter.join(',')).parent().addClass('opened');
				if ($('.filter_tags:not(.filter_tags_remove_all).opened').length > 1 ){
					$('.filter_tags_remove_all').addClass('opened');
				}
			}
			else{
				$('.filter_tags:eq('+indexTitle+') b').html('').parent().removeClass('opened');
				$('.filter_tags_remove_all').removeClass('opened');
			}
			
			if($('.checkbox-list li.active').length == 0){
				$('.btn-collection.btn_clear_filter').hide();
			} else {
				$('.btn-collection.btn_clear_filter').show();
			}
		});	
		jQuery('.filter_tags_remove').click(function(){
			$(this).parent().removeClass('opened').find('b').html();
			var indexClick = $(this).parent().index();
			$('.filter_group:eq('+indexClick+') li.active input').prop('checked', false);
			$('.filter_group:eq('+indexClick+') li.active').removeClass('active');
			if($('.filter_tags:not(.filter_tags_remove_all).opened').length == 1){
				$('.filter_tags_remove_all').removeClass('opened');
			}
			if($('.checkbox-list li.active').length == 0){
				LoadOrigin();
				hasChangeSort = false;
			}
			else{
				Stringfilter();
			}
		});
		jQuery('.filter_tags_remove_all').click(function(){
			$('.checkbox-list li.active input').prop('checked', false);
			$('.checkbox-list li.active').removeClass('active');
			$('.filter_tags b').html('').parent().removeClass('opened');
			$('.filter_tags_remove_all').removeClass('opened');
			hasChangeSort = false;
			LoadOrigin();
		});
		jQuery('.btn_clear_filter').on("click",function(){
			$('.checkbox-list li.active input').prop('checked', false);
			$('.checkbox-list li.active').removeClass('active');
			$('.filter_tags b').html('').parent().removeClass('opened');
			$('.filter_tags_remove_all').removeClass('opened');
			$('.btn-collection.btn_clear_filter').hide();
			hasChangeSort = false;
			LoadOrigin();	
		});	
		jQuery('#apply-btn-filter').on("click",function(){	
			if($('.checkbox-list li.active').length == 0){
				var dataSort = $('.checkbox-sortby li.active').find('span').data('value');
				$('.sort-by li span[data-value="'+ dataSort +'"]').trigger('click');
			}else{
				Stringfilter();		
			}
			closeFilterMobile();	
		});
		jQuery('#clear-btn-filter').on("click",function(){
			if($('.checkbox-list li.active').length == 0){
				var originSort = $('.sort-by li.active').find('span').data('value');
				$('.checkbox-sortby li').removeClass('active');
				$('.checkbox-sortby li span[data-value="'+ originSort +'"]').parent().addClass('active');
			}else{
				$('.checkbox-list li.active input').prop('checked', false);
				$('.checkbox-list li.active').removeClass('active');
				$('.filter_tags b').html('').parent().removeClass('opened');
				$('.filter_tags_remove_all').removeClass('opened');
				hasChangeSort = false;
				LoadOrigin();
			}
			closeFilterMobile();	
		});	
    }
    $('.plus-nClick1').click(function(e){
        e.preventDefault();
        $(this).parents('.level0').toggleClass('opened');
        $(this).parents('.level0').children('ul').slideToggle(200);
    });
    $('.plus-nClick2').click(function(e){
        e.preventDefault();
        $(this).parents('.level1').toggleClass('opened');
        $(this).parents('.level1').children('ul').slideToggle(200);
    });
    jQuery('.sidebox-title .htitle').click(function(){
        $(this).parents('.group-sidebox').toggleClass('is-open').find('.sidebox-content-togged').slideToggle('medium');
    }); 
    if ($('.layout-article').length > 0){
        class TableOfContents {
            constructor({ from, to }) {
                this.fromElement = from;
                this.toElement = to;
                this.headingElements = this.fromElement.querySelectorAll("h1, h2, h3,h4,h5,h6");
                this.tocElement = document.createElement("div")
            }
            getMostImportantHeadingLevel() {
                let mostImportantHeadingLevel = 6; // <h6> heading level
                for (let i = 0; i < this.headingElements.length; i++) {
                    let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]);
                    mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ?
                        headingLevel : mostImportantHeadingLevel;
                }
                return mostImportantHeadingLevel;
            }
            static generateId(headingElement) {
                return urlfriendly(headingElement.textContent)
            }
            static getHeadingLevel(headingElement) {
                switch (headingElement.tagName.toLowerCase()) {							
                    case "h2": return 2;
                    case "h3": return 3;
                        break;
                    default: return 4;
                }
            }
            generateTable() {
                let currentLevel = this.getMostImportantHeadingLevel() - 1,
                        currentElement = this.tocElement;
                for (let i = 0; i < this.headingElements.length; i++) {
                    let headingElement = this.headingElements[i],
                            headingLevel = TableOfContents.getHeadingLevel(headingElement),
                            headingLevelDifference = headingLevel - currentLevel,
                            linkElement = document.createElement("a");
                    if (!headingElement.id) {
                        headingElement.id = TableOfContents.generateId(headingElement);
                    }
                    linkElement.href = `#${headingElement.id}`;
                    linkElement.textContent = headingElement.textContent;

                    if (headingLevelDifference > 0) {
                        // Go down the DOM by adding list elements.
                        for (let j = 0; j < headingLevelDifference; j++) {
                            let listElement = document.createElement("ul"),													
                                    listItemElement = document.createElement("li");
                            listElement.appendChild(listItemElement);
                            currentElement.appendChild(listElement);
                            currentElement = listItemElement;
                        }
                        currentElement.appendChild(linkElement);
                    } 
                    else {
                        // Go up the DOM.
                        for (let j = 0; j < -headingLevelDifference; j++) {
                            currentElement = currentElement.parentNode.parentNode;
                        }
                        let listItemElement = document.createElement("li");
                        listItemElement.appendChild(linkElement);
                        currentElement.parentNode.appendChild(listItemElement);
                        currentElement = listItemElement;
                    }
                    currentLevel = headingLevel;
                }
                if(this.tocElement.firstChild != null){
                    this.toElement.appendChild(this.tocElement.firstChild);
                }else{
                    document.getElementById("table-content-container").remove();
                }
            }
        }
        var stringtemplate = $('<div id="table-content-container" class="table-of-contents"><div class="table-title"><div class="htitle">Các nội dung chính<span class="toc_toggle">[<a class="icon-list" href="javascript:void(0)">Ẩn</a>]</span></div></div></div>');
            stringtemplate.insertBefore(".article-table-contents");

            new TableOfContents({
                from: document.querySelector(".article-table-contents"),
                to: document.querySelector("#table-content-container")
            }).generateTable();
            $("#table-content-container .icon-list").click(function(){
                $(this).parents("#table-content-container").find("ul:first").slideToggle({ direction: "left" }, 100);
                var texxx = $(this).text();
                if(texxx == "Ẩn"){
                    $(this).html("Hiện")
                }else{
                    $(this).html("Ẩn")
                }
        })
    }
    $(document).on('click','.mini-cart__quantity .mnc-plus',function(e){
        e.preventDefault();
        var line = $(this).parents('.mini-cart__item').index() + 1;
        var currentQty = parseInt($(this).parents('.mini-cart__item').find('input').val());
        var newQty = currentQty + 1;
        $(this).parents('.mini-cart__item').find('input').val(newQty);
    });

    $(document).on('click','.mini-cart__quantity .mnc-minus',function(e){
        e.preventDefault();
        var line = $(this).parents('.mini-cart__item').index() + 1;
        var currentQty = parseInt($(this).parents('.mini-cart__item').find('input').val());
        if(currentQty > 1){
            var newQty = currentQty - 1;
            $(this).parents('.mini-cart__item').find('input').val(newQty);
        }
    }); 
    if ($('#sliderCouponCart').length > 0){
        $('#sliderCouponCart').owlCarousel({
            items: 1,
            loop: false,
            nav: true,
            dots: false,
            dotsEach: true,
            smartSpeed:1000,
            navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m22.707 11.293-7-7a1 1 0 0 0 -1.414 1.414l5.293 5.293h-17.586a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" data-original="#000000" class=""></path></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m22.707 11.293-7-7a1 1 0 0 0 -1.414 1.414l5.293 5.293h-17.586a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" data-original="#000000" class=""></path></g></svg>'],
            responsive: {
                0: {
                    stagePadding: 20
                },
                768: {
                    items: 2,
                    nav: true,
                    touchDrag: false,
                    mouseDrag: false
                },
                992: {
                    items: 1,
                }
            },
            onChanged: function (event) {
                setTimeout(function(){
                    $('#sliderCouponCart').find('.owl-dots button').each(function(index) {
                        $(this).attr('aria-label', index + 1);
                    });
                }, 400);
            }
        });
    }
    if ($('#layout-cart').length > 0){
        if($('.order-invoice-block .regular-checkbox').is(':checked')){
			$('.bill-field').show();
		}
		$('#cartformpage .regular-checkbox').click(function(){
			if($(this).is(':checked')){
				$(this).siblings('#re-checkbox-bill').val('yes');
			}
			else{
				$(this).siblings('#re-checkbox-bill').val('no');
				$('#cartformpage .val-f').siblings('span.text-danger').remove();
			}
			$('#cartformpage .bill-field').slideToggle(300);  
		});
        $(".check_change").on("change paste keyup", function() {
			jQuery('.btn-save').html("Lưu thông tin");
		});
        $('.order-invoice-block .btn-save').on('click', function(e){
			e.preventDefault();
			$('#cartformpage .val-f').each(function(){
				if($(this).val() === ''){
					if($(this).siblings('span.text-danger').length == 0)
						$(this).after('<span class="text-danger">Bạn không được để trống trường này</span>');
				}
				else{
					$(this).siblings('span.text-danger').remove();
					setTimeout(function(){
						jQuery('.btn-save').html("Đã lưu thông tin");
					}, 500);
				}
				if($(this).hasClass('val-n') && $(this).val().trim().length<10){
					if($(this).siblings('span.text-danger').length == 0)
						$(this).after('<span class="text-danger">Mã số thuế phải tối thiểu 10 ký tự</span>');
				}

				if($(this).hasClass('val-mail') && HRT.All.checkemail($(this).val()) == false){
					if($(this).siblings('span.text-danger').length == 0)
						$(this).after('<span class="text-danger">Email không hợp lệ</span>');
				}

			});
		});
        $(document).on("click","#btnCart-checkout:not(.disabled)",function(e){
			e.preventDefault();
			var updateNote = $('#note').val();
			var total_price = Number($('.summary-total span').html().replace(/\,/g,'').replace('₫',''));	
			var a = $(this);
			
			if(Number(priceMin) <= total_price){
				$('.summary-alert').removeClass('inn').slideUp('200');
				if($('#checkbox-bill').is(':checked')){
					var a = $(this);
					swal({
						title: "Bạn có muốn xuất hóa đơn?",
						text: "Hãy kiểm tra lại thông tin hóa đơn của mình thật chính xác!",
						icon: "warning",
						buttons: ["Không", "Có"],
						className: "swal-cart-checkInvoice"
					}).then(function(){
						$('body').on('click', '.swal-button--confirm', function(){
							var f = true;
							$('#cartformpage .val-f').each(function(){
								if($(this).val() === ''){
									f = false;
									if($(this).siblings('span.text-danger').length == 0)
										$(this).after('<span class="text-danger">Bạn không được để trống trường này</span>');
								}else{
									$(this).siblings('span.text-danger').remove();
								}
								if($(this).hasClass('val-n') && $(this).val().trim().length<10){
									f = false;
									if($(this).siblings('span.text-danger').length == 0)
										$(this).after('<span class="text-danger">Mã số thuế phải tối thiểu 10 ký tự</span>');
								}
								if($(this).hasClass('val-mail') && HRT.All.checkemail($(this).val()) == false){
									if($(this).siblings('span.text-danger').length == 0)
										$(this).after('<span class="text-danger">Email không hợp lệ</span>');
								}

							});

							if(f){

								var company = $('input[name="attributes[bill_order_company]"]').val();
								var address = $('input[name="attributes[bill_order_address]"]').val();
								var tax = $('input[name="attributes[bill_order_tax_code]"]').val();
								var mail = $('input[name="attributes[bill_email]"]').val();
								cartAttributes.invoice = 'yes';
								if(company == '' && cartAttributes.hasOwnProperty('bill_order_company')){
									cartAttributes.bill_order_company = null;
								}
								else{
									cartAttributes.bill_order_company = company;
								}

								if(address == '' && cartAttributes.hasOwnProperty('bill_order_address')){
									cartAttributes.bill_order_address = null;
								}
								else{
									cartAttributes.bill_order_address = address;
								}

								if(tax == '' && cartAttributes.hasOwnProperty('bill_order_tax_code')){
									cartAttributes.bill_order_tax_code = null;
								}
								else{
									cartAttributes.bill_order_tax_code = tax;
								}

								if(mail == '' && cartAttributes.hasOwnProperty('bill_email')){
									cartAttributes.bill_email = null;
								}
								else{
									cartAttributes.bill_email = mail;
								}
							}
							if(!f) return false;
						});
						$('body').on('click', '.swal-button--cancel', function(){
							if(cartAttributes.hasOwnProperty('invoice')) cartAttributes.invoice = "no";
							if(cartAttributes.hasOwnProperty('bill_order_company')) cartAttributes.bill_order_company = null;
							if(cartAttributes.hasOwnProperty('bill_order_address')) cartAttributes.bill_order_address = null;
							if(cartAttributes.hasOwnProperty('bill_order_tax_code')) cartAttributes.bill_order_tax_code = null;
							if(cartAttributes.hasOwnProperty('bill_email')) cartAttributes.bill_email = null;
						});
					});
				}
				else{
					if(cartAttributes.hasOwnProperty('invoice')) cartAttributes.invoice = "no";
					if(cartAttributes.hasOwnProperty('bill_order_company')) cartAttributes.bill_order_company = null;
					if(cartAttributes.hasOwnProperty('bill_order_address')) cartAttributes.bill_order_address = null;
					if(cartAttributes.hasOwnProperty('bill_order_tax_code')) cartAttributes.bill_order_tax_code = null;
					if(cartAttributes.hasOwnProperty('bill_email')) cartAttributes.bill_email = null;
				}
			}
			else{
				$('.summary-alert').addClass('inn').slideDown('200');
			}
		});
    }
});
