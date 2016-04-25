$(function(){
    $.ajax({
        type: "GET",
        url: "ajax/data.json",
        dataType: 'json',
        success: function(data){
            for(var i in data.home_info) {
                $("#home_info_p").append("<p>"+ data.home_info[i] +"</p>");
            }
            for(i in data.about){
                $('#about_info').append("<p>"+data.about[i]+"</p>");
            }
            $('#skill_content').append("<p>"+data.skill.content+"</p>");
            for(i in data.skill.html){
                $('#skill_html').append("<li>"+data.skill.html[i]+"</li>");
            }
            for(i in data.skill.css){
                $('#skill_css').append("<li>"+data.skill.css[i]+"</li>");
            }
            for(i in data.skill.javascript){
                $('#skill_js').append("<li>"+data.skill.javascript[i]+"</li>");
            }
            for(i in data.contact){
                $('#contact_info').append("<p>"+data.contact[i]+"</p>");
            }
        }
    });
    // console.log(navigator.userAgent);
    $.fn.extend({
        animateCss: function(animationName, time, fn){
            var $this = $(this);
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function(){
                if(fn){
                    setTimeout(fn, time);
                }
                // $(this).removeClass('animated ' + animationName);
            });
            return $this;
        }
    });
    $('#fullPage').fullpage({
    	//内容是否垂直居中
        'verticalCentered': false,
        //滚动时间
        'scrollingSpeed': 600,
        //是否使用transform滚动
        'css3': true,
        //字体是否随窗口缩放而缩放
        'resize': false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        afterRender: function(){
            $("aside a").first().addClass('select');
        	$('#home').css('display', 'block');
        	$('.section').eq(0).addClass('zoom_home');
        	$("aside").css({"top":($(".active").height()-$("aside").height())/2});
        	$('#home_title').css({'margin-top':'100px'});
        	$('#home_info h2').fadeIn(450, function(){
        		$('#home_info_p').animate({'width': '800px'}, 700, function(){
        			$('#home_info_p p').first().fadeIn(450, function(){
        				$(this).next().fadeIn(450, function(){
        					$(this).next().fadeIn(450, function(){
        						$(this).next().fadeIn(450, function(){
        							$(this).next().fadeIn(450);
        						});
        					});
        				});
        			});
        		});
        	});
        },
        afterLoad: function(anchors, index){
            $("aside").find('a').eq(index - 1).addClass('select').siblings().removeClass('select');
        	if(index == 2) {
                var $pics = $('#about .pic');
                $('#about').fadeIn(700);
                $('#about h1').animateCss('bounceInLeft');
                $('#about .bottom_line').animateCss('rubberBand');
                $('#about h2').animateCss('bounceInRight');
                var i = -1;
                $pics.each(function(){
                    var $this = $(this);
                    i++;
                    setTimeout(function(){
                        $this.animateCss('zoomIn');
                    }, 200*i);
                });
                setTimeout(function(){
                    $('#about_info').fadeIn(700);
                    $('#about_info:before').animateCss('bounceInLeft');
                    $('#about_info:after').animateCss('bounceInRight');
                    $('#about_info p:odd').each(function(){
                        var $this = $(this);
                        $this.animateCss('bounceInLeft');
                    });
                    $('#about_info p:even').each(function(){
                        var $this = $(this);
                        $this.animateCss('bounceInRight');
                    });
                }, 800);
        	}
            if(index == 3){
                $('#skill').fadeIn(700);
                $('#skill h1').animateCss('bounceInLeft');
                $('#skill .bottom_line').animateCss('rubberBand');
                $('#skill h2').animateCss('bounceInRight');
                $('#skill_content').fadeIn(450, function(){
                    $('#skill_info_html').fadeIn(450, function(){
                        $('#skill_info_css').fadeIn(450, function(){
                            $('#skill_info_js').fadeIn(450);
                        });
                    });
                });
            }
            if(index == 4){
                $('#work').fadeIn(700);
                $('#work h1').animateCss('bounceInLeft');
                $('#work .bottom_line').animateCss('rubberBand');
                $('#work h2').animateCss('bounceInRight');
                var j = -1;
                $('.demo_item').each(function(){
                    var $this = $(this);
                    j++;
                    setTimeout(function(){
                        $this.addClass('bottom_to_top');
                    }, 200*j);
                });
            }
            if(index == 5){
                $('#contact').fadeIn(700);
                $ch = $('#contact_content .ch span');
                $en =  $('#contact_content .en span');
                $info_p = $('#contact_info p');
                $('#contact h1').animateCss('bounceInLeft');
                $('#contact .bottom_line').animateCss('rubberBand');
                $('#contact h2').animateCss('bounceInRight');
                $ch.eq(0).addClass('word_fly_left_top')
                .next().addClass('word_fly_left_middle_top')
                .next().addClass('word_fly_right_middle_top')
                .next().addClass('word_fly_right_top');
                $en.eq(0).addClass('word_fly_left_bottom')
                .next().addClass('word_fly_left_middle_bottom')
                .next().addClass('word_fly_right_middle_bottom')
                .next().addClass('word_fly_right_bottom');
                var k = -1 ;
                $info_p.each(function(){
                    var $this = $(this);
                    k++;
                    setTimeout(function(){
                        $this.animateCss('bounceInUp');
                    }, 200*k);
                });
            }
        },
    });
// 顶部导航文字切换
$('#header_p').hover(
    function(){
        $("#head_p1").html('漏鸣杰');
        $("#head_p2").html('前端工程师');
    },function(){
        $('#head_p1').html('Frank');
        $('#head_p2').html('个人简历');
    }
);
//导航栏
$("aside").css({"top": ($('.active').height() - $("aside").height())/2});
$("aside a").hover(function(){
    // $(this).find('b').fadeToggle(200, 'easeInOutCubic');
    $(this).find("b").fadeToggle(200,"linear");
});
// 专业技能展示
$('.skill_info_pic').click(function(){
    $('.skill_info_arrow').each(function(){
        $(this).removeClass('rotate180').siblings('.skill_info_content').slideUp();
    });
    $(this).siblings('.skill_info_arrow').addClass('rotate180')
           .siblings('.skill_info_content').slideDown();
});

});