jQuery(document).ready(function ($) {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		jQuery('body').addClass('rise-mobile-device');
	}

  /* intro text slider initialize
	=========================*/
	$('.intro-text-slider').flexslider({
		animation: "fade",
		slideshow: true,
		controlNav: false,
		directionNav: false, 
		easing: "easeOutExpo",
/*		slideshowSpeed: 2000        original value from template */
		slideshowSpeed: 3500 
		
	});
	
	/* testimonial initialize
	=========================*/
	$('.testimonials').flexslider({
		animation: "slide",
		slideshow: false
	});
	
	$('.flexslider').flexslider({
    animationLoop: true,
    pauseOnAction: true,
    pauseOnHover: true,
    smoothHeight: false,
    directionNav: true,
    controlNav: true,
    animation: "slide"
  });
  
  /* smooth linking
	=========================*/
	$('.target').on(Gumby.click, function() {
	 var href = $(this).attr("href"),
	 topMenu = $(".navigation"),
		topMenuHeight = topMenu.outerHeight()+15,
		  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 800, 'easeOutExpo');
	  e.preventDefault();
	});
  
	/* stat counter
	=========================*/
	if (matchMedia('only screen and (min-width: 769px)').matches) {
	$('.stat-counter').appear(function() {
			$('.stat-counter').each(function(){
				dataperc = $(this).attr('data-perc'),
				$(this).find('.count').delay(5000).countTo({
				from: 0,
				to: dataperc,
				speed: 2000,
				refreshInterval: 100
			});
		 });
		 });
	}	 	
	if (matchMedia('only screen and (max-width: 768px)').matches) {
	$('.stat-counter').each(function(){
				dataperc = $(this).attr('data-perc'),
				$(this).find('.count').delay(5000).countTo({
				from: 0,
				to: dataperc,
				speed: 2000,
				refreshInterval: 100
			});
	});
	}

	// Gumby is ready to go
	Gumby.ready(function() {
	Gumby.log('Gumby is ready to go...', Gumby.dump());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();

	}
	
	// Oldie document loaded
	}).oldie(function() {
		Gumby.warn("This is an oldie browser...");
	
	// Touch devices loaded
	}).touch(function() {
		Gumby.log("This is a touch enabled device...");
		
	});

	// Document ready
	$(function() {
	
	// skip link and toggle on one element
	// when the skip link completes, trigger the switch
	$('#skip-switch').on('gumby.onComplete', function() {
		$(this).trigger('gumby.trigger');

	});


/* Nav clicks
===================== */

$('.nav-button a').on(Gumby.click,function(){
  
  $('.nav-button').toggleClass('rotate');

  $('ul.navigation').toggleClass('active');

});

if (matchMedia('only screen and (max-width: 768px)').matches) {
$('.navigation li a').on(Gumby.click,function(){

  $('.nav-button').toggleClass('rotate');

  $('ul.navigation').toggleClass('active');

});

}

/* Modal clicks
===================== */

$('.modal-button a').on(Gumby.click, function() {

  $('body').addClass('overflow');

});

$('.modal .switch').on(Gumby.click, function() {

  $('body').removeClass('overflow');

});


});

/* Navigation
======================== */
jQuery(window).load(function(){
        
  jQuery('.navigation a[href^="#"], a.target').click(function(){
  
  	var thisHref = jQuery(this).attr('href');
  	var outerHeight = jQuery('header').outerHeight() - 20;
  	var offsetTop = jQuery(thisHref).offset().top - outerHeight;
  	
  	jQuery('html, body').stop().animate({ 
  		  scrollTop: offsetTop
  	}, 800, 'easeOutExpo');
  	
  	return false;
  });
  
// Cache selectors
var lastId,
    topMenu = jQuery(".navigation"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find('a[href^="#"]'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = jQuery(jQuery(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
jQuery(window).scroll(function(){
   // Get container scroll position
   var fromTop = jQuery(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if (jQuery(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});



  /* portfolio filters
	=========================*/
	$(function() {
	 // cache container
	var $container = $('#projects.grid');


	// initialize isotope
	$container.isotope();
	$container.isotope('reLayout');
	// filter items when filter link is clicked
	$('#filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});
	var $optionSets = $('#options .option-set'),
			  $optionLinks = $optionSets.find('a');
		  $optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
	 });
	});
});
//6.7开始加入
// 获取元素 点击出现支付页面
var htmlzong = document.querySelector('html');
var planbtn1 = document.querySelectorAll('.plan-btn1');
console.log(planbtn1);
var buythingxia = document.querySelector('.buythingxia');
var closepricehou = document.querySelector('.closepricehou');
var touming = document.querySelector('#touming');
var planbtnarr = ['标准版', '专业版', '企业版']; //版本数组，点击哪个，出现哪个价格版本
var pricearr = [49, 199, 399]; //价格数组，点击哪个，出现哪个价格版本
var pricearr2 = [499, 1999, 3999]; //价格数组，点击哪个，出现哪个价格版本
var freeuser = document.querySelector('.free-user');
var price1 = document.querySelector('.price1');
var priceyear = document.querySelector('.priceyear');
var titleplan = document.querySelector('.titleplan');
var amountprice = document.querySelector('.amountprice');
var amountpriceb = document.querySelector('.amountprice-b');
var amountpricec = document.querySelector('.amountprice-c');
var amountpricejia = document.querySelector('.amountprice-jia');
var amountpricejian = document.querySelector('.amountprice-jian');
//点击出现支付二维码
var threepay = document.querySelectorAll('.gd-fixed-btn-group>a');
var paystyle = document.querySelectorAll('.pay-style');
var closepricehouma = document.querySelectorAll('.closepricehouma');
var message1 = document.querySelectorAll('.message1');
var message1nei = ['支付宝扫码', '微信扫码', '银行转账'];
var times=1;


//input中的时长金额是否是数字
function testpatterns(){
	//大于等于正整数
		var patterns= /^[1-9]\d*$/;
		var result=patterns.test(amountpricec.value);
		if(!result){
			alert('请输入正确的数字');
			amountpricec.value=1;
		}else{
			 times=amountpricec.value;
		}
	}
function zhifude(){
	for (i = 0; i < planbtn1.length; i++) {
	    planbtn1[i].onclick = function() {
	    	times=1;
	        for (i = 0; i < planbtn1.length; i++) {
	        	var a=$(this).index();
	        	console.log(a+'值是')
	            planbtn1[i].index = i; //给对象给一个自定义属性
	            // 点击版本按钮事件
	            buythingxia.style.display = 'block';
	            freeuser.innerHTML = '当前套餐：' + planbtnarr[this.index];
	            titleplan.innerHTML = planbtnarr[this.index] + '套餐';
	            price1.innerHTML = pricearr[this.index];
	            //按照年进行显示金额
	                priceyear.innerHTML = pricearr2[this.index];
	                //标准版套餐价格
	            amountprice.innerHTML = '￥' + pricearr[this.index]*times + '.00';
	            //还需支付价格
	            // if()
	            amountpriceb.innerHTML = '￥' + pricearr[this.index] *times+ '.00';
	            touming.style.display = 'block';
	             console.log(closepricehou);
	              bianseaa=0;
					 closepricehou.onclick = function() {
		                buythingxia.style.display = 'none';
		                touming.style.display = 'none';
		                touming.style.overflow = 'hidden';
		                htmlzong.style.overflow = 'auto';
		                console.log('buhao');
		                times=1;
		           		 }
		           		amountpricec.value=times;
		           		amountpricec.onblur=function(){
		           		   times=amountpricec.value;
		                  testpatterns();
		                  // amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
				                if(bianseaa==0){
			                    		amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
			                    }
			                    else{
			                    	amountpriceb.innerHTML = '￥' + pricearr2[pricearrjieshou] *times+ '.00';
			                    }
	                     }
		           		amountpricec.onchange=function(){
		                  times=amountpricec.value;
		                  amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
	                     }
		           	amountpricejia.onclick=function(){
		           		times++;
		           		amountpricec.value=times;
		           		  //还需支付价格
	                    // amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
	                    if(bianseaa==0){
	                    		amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
	                    }
	                    else{
	                    	amountpriceb.innerHTML = '￥' + pricearr2[pricearrjieshou] *times+ '.00';
	                    }
		           	} 
		           	amountpricejian.onclick=function(){
		           		if(times<=1){
		           			times=1;
		           		}else{
		           		 times--;
		           		}
		           		amountpricec.value=times;
		           		  //还需支付价格
	           			 if(bianseaa==0){
	                    		amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
	                    }
	                    else{
	                    	amountpriceb.innerHTML = '￥' + pricearr2[pricearrjieshou] *times+ '.00';
	                    }
		           	} 
	        }
	        var pricearrjieshou = this.index;
	        //支付码的页面金额
	        if (pricearrjieshou == 0) {
	             fukuan(pricearr,0);
	            bianse(paychoice,0);
	             console.log('1111');
	        } else if (pricearrjieshou == 1) {
	             fukuan(pricearr,1);
	            bianse(paychoice,1);
	             console.log('222');
	            // console.log('ling2');
	        }
	        else if (pricearrjieshou == 2) {
	            // console.log('ling2');
	            fukuan(pricearr,2);
	            bianse(paychoice,2);
	             console.log('333');
	        }
	        // message1[this.order].innerHTML='jj';
	        // console.log(this.index);
	        htmlzong.style.overflow = 'hidden';
	        touming.style.overflow = 'auto';
	    }
	}
}
zhifude();
//付款页面的函数
 function fukuan(pricearrbian,pricearrjieshou) {
            for (i = 0; i < threepay.length; i++) {
                threepay[i].order = i; //给对象给一个自定义属性
                threepay[i].onclick = function() {
                    touming.style.overflow = 'hidden';
                    htmlzong.style.overflow = 'hidden';
                    buythingxia.style.display = 'none';
                    paystyle[this.order].style.display = 'block';
                    if (paystyle[this.order].style.display == 'block') {
                        closepricehouma[this.order].onclick = function() {
                            paystyle[0].style.display = 'none';
                            paystyle[1].style.display = 'none';
                            paystyle[2].style.display = 'none';
                            touming.style.display = 'none';
                            touming.style.overflow = 'hidden';
                            htmlzong.style.overflow = 'auto';
                        }
                    }
                    message1[this.order].innerHTML = message1nei[this.order] + '支付' + pricearrbian[pricearrjieshou]*amountpricec.value + '元';
                    console.log(message1[this.order].innerHTML);
                }
            }
        }
//获取按照年收费的样式事件元素
var paychoice = document.querySelectorAll('.pay-choice');
var alertwarning = document.querySelectorAll('.alert-warning');
console.log(paychoice);
var bianseaa=0;
//原生js切换样式 并且切换年和月的版本
function bianse(enement,pricearrjieshou){

                        for(i = 0; i < enement.length; i++){
                                //点击实现月和年的背景颜色切换
                                // enement[0].style.color='white';
                                enement[i].className='pay-choice pay-choice1';
                                enement[0].className='pay-choice pay-choiceact';
                                enement[i].index = i; //给对象给一个自定义属性
                                enement[i].onclick=function(){
                                	bianseaa=this.index;
                                	times=1;
                                	amountpricec.value=times;
                                	amountpricec.onblur=function(){
                                	times=amountpricec.value;
		                              testpatterns();
		                                //还需支付价格
		                                if(bianseaa==0){
			                    		amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
					                    }
					                    else{
					                    	amountpriceb.innerHTML = '￥' + pricearr2[pricearrjieshou] *times+ '.00';
					                    }
	                             // amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
	                                 }
                                	amountpricec.onchange=function(){
		                                     times=amountpricec.value;
		                                       //还需支付价格
		                          amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] *times+ '.00';
	                                    }
                                for(i = 0; i < enement.length; i++){
                                enement[i].className='pay-choice pay-choice1';
                                        console.log(i);
                                        }
                                        if(bianseaa==0){
                                        	// console.log('text'+this.index);
                                                amountprice.innerHTML = '￥' + pricearr[pricearrjieshou] + '.00';
                                        amountpriceb.innerHTML = '￥' + pricearr[pricearrjieshou] + '.00';
                                        fukuan(pricearr,pricearrjieshou);
                                        }
                                        else if(bianseaa==1){
                                        	console.log('text'+this.index);
                                                amountprice.innerHTML = '￥' + pricearr2[pricearrjieshou] + '.00';
                                        amountpriceb.innerHTML = '￥' + pricearr2[pricearrjieshou]+ '.00';
                                                fukuan(pricearr2,pricearrjieshou);
                                        }
                                    enement[this.index].className='pay-choice pay-choiceact';
                                    console.log('月份变化时候的值'+this.index);
                        }
                }
 }
//点击退出
	var htmlzong = document.querySelector('html');//html元素
		 		htmlzong.onclick=function(){
						  $('#login-out-user').hide();
						  $('#login-out-user1').hide();
				}
						  
			        	$('.caret').click(function(event){
			        		$('#login-out-user').toggle();
			        		$('#login-out-user1').toggle();
			        	 event.stopPropagation();//阻止冒泡事件
			        	})
			        	// $('.user-name').click(function(event){
			        	// 	$('#login-out-user').toggle();
			        	// 	$('#login-out-user1').toggle();
			        	//  event.stopPropagation();//阻止冒泡事件
			        	// })
			        	$('.user-photo').click(function(event){
			        		$('#login-out-user').toggle();
			        		$('#login-out-user1').toggle();
			        	 event.stopPropagation();//阻止冒泡事件
			        	})
//退出结束
//6.6实现兑换码切换开始
		$('.dropdown-menu,.activate-coupon-form').hide();
		$('.dropdown-toggle').click(function(){
			$('.dropdown-menu').toggle();
			// $('.activate-coupon-form').hide();
		})
		$('.dropdown-menu-no').click(function(){
			$('.dropdown-toggle .selected-coupon').text('暂不使用优惠券');
			$('.dropdown-menu,.activate-coupon-form').hide();
		})
		$('.dropdown-menu-yes').click(function(){
			$('.activate-coupon-form').show();
			$('.dropdown-toggle .selected-coupon').text('我有兑换码需要激活');
			$('.dropdown-menu').hide();
		})
//6.6实现兑换码切换结束
//6.19日上传改进版开始 实现上传头像开始
//点击编辑 生成图片页出现
// var bianji= document.querySelector('.bianji');
//6.19日上传改进版开始 实现上传头像开始
$('.bianji').click(function(){
 // bianji.click(function(){
	$('#touming,.buythingxia').show();
	 htmlzong.style.overflow = 'hidden';
	 $('.js_showBox').hide();
	 $('.choosephoto-p').show();
	 $(".choosephoto-file span").text('选择照片');
	 //用一个变量表示这个input type:file
	 var filesss='<input class="js_upFile" type="file" name="cover" id="upload_avatar">'
	 //每次都新生成这个file 这样是为了解决change事件不触发的
	 $('.choosephoto-file').prepend(filesss);
	 //阻止表单提交
		var changeavatar= document.querySelector('#change_avatar');
		changeavatar.onclick=function(){
			return false;
		}
	 //点击X号关闭按钮
	$('.closephoto').click(function(){
				$('#touming,.buythingxia').hide();
				htmlzong.style.overflow = 'auto';
				$('.modal-header1 input').attr('class','modal-header1-inp1');
				changeavatar.onclick=function(){
			      return false;
		         }
		        $('.choosephoto-file input').remove();
	});
	$(".js_upFile").uploadView({
	    uploadBox: '.js_uploadBox',//设置上传框容器
	    showBox : '.js_showBox',//设置显示预览图片的容器
	    width : 100, //预览图片的宽度，单位px
	    height : 100, //预览图片的高度，单位px
	    allowType: ["gif", "jpeg", "jpg", "bmp", "png"], //允许上传图片的类型
	    maxSize :2, //允许上传图片的最大尺寸，单位M
	    success:function(e){
	        $(".choosephoto-file span").text('更改图片');
	         //alert('图片上传成功');
	    }
      });
	 //图片的file改变的时候触发的事件
      $('#upload_avatar').change(function(){
			$('.choosephoto-p').hide();
			changeavatar.onclick=null;
			$('.modal-header1 input').attr('class','modal-header1-inp2 ');
			// $('.js_showBox').show();
	  })
  });
//6.19日上传改进版开始 实现上传头像结束
//6.21没有刷新跳转开始
// 1.定义模块
		/*angular.module('App', ['ngRoute'])
		// 2.定义路由
		.config(function($routeProvider) {
		    $routeProvider
		        .when('/', {
		            templateUrl: "./tpl1.html"
		        })
		        .when('/see', {
		            templateUrl: "./tpl1.html"
		        })
		        .when('/shezhi', {
		            templateUrl: "./tpl2.html"
		        })
		        .otherwise({
		            redirectTo: "/"
		        })
		})*/
//没有刷新跳转结束
//6.22开始切换账户预览和设置
			$('.yonghusee').click(function(){
				$('.yonghusee').children('a').attr('id','');
				$(this).children('a').attr('id','zhang1');
			})
			// $('.yonghusee1').click(function(){
			// 	$.get('tpl1.html',function(data){
			// 		$('.tabs-rightzong').empty();
			//       $('.tabs-rightzong').append(data);
			// 	console.log('tpl1执行');
			//      })
			// })
			// $('.yonghusee2').click(function(){
			// 	$.get('tpl2.html',function(data){
			// 	 $('.tabs-rightzong').empty();
			//       $('.tabs-rightzong').append(data);
			//       console.log('tpl2执行');
			//      })
			// })
		//6.24加入没有刷新跳转开始 
			$('.yonghusee1').click(function(){
					$('.tabs-rightzongnei').show();
			      $('.tabs-rightzongnei2').hide();
			})
			$('.yonghusee2').click(function(){
			      $('.tabs-rightzongnei').hide();
				$('.tabs-rightzongnei2').show();
			})
			//tpl2控制开始
			$(".closephoto2").click(function(){
               $('#touming2').hide();
               $('#oldpassword,#password1,#password2').val('');
               $('.errtishi').css({'display':'none'});
            })
            //6.26日
            // $(".gai-email").click(function(){
            //     $("#touming2").show();
            //     $(".buythingxia2tong").css({"display":"none"});
            //     $(".buythingxia2-a").css({"display":"block"});
            // })
           /*$(".gai-mima").click(function(){
                $("#touming2").show();
                $(".buythingxia2tong").css({"display":"none"});
                $(".buythingxia2-b").css({"display":"block"});
            })
            $(".gai-name").click(function(){
                $("#touming2").show();
                $(".buythingxia2tong").css({"display":"none"});
                $(".buythingxia2-c").css({"display":"block"});
            });
            //更改电话
             $(".gai-phone").click(function(){
		                $("#touming2").show();
		                $(".buythingxia2tong").css({"display":"none"});
		                $(".buythingxia2-d").css({"display":"block"});
		                $('.errtishi').css({'display':'none'});
		                var phonenumsub= document.querySelector('.phonenumsub');
		                phonenumsub.onclick=function(){
								 $('.errtishi').css({'display':'block','color':'red'});
								 //电话正则
								 if(!(/^1(3|4|5|7|8)\d{9}$/.test($('.new-phone').val()))){ 
									    //阻止表单提交
									 	 $('.errtishi').css({'display':'block','color':'red'});
											return false;
								         } 
									else{
										 $('.errtishi').css({'display':'none'});
										phonenumsub.onclick=null;
									}
					             }
			           $('.new-phone').change(function(){
						    if(!(/^1(3|4|5|7|8)\d{9}$/.test($('.new-phone').val()))){ 
							    //阻止表单提交
							 phonenumsub.onclick=function(){
							 	 $('.errtishi').css({'display':'block','color':'red'});
									return false;
						         } 
							}
							else{
								phonenumsub.onclick=null;
							}
			           }) 
			      $('.new-phone').focus(function(){
							$('.errtishi').css({'display':'none'});
						})
            })
             //更改qq
            $(".gai-qq").click(function(){
                $("#touming2").show();
                $(".buythingxia2tong").css({"display":"none"});
                $(".buythingxia2-e").css({"display":"block"});
                 $('.errtishi').css({'display':'none'});
                // var newqq= document.querySelector('.new-qq');
                var qqsub= document.querySelector('.qqsub');
                qqsub.onclick=function(){
                	$('.errtishi').css({'display':'block','color':'red'});
	                if(!(/^\d{5,10}$/.test($('.new-qq').val()))){
	                	 $('.errtishi').css({'display':'block','color':'red'});
	                	return false;	
	                }
	                else{
						$('.errtishi').css({'display':'none'});
						qqsub.onclick=null;
							}
                }
                 $('.new-qq').change(function(){
                 			//^表示不匹配。d表示任意数字，{5,10}表示长度为5到10。  
						    if(!(/^\d{5,10}$/.test($('.new-qq').val()))){ 
							    //阻止表单提交
							 qqsub.onclick=function(){
							 	 $('.errtishi').css({'display':'block','color':'red'});
									return false;
						         console.log('aaaa');
						         } 
							}
							else{
								console.log('bbb');
								qqsub.onclick=null;
							}
			           })
			      $('.new-qq').focus(function(){
							$('.errtishi').css({'display':'none'});
						}) 
            })*/
			//6.26日结束
			//6.27
			//密码修改
			$(".gai-mima").click(function(){
                $("#touming2").show();
                $(".buythingxia2-c").css({"display":"none"});
                $(".buythingxia2-b").css({"display":"block"});
      //           var subemail= document.querySelector('.subemail');
      //              subemail.onclick=function(){
						// 		 $('.errtishi').css({'display':'block','color':'red'});
						// 		// 			正则表达式 ^[a-zA-Z]\w{5,17}$
		    //                      // 匹配长度在6~20之间的字母、数字
						// 		 if(!(/^[A-Za-z0-9]{6,20}$/.test($('.xinmima').val()))){ 
						// 			    //阻止表单提交
						// 			 	 $('.errtishi').css({'display':'block','color':'red'});
						// 					return false;
						// 					console.log('a');
						// 		         } 
						// 			else{
						// 				 $('.errtishi').css({'display':'none'});
						// 				 if($('.xinmima').val()==$('.surexinmima').val()){
						// 				   subemail.onclick=null;
						// 				   console.log('b');
						// 				 }
						// 				 else{
						// 				 	$('.errtishi3').text('两次输入不一致');
						// 				 	console.log('c');
						// 				 }
						// 			}
						// 			console.log('qqq');
					 //             }
				  // $('.xinmima,.surexinmima').change(function(){
						//     if(!(/^[A-Za-z0-9]{6,20}$/.test($('.xinmima').val()))){ 
						// 	    //阻止表单提交
						// 	 subemail.onclick=function(){
						// 	 	 $('.errtishi').css({'display':'block','color':'red'});
						// 			console.log('d');
						// 			return false;
						//          } 
						// 	}
						// 	else{
						// 		console.log($('.xinmima').val());
						// 	    console.log($('.surexinmima').val());
						// 		if(!($('.xinmima').val()==$('.surexinmima').val())){
						// 				   $('.errtishi3').text('两次输入不一致');
						// 				   subemail.onclick=function(){
						// 		 	           $('.errtishi').css({'display':'block','color':'red'});
						// 				       console.log('e');
						// 				       return false;
						//                    } 
						// 		 }
						// 		 else{
						// 				  subemail.onclick=null;
						// 				  console.log('f');
						// 				 }
						// 	}
			   //         }) 
			   //    $('.xinmima,.surexinmima').focus(function(){
						// 	$('.errtishi').css({'display':'none'});
						// })
					/*修改密码是比较简单的功能，要求如下：
						1、原密码必须输入正确，才可以修改密码
						2、新密码需在6-18位之间
						3、第二次输入的新密码必须与第一次相同。
						4、前三个条件同时满足的时，修改密码才能成功，否则显示错误提示信息。
						5、错误提示信息和验证信息全部使用ajax提交、响应
						效果图如下 （4）修改成功之后显示提示信息，2秒后自动消失*/
		//6.30加入开始
		    $(document).ready(function(){                
		        $("#oldpassword").blur(function(){
		                var param=$("#oldpassword").val();
		                $.ajax({
		                    type: "POST",
		                    url:"checkoldpassword.json",
		                    data:{oldpassword:param},                 
		                    success:function(e){
		                        if(e=='True'){                            
		                             $("#tip1").html("<font color=\"green\" size=\"2\">  对的</font>");
		                        } 
		                        else{                                 
		                            $("#tip1").html("<font color=\"red\" size=\"2\"> 错的 </font>");
		                        }
		                    }                 
		                });
		           });
		          $("#password1").blur(function(){
		              var num=$("#password1").val().length;
		              if(num<6){
		                   $("#tip2").html("<font color=\"red\" size=\"2\">  密码太短</font>");                
		              }
		              else if(num>20){
		                   $("#tip2").html("<font color=\"red\" size=\"2\">  密码太长</font>");                 
		              }
		              else{
		              	  if((/^[A-Za-z0-9]{6,20}$/.test($('#password1').val()))){
		                   $("#tip2").html("<font color=\"green\" size=\"2\"> 接受</font>");                
		              	  }else{
		              	  	$("#tip2").html("<font color=\"green\" size=\"2\"> 输入错误，只能是数字、字母</font>");
		              	  }
		              }
		          }) ;
		          $("#password2").blur(function(){
		              var tmp=$("#password1").val();
		              var num=$("#password2").val().length;
		              if($("#password2").val()!=tmp){
		                  $("#tip3").html("<font color=\"red\" size=\"2\">  两次输入不一致</font>");                 
		              }
		              else{
		                  if(num>=6&&num<=18){
		                      $("#tip3").html("<font color=\"green\" size=\"2\">输入正确</font>");                    
		                  }                 
		                  else{
		                      $("#tip3").html("<font color=\"red\" size=\"2\">  输入无效</font>");                           
		                  }                
		              }
		          });
		          $("#btn").click(function(){
		                  var flag=true;
		                  var old=$("#oldpassword").val();
		                  var pass=$("#password1").val();
		                  var pass2=$("#password2").val();
		                  var num1=$("#password1").val().length;
		                  var num2=$("#password2").val().length;
		                  if(num1!=num2||num1<6||num2<6||num1>18||num2>18||pass!=pass2){
		                      flag=false;
		                  }
		                  else{
		                      flag=true;
		                  }
		                  if(flag){                   
		                  $.ajax({
		                      type: "POST",
		                      url:"/changepassword/",
		                      data:{oldpassword:old,password:pass},
		                      success:function(e){                         
		                          if(e=='True'){
		                              $("#tip4").show().html("<font color=\"green\" size=\"3\">  修改密码成功!</font>");
		                              $("#oldpassword").val("");
		                              $("#password1").val("");
		                              $("#password2").val("");
		                              $("#tip1").empty();
		                              $("#tip2").empty();
		                              $("#tip3").empty();
		                              $("#tip4").delay(2000).hide(0);   
		                              $("#touming2").delay(4000).hide(0);    
		                          }
		                          else{
		                              $("#tip4").show().html("<font color=\"red\" size=\"3\">  原密码填写有误</font>");
		                          }                                     
		                         }
		                   });
		                }
		              else{
		                  
		                  $("#tip4").show().html("<font color=\"red\" size=\"3\">  请遵循提示!</font>");
		                 }
		              });                  
		        });
            })
			//6.30加入结束
            //其他的总体修改
			$('.titlea1').click(function(){
					$("#touming2").show();
					// $(".buythingxia2tong").css({"display":"none"});
					$(".buythingxia2-c").css({"display":"block"});
					$(".buythingxia2-b").css({"display":"none"});
					var suball= document.querySelector('.suball');
					//6.28号昵称改变时
					$('.new-name').change(function(){
									     if(!($('.new-name').val=='')){
									    	$('.errtishi').css({'display':'none'});
									    	suball.onclick=null;
									      }
									      console.log($('.new-name').val());
									      console.log(111);
									    })
					//6.28号昵称改变结束
		                suball.onclick=function(){
								 $('.errtishi').css({'display':'block','color':'red'});
								 //电话正则 
								 //^表示不匹配。d表示任意数字，{5,10}表示长度为5到10
								 if(!(/^1(3|4|5|7|8)\d{9}$/.test($('.new-phone').val()))||
								 	!(/^\d{5,10}$/.test($('.new-qq').val()))){ 
									    //阻止表单提交
									 	 $('.errtishi').css({'display':'block','color':'red'});
											return false;
								         } 
									else{
										 $('.errtishi').css({'display':'none'});
										suball.onclick=null;
									}
					             }
			           $('.new-phone,.new-qq').change(function(){
						    if(!(/^1(3|4|5|7|8)\d{9}$/.test($('.new-phone').val()))||
								 	!(/^\d{5,10}$/.test($('.new-qq').val()))){ 
							    //阻止表单提交
							    if(($('.new-phone').val()=='')&&(/^\d{5,10}$/.test($('.new-qq').val()))){
							    	suball.onclick=null;
							    }
							    else if(($('.new-qq').val()=='')&&(/^1(3|4|5|7|8)\d{9}$/.test($('.new-phone').val()))){
							    	suball.onclick=null;
							    }
							    else{
									 suball.onclick=function(){
									 	 $('.errtishi').css({'display':'block','color':'red'});
											return false;
								         } 
							     }
							}
							else{
								suball.onclick=null;
							}
			           }) 
			      $('.new-phone,.new-qq').focus(function(){
							$('.errtishi').css({'display':'none'});
						})
			})
		// 			正则表达式 ^[a-zA-Z]\w{5,17}$
		// 匹配 以字母开头，长度在6~18之间，只能包含字符、数字和下划线
 });
