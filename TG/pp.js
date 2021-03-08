var step = 20;
var puiXFlag = true;
var puiYFlag = true;
var intervalId = 0;
var deg = 0;

function puiMove() {
    intervalId = window.setInterval(function() {
        //根據按鍵的值移動板
        var ban = document.getElementById("showBan");
        var banX = parseInt(ban.style.left);
        var banH3 = document.getElementById("banH3");
        banH3.innerHTML = "ＰＵＩＰＵＩ";
        //獲取小球
        var pui = document.getElementById("showpui");
        var ban = document.getElementById("showBan");
        var puiH3 = document.getElementById("puiH3");
        //獲取板的left的值
        var banX = parseInt(ban.style.left);
        //改變座標
        var x = parseInt(pui.style.left);
        var y = parseInt(pui.style.top);
        rotate();
    
        //實現座標資訊
        puiH3.innerHTML = "Mission : 接到胡蘿蔔吧!";
        //判斷X的大小
        if (puiXFlag) {
            pui.style.left = x + step + "px";
            if (x >= 380) {
            puiXFlag = false;
            }
        } 
        else {
            pui.style.left = x - step + "px";
            if (x <= 20) {
                puiXFlag = true;
            }
        }
        //判斷Y的大小
        if (puiYFlag) {
            pui.style.top = y + step + "px";
            if (y == 420 && (x >= banX && x <= banX + 100)) {
                puiYFlag = false;
            }
            if (y > 440) {
                window.clearInterval(intervalId);
                alert("Game Over");
            }
        } else {
            pui.style.top = y - step + "px";
            if (y <= 20) {
                puiYFlag = true;
            }
        }
    }, 70);
}

function rotate() { 
var r=document.getElementById("showpui"); 
deg+=25; 
r.style.transform="rotate("+deg+"deg)"
}


window.onkeydown = function(event) {
    //根據按鍵的值移動板
    var ban = document.getElementById("showBan");
    var banX = parseInt(ban.style.left);
    var banH3 = document.getElementById("banH3");
    //接球的範圍是
    //獲取事件
    var eve = event || window.event;
    //獲取按鍵的值
    var code = eve.keyCode;
    //判斷左右
    if (code == 37) {
        if (banX > 20) {
            ban.style.left = banX - step + "px";
        }
    } else if (code == 39) {
        if (banX < 300) {
            ban.style.left = banX + step + "px";
        }
    }
}
