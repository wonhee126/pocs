let url;
//let notices=[];
let users=[];
let data;
/*
const user_menu = document.querySelector(".user-menu");
const user_info = document.querySelector(".user-info");
const notice_menu = document.querySelector(".notice-menu");
const notice = document.querySelector(".notice");
const notice_item= document.querySelector(".notice-item");
const notice_detailed=document.querySelector(".notice-detailed");
const notice_add = document.querySelector(".notice-add");
const notice_add_form = document.querySelector(".notice-add-form");
*/
          function compNumber(a, b) {//오름차순
          return a - b;
          }

        // 숫자를 역순으로 정렬할 때, 내부적으로 필요한 함수
          function compNumberReverse(a, b) {
          return b - a;
          }



url= new URL('http://34.64.161.55:8001/users');

var Links = {
    setColor:function(color){ 
  $('a').css('color',color);
      
    }
  }
  var Body = {
    setColor:function(color){
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
      document.querySelector('body').style.backgroundColor = color;
}
  }
  function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Links.setColor('powderblue');
} else{
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value = 'night';

  Links.setColor('blue');
}
}

fetch(url).then((response) => response.json()).then((data) => console.log(data));

const getData = async()=>{
    let header = new Headers({'Content-Type' : 'application/json'});
    let response = await fetch(url, {headers : header}); 
    data = await response.json(); 
    printData();
}


const printData = ()=>{
        /* 데이터 개수가 많아질 수록 실행 속도가 늦어질 수 있으므로 반복문 바깥으로 뺌*/
          let id = new Array();
          let users_name = new Array();
          let users_email = new Array();
          let users_studentId = new Array();
          let users_type = new Array();
          let users_company = new Array();
          let users_generation = new Array();
          let users_createdAt = new Array();
          
    for(var i=0; i<data.data.users.length; i++){
          let table = document.getElementById('useritem');

          let tr = document.createElement("tr");
	      let td1 = document.createElement("td");           
          let td2 = document.createElement("td");          
	      let td3 = document.createElement("td");          
          let td4 = document.createElement("td");           
          let td5 = document.createElement("td");           
          let td6 = document.createElement("td");           
          let td7 = document.createElement("td");           
          let td8 = document.createElement("td");           

	      td1.appendChild(document.createTextNode([i+1] + ""));
          td2.appendChild(document.createTextNode(data.data.users[i].userName + ""));
          td3.appendChild(document.createTextNode(data.data.users[i].email + ""));
          td4.appendChild(document.createTextNode(data.data.users[i].studentId));
          td5.appendChild(document.createTextNode(data.data.users[i].type));
          td6.appendChild(document.createTextNode(data.data.users[i].company||"null"));
          td7.appendChild(document.createTextNode(data.data.users[i].generation||"null"));
          td8.appendChild(document.createTextNode(data.data.users[i].createdAt|| "null"));
          
          tr.appendChild(td1);
	      tr.appendChild(td2);
	      tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          tr.appendChild(td7);
          tr.appendChild(td8);

	      table.appendChild(tr);
    }
}

getData();

/*
        console.log(
            `<tr>
        <td>${i+1}</td>
        <td>${JSON.stringify(data.data.users[i].userName)}</td>
        <td>${JSON.stringify(data.data.users[i].email)}</td>
        <td>${JSON.stringify(data.data.users[i].studentId)}</td>
        <td>${JSON.stringify(data.data.users[i].type)}</td>
        <td>${JSON.stringify(data.data.users[i].company) || ""}</td>
        <td>${JSON.stringify(data.data.users[i].generation) || ""}</td>
        <td>${JSON.stringify(data.data.users[i].createdAt) || ""}</td>
        </tr>`
        );
*/




