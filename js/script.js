
$(window).on('load', function () {
	$('body').addClass('run');

	// alert("Window Loaded");

	// setTimeout(function() {
	// 	$('.loading').fadeOut();
	// 	$('body').addClass('run');
 //   }, 0);

 });


// (function() {
//    alert('ok');
// })();


$(function() {

	mansory = true;
	statutFullImg = false;

	// $($('.sections ul li').get().reverse()).each(function(index){
	$('.sections ul li').each(function(index){
      var self = this;
      setTimeout(function () {
      	$(self).addClass('run');
      }, index*70);
	});

	$('.sections ul li').on('click', function() {
		$this = $(this);
		catSelected = $this.attr('data-open');
		fullContent = true;

		$('.section-view').addClass('active');
		$('.close-content').addClass('active');

		$this.addClass('hide-img');

		$this = $this.children();
		thisWidth = $this.outerWidth();
		thisLeft = $this.offset().left;

		$('.current-section').html($this.clone());
		$('.current-section .imgbg').css({
			width: thisWidth,
			left: thisLeft
		})


		// if(mansory) {

			// mansory = false;
		// }


		setTimeout(function() {
			$('.current-section .imgbg').css({
				width: '100%',
				left: 0
			})

			$('.content-page').addClass('run');
			$('.'+catSelected).addClass('run');

			$('.'+catSelected+' .grid').masonry({
			  itemSelector: '.grid-item',
			  columnWidth: 200
			});
		}, 100)

		setTimeout(function() {
			$('.radial-effect').addClass('active');
			$('.sections ul li.hide-img').removeClass('hide-img');
		}, 800)

	});

	function leaveFullContent() {
		$('.content-page').addClass('leave');
		$('.close-content').addClass('leave');

		setTimeout(function() {
			$('.current-section .imgbg').css({
				width: thisWidth,
				left: thisLeft
			})
			$('.section-view.active').addClass('leave');

		}, 400)

		setTimeout(function() {
			$('.current-section').empty();

			$('.radial-effect').removeClass('active');
			$('.content-page').removeClass('run leave');
			$('.cat-content').removeClass('run leave');
			$('.section-view').removeClass('active leave');
			$('.close-content').removeClass('active leave');

			fullContent = false;

		}, 1200)
	}
	function leaveFullImg() {
		$('.fullscreen-img').removeClass('active');
		statutFullImg = false;
	}



	$('.close-view').on('click', function() {
		leaveFullContent()
	})

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			if(statutFullImg) {
				leaveFullImg()
			} else {
				if(fullContent) {
					leaveFullContent()
				}
			}
	   }
	});

	$('.open-contact').on('click', function() {
		$('.global').addClass('active');
		$('.contact').addClass('active');

		return false;
	})

	$('.close-contact').on('click', function() {
		$('.global').removeClass('active');
		$('.contact').removeClass('active');

		return false;
	})

	$('.close-fullscreen').on('click', function() {
		leaveFullImg()
	})

	$('.openFullS').on('click', function() {
		statutFullImg = true;
		$('.fullscreen-img').addClass('active');
		$('.fulls-img').attr('src', $(this).attr('src'));
	})

	

	var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    });

    typewriter
    .pauseFor(2500)
    .typeString('Developpeur Web en reconversion.')
    .pauseFor(800)
    .deleteAll()
    .typeString('Joueur de football americain.')
    .pauseFor(800)
    .deleteAll()
    .typeString('Un humain trop cool.')
    .pauseFor(800)
    .deleteChars(10)
    .pauseFor(800)
    .typeString(' de 29 ans et deja papa 4 fois.')
    .pauseFor(1000)
    .pauseFor(1000)
    .start();

  

})








