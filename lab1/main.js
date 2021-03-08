function init(){
    document.getElementById("btn1").onclick = checkNumber;
    document.getElementById("inputNumber").onkeyup = _keyUp;
}

var _randomArray = [0,1,2,3,4,5,6,7,8,9];
var _randomNumber = [];
for (var i = 0; i < 4; ++i) {
    var ran = Math.floor(Math.random() * _randomArray.length);
    if(i==3 && ran==0){
        console.log("0+1");
        _randomNumber.push(_randomArray.splice(ran+1, 1));
    }
    else{
        _randomNumber.push(_randomArray.splice(ran, 1));    //舊陣列去除數字轉移到新陣列  
    }
}

console.log(_randomNumber);
    
/*
for(var i=0;i<4;++i){
    for(var j=0; j<4; ++j){
        if(_randomNumber[i] != _randomNumber[j])
        _randomNumber[i]=Math.floor(Math.random()*9);
    }
}
*/

// alert(_randomNumber);
var clickTime = 0;
function checkNumber(){
    var A = 0, B = 0;
    var transfer_InputNum = document.getElementById("inputNumber").value;
    if(!checkLength(transfer_InputNum)){       
        return;
    }

    /*
    var _theInputNum = new Array();          //有無其他寫法
    for(var i=0;i<4;++i){
        _theInputNum[i] = 0;
    }*/
    var _theInputNum =[0,0,0,0];

    for(var i=0 ;i<4; ++i){
        _theInputNum[i] = parseInt(transfer_InputNum % 10);
        transfer_InputNum = parseInt(transfer_InputNum / 10);
    }
    
    for(var i=0; i<4; ++i){
        if(_theInputNum[i] == _randomNumber[i]){
            ++A;
        }
    }
    
    for(var i=0; i<4; ++i){
        for(var j=0; j<4; ++j){
            if(_theInputNum[i] == _randomNumber[j]){
                ++B;
            }
        }
    }
    
    B -= A;
    //alert(A + "A" + B + "B");
    ++clickTime;
    document.getElementById("history").innerHTML += "(" + clickTime + ")" + " Number: " + _theInputNum + " => " 
    + A + "A" + B +"B" + "<br>";

    if(A==4){
        alert("答對了！");
    }

}

function checkLength(Num){              
    var len = 0;
    while(Num>=1){
        Num /= 10;
        ++len;
    }
    if(len>4){
        alert("超出位數請輸入四位數");
        return false;
    }
    else if(len<4){
        alert("請輸入四位數字");
        return false;
    }
    return true;
}

function _keyUp(e){                       //e.target target是什麼
    if(isNaN(e.target.value)){
        alert("請輸入數字！");
        e.target.value="";
    }
}

