$(function(){
	$("body").addClass("js-enabled");

	$('#xms_paints .slides').cycle({
        fx:     'scrollHorz', 
        speed:   200, 
        // next:   '#yetipark_slider_next', 
        // prev:   '#yetipark_slider_prev', 
        pause:   1,
        pager:   0,
        timeout: 6000
    });

    $('#hwn_paints .slides').cycle({
        fx:     'scrollHorz', 
        speed:   200, 
        // next:   '#yetipark_slider_next', 
        // prev:   '#yetipark_slider_prev', 
        pause:   1,
        pager:   0,
        timeout: 6000
    });

});