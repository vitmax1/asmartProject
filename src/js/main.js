$(document).ready(function () {
	
	//////////// смена возраста ////////////
	$('.age').on('click', function () {
		$('.age').removeClass('age-choose');
		$(this).addClass('age-choose');
	});
	//////////// валидация формы ////////////
	$('#order-form').validate({
		errorClass: "invalid",
		errorElement: "div",
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			phone: "required",
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			username: {
				minlength: jQuery.validator.format("от 2 до 15 символов"),
				maxlength: jQuery.validator.format("до 15 символов"),
				required: "Заполните поле"
			},
			phone: {
				required: "Заполните поле"
			},
			email: {
				email: "Введите корректный email",
				required: "Заполните поле"
			},
		},
		/////////////////  обработка AJAX формы   /////////////////
		submitHandler: function (form) {
			$.ajax({
				url: 'mail/smart.php',
				type: 'POST',
				data: $(this).serialize(),
				success: function (data) {
					$('.success').html('Ваша форма отправлена');
				},
			});
			return false;
		}
	})
	$(".phone").mask("8 (999) 999-9999");

	///////////////// обязательный чекбокс ///////////////////

	$('#polit').on('change', function () {
		if ($('#polit').prop('checked')) {
			$('#submit').attr('disabled', false);
		} else {
			$('#submit').attr('disabled', true);
		}
	});

	/////////////////   меню-адаптив     /////////////////////

	$('.nav-menu__btn').click(function () {
		$(".nav-menu__list").toggleClass('nav-menu__show');
		$(this).css("display", "none");
		$(".nav-menu__social").toggleClass('nav-menu__socialcolumn');
	});

	$(window).resize(function () {
		if ($(window).width() < 975) {
			$('.nav-menu__btn').css("display", "block");
			$(".nav-menu__list").removeClass('nav-menu__show');
		}
		else {
			$('.nav-menu__btn').css("display", "none");	
			$(".nav-menu__social").removeClass('nav-menu__socialcolumn');
		}
	});

	$('#submit').on('click', e => {
		if (!$('#polit').prop('checked')) {
			e.preventDefault();
			$('#agree-message').show();
		}
	});


});