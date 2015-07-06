    var ttt = 0;
    anotherFunmenu=1
    var anotherFunschedule = 0;
    var a=0 ;
    var aff = 0;
    window.addEventListener("wheel", onWheel);
    function onWheel(e) {
      if (ttt === 1){
        return
      }
      e = e || window.event;
      var delta = e.deltaY 
      if(delta>0 && a>=0){
        a=+a-0.15;
        var i = document.getElementById('op');
        i.style.opacity=a;
        if(a<=0){
          var b = document.getElementById('op');
          b.style.display='none';
        }
      } else if(delta<0 && a<=1){
        a=+a+0.15;
        var i = document.getElementById('op');
        i.style.opacity=a;
        i.style.display='block';
      }
      
    }
 function loadSynchronization () {
    ttt = 1
    document.body.innerHTML = '<script src="app.js"></script>';
    if(anotherFunschedule===0){
      loadViewHtml ('schedule')
    } else {
      document.body.appendChild(schedule_html)
    }
    loadCSS_JS('schedule');
    if (aff === 0) {
        link_js2 = document.createElement('script');
        link_js2.src = screenManager['schedule'].js;
        document.body.appendChild(link_js2);
        aff = 2;
    };

  } 
  function m_h () {
    window.menu_html = listHtml;
  }
  setTimeout(m_h,0500)

