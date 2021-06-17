//封装添加类名
function addClass(obj, cn) {
	obj.className += " " + cn;
}

function removeClass(obj, cn) {
	let reg = new RegExp("\\b" + cn + "\\b")
	obj.className = obj.className.replace(reg, " ");
}

function hasClass(obj, cn) {
	let reg = new RegExp("\\b" + cn + "\\b")
	return reg.test(obj.className);
}

function removeBg(obj, cn) {
	let reg = new RegExp("\\b" + cn )
	obj.className = obj.className.replace(reg, " ");
}

function tootleClass(obj, cn) {
	if (!hasClass(obj, cn)) {
		addClass(obj, cn);
	} else {
		removeClass(obj, cn);
	}
}
// 封装游戏开始界面的按钮功能,点击按钮后产生一个过渡动画,然后隐藏初始界面,显示其他页面
function enter(obj1, obj2) {
	obj1.onclick = function() {
		addClass(gamestart, "animation1")
		removeClass(guodu, "display_none");
		addClass(guodu, "display_block");
		// guodu.style.display = "block";
		timer = setInterval(function() {
			removeClass(obj2, "display_none")
			addClass(obj2, "display_block")
			// obj2.style.display = "block";
			removeClass(gamestart, "display_block");
			addClass(gamestart, "display_none");
			// gamestart.style.display = "none";
			removeClass(guodu, "display_block")
			addClass(guodu, "display_none")
			// guodu.style.display = "none";
			clearInterval(timer);
		}, 2000)
		addClass(obj2, "animation2");

		timer2 = setInterval(function() {
			clearInterval(timer2);
			removeClass(obj2, "transparent");
			addClass(obj2, "opacity_1");
			// obj2.style.opacity = "1";
			removeClass(gamestart, "animation1");

			removeClass(obj2, "animation2")
			clearInterval(timer2);
		}, 4000)
	};
}


	//封装导航条的部分按钮的功能 (save 、load和设置)
	
	function navButton(obj, back, obj2, index) {
		obj2.onclick = function() {
			event.cancelBubble = true;
			clearInterval(timer);
			if (index == 0) {
				index = 1;
			};
			addClass(playing, "animation3");
			addClass(obj, "animation4");
			removeClass(obj, "display_none");
			addClass(obj, "display_block");
			var timer = setInterval(function() {
				removeClass(playing, "opacity_1");
				addClass(playing, "opacity_0_5");
				removeClass(playing, "animation3");
				removeClass(obj, "animation4");
				clearInterval(timer);
			}, 500)
	
			var timer2 = setInterval(function() {
				clearInterval(timer2);
				removeClass(obj, "transparent");
				addClass(obj, "opacity_0_8");
				clearInterval(timer2);
			}, 500)
	
	
		};
		//返回
		back.onclick = function() {
			event.cancelBubble = true;
			//標題界面進入與遊戲中頁面進入返回不同頁面
			if (index === 1 || index == undefined) {
	
				clearInterval(timer);
				addClass(playing, "animation5");
	
				addClass(obj, "animation6");
				var timer = setInterval(function() {
					addClass(obj, "display_none");
					removeClass(obj, "display_block");
					removeClass(playing, "animation5");
					removeClass(obj, "animation6");
					addClass(playing, "opacity_1");
					removeClass(playing, "opacity_0_5");
					removeClass(obj, "opacity_0_8");
					clearInterval(timer);
				}, 500)
				index = 0;
			} else if (index === 0) {
				addClass(obj, "animation1")
				removeClass(guodu, "display_none");
				addClass(guodu, "display_block");
				var timer = setInterval(function() {
					removeClass(gamestart, "display_none")
					addClass(gamestart, "display_block")
					removeClass(obj, "display_block");
					addClass(obj, "display_none");
					removeClass(guodu, "display_block")
					addClass(guodu, "display_none")
					addClass(obj, "transparent");
					removeClass(obj, "opacity_1");
					clearInterval(timer);
				}, 2000)
				addClass(gamestart, "animation2");
	
				var timer2 = setInterval(function() {
					clearInterval(timer2);
					removeClass(obj, "animation1");
					removeClass(gamestart, "animation2")
					clearInterval(timer2);
				}, 4000)
	
			}
		}
		
	
	
	}



//淡入淡出
function fade(obj,obj2) {
	event.cancelBubble = true;
	clearInterval(timer);
	addClass(obj2, "animation3");
	addClass(obj, "animation4");
	removeClass(obj, "display_none");
	addClass(obj, "display_block");
	var timer = setInterval(function() {
		removeClass(obj2, "opacity_1");
		addClass(obj2, "opacity_0_5");
		removeClass(obj2, "animation3");
		removeClass(obj, "animation4");
		clearInterval(timer);
	}, 500)

	var timer2 = setInterval(function() {
		clearInterval(timer2);
		removeClass(obj, "transparent");
		addClass(obj, "opacity_0_8");
		clearInterval(timer2);
	}, 500)
};

function back(obj, back,obj2) {
	back.onclick = function() {
		event.cancelBubble = true;
		clearInterval(timer);
		addClass(obj2, "animation5");
		addClass(obj, "animation6");
		var timer = setInterval(function() {
			addClass(obj, "display_none");
			removeClass(obj, "display_block");
			removeClass(obj2, "animation5");
			removeClass(obj, "animation6");
			addClass(obj2, "opacity_1");
			removeClass(obj2, "opacity_0_5");
			removeClass(obj, "opacity_0_8");
			clearInterval(timer);
		}, 500)
	};
};

//切换控制显示的函数
function tootleShow(obj,obj2){
		obj.onclick = function(){
			addClass(obj,"display_none");
			removeClass(obj2,"display_none");
		}
	}
	
//切换存读档上下页。
function tootlePage(obj,divHide,divShow){
	obj.onclick = function(){
		tootleClass(divHide,"saveload_left");
		tootleClass(divShow,"saveload_left");
		tootleClass(divHide,"display_none");
		tootleClass(divShow,"display_none");
	}
		
	}


//
function end_animation(){
	
		event.cancelBubble = true;
		audio.src = "";
		addClass(guodu, "display_block");
		let timer3 = setInterval(function(){
			addClass(playing, "animation7")
			removeClass(guodu, "display_none");
			
			addClass(gamestart, "animation2");
			clearInterval(timer3);
		},2000)
		
		let timer = setInterval(function() {
			removeClass(playing, "display_block");
			removeClass(playing, "opacity_0_5");
			addClass(playing, "display_none");
			removeClass(playing, "animation7");
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
	};
	
	function img_fade(img,imgsrc){
		removeClass(img,"display_none");
		img.src = imgsrc;
		addClass(img,"animate__fadeIn");
		let timer = setInterval(function(){
			removeClass(img,"animate__fadeIn");
			clearInterval(timer);
		},500)
		
		
	}
	
	function img_out(img){
		addClass(img,"animate__fadeOut");
		let timer = setInterval(function(){
			img.src = "";
			addClass(img,"display_none")
			removeClass(img,"animate__fadeOut");
			clearInterval(timer);
		},500)
	}
	
	//场景切换
	function bg_change(bgName){
		choose_index = 1;
		addClass(guodu, "display_block");
		addClass(playing,"animation1_0_5");
		let timer = setInterval(function(){
			removeBg(playing,"bg");
			addClass(playing,bgName);
			removeClass(playing,"animation1_0_5");
			addClass(playing,"animation_2_0_5");
			clearInterval(timer);
		},1000)
		
		let timer2 = setInterval(function(){
			removeClass(playing,"animation_2_0.5")
			clearInterval(timer2);
			removeClass(guodu, "display_block");
			choose_index = 0;
		},3000)
	}