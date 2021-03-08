//window.addEventListener("DOMContentLoaded", init);

function init(){
    loadData();    
    //document.getElementById("btn").addEventListener("click", loadData);
}

function loadData(){
		
		var _url = "xml.php";
		var _param = "";
		var hr = new HttpRequestXML();
		
		hr.addEventListener("onError", onError);
		hr.addEventListener("LoadComplete", loadFinish);
		hr.loadURL(_url, "POST", _param)
}

function loadFinish(xml){
	
		var xmlnode = new XmlNode(xml.getElementsByTagName("serverresponse1"));
		var xmlnodeRoot = xml.getElementsByTagName("serverresponse1")[0];

        
		var div_model = document.getElementById("div_model");
		var tpl = new fastTemplate();
		tpl.init(div_model);
		for(var j=0; j<xml.getElementsByTagName("Depart").length ;j++){
				tpl.addBlock("aaa");			
				tpl.replace("Depart", xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"Depart")[j]));
                tpl.replace("*Date*", xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"Date")[j]));
                tpl.replace("*Employee*", xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"Employee")[j]));
                tpl.replace("*Work*", xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"Work")[j]));
                tpl.replace("*Getoff*", xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"Getoff")[j]));
                tpl.replace("*Late*", xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"Late")[j]));   
		}
			
		var div_show = document.getElementById("div_show");

		div_show.innerHTML = tpl.fastPrint();	
        
		//(user);
		
}

function onError(msg){
    alert("error")
		//error
}