var anotherFunmenu=0;
var anotherFunschedule=0;
var u = 0;
window.onload = init('menu');
	function init(yy) {

		var xhr = new XMLHttpRequest();

        xhr.open('GET', 'screen_manager.json', true);

        xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        

        if (xhr.status != 200) {
          // обработать ошибку
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          try {
            var a = JSON.parse(xhr.responseText);
            window.screenManager = a[0];
          } catch (e) {
            alert("Некорректный ответ " + e.message);
          }

          loadview('menu');
          loadViewHtml('menu');
        }

      }
      xhr.send();
	}



function loadview (y)
	 {
	var x = screenManager[y];
	window.link_css = document.createElement('link');
	link_css.setAttribute('rel','stylesheet');
	link_css.setAttribute('type','text/css');
	link_css.setAttribute('href',x.css);
	document.head.appendChild(link_css);

	window.link_js = document.createElement('script');
	link_js.src = x.js;
	document.body.appendChild(link_js);


}
function loadCSS_JS (y) {
	var x = screenManager[y];
	link_css.setAttribute('href',x.css);
}
function loadViewHtml (y) {
	var x = screenManager[y];
	
	if (u === 0) {
		window.link_html = document.createElement('link');
		link_html.setAttribute('rel','import');
		link_html.setAttribute('href',x.html);
		document.body.appendChild(link_html);
		function aa () {
			listHtml = link_html.import.body;
			document.body.appendChild(listHtml);
		}
		setTimeout(aa, 0100);
	}
}





