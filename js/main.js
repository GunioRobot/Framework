// jQuery Document Ready

$(document).ready(function() {

    //Snippet to load further scripts, if necessary 
    if ($('selector').length) {
        $.getScript('scriptUrl.js', function() {
            init();
        });
    };

}); 