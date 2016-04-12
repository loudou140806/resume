$(function(){
	$.ajax({
		type: "GET",
		url: "ajax/message.json",
		dataType: "json",
		success: function(data){
			for(var i in data.about_info){
				$("#about_info").append("<p>"+data.about_info[i]+"</p>");
			}
			$("#skill_info").append("<p>"+data.skill_info+"</p>");
			$(".skill_int").append("<ul></ul>");
			for(var i in data.html){
				$("#skill_int2 ul").append("<li>"+data.html[i]+"</li>");
			}
			for(var i in data.css){
				$("#skill_int3 ul").append("<li>"+data.css[i]+"</li>");
			}
			for(var i in data.javaScript){
				$("#skill_int4 ul").append("<li>"+data.javaScript[i]+"</li>");
			}
			$("#exp_info").append("<p>"+data.exp_info+"</p>");
			for(var i in data.contact_info){
				$("#contact_info").append("<p>"+data.contact_info[i]+"</p>");	
			}
		}
	});
    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5"],
		verticalCentered: false,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"100px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.3"});
				//首页文字info_1-info_6
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$(this).next().fadeIn(450,function(){
											$("aside").fadeIn(300);
										});
									});
								});
							});
						});
					});
				});
			});	
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		},
		afterLoad: function(anchorLink,index){
			//page1动画
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			//page2动画
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				//关于我下方的文字
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},700);
							});
						});
					});
				});	
			}
			//page3动画
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			//page4动画
			if(index==4){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				});
			}
			//page5动画
			if(index==5){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$("#contact_head1").addClass("b_to_t");
				$("#contact_head2 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
					   $this.addClass("fade_in");
					   },200*i);
					}
				});
				var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
			}
		},
		onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
});
//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("Frank");
		$("#header_p2").html("个人简历");	
	});
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	});
// 头像切换
	$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});
// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});
// 点击留言
	$("#contact_message1").click(function(){
		$(this).fadeOut(200,function(){
			$("#contact_form").fadeIn(200);
		});
	});
// 提交表单
	$("#contact_submit").click(function(){
		$.get("ajax/get.php",function(){
			$("#contact_form").fadeOut(200,function(){
				$("#contact_message2").fadeIn(200);
				});
			});
	});
//内容适应居中
	var size=$(function(){
		$("aside").css({"top":($(".active").height()-$("aside").height())/2});
		$("#home_content").css({"padding-top":($(".active").height()-$("#home_content").height())/6});
		$("#about_content").css({"padding-top":($(".active").height()-$("#about_content").height())/6});
		$("#skill_content").css({"padding-top":($(".active").height()-$("#skill_content").height())/6});
		$("#exp_content").css({"padding-top":($(".active").height()-$("#exp_content").height())/6});
		$("#demo_content").css({"padding-top":($(".active").height()-$("#demo_content").height())/6});
	});
	$(window).resize(function(){
		size();
	});