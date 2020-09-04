define(["drag"],function(drag){
    function scale(node1,node2){
        node2.onmousedown = function(ev){

            var e = ev || window.event;
            var w = node1.offsetWidth;
            var h = node1.offsetHeight;
            var l = e.clientX;
            var t = e.clientY;

            document.onmousemove = function(ev){
                var e = ev || window.event;
                var W = w + (e.clientX - l);
                var H = h + (e.clientY - t);

                W = drag.range(W, 100, 500);
                H = drag.range(H, 100, 500);
                
                node1.style.width = W + "px";
                node1.style.height = H + "px";
            }
        }

        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }

    return {
        scale:scale
    }
})