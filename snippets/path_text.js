// Blue text put in center of a paths bounding box allowing click events.
// The path is invisible but you can style it however you see fit.
// Example usage
// canvas.path_text('m0,0 l100,0 l0,100 l-100,0 z',{},{ click: function(){ alert('Clicked'); } })
//
// You could even set something on the returned set such as info = { test: 1 } and then use that var inside the functions.
// The context of all functions is of the set returned from this function

Raphael.fn.path_text = function(path, text, attrs, events) {
    if (text === undefined) text = '';
    if (attrs === undefined) attrs = {};
    if (events === undefined) events = {};
    var s = this.set();

    var transparentOverlay = this.path(path).attr({
        "fill": "#002BEE",
        "fill-opacity": "0.0",
        "opacity": "0.0",
        "cursor": 'hand'
    });
    var box = transparentOverlay.getBBox();
    var text = this.text(box.x + box.width / 2, box.y + box.height / 2, text).attr(attrs);
    s.push(text);

    transparentOverlay.toFront();
    transparentOverlay.click(function(event) {
        if (events.click instanceof Function) events.click.call(s, event);
    });
    transparentOverlay.dblclick(function(event) {
        if (events.dblclick instanceof Function) events.dblclick.call(s, event);
    });
    transparentOverlay.hover(function(event) {
            if (events.hover instanceof Function) events.hover.call(s, event);
        },
        function(event) {
            if (events.unhover instanceof Function) events.unhover.call(s, event);
        });
    s.push(transparentOverlay);

    return s;
}