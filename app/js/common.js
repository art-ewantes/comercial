$(document).ready(function() {


	$("#toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$("#menu").slideToggle();
	});

// 	var theToggle = document.getElementById('toggle_mnu');

// // based on Todd Motto functions
// // http://toddmotto.com/labs/reusable-js/

// // hasClass
// function hasClass(elem, className) {
// 	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
// }
// // addClass
// function addClass(elem, className) {
//     if (!hasClass(elem, className)) {
//     	elem.className += ' ' + className;
//     }
// }
// // removeClass
// function removeClass(elem, className) {
// 	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
// 	if (hasClass(elem, className)) {
//         while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
//             newClass = newClass.replace(' ' + className + ' ', ' ');
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
//     }
// }
// // toggleClass
// function toggleClass(elem, className) {
// 	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
//     if (hasClass(elem, className)) {
//         while (newClass.indexOf(" " + className + " ") >= 0 ) {
//             newClass = newClass.replace( " " + className + " " , " " );
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
//     } else {
//         elem.className += ' ' + className;
//     }
// }

// theToggle.onclick = function() {
//    toggleClass(this, 'on');
//    return false;
// }


});
// $(document).ready(function(){

//   $('div.mnu>nav>li').click(function () {
//      if ($( ".mnu" ).hasClass( "navbar" )) {
//       clearTimeout($.data(this,'timer'));
//      $('ul',this).stop(true,true).slideDown(200);
//      };


//   }, function () {
//          if ($( ".mnu" ).hasClass( "navbar" )) {
//     $.data(this,'timer', setTimeout($.proxy(function() {
//       $('ul',this).stop(true,true).slideUp(200);
//     }, this), 100));
//        };
//   });

// });

// $('.mnu nav ul li').click(function() {
// 	$(this).parent().siblings().find('ul').slideUp(300);
// 	$(this).next('ul').stop(true, false, true).slideToggle(300);
// 	return false;
// });

// $(document).ready(function(){

//   $('nav.navbar>#ddmenu>li').hover(function () {
//      if ($( "#navbarr" ).hasClass( "navbar" )) {
//       clearTimeout($.data(this,'timer'));
//      $('ul',this).stop(true,true).slideDown(200);
//      };


//   }, function () {
//          if ($( "#navbarr" ).hasClass( "navbar" )) {
//     $.data(this,'timer', setTimeout($.proxy(function() {
//       $('ul',this).stop(true,true).slideUp(200);
//     }, this), 100));
//        };
//   });

// });


