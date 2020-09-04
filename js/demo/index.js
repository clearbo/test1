define(["scale","drag"],function(scale,drag){
    //封装函数
    
    function init(){
        var oDiv1 = document.getElementById("div1");
        var oDiv2 = document.getElementById("div2");
        var oDiv3 = document.getElementById("div3");
        var oBtn = document.getElementById("btn1");
        
        oBtn.onclick = function(){
            //显示div1
            if(oDiv1.style.display == "none"){
                oDiv1.style.display = "block";
            }else{
                oDiv1.style.display = "none";
            }   
            scale.scale(oDiv1,oDiv2);  
        }
        drag.drag(oDiv3);
    }

    return{
        init:init
    }
})