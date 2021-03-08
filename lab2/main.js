var DepartArray = new Array();       //new table
DepartArray[0] = new Array("程式");
DepartArray[1] = new Array("程式");
DepartArray[2] = new Array("程式");
var DateArray = new Array();
DateArray[0] = new Array("2017-04-25(二)");
DateArray[1] = new Array("2017-04-25(二)");
DateArray[2] = new Array("2017-04-25(二)");
var EmployeeArray = new Array();
EmployeeArray[0] = new Array("Richy");
EmployeeArray[1] = new Array("Stan");
EmployeeArray[2] = new Array("Chuck");
var WorkArray = new Array();
WorkArray[0] = new Array("09:28:12");
WorkArray[1] = new Array("09:38:03");
WorkArray[2] = new Array("09:20:44");
var GetoffArray = new Array();
GetoffArray[0]= new Array("18:38:58");
GetoffArray[1]= new Array("18:55:27");
GetoffArray[2]= new Array("18:32:55");
var LateArray = new Array();
LateArray[0] = new Array("0");
LateArray[1] = new Array("8");
LateArray[2] = new Array("0");


function init(){
    	
		var div_model = document.getElementById("div_model");
		var tpl = new fastTemplate();
		tpl.init(div_model);
		
		for(var j=0; j<DepartArray.length; j++){
				tpl.addBlock("aaa");		
				tpl.replace("Depart", DepartArray[j]);
                tpl.replace("*Date*", DateArray[j]);
                tpl.replace("*Employee*", EmployeeArray[j]);
                tpl.replace("*Work*", WorkArray[j]);
                tpl.replace("*Getoff*", GetoffArray[j]);
                tpl.replace("*Late*", LateArray[j]);              //可在此給予每個TAG ID ex:late*id*
		}
			
		var div_show = document.getElementById("div_show");

		div_show.innerHTML = tpl.fastPrint();	
         //3秒後執行exeFun Function
        setTimeout(exeFun, 3000);
}	

function exeFun(){
    
    //置換class
    document.getElementById("date1").className = "red";
    
    //置換內容
    document.getElementById("late").innerHTML = 100;   //如何置換第三個  
}

