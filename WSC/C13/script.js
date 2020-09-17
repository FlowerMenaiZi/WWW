function draggable(el) {
    // TODO
    el.onmousedown=function (e) {
        var endx=0;
        var endy=0;
        var left= parseInt(el.getBoundingClientRect().left);
        var top = parseInt(el.getBoundingClientRect().top);
        var downx=e.pageX;
        var downy=e.pageY;
        el.onmousemove=function (es) {
             endx=es.pageX-downx+left;
             endy=es.pageY-downy+top;
            // console.log(endx,endy);
             el.style.top=endy+'px';
             el.style.left=endx+'px';
        }
    };
    el.onmouseup=function () {
        el.onmousemove=null;
    }
}

draggable(document.getElementById('draggable'));
