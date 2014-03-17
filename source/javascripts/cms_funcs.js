	function createXMLHttpRequest(){
		var request = false;
		if(window.XMLHttpRequest){
			if(typeof XMLHttpRequest != 'undefinded'){
				try{
					request = new XMLHttpRequest();
				}catch(e){
					request = false;
				}
			}else{
				try{
					request = new ActiveXObject('Msxml2.XMLHTTP');
				} catch(e){
					try{
						request = new ActiveXObject('Microsoft.XMLHTTP');
					} catch(e){
						request = false;	
					}
				}
			}
		}
		return request;
		
	}
	
	var request = createXMLHttpRequest();
	

	
	function refreshGallery(gallery_id){
		if(request){
			
            var send_vars = "?gal_id="+gallery_id;
			var gal_grab_url = "/galleries/"+gallery_id+".xml"
				
			request.open('GET', gal_grab_url, true);
			request.onreadystatechange = parseResponse;
			request.send(send_vars);

		}else{
		}
	}
	
	function parseResponse() {
		/* READY */

		if(request.readyState == 4){
			if(request.status == 200){
				var response = request.responseText;
				
				var response = request.responseXML;
				//var xmld = XML.newDocument();
				//xmld = loadXML(response);
				//var photoList = document.evaluate("photos.photo[1].email", response, null, XPathResult.STRING_TYPE, null).stringValue;
				var paramList = response.getElementsByTagName('photo');
				//var string = (new XMLSerializer()).serializeToString(paramList[0][0]);
				//(("list:"+string);
				var out = '<ul id="drag_list">';
/*				for(i=0, il = paramList.length; i<il;)*/
				for(i=0; i<paramList.length; i++){
					out += '<li id=\"p_'+paramList[i].getElementsByTagName('id')[0].firstChild.nodeValue+'\"><img alt="Edit Entry" class="drag_me" height="133" src=\"/images/galleries/gallery_'+response.getElementsByTagName('gallery_id')[0].firstChild.nodeValue+'/t_'+paramList[i].getElementsByTagName('url')[0].firstChild.nodeValue+'\"></li>';
				}
				
				
				
				out += '</ul>';
				document.getElementById('dragdiv').innerHTML = out;
				/*alert('::'+paramList[1].childNodes[0].nodeValue);*/
				
				//parse here...
				
			}else{
				alert('problem retrieving data');
				request = null;
			}
		}
	}
	function focusInput(input_field) {
	    var main = document.getElementById(input_field);
	    main.focus();
	}
/*
	function parseResponse() {
		if(request.readyState == 4){
			if(request.status == 200){
				var response = request.responseText;
				
				
				var response = request.responseXML;
				var paramList = response.getElementsByTagName('photo');
				var out = '<ul>';
				for(i=0; i<paramList.length; i++)
					out += '<li>' + paramList[0].nodeValue + '-'+i+'</li>';
				out += '</ul>';
				document.getElementById('list').innerHTML = out;

				alert('::'+response)
				
				//parse here...
				
			}else{
				alert('problem retrieving data');
				request = null;
			}
		}
	}
*/