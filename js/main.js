window.onload = function(event) {
	event = event || window.event;
	//获取人物名字
	const name = document.getElementById('name');
	const gamestart = document.getElementById("gamestart");
	const start = gamestart.getElementsByTagName("span");
	const playing = document.getElementById("playing");
	const playing_img = playing.getElementsByTagName("img");
	const load = document.getElementById("load");
	const confirm = document.getElementById("confirm");
	const navdiv = document.getElementById("nav");
	const nav = navdiv.getElementsByTagName("a");
	const save = document.getElementById("save");
	const title_sure = document.getElementById("title_sure");
	const title_btn = title_sure.getElementsByTagName("button");
	const guodu = document.getElementById("guodu");
	const save_back = document.getElementById("save_back");
	const load_back = document.getElementById("load_back");
	const text = document.getElementById("text");
	//history 的页面
	const history = document.getElementById("history");
	let text_box = document.getElementById("text-box");
	let text_span = text_box.getElementsByTagName("span");
	//history的按钮
	const history_btn = document.getElementById("history_btn");
	const history_span = document.getElementById("history_span");
	//设置的DOM
	const confirm_li = confirm.getElementsByTagName("li");
	const confirm_back = document.getElementById("confirm_back");
	const confirm_a = confirm.getElementsByTagName("a");
	//获取音频
	const audio = document.getElementById("audio");
	const sound = document.getElementById("sound");
	//获取存读档确认以及按钮
	const save_sure = document.getElementById('save_sure');
	const load_sure = document.getElementById('load_sure');
	const save_btn = save_sure.getElementsByTagName('button');
	const load_btn = load_sure.getElementsByTagName('button');
	//获取save load 的八个存档按键
	const save_a = save.getElementsByTagName('a');
	const load_a = load.getElementsByTagName('a');
	const save_div = save.getElementsByTagName("div");
	const load_div = load.getElementsByTagName("div");
	
	const bg = document.getElementsByClassName('box-together')
	
	//获取第一次选项的盒子与按钮
	const first_choose = document.getElementById("first_choose");
	const fc_button = first_choose.getElementsByTagName("button");
	
	const second_choose = document.getElementById('second_choose');
	const sc_button = second_choose.getElementsByTagName("button");
	
	const third_choose = document.getElementById('third_choose');
	const th_button = third_choose.getElementsByTagName("button");
	
	const fourth_choose = document.getElementById('fourth_choose');
	const fo_button = fourth_choose.getElementsByTagName("button");
	
	const fifth_choose = document.getElementById('fifth_choose');
	const fi_button = fifth_choose.getElementsByTagName("button");
	
	const sixth_choose = document.getElementById('sixth_choose');
	const si_button = sixth_choose.getElementsByTagName("button");
	
	const ending_back = document.getElementById("ending_button");
	let bg_index =0;
	
	//结局页面
	const ending = document.getElementById('ending');
	const ending_a = ending.getElementsByTagName('a');
	sound.volume = 0.5;
	audio.volume = 0.5;
	let text_index = 0;
	let span_index = 0;
	//自动播放速度默认值三秒
	let auto_speed = 3000;
	//文本速度默认100
	let text_speed = 80;
	let timer;
	let timer2;
	let timer3;
	//索引功能：从游戏初始页面进入load时，返回键返回到初始页面，在游戏界面进入load时，返回键返回到游戏界面
	let load_index = 0;
	let confirm_index = 0;
	let auto_index = 0;
	let timer_text;
	let peopleName;
	//弹出选项框时，添加一个索引
	let choose_index = 0;
	//使用封装好的函数对初始页面的按钮赋值
	const audio_btn = document.getElementById("audio_btn");
	let fc_index = 0;
	let se_index = 0;
	let th_index = 0;
	let si_index = 0;
	let si_index_two = 0;
	
	// 音频的索引，在读取存档时能播放音频
	let audio_index = 0;
	
	
	enter(start[0], playing);
	enter(start[1], load);
	enter(start[2], confirm);
	enter(start[3],ending);
	//save 和load
	navButton(load, load_back, nav[4], load_index);
	navButton(save, save_back, nav[5]);
	navButton(confirm, confirm_back, nav[1], confirm_index);
	back(history, history_btn, playing);
	//添加开始按钮的事件监听
	start[0].addEventListener("click", function() {
		if(localStorage.getItem("end5_lock")==1 && localStorage.getItem("end4_lock")==1){
			removeClass(si_button[2],"display_none");
		}
		audio.src = "../audio/audio/悬疑.mp3";
		audio.play();
		bg_change("bg1");
		//清空索引，重置游戏
		text_span = text_box.getElementsByTagName('span');
		text_index= 0 ;
		span_index = 0;
		audio_index = 0;
		fc_index = 0;
		se_index = 0;
		th_index = 0;
		si_index = 0;
		si_index_two=0;
		choose_index = 0;
		playing_img[0] = "";
		playing_img[1] = "";
		playing_img[2] = "";
		if(!hasClass(playing_img[0],"display_none")){
			addClass(playing_img[0],"display_none")
		}
		if(!hasClass(playing_img[1],"display_none")){
			addClass(playing_img[1],"display_none")
		}
		if(!hasClass(playing_img[2],"display_none")){
			addClass(playing_img[2],"display_none")
		}
		if(!hasClass(first_choose,'display_none')){
			addClass(first_choose,"display_none");
		};
		if(!hasClass(second_choose,'display_none')){
			addClass(second_choose,"display_none");
		};
		if(!hasClass(third_choose,'display_none')){
			addClass(third_choose,"display_none");
		}
		if(!hasClass(fourth_choose,'display_none')){
			addClass(fourth_choose,"display_none");
		}
		if(!hasClass(fifth_choose,'display_none')){
			addClass(fifth_choose,"display_none");
		}
		if(!hasClass(sixth_choose,'display_none')){
			addClass(sixth_choose,"display_none");
		}
	});
	
	//结局收录功能的事件监听
	start[3].addEventListener("click",function(){
		if(localStorage.getItem("end1_lock")==1){
			ending_a[0].innerHTML = "1.还没有开始就结束了";
		}
		
		if(localStorage.getItem("end2_lock")==1){
			ending_a[1].innerHTML = "2.最后的午餐";
		}
		
		if(localStorage.getItem("end3_lock")==1){
			ending_a[2].innerHTML = "3.命运";
		}
		
		if(localStorage.getItem("end4_lock")==1){
			ending_a[3].innerHTML = "4.美梦";
		}
		
		if(localStorage.getItem("end5_lock")==1){
			ending_a[4].innerHTML = "5.两生";
		}
		
		if(localStorage.getItem("end6_lock")==1){
			ending_a[5].innerHTML = "6.True End";
		}
		
	})
	
	//结局收录界面返回动画
	ending_back.onclick = function(){
		addClass(guodu, "display_block");
			let timer3 = setInterval(function(){
				addClass(ending, "animation7")
				removeClass(guodu, "display_none");
				
				addClass(gamestart, "animation2");
				clearInterval(timer3);
			},2000)
			
			let timer = setInterval(function() {
				removeClass(ending, "display_block");
				removeClass(ending, "opacity_0_5");
				addClass(ending, "display_none");
				removeClass(ending, "animation7");
				removeClass(gamestart, "display_none");
				removeClass(guodu, "display_block");
				addClass(guodu, "display_none");
				clearInterval(timer);
			}, 4000)
		
			let timer2 = setInterval(function() {
				clearInterval(timer2);
				removeClass(gamestart, "transparent");
				
				removeClass(gamestart, "animation2")
				clearInterval(timer2);
			}, 6000)
		}
	
	
	
	
	//添加事件监听，如果auto已经在使用中，按下其他nav按键会取消auto

	nav[5].addEventListener("click", function() {
		if (auto_index == 1) {
			auto_index = 0;
			removeClass(nav[3], "font_white");
			clearInterval(timer2);
		};
	});
	nav[4].addEventListener("click", function() {
		if (auto_index == 1) {
			auto_index = 0;
			removeClass(nav[3], "font_white");
			clearInterval(timer2);
		};
	});
	nav[1].addEventListener("click", function() {
		if (auto_index == 1) {
			auto_index = 0;
			removeClass(nav[3], "font_white");
			clearInterval(timer2);
		};
	});
	nav[2].onclick = function(event) {
		event = event || window.event;
		event.cancelBubble = true;
		if (auto_index == 1) {
			auto_index = 0;
			removeClass(nav[3], "font_white");
			clearInterval(timer2);
		} else {
			fade(history, playing)
			history_span.innerHTML = "";
			if (span_index <= 15) {
				for (let i = 0; i <= span_index; i++) {
					history_span.innerHTML += text_span[i].innerHTML + "<br/><br/>";
				};
			} else {
				for (let i = span_index - 15; i <= span_index; i++) {
					history_span.innerHTML += text_span[i].innerHTML + "<br/><br/>";
				};
			}

		}
	};
	
	
	//场景切换
	function bg_change(bgName){
		bg_index = 1;
		addClass(guodu, "display_block");
		addClass(playing,"animation1_0_5");
		let timer = setInterval(function(){
			removeBg(playing,"bg");
			addClass(playing,bgName);
			removeClass(playing,"animation1_0_5");
			addClass(playing,"animation2_0_5");
			clearInterval(timer);
		},1000)
		
		let timer2 = setInterval(function(){
			text_index = 0;
			span_index += 1;
			removeClass(playing,"animation2_0.5")
			clearInterval(timer2);
			removeClass(guodu, "display_block");
			bg_index = 0;
			
		},2000)
	}
	//音频音效切换
	function audio_play(url){
		audio.src = url;
		audio.play();
	}
	
	
	function sound_play(url){
		sound.src = url;
		sound.play();
		let timer = setInterval(function(){
			sound.src = '';
			clearInterval(timer);
		},5000)
	}
	
	
	
	//当文本处于某一位置时，弹出选项框
	function spanLocation(){
		//如果不是真结局则不会出现选项
		if(fc_index ==0 && se_index==0 && th_index==0  && si_index==0 && si_index_two==0){
			
			//人物动画效果
			if(span_index ==2){
				img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
			}
			
			
			if(span_index == 9){
				
					img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
				}
			
			
			if(span_index ==12){
				playing_img[1].src = "../img/character/晴语/晴语-低落动作-哭泣-667x1000.png";
			}
			
			if(span_index == 13){
				playing_img[0].src = "../img/character/晴安/晴安-动作一-委屈-511x1000.png"
			}
			
			if(span_index == 45){
				
					img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
			}
			
			if(span_index == 85){
				
					img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
			}
				
			if(span_index == 96){
				
					img_out(playing_img[0]);
			}
				
			if(span_index == 113){
				
					img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
			}
			
			if(span_index == 117){
				
					img_out(playing_img[1]);
			}
			
			if(span_index == 128){
				
					img_fade(playing_img[0],"../img/character/晴语/晴语-低落动作-害怕-667x1000.png");
			}
			
			if(span_index == 189){
				
				playing_img[0].src="../img/character/晴安/晴安-动作二-大笑-511x1000.png";
			}
			
			
			
			if(span_index == 191){
				
				playing_img[0].src="../img/character/晴安/晴安动作一-微笑-511x1000.png";
			}
			
			if(span_index == 206){
				
				img_out(playing_img[1]);
			}
			
			if(span_index == 208){
				
				img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-笑-667x1000.png");
			}
			
			if(span_index == 218){
				
				img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-害怕-667x1000.png");
			}
			
			if(span_index == 234){
				
				playing_img[2].src="../img/character/佑生/佑生-抬手动作-愤怒-667x1000.png";
			}
			
			if(span_index == 248){
				
				img_out(playing_img[2]);
			}
			
			if(span_index == 258){
				
				img_out(playing_img[0]);
				img_out(playing_img[1]);
			}
			
			if(span_index == 270){
				img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
			}
				
			if(span_index == 302){
				img_fade(playing_img[2],"../img/character/杨教授/杨教授-正常-正常-581x1000.png");
			}
			
			if(span_index == 429){
				img_out(playing_img[2]);
			}
			
			if(span_index == 432){
				img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
			}
			
			if(span_index == 471){
				img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-笑-667x1000.png");
			}
			
			if(span_index == 472){
				img_out(playing_img[2]);
			}
			
			if(span_index == 520){
				img_fade(playing_img[2],"../img/character/杨教授/杨教授-正常-正常-581x1000.png");
			}
			
			if(span_index == 569){
				playing_img[0].src = "../img/character/晴安/晴安-动作三-惊吓-511x1000.png"
			}
			
			if(span_index ==582){
				playing_img[0].src = "../img/character/晴安/晴安动作一-微笑-511x1000.png"
			}
			
			
				
			if(span_index == 581){
				img_out(playing_img[2]);
			}	
				
				
			if(span_index == 587){
				img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-敌意-667x1000.png");
			}	
			
			if(span_index == 594){
				img_out(playing_img[2]);
			}
			
			if(span_index == 600){
				img_out(playing_img[0]);
				img_out(playing_img[1]);
			}
				
				
				
				
			//切换场景
			if(span_index ==11){
				bg_change("bg8");
			}
			
			if(span_index ==25){
				bg_change("bg2");
				playing_img[0].src = "../img/character/晴安/晴安动作一-微笑-511x1000.png";
				img_out(playing_img[1]);
			}
			
			if(span_index ==34){
				bg_change("bg1");
			}
			
			if(span_index ==60){
				bg_change("bg3");
			}
			
			if(span_index ==73){
				bg_change("bg1");
				img_out(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png")
			}
			
			if(span_index ==92){
				bg_change("bg8");
			}
			
			
			if(span_index ==118){
				bg_change("bg9");
			}
			
			if(span_index ==120){
				bg_change("bg10");
			}
			
			if(span_index ==129){
				bg_change("bg11");
			}
			
			if(span_index ==183){
				bg_change("bg12");
			}
			
			if(span_index ==205){
				bg_change("bg13");
			}
			
			if(span_index ==216){
				bg_change("bg15");
			}
			
			if(span_index ==249){
				bg_change("bg14");
			}
			
			if(span_index ==270){
				bg_change("bg14");
			}
			
			if(span_index ==286){
				bg_change("bg14");
			}
			
			if(span_index ==292){
				bg_change("bg15");
			}
			
			if(span_index ==429){
				bg_change("bg14");
			}
			
			if(span_index ==431){
				bg_change("bg14");
			}
			
			if(span_index ==449){
				bg_change("bg15");
			}
			
			if(span_index ==472){
				bg_change("bg14");
			}
			
			if(span_index ==518){
				bg_change("bg16");
			}
			
			if(span_index ==594){
				bg_change("bg9");
			}
			
			
			
			
			//判断文本位置播放音频
			if (span_index == 26 ) {
				audio_play('../audio/audio/1.mp3');
			}
			
			if (span_index == 97 ) {
				audio_play('../audio/audio/悬疑.mp3');
			}
			
			if (span_index == 124 ) {
				audio_play('../audio/audio/悬疑.mp3');
			}
			
			if (span_index == 130 ) {
				audio_play('../audio/audio/1.mp3');
			}
			
			if (span_index == 184 ) {
				audio_play('../audio/audio/悬疑.mp3');
			}
			
			if (span_index == 192 ) {
				audio_play('../audio/audio/战斗.mp3');
			}
			
			if (span_index == 206 ) {
				audio_play('../audio/audio/1.mp3');
			}
			
			if (span_index == 293 ) {
				audio_play('../audio/audio/悬疑.mp3');
			}
			
			if (span_index == 431 ) {
				audio_play('../audio/audio/1.mp3');
			}
			
			if (span_index == 520 ) {
				audio_play('../audio/audio/战斗.mp3');
			}
			
			if (span_index == 581 ) {
				audio_play('../audio/audio/1.mp3');
			}
			
			
			//判断文本位置播放音效
			if(span_index == 8){
				sound_play('../audio/sound/撞门.mp3');
			}
			
			if(span_index == 25){
				sound_play('../audio/sound/鸟鸣.mp3');
			}
			
			
			if(span_index == 78){
				sound_play('../audio/sound/座机.mp3');
			}
			
			if(span_index == 84){
				sound_play('../audio/sound/放下座机.mp3');
			}
			
			if(span_index == 115){
				sound_play('../audio/sound/鸟鸣.mp3');
				audio_play('../audio/audio/1.mp3');
			}
			
			if(span_index == 157){
				sound_play('../audio/sound/翻书.mp3');
			}
			
			
			
			if(span_index == 262){
				sound_play('../audio/sound/衣服摩擦.mp3');
			}
			
			if(span_index == 349){
				sound_play('../audio/sound/翻书.mp3');
			}
			
			
			if(span_index == 536){
				sound_play('../audio/sound/枪.mp3');
			}
			
			
			//第一个选项框
			if(span_index==50){
				removeClass(first_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第二个选项框
			if(span_index == 115){
				removeClass(second_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第三个选项框
			if(span_index == 203){
				removeClass(third_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第四个选项框
			if(span_index == 282){
				removeClass(fourth_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第五个选项框
			if(span_index == 345){
				removeClass(fifth_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			
			////第六个选项框
			if(span_index == 20){
				removeClass(sixth_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			
			
		}
		//当处于其他结局时的动画效果
		//结局一
		if(fc_index ==1){
			
			//人物动画
			if(span_index ==0){
				img_out(playing_img[1]);
			}
			
			if(span_index ==4){
				sound_play("../audio/sound/怪物.mp3");
			}
		}
		
		//结局二
		if(se_index==1){
			
			if(span_index == 1){
				img_out(playing_img[1]);
			}
			
			if(span_index == 7){
				bg_change("bg4");
			}
			
			if(span_index == 8){
				bg_change("5")
			}
			
			if(span_index == 13){
				bg_change("10")
			}
			//renwu
			if(span_index == 12){
				img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png")
			}
		}
		
		//结局三
		if(th_index==1){
			if(span_index ==7){
				sound_play("../audio/sound/枪.mp3");
			}
			
			if(span_index ==24){
				sound_play("../audio/sound/枪.mp3");
			}
			
			if(span_index ==13){
				playing_img[1].src = "../img/character/晴语/晴语-低落动作-哭泣-667x1000.png"
			}
		}
		//结局四
		if(si_index==1){
			if(span_index ==14){
				img_out(playing_img[1]);
				img_out(playing_img[0]);
			}
		}
		//结局五
		if(si_index_two==1){
			if(span_index == 13){
				playing_img[0].src = "../img/character/晴安/晴安-动作三-大哭-511x1000.png"
			}
			
			if(span_index == 18){
				playing_img[1].src = "../img/character/晴语/晴语-低落动作-得意-667x1000.png"
			}
			
			if(span_index == 19){
				playing_img[0].src = "../img/character/晴安/晴安动作一-微笑-511x1000.png"
			}
		}
	}
	
			//通过load加载时触发对应的效果
				function spanLoad(){
					if(localStorage.getItem("end5_lock")==1 && localStorage.getItem("end4_lock")==1){
						removeClass(si_button[2],"display_none");
					}
					//如果不是真结局则不会出现选项
					if(fc_index ==0 && se_index==0 && th_index==0  && si_index==0 && si_index_two==0){
						
						//人物动画效果
						if(span_index >=2 && span_index < 13){
							img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
						}
						
						
						if(span_index >= 9 && span_index < 12){
							
								img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
							}
						
						
						if(span_index >=12 && span_index < 45){
							img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-哭泣-667x1000.png");
						}
						
						if(span_index >= 13 && span_index < 96){
							img_fade(playing_img[0],"../img/character/晴安/晴安-动作一-委屈-511x1000.png");
						}
						
						if(span_index >= 45 && span_index < 85){
							
								img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
						}
						
						if(span_index >= 85 && span_index < 117){
							
								img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
						}
							
						if(span_index >= 96 && span_index < 113){
							
								img_out(playing_img[0]);
						}
							
						if(span_index >= 113 && span_index < 128){
							
								img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
						}
						
						if(span_index >= 117 && span_index < 206){
							
								img_out(playing_img[1]);
						}
						
						if(span_index >= 128 && span_index < 189){
							
								img_fade(playing_img[0],"../img/character/晴语/晴语-低落动作-害怕-667x1000.png");
						}
						
						if(span_index >= 189 && span_index < 191){
							img_fade(playing_img[0],"../img/character/晴安/晴安-动作二-大笑-511x1000.png");
						}
						
						
						
						if(span_index >= 191 && span_index<258){
							img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
						}
						
						if(span_index >= 206 && span_index < 218){
							
							img_out(playing_img[1]);
						}
						
						if(span_index >= 208 && span_index < 234){
							
							img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-笑-667x1000.png");
						}
						
						if(span_index >= 218 && span_index < 258){
							
							img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-害怕-667x1000.png");
						}
						
						if(span_index >= 234 && span_index < 248){
							img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-愤怒-667x1000.png");
						}
						
						if(span_index >= 248 && span_index < 258){
							
							img_out(playing_img[2]);
						}
						
						if(span_index >= 258 && span_index < 270){
							
							img_out(playing_img[0]);
							img_out(playing_img[1]);
						}
						
						if(span_index >= 270 && span_index < 600){
							img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
						}
							
						if(span_index >= 302 && span_index < 429){
							img_fade(playing_img[2],"../img/character/杨教授/杨教授-正常-正常-581x1000.png");
						}
						
						if(span_index >= 429 && span_index < 471){
							img_out(playing_img[2]);
						}
						
						if(span_index >= 432 && span_index < 600){
							img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
						}
						
						if(span_index >= 471 && span_index < 472){
							img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-笑-667x1000.png");
						}
						
						if(span_index >= 472 && span_index < 520){
							img_out(playing_img[2]);
						}
						
						if(span_index >= 520 && span_index < 579){
							img_fade(playing_img[2],"../img/character/杨教授/杨教授-正常-正常-581x1000.png");
						}
							
						if(span_index >= 579 && span_index < 587){
							img_out(playing_img[2]);
						}	
							
							
						if(span_index >= 587 && span_index < 594){
							img_fade(playing_img[2],"../img/character/佑生/佑生-抬手动作-敌意-667x1000.png");
						}	
						
						if(span_index >= 594 && span_index < 600){
							img_out(playing_img[2]);
						}
						
						if(span_index >= 600){
							img_out(playing_img[0]);
							img_out(playing_img[1]);
						}
							
							
							
							
						//切换场景
						if(span_index >=0 && span_index < 11){
							bg_change("bg2");
						}
						
						if(span_index >=11 && span_index < 25){
							bg_change("bg8");
						}
						
						if(span_index >=25 && span_index < 34){
							bg_change("bg2");
							playing_img[0].src = "../img/character/晴安/晴安动作一-微笑-511x1000.png";
							img_out(playing_img[1]);
						}
						
						if(span_index >=34 && span_index < 60){
							bg_change("bg1");
						}
						
						if(span_index >=60 && span_index < 73){
							bg_change("bg3");
						}
						
						if(span_index >=73 && span_index < 92){
							bg_change("bg1");
							img_out(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png")
						}
						
						if(span_index >=92 && span_index < 118){
							bg_change("bg8");
						}
						
						
						if(span_index >=118 && span_index < 120){
							bg_change("bg9");
						}
						
						if(span_index >=120 && span_index < 129){
							bg_change("bg10");
						}
						
						if(span_index >=129 && span_index < 183){
							bg_change("bg11");
						}
						
						if(span_index >=183 && span_index < 205){
							bg_change("bg12");
						}
						
						if(span_index >=205 && span_index < 216){
							bg_change("bg13");
						}
						
						if(span_index >=216 && span_index < 249){
							bg_change("bg15");
						}
						
						if(span_index >=249 && span_index < 270){
							bg_change("bg14");
						}
						
						if(span_index >=270 && span_index < 286){
							bg_change("bg14");
						}
						
						if(span_index >=286 && span_index < 292){
							bg_change("bg14");
						}
						
						if(span_index >=292 && span_index < 429){
							bg_change("bg15");
						}
						
						if(span_index >=429 && span_index < 431){
							bg_change("bg14");
						}
						
						if(span_index >=431 && span_index < 449){
							bg_change("bg14");
						}
						
						if(span_index >=449 && span_index < 472){
							bg_change("bg15");
						}
						
						if(span_index >=472 && span_index < 518){
							bg_change("bg14");
						}
						
						if(span_index >=518 && span_index < 594){
							bg_change("bg16");
						}
						
						if(span_index >=594){
							bg_change("bg9");
						}
						
						
						
						
						//判断文本位置播放音频
						if (span_index >= 26 && span_index < 97 ) {
							audio_play('../audio/audio/1.mp3');
						}
						
						if (span_index >= 97 && span_index < 124) {
							audio_play('../audio/audio/悬疑.mp3');
						}
						
						if (span_index >= 124 && span_index < 130) {
							audio_play('../audio/audio/悬疑.mp3');
						}
						
						if (span_index >= 130 && span_index < 184) {
							audio_play('../audio/audio/1.mp3');
						}
						
						if (span_index >= 184 && span_index < 192) {
							audio_play('../audio/audio/悬疑.mp3');
						}
						
						if (span_index >= 192 && span_index < 206) {
							audio_play('../audio/audio/战斗.mp3');
						}
						
						if (span_index >= 206 && span_index < 293) {
							audio_play('../audio/audio/1.mp3');
						}
						
						if (span_index >= 293 && span_index < 431) {
							audio_play('../audio/audio/悬疑.mp3');
						}
						
						if (span_index >= 431 && span_index < 520) {
							audio_play('../audio/audio/1.mp3');
						}
						
						if (span_index >= 520 && span_index < 581) {
							audio_play('../audio/audio/战斗.mp3');
						}
						
						if (span_index >= 581 ) {
							audio_play('../audio/audio/1.mp3');
						}

			
			
			//第一个选项框
			if(span_index==50){
				removeClass(first_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第二个选项框
			if(span_index == 115){
				removeClass(second_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第三个选项框
			if(span_index == 203){
				removeClass(third_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第四个选项框
			if(span_index == 282){
				removeClass(fourth_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			//第五个选项框
			if(span_index == 345){
				removeClass(fifth_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
			
			////第六个选项框
			if(span_index == 10){
				removeClass(sixth_choose,"display_none");
				choose_index = 1;
				if(auto_index==1){
					tootleClass(nav[3], "font_white");
					auto_index = 0;
				}
			}
		
	}
	
	//当处于其他结局时的动画效果
	//结局一
	if(fc_index ==1){
		bg_change("bg8");
		img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png")
		//人物动画
		if(span_index ==0){
			
			img_out(playing_img[1]);
		}
		
		
	}
	
	//结局二
	if(se_index==1){
		img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
		img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png")
		bg_change("bg1");
		if(span_index >= 1 && span_index <12){
			img_out(playing_img[1]);
		}
		
		if(span_index == 7){
			bg_change("bg4");
		}
		
		if(span_index >= 8 && span_index<13){
			bg_change("5")
		}
		
		if(span_index >= 13){
			bg_change("10")
		}
		//renwu
		if(span_index >= 12){
			img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png")
		}
	}
	
	//结局三
	if(th_index==1){
		img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png")
		bg_change("bg12")
		if(span_index >=13){
			img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-哭泣-667x1000.png")
		}
	}
	
	//结局四
	if(si_index==1){
		img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
		img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
		img_fade(playing_img[2],"../img/character/杨教授/杨教授-正常-正常-581x1000.png");
		bg_change("bg16");
		if(span_index >=14){
			img_out(playing_img[1]);
			img_out(playing_img[0]);
		}
	}
	//结局五
	if(si_index_two==1){
		
		img_fade(playing_img[0],"../img/character/晴安/晴安动作一-微笑-511x1000.png");
		img_fade(playing_img[1],"../img/character/晴语/晴语-低落动作-沮丧-667x1000.png");
		img_fade(playing_img[2],"../img/character/杨教授/杨教授-正常-正常-581x1000.png");
		bg_change("bg16");
		if(span_index >= 13  && span_index <19){
			playing_img[0].src = "../img/character/晴安/晴安-动作三-大哭-511x1000.png"
		}
		
		if(span_index >= 18){
			playing_img[1].src = "../img/character/晴语/晴语-低落动作-得意-667x1000.png"
		}
		
		if(span_index >= 19){
			playing_img[0].src = "../img/character/晴安/晴安动作一-微笑-511x1000.png"
		}
	}
	
	}
	
	//阻止选项框冒泡
	first_choose.onclick = function(event){
		event.cancelBubble = true;
	}
	// 导航条title 功能，点击后弹出确认框，点是回到初始页面
	nav[0].onclick = function(event) {
		event.cancelBubble = true;
		//取消auto
		if (auto_index == 1) {
			auto_index = 0;
			removeClass(nav[3], "font_white");
		} else {
			fade(title_sure, playing)
		}
	};
	//title确认界面否按钮的功能
	back(title_sure, title_btn[1], playing)
	//title确认界面是按钮回到初始界面的功能
	title_btn[0].onclick = function(event) {
		event.cancelBubble = true;
		audio.src = "";
		
		addClass(playing, "animation7")
		addClass(title_sure, "animation1_1")
		removeClass(guodu, "display_none");
		addClass(guodu, "display_block");
		timer = setInterval(function() {
			removeClass(playing, "display_block");
			removeClass(playing, "opacity_0_5");
			addClass(playing, "display_none");
			removeClass(playing, "animation7");
			removeClass(gamestart, "display_none");
			addClass(gamestart, "display_block");
			removeClass(title_sure, "display_block");
			addClass(title_sure, "display_none");
			removeClass(guodu, "display_block");
			addClass(guodu, "display_none");
			clearInterval(timer);
		}, 2000)
		addClass(gamestart, "animation2");

		timer2 = setInterval(function() {
			clearInterval(timer2);
			removeClass(gamestart, "transparent");
			addClass(gamestart, "opacity_1");
			// obj2.style.opacity = "1";
			removeClass(title_sure, "animation1_1");

			removeClass(gamestart, "animation2")
			clearInterval(timer2);
		}, 4000)
	};


	//
	//文字逐字显现
	//定时器文字逐个显现功能，点击时直接显现所有的文字
	function textShow() {
		clearInterval(timer_text);
		timer_text = setInterval(function() {
			text.innerHTML = text_span[span_index].innerHTML.substring(0, text_index);
			if (text_index < text_span[span_index].innerHTML.length) {
				text_index++;
			}
		}, text_speed);
	};
	textShow();
	//设定定时器，当文本到达特定值时，显示选项

	playing.onclick = function() {


		removeClass(nav[3], "font_white");
		if (timer2) {
			clearInterval(timer2);
		}
		//如果文本盒子是真结局的盒子则执行函数
		
		//清除auto的定时器
		if (auto_index == 1) {
			auto_index = 0;
			//判断文本是否完全显示，完全显示进入下一个文本，不完全显示就完全显示文本
		} else if (text.innerHTML != text_span[span_index].innerHTML) {
			text.innerHTML = text_span[span_index].innerHTML;
			text_index = text_span[span_index].innerHTML.length;
			
		} else if ((text.innerHTML == text_span[span_index].innerHTML) && (span_index < text_span.length - 1 )&& (choose_index ==0)) {
			//如果文本盒子是真结局的盒子则执行函数
				if(text_box==document.getElementById('text-box')){
					spanLocation()
				}

			if(choose_index ==0 && bg_index ==0){
				span_index = 1+span_index;
				//获取人物名字
				
				peopleName = text_span[span_index].innerHTML.indexOf('】');
				
				if (peopleName == -1) {
					name.getElementsByTagName('span')[0].innerHTML = "";
					text_span[span_index].innerHTML = text_span[span_index].innerHTML;
					
				}
				else{
					name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
						peopleName);
					text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
				}
				
				text_index = 0;
			}
			
			
		}
		
		//结局收录功能，达成某一结局时，结局收录页面显示该结局的名字。
		if(text_span==document.getElementById('end1').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end1_lock",1);
				end_animation();
			}
		}
		else if(text_span==document.getElementById('end2').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end2_lock",1);
				end_animation();
			}
		}
		
		else if(text_span==document.getElementById('end3').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end3_lock",1);
				end_animation();
			}
		}
		
		else if(text_span==document.getElementById('end4').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end4_lock",1);
				end_animation();
			}
		}
		
		else if(text_span==document.getElementById('end5').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end5_lock",1);
				end_animation();
			}
		}
		
		if(span_index == text_span.length-1){
			localStorage.setItem("end6_lock",1);
			end_animation();
		}
	};
	//auto 自动播放功能
	nav[3].onclick = function(event) { 
		clearInterval(timer2);
		event.cancelBubble = true;
		if(choose_index == 0 ){
		//索引功能：索引为1时点击让索引为0，取消定时器
		tootleClass(nav[3], "font_white");
		if (auto_index == 1) {
			auto_index = 0;
		} else {
			auto_index = 1;
		};
		//auto的定时器
		timer2 = setInterval(function() {
			
			
			if(text_box==document.getElementById('text-box')){
				spanLocation()
			}
			
			if(choose_index ==1 && bg_index ==1){
				clearInterval(timer2);
			}else if ((text.innerHTML == text_span[span_index].innerHTML)&& (span_index < text_span.length-1) ){
				
				span_index += 1;
				peopleName = text_span[span_index].innerHTML.indexOf('】');
				if (peopleName == -1) {
					name.getElementsByTagName('span')[0].innerHTML = "";
					text_span[span_index].innerHTML = text_span[span_index].innerHTML;
				}
				else if (peopleName != -1) {
					name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML
						.substring(1, peopleName);
					text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(
						peopleName + 1);
				}
				text_index = 0;
				
				
			};
			if (span_index == text_span.length - 1) {
				clearInterval(timer2);
			};
		}, auto_speed);
		}
		if(text_span==document.getElementById('end1').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end1_lock",1);
				end_animation();
			}
		}
		else if(text_span==document.getElementById('end2').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end2_lock",1);
				end_animation();
			}
		}
		
		else if(text_span==document.getElementById('end3').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end3_lock",1);
				end_animation();
			}
		}
		
		else if(text_span==document.getElementById('end4').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end4_lock",1);
				end_animation();
			}
		}
		
		else if(text_span==document.getElementById('end5').getElementsByTagName('span')){
			if(span_index == text_span.length-1){
				localStorage.setItem("end5_lock",1);
				end_animation();
			}
		}
		
		if(span_index == text_span.length-1){
			localStorage.setItem("end6_lock",1);
			end_animation();
		}
		
	}

	//设置里li的点击调节 li[0-9]是背景音乐， [10-19]是音效 ,[20-29]是文本速度， [30-39]是自动播放速度
	for (let i = 0; i < confirm_li.length; i++) {

		if (i <= 9) {
			confirm_li[i].onclick = function() {
				for (let j = 0; j <= 9; j++) {
					removeClass(confirm_li[j], "confirm_color");
				};
				if (!hasClass(confirm_li[i], "confirm_color")) {
					addClass(confirm_li[i], "confirm_color");

				};
				switch (i) {
					case 0:
						audio.volume = 0.1;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 1:
						audio.volume = 0.2;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 2:
						audio.volume = 0.3;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 3:
						audio.volume = 0.4;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 4:
						audio.volume = 0.5;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 5:
						audio.volume = 0.6;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 6:
						audio.volume = 0.7;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 7:
						audio.volume = 0.8;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 8:
						audio.volume = 0.9;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;
					case 9:
						audio.volume = 1;
						if (!hasClass(confirm_a[1], "display_none")) {
							removeClass(confirm_a[0], "display_none");
							addClass(confirm_a[1], "display_none");
						}
						break;

				};
			}
		} else if (i > 9 && i <= 19) {
			confirm_li[i].onclick = function() {
				for (let j = 10; j <= 19; j++) {
					removeClass(confirm_li[j], "confirm_color");
				};
				if (!hasClass(confirm_li[i], "confirm_color")) {
					addClass(confirm_li[i], "confirm_color");

				};
				switch (i) {
					case 10:
						sound.volume = 0.1;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 11:
						sound.volume = 0.2;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 12:
						sound.volume = 0.3;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 13:
						sound.volume = 0.4;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 14:
						sound.volume = 0.5;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 15:
						sound.volume = 0.6;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 16:
						sound.volume = 0.7;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 17:
						sound.volume = 0.8;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 18:
						sound.volume = 0.9;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;
					case 19:
						sound.volume = 1;
						if (!hasClass(confirm_a[3], "display_none")) {
							removeClass(confirm_a[2], "display_none");
							addClass(confirm_a[3], "display_none");
						}
						break;

				};
			}
		} else if (i > 19 && i <= 29) {
			confirm_li[i].onclick = function() {
				for (let j = 20; j <= 29; j++) {
					removeClass(confirm_li[j], "confirm_color");

				}
				if (!hasClass(confirm_li[i], "confirm_color")) {
					addClass(confirm_li[i], "confirm_color");


				};
				switch (i) {
					case 20:
						text_speed = 160;
						textShow();
						break;
					case 21:
						text_speed = 140;
						textShow();
						break;
					case 22:
						text_speed = 120;
						textShow();
						break;
					case 23:
						text_speed = 100;
						textShow();
						break;
					case 24:
						text_speed = 80;
						textShow();
						break;
					case 25:
						text_speed = 70;
						textShow();
						break;
					case 26:
						text_speed = 60;
						textShow();
						break;
					case 27:
						text_speed = 50;
						textShow();
						break;
					case 28:
						text_speed = 40;
						textShow();
						break;
					case 29:
						text_speed = 30;
						textShow();
						break;

				}
			}
		} else {
			confirm_li[i].onclick = function() {
				for (let j = 30; j <= 39; j++) {
					removeClass(confirm_li[j], "confirm_color");
				};
				if (!hasClass(confirm_li[i], "confirm_color")) {
					addClass(confirm_li[i], "confirm_color");
				};
				switch (i) {
					case 30:
						auto_speed = 5000;
						break;
					case 31:
						auto_speed = 4500;
						break;
					case 32:
						auto_speed = 4000;
						break;
					case 33:
						auto_speed = 3500;
						break;
					case 34:
						auto_speed = 3000;
						break;
					case 35:
						auto_speed = 2500;
						break;
					case 36:
						auto_speed = 2000;
						break;
					case 37:
						auto_speed = 1500;
						break;
					case 38:
						auto_speed = 1000;
						break;
					case 39:
						auto_speed = 500;
						break;

				};
			};
		};
	}

	//设置的静音

	tootleShow(confirm_a[0], confirm_a[1]);
	tootleShow(confirm_a[1], confirm_a[0]);
	tootleShow(confirm_a[2], confirm_a[3]);
	tootleShow(confirm_a[3], confirm_a[2]);

	confirm_a[0].addEventListener("click", function() {
		for (let j = 0; j <= 9; j++) {
			removeClass(confirm_li[j], "confirm_color");
		};
		audio.volume = 0;
	});
	confirm_a[1].addEventListener("click", function() {
		addClass(confirm_li[4], "confirm_color");
		audio.volume = 0.5;
	});

	confirm_a[2].addEventListener("click", function() {
		for (let j = 10; j <= 19; j++) {
			removeClass(confirm_li[j], "confirm_color");
		};
		sound.volume = 0;
	});
	confirm_a[3].addEventListener("click", function() {
		addClass(confirm_li[14], "confirm_color");
		sound.volume = 0.5;
	});

	//存读档切换上下页
	//上一页
	tootlePage(load_a[8], load_div[0], load_div[1]);
	tootlePage(load_a[9], load_div[0], load_div[1]);
	tootlePage(save_a[8], save_div[0], save_div[1]);
	tootlePage(save_a[9], save_div[0], save_div[1]);


	//存读档弹出确认窗口功能
	for (let i = 0; i <= 7; i++) {
		save_a[i].onclick = function() {
			removeClass(save_sure, "display_none")

			//是按钮
			save_btn[0].onclick = function() {
				let dateNow = new Date().toLocaleString();
				save_a[i].childNodes[1].innerHTML = '存档时间：' + dateNow;
				addClass(save_sure, "display_none");
				//在第二个子节点p添加内容
				save_a[i].childNodes[3].innerHTML = text_span[span_index].innerHTML;
				//同时在读档添加相同的内容
				load_a[i].childNodes[1].innerHTML = '存档时间：' + dateNow;
				let nowTime = load_a[i].childNodes[1].innerHTML
				//将存档时间储存在本地中
				localStorage.setItem(i+10,nowTime)
				load_a[i].childNodes[3].innerHTML = text_span[span_index].innerHTML;
				//将数据储存到本地localstorage
				localStorage.setItem(i,span_index);
				//将当前的文本盒子储存在本地中

				localStorage.setItem(i+40,fc_index);
				localStorage.setItem(i+50,se_index);
				localStorage.setItem(i+60,th_index);
				localStorage.setItem(i+70,si_index);
				localStorage.setItem(i+80,si_index_two);
				//确认存档存在
				localStorage.setItem(i+90,"1");
			};
		};
		//每一次加载页面都能看到存档
		if(localStorage.getItem(i)|| localStorage.getItem(i)===0){
			//时间
			save_a[i].childNodes[1].innerHTML = localStorage.getItem(i+10);
			load_a[i].childNodes[1].innerHTML = localStorage.getItem(i+10);
			//文本
			
			if(localStorage.getItem(i+40) == 1){
				//读取索引，如果存档处为第一个结局处，则改变存读档处的文本。
				save_a[i].childNodes[3].innerHTML = document.getElementById("end1").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
				load_a[i].childNodes[3].innerHTML = document.getElementById("end1").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
			
			}else if(localStorage.getItem(i+50)==1){
				save_a[i].childNodes[3].innerHTML = document.getElementById("end2").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
				load_a[i].childNodes[3].innerHTML = document.getElementById("end2").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
			
			}else if(localStorage.getItem(i+60)==1){
				save_a[i].childNodes[3].innerHTML = document.getElementById("end3").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
				load_a[i].childNodes[3].innerHTML = document.getElementById("end3").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
		
			}else if(localStorage.getItem(i+70)==1){
				save_a[i].childNodes[3].innerHTML = document.getElementById("end4").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
				load_a[i].childNodes[3].innerHTML = document.getElementById("end4").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
			}
			
			else if(localStorage.getItem(i+80)==1){
				save_a[i].childNodes[3].innerHTML = document.getElementById("end5").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
				load_a[i].childNodes[3].innerHTML = document.getElementById("end5").getElementsByTagName('span')[localStorage.getItem(i)].innerHTML;
			}
			
			else{
				save_a[i].childNodes[3].innerHTML = text_span[localStorage.getItem(i)].innerHTML;
				load_a[i].childNodes[3].innerHTML = text_span[localStorage.getItem(i)].innerHTML;
				
			}
			
		}
		
	};
	
	
	//加载页面
	for (let i = 0; i <= 7; i++) {
		
		load_a[i].onclick = function() {
			if(localStorage.getItem("end5_lock")==1 && localStorage.getItem("end4_lock")==1){
				removeClass(si_button[2],"display_none");
			}
			if(localStorage.getItem(i+90)=="1"){
			removeClass(load_sure, "display_none");
			if(localStorage.getItem(i+40) == 1){
				text_span = document.getElementById('end1').getElementsByTagName('span');
				fc_index = 1;
			}
			
			else if(localStorage.getItem(i+50) == 1){
				text_span = document.getElementById('end2').getElementsByTagName('span');
				sc_index = 1;
			}
			
			else if(localStorage.getItem(i+60) == 1){
				text_span = document.getElementById('end3').getElementsByTagName('span');
				th_index = 1;
			}
			
			else if(localStorage.getItem(i+70) == 1){
				text_span = document.getElementById('end4').getElementsByTagName('span');
				si_index = 1;
			}
			
			else if(localStorage.getItem(i+80) == 1){
				text_span = document.getElementById('end5').getElementsByTagName('span');
				si_index_two = 1;
			}else{
				text_span = text_box.getElementsByTagName('span');
			}
			
			
			}
			
			
	
	
			//是按钮,按下后读取存档
			load_btn[0].onclick = function() {
			
				fc_index =Number(localStorage.getItem(i+40));
				se_index=Number(localStorage.getItem(i+50));
				th_index=Number(localStorage.getItem(i+60));
				si_index=Number(localStorage.getItem(i+70));
				si_index_two = Number(localStorage.getItem(i+80));
				choose_index = 0;
				audio.src = "";
				playing_img[0] = "";
				playing_img[1] = "";
				playing_img[2] = "";
				if(!hasClass(playing_img[0],"display_none")){
					addClass(playing_img[0],"display_none")
				}
				if(!hasClass(playing_img[1],"display_none")){
					addClass(playing_img[1],"display_none")
				}
				if(!hasClass(playing_img[2],"display_none")){
					addClass(playing_img[2],"display_none")
				}
				
				span_index = Number(localStorage.getItem(i));
				if(!hasClass(first_choose,'display_none')){
					addClass(first_choose,"display_none");
				};
				if(!hasClass(second_choose,'display_none')){
					addClass(second_choose,"display_none");
				};
				if(!hasClass(third_choose,'display_none')){
					addClass(third_choose,"display_none");
				}
				if(!hasClass(fourth_choose,'display_none')){
					addClass(fourth_choose,"display_none");
				}
				if(!hasClass(fifth_choose,'display_none')){
					addClass(fifth_choose,"display_none");
				}
				if(!hasClass(sixth_choose,'display_none')){
					addClass(sixth_choose,"display_none");
				}
				addClass(load_sure, "display_none");
				spanLoad();
				if (hasClass(playing,"opacity_0_5")) {
				
					addClass(load, "animation3");
					addClass(playing, "animation7");
					
					addClass(load, "display_none");
					removeClass(load, "display_block");
					var timer = setInterval(function() {
						
						
						addClass(playing, "opacity_1");
						removeClass(playing, "opacity_0_5");
						removeClass(load, "animation3");
						removeClass(playing, "animation7");
						clearInterval(timer);
						
					}, 500)
					
					var timer2 = setInterval(function() {
						clearInterval(timer2);
						addClass(load, "transparent");
						removeClass(load, "opacity_0_8");
						clearInterval(timer2);
						// load_index = 0;
					}, 500)
					
				} 
				else{
					
					addClass(load, "animation1")
					removeClass(guodu, "display_none");
					addClass(guodu, "display_block");
					var timer = setInterval(function() {
						removeClass(playing, "display_none")
						addClass(playing, "display_block")
						removeClass(load, "display_block");
						addClass(load, "display_none");
						removeClass(guodu, "display_block")
						addClass(guodu, "display_none")
						addClass(load, "transparent");
						removeClass(load, "opacity_1");
						clearInterval(timer);
					}, 2000)
					addClass(playing, "animation2");
				
					var timer2 = setInterval(function() {
						clearInterval(timer2);
						removeClass(load, "animation1");
						removeClass(playing, "animation2")
						clearInterval(timer2);
						removeClass(playing,"transparent")
					}, 4000)
				
				}
					
					
					
				
					
		};
		}
	};

	//否按钮

	load_btn[1].onclick = function() {
		addClass(load_sure, "display_none");
	};

	save_btn[1].onclick = function() {
		addClass(save_sure, "display_none")
	};
		
		
	//选项框一的按钮 当按下错误的选项时，将text_box变成结局盒子
	
	fc_button[0].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		span_index = 0;
		text_index = 0;
		addClass(first_choose,"display_none");
		text_span = document.getElementById('end1').getElementsByTagName('span');
		choose_index = 0;
		fc_index = 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	fc_button[1].onclick = function(){
		sound.src = "../audio/sound/错按钮.mp3";
		addClass(first_choose,"display_none");
		choose_index = 0;
		text_index = 0;
		span_index += 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	//选项框二
	sc_button[0].onclick = function(){
		sound.src = "../audio/sound/错按钮.mp3";
		span_index = 0;
		text_index = 0;
		addClass(second_choose,"display_none");
		text_span = document.getElementById('end2').getElementsByTagName('span');
		choose_index = 0;
		se_index = 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	sc_button[1].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		addClass(second_choose,"display_none");
		choose_index = 0;
		text_index = 0;
		span_index += 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	th_button[0].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		addClass(third_choose,"display_none");
		choose_index = 0;
		text_index = 0;
		span_index += 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	th_button[1].onclick = function(){
		sound.src = "../audio/sound/错按钮.mp3";
		span_index = 0;
		text_index = 0;
		addClass(third_choose,"display_none");
		text_span = document.getElementById('end3').getElementsByTagName('span');
		choose_index = 0;
		th_index = 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	si_button[0].onclick = function(){
		sound.src = "../audio/sound/错按钮.mp3";
		
		span_index = 0;
		text_index = 0;
		addClass(sixth_choose,"display_none");
		text_span = document.getElementById('end4').getElementsByTagName('span');
		choose_index = 0;
		si_index = 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	si_button[1].onclick = function(){
		sound.src = "../audio/sound/错按钮.mp3";
		
		span_index = 0;
		text_index = 0;
		addClass(sixth_choose,"display_none");
		text_span = document.getElementById('end5').getElementsByTagName('span');
		choose_index = 0;
		si_index_two = 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	si_button[2].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		addClass(sixth_choose,"display_none");
		si_index = 0;
		text_index = 0;
		span_index += 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	fo_button[0].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		choose_index = 0;
		text_index = 0;
		span_index += 1;
		addClass(fourth_choose,"display_none");
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	fo_button[1].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		addClass(fourth_choose,"display_none");
		choose_index = 0;
		text_index = 0;
		span_index += 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	fi_button[0].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		addClass(fifth_choose,"display_none");
		choose_index = 0;
		text_index = 0;
		span_index += 1;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}
	
	fi_button[1].onclick = function(){
		sound.src = "../audio/sound/对按钮.mp3"
		text_index = 0;
		span_index = 429;
		peopleName = text_span[span_index].innerHTML.indexOf('】');
		
		if (peopleName == -1) {
			name.getElementsByTagName('span')[0].innerHTML = "";
			text_span[span_index].innerHTML = text_span[span_index].innerHTML;
			
		}
		else{
			name.getElementsByTagName('span')[0].innerHTML = text_span[span_index].innerHTML.substring(1,
				peopleName);
			text_span[span_index].innerHTML = text_span[span_index].innerHTML.substring(peopleName + 1);
		}
	}



}
