//Define console if not defined
if( typeof console == 'undefined' ) {
      var console = {
            assert            : function() {}
            ,clear            : function() {}
            ,count            : function() {}
            ,debug            : function() {}
            ,dir              : function() {}
            ,dirxml           : function() {}
            ,error            : function() {}
            ,exception        : function() {}
            ,group            : function() {}
            ,groupCollapsed   : function() {}
            ,groupEnd         : function() {}
            ,info             : function() {}
            ,log              : function() {}
            ,notify           : function() {}
            ,profile          : function() {}
            ,profileEnd       : function() {}
            ,table            : function() {}
            ,time             : function() {}
            ,timeEnd          : function() {}
            ,trace            : function() {}
            ,warn             : function() {}
      };
}

// jQuery Document Ready
$(document).ready(function() {
    //Snippet to load further scripts, if necessary 
    if ($('selector').length) {
        $.getScript('scriptUrl.js', function() {
            init();
        });
    };
});