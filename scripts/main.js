$(function(){
    $("body").addClass("js-enabled");

    shade = $("#shade");

    shade.click(function(){shade.fadeOut(200);vidframe.remove();});

    $(".taunt .taunt_vid").click(function(ev){
        ev.preventDefault();
        ev.stopPropagation();

        var vidid = ev.currentTarget.dataset.vid;
        vidframe = $("<iframe class=\"video\" src=\"http://www.youtube.com/embed/" + vidid + "?showinfo=0&amp;vq=hd720&amp;rel=0&amp;autohide=1&amp;autoplay=1\" frameborder=\"0\" allowfullscreen=\"\"></iframe>");
        shade.children().append(vidframe);

        shade.fadeIn(200);
    });

    $('#cauldron .slides').cycle({
        log: false,
        fx:     'scrollHorz',
        speed:   200,
        next:   '> .next',
        prev:   '> .prev',
        timeout: 4000,
        delay:   100
    });

    $('#stormy .slides').cycle({
        log: false,
        fx:     'scrollHorz',
        speed:   200,
        next:   '> .next',
        prev:   '> .prev',
        timeout: 4000,
        delay:   200
    });

    $('#spookey .slides').cycle({
        log: false,
        fx:     'scrollHorz',
        speed:   200,
        next:   '> .next',
        prev:   '> .prev',
        timeout: 4000,
        delay:   300
    });

    $('#turbine .slides').cycle({
        log: false,
        fx:     'scrollHorz',
        speed:   200,
        next:   '> .next',
        prev:   '> .prev',
        timeout: 4000,
        delay:   400
    });

    $('#hwn_paints .slides').cycle({
        log: false,
        fx:     'scrollHorz',
        speed:   200,
        next:   '> .next',
        prev:   '> .prev',
        timeout: 4000,
        slides:  "> a",
        random: true
    });

    $('#xms_paints .slides').cycle({
        log: false,
        fx:     'scrollHorz',
        speed:   200,
        next:   '> .prev',
        prev:   '> .next',
        timeout: 4000,
        slides:  "> a",
        random: true,
        reverse: true
    });

});