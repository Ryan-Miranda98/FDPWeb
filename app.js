$(document).ready(function() {
		$('#material-tabs').each(function() {

				var $active, $content, $links = $(this).find('a');

				$active = $($links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				$links.not($active).each(function() {
						$(this.hash).fadeOut();
				});

				$(this).on('click', 'a', function(e) {

						$active.removeClass('active');
						$content.fadeOut();

						$active = $(this);
						$content = $(this.hash);

						$active.addClass('active');
						$content.fadeIn();

						e.preventDefault();
				});
		});
});