//window.addEventListener("DOMContentLoaded", init);

function init(){
        //document.getElementById("btn").addEventListener("click", loadData);
        loadData();
}

function loadData(){
		
		var _url = "json.php";
		var _param = "";
		var hr = new HttpRequest();
		
		hr.addEventListener("onError", onError);
		hr.addEventListener("LoadComplete", loadFinish);
		hr.loadURL(_url, "POST", _param)
}

function loadFinish(jsonstr){
	
		var ary = JSON.parse(jsonstr);
        console.log(ary);
        var div_model = document.getElementById("div_model");
		var tpl = new fastTemplate();
		tpl.init(div_model);
		
		for(var j=0; j<ary.length; j++){
				tpl.addBlock("aaa");			
				tpl.replace("*Depart*", ary[j]["Depart"]);
                tpl.replace("*Dated*", ary[j]["Dated"]);
                tpl.replace("*Employee*", ary[j]["Employee"]);
                tpl.replace("*Work*", ary[j]["Work"]);
                tpl.replace("*Getoff*", ary[j]["Getoff"]);
                tpl.replace("*Late*", ary[j]["Late"]);   
		}
			
		var div_show = document.getElementById("div_show");

		div_show.innerHTML = tpl.fastPrint();	
        
		
}

function onError(msg){
	alert("load");
		//error
}

