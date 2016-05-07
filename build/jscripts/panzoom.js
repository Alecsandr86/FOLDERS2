$(document).ready(function() {
	$('.tab-content').find('li').each(function() {
		var $parent = $(this);
		$parent.find('svg').panzoom({
			contain: 'invert',
			increment: 1,
			maxScale: 10,
			minScale: 1,
			$zoomIn: $parent.find(".zoom-in"),
			$zoomOut: $parent.find(".zoom-out"),
		});
	});
});