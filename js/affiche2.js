$(document).ready(function() {
        $("#pushgraph").click(function() {
            $("#graph").toggle();
        });
        $("#pushcode").click(function() {
            $("#graph").replaceWith("#code");
        });
});