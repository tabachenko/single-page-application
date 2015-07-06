   function s_h () {
    window.schedule_html = listHtml;
  }
  setTimeout(s_h,0500)
  anotherFunschedule = 1;
  setTimeout(init,0100);
  setTimeout(sasa,0100);

  function init() {
    var date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
    window.planet = document.getElementById("last_date");
    planet.innerHTML = date.toLocaleString("en", options);
  }
  function loadSyncElemets() {
    var plane = document.getElementById("last_date");
    plane.setAttribute("id", "date");



    var xhr = new XMLHttpRequest();

        xhr.open('GET', 'schedule/sync_journal.json', true);

        xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        submit.innerHTML = 'Done';

        

        if (xhr.status != 200) {
          // обработать ошибку
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          try {
            var a = JSON.parse(xhr.responseText);
          } catch (e) {
            alert("Некорректный ответ " + e.message);
          }
          showPhones(a);
        }

      }

      xhr.send();

      submit.innerHTML = 'load...';
      submit.disabled = true;
  }



  function loadSyncDetailes(a) {
    var b =document.getElementsByClassName('openDetailes');
    if(b[0]!==undefined){
      b[0].classList.remove('openDetailes');
    }
    
      
        
      var d = a.substring(1);
    var c = document.getElementById( d )
      c.classList.add('openDetailes');
  }


  function showPhones(a) {

      function compareDate(n,m) {
      return n.createdAt - m.createdAt;
      }
      a.sort(compareDate);


      for (var i = 0; i < a.length; i++) {
        if (a[i].createdAt!=null) {
          var newTr=document.createElement('tr');
          var newTd=document.createElement('td');
          main.appendChild(newTr);
          var date = newTr.appendChild(newTd);
          var g = new Date(a[i].createdAt)
          var dateList = g.getDate()+'.'+g.getMonth()+'.'+g.getFullYear()
          date.appendChild(document.createTextNode(dateList));
          
          /*создали дату*/
          var syncEl = 1;
          var Stat = 'OK';
          var conf = 0;

          /*устанавливаю аттрибут*/
          newTd.setAttribute('id','ab'+i);
          newTd.setAttribute('onclick','loadSyncDetailes(this.id)')
          /*устанавливаю аттрибут*/
          
          
          if(a[i].status=='ERROR'){
               Stat = "ERROR";
            } else if (a[i].status=='CONFLICT'){
               conf++;
            }
          function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
      }

            
          var newTr2=document.createElement('tr');
          insertAfter(newTr2,Cattles);
          var newTd2=document.createElement('td');
          var idd = newTr2.appendChild(newTd2);
          var idList = 'ID: '+a[i].id;
          idd.appendChild(document.createTextNode(idList));
          /*добавили имя во вторую таблицу*/
         

          /*устанавливаю аттрибут*/
          newTd2.setAttribute('id','b'+i);
          newTd2.classList.add('closeDetailes')
          /*устанавливаю аттрибут*/


          for (var j = i+1; j < a.length; j++) {
            var h = new Date(a[j].createdAt);
            var textc = h.getDate()+'.'+h.getMonth()+'.'+h.getFullYear();
            
            if (dateList==textc) {
              syncEl++;
              if(a[j].status=='ERROR'){
               Stat = "ERROR";
              } else if (a[j].status=='CONFLICT'){
               conf++;
              }
              
              
              newTd2.appendChild(document.createElement('br'));
              var m ='ID: '+a[j].id;
              var n = newTd2;
              n.appendChild(document.createTextNode(m));
              a[j].createdAt=null;
            };
          };
          
          
          var newTd11 = document.createElement('td');
          var state = newTr.appendChild(newTd11);
          state.appendChild(document.createTextNode(Stat));
          
          var newTd12 = document.createElement('td');
          var conflicts = newTr.appendChild(newTd12);
          conflicts.appendChild(document.createTextNode(conf));
          
          var newTd13 = document.createElement('td');
          var syncElements = newTr.appendChild(newTd13);
          syncElements.appendChild(document.createTextNode(syncEl));
          
  };
};

    }




var ab;
 function sasa() {
  
  ab = document.getElementById("sel");
  function setSyncMode () {


  for (var i = 0; i < ab.options.length; i++) {
      if(ab.options[i].selected){
        var deleteSyncMode = document.getElementsByClassName('Sechedule_1');
        if(deleteSyncMode[0]!==undefined){
          deleteSyncMode[0].classList.remove('Sechedule_1')
        };
        var pp = document.getElementById('bb'+i);
        pp.classList.add('Sechedule_1')

      }
    };
   };
   setSyncMode ();



  ab.addEventListener('change',function() {
    setSyncMode ();
    
    },false);
  };

 function loadMenu  () {
  u = 1;
  document.body.innerHTML = '<script src="app.js"></script>';
  if(anotherFunmenu===0){
      loadViewHtml ('menu')
    } else {
      document.body.appendChild(menu_html)
  }
  loadCSS_JS('menu');
  ttt = 0;
  } 


