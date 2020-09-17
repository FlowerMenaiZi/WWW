function draggable(el) {
    // TODO
    el.onmousedown=function (e) {
        var endx='';
        var endy='';
        var left=parseInt(el.getBoundingClientRect().left);
        var top=parseInt(el.getBoundingClientRect().top);
        var downx=e.pageX;
        var downy=e.pageY;
        el.onmousemove=function (es) {
            endx=es.pageX-downx+left;
            endy=es.pageY-downy+top;
            el.style.left=endx+"px";
            el.style.top=endy+"px";
        }
    };
    el.onmouseup=function () {
        el.onmousemove=null;
    }
}

draggable(document.getElementById('draggable'));
