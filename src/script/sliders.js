$(document).ready(function () {
	$('.flexslider').flexslider({
		animation: 'fade',
		controlsContainer: '.flexslider'
	});
});








// $(function () {


// 	var width = $('#slider-container').width();//видимая ширина слайдера//

// 	$('#slider-list>li').width(width);//делаем видимым только один элемента слайдера//
// 	$('#slider-list').width(width*$('#slider-list>li').length);//общая длина слайдера(которую не видим) ширина одного элемента умноженая на количество элементов//

// 	$('#slider-list').css('left', -width);//смешаем влево на ширину одного элемента//
// 	$('#slider-list>li:last-child').prependTo('#slider-list');//последний элемент вырезаем и вставляем в начало списка элементов//

// 	function goLeft() {//функция перемещения слайдов влево//
// 		$('#slider-list').animate({
// 			'margin-left': -width
// 		},500, function() {
// 					$('#slider-list>li:first-child').appendTo('#slider-list');//первый элемент вставляем в конец//
// 					$('#slider-list').css('margin-left', 0);//ровняем список элементов//
// 				});
// 	}

// 	function goRight() {//функция перемещения слайдов вправо//
// 		$('#slider-list').animate({
// 			'margin-left': width
// 		},500, function() {
// 					$('#slider-list>li:last-child').prependTo('#slider-list');//последний элемент вставляем в начало//
// 					$('#slider-list').css('margin-left', 0);//ровняем список элементов//
// 				});
// 	}


// 	$('#slider-buttons-right').click(goLeft);//вешаем обработчики событий//
// 	$('#slider-buttons-left').click(goRight);
// })

// //_______________________________________________________________________________________________________________________________________//


// $(function () {


// 	var width = $('#slider-container2').width();//видимая ширина слайдера//

// 	$('#slider-list2>li').width(width);//делаем видимым только один элемента слайдера//
// 	$('#slider-list2').width(width*$('#slider-list2>li').length);//общая длина слайдера(которую не видим) ширина одного элемента умноженая на количество элементов//

// 	$('#slider-list2').css('left', -width);//смешаем влево на ширину одного элемента//
// 	$('#slider-list2>li:last-child').prependTo('#slider-list2');//последний элемент вырезаем и вставляем в начало списка элементов//

// 	function goLeft() {//функция перемещения слайдов влево//
// 		$('#slider-list2').animate({
// 			'margin-left': -width
// 		},500, function() {
// 					$('#slider-list2>li:first-child').appendTo('#slider-list2');//первый элемент вставляем в конец//
// 					$('#slider-list2').css('margin-left', 0);//ровняем список элементов//
// 				});
// 	}

// 	function goRight() {//функция перемещения слайдов вправо//
// 		$('#slider-list2').animate({
// 			'margin-left': width
// 		},500, function() {
// 					$('#slider-list2>li:last-child').prependTo('#slider-list2');//последний элемент вставляем в начало//
// 					$('#slider-list2').css('margin-left', 0);//ровняем список элементов//
// 				});
// 	}


// 	$('#slider-buttons-right2').click(goLeft);//вешаем обработчики событий//
// 	$('#slider-buttons-left2').click(goRight);
// })


// //________________________________________________________________________________________________________________________________________//



// $(function () {


// 	var width = $('#slider-container3').width();//видимая ширина слайдера//

// 	$('#slider-list3>li').width(width);//делаем видимым только один элемента слайдера//
// 	$('#slider-list3').width(width*$('#slider-list3>li').length);//общая длина слайдера(которую не видим) ширина одного элемента умноженая на количество элементов//

// 	$('#slider-list3').css('left', -width);//смешаем влево на ширину одного элемента//
// 	$('#slider-list3>li:last-child').prependTo('#slider-list3');//последний элемент вырезаем и вставляем в начало списка элементов//

// 	function goLeft() {//функция перемещения слайдов влево//
// 		$('#slider-list3').animate({
// 			'margin-left': -width
// 		},500, function() {
// 					$('#slider-list3>li:first-child').appendTo('#slider-list3');//первый элемент вставляем в конец//
// 					$('#slider-list3').css('margin-left', 0);//ровняем список элементов//
// 				});
// 	}

// 	function goRight() {//функция перемещения слайдов вправо//
// 		$('#slider-list3').animate({
// 			'margin-left': width
// 		},500, function() {
// 					$('#slider-list3>li:last-child').prependTo('#slider-list3');//последний элемент вставляем в начало//
// 					$('#slider-list3').css('margin-left', 0);//ровняем список элементов//
// 				});
// 	}


// 	$('#slider-buttons-right3').click(goLeft);//вешаем обработчики событий//
// 	$('#slider-buttons-left3').click(goRight);
// })







