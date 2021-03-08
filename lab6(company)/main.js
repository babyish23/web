//window.addEventListener("DOMContentLoaded", init);
function init(){
        //document.getElementById("btn").addEventListener("click", loadData);
        loadData();
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
	
		var xmlnode = new XmlNode(xml.getElementsByTagName("serverresponse"));
        var xmlnodeRoot = xml.getElementsByTagName("serverresponse")[0];
        var userObj = xmlnodeRoot.getElementsByTagName("user");
        var div_model = document.getElementById("div_model");
        var tpl = new fastTemplate();
        tpl.init(div_model);
        //console.log(xmlnodeRoot);


        for(var i = 0; i < userObj.length; i++){
            var tmpObj = userObj[i];
            tpl.addBlock("aaa");
            tpl.replace("*ID*", xmlnode.getNodeVal(xmlnode.Node(tmpObj,"id")));
            tpl.replace("*MEMBER*", xmlnode.getNodeVal(xmlnode.Node(tmpObj,"username")));
        }

        var div_show = document.getElementById("div_show");
        div_show.innerHTML = tpl.fastPrint();        
        /*
        var str = "";
        for(var i = 0 ; i < userObj.length; i++){
            //var tmpObj = userObj[i];
            //var id = xmlnode.Node(tmpObj,"id").innerHTML;            
            var id = xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"id")[i]);
            var username = xmlnode.getNodeVal(xmlnode.Node(xmlnodeRoot,"username")[i]);
            str += "id : "+id+" , <tab> username : "+username+" <br>";
        }
       
		var div_show = document.getElementById("div_show");
        div_show.innerHTML = str;
        */
		
}

function onError(msg){
		//error
}