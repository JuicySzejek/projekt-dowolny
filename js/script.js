var dragging = false
$('img').on('dragstart', function(event) { event.preventDefault(); });

$(function() {
    var target = $('#se');
    dragging = true;
    $(document).mousemove(function(e) {
        if (dragging) {
            var mouse_x = e.pageX;
            var mouse_y = e.pageY;
            var radians = Math.atan2(mouse_x - 10, mouse_y - 10);
            var degree = (radians * (180 / Math.PI) * -1) + 90;
            target.css('transform', 'rotate(' + degree + 'deg)');
        }
    })
})