function eyetoggle(){
  if ($("#password-input").attr("type") == "password") {
    $("#password-input").attr("type", "text");
    document.getElementById('eyes').style.color = 'black';
  } else {
    $("#password-input").attr("type", "password");
    document.getElementById('eyes').style.color = 'lightgrey';
  }
}//密码可见开关

// 123
function unlock(){
  if(document.getElementById('password-input').value == '123'){
    document.getElementById('lock-page').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('navheader').style.display = 'flex';

    timeFunction();
    nextQuote();
  }else{
    alert('Wrong Password');
  }
}

function chooseHome(){
  document.getElementById('home').style.display = 'block';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('time').style.display = 'none';

  document.getElementById("btnhome").classList.add("active");
  document.getElementById("btnquiz").classList.remove("active");
  document.getElementById("btntime").classList.remove("active");
}

function choosePage1(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('time').style.display = 'none';

  document.getElementById("btnhome").classList.remove("active");
  document.getElementById("btnquiz").classList.add("active");
  document.getElementById("btntime").classList.remove("active");
}

function chooseTime(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('time').style.display = 'block';

  document.getElementById("btnhome").classList.remove("active");
  document.getElementById("btnquiz").classList.remove("active");
  document.getElementById("btntime").classList.add("active");

  document.getElementById('container1').style.display = 'none';
  document.getElementById('container2').style.display = 'none';
  document.getElementById('container3').style.display = 'none';

  document.getElementById('container4').style.display = 'none';
  document.getElementById('container5').style.display = 'none';
  document.getElementById('container6').style.display = 'none';

  document.getElementById('container7').style.display = 'none';
  document.getElementById('container8').style.display = 'none';
  document.getElementById('container9').style.display = 'none';

  document.getElementById('container10').style.display = 'none';
  document.getElementById('container11').style.display = 'none';
  document.getElementById('container12').style.display = 'none';
}

function unlock1(){
  // Ref: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  if(document.getElementById('page1-input').value == today){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('navheader').style.display = 'none';
  }else{
    alert('看看日历');
  }
}

// mcdonalds
function unlock2(){
  if(document.getElementById('page2-input').value.toLowerCase() == 'mcdonalds'){
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
  }else{
    alert("来一份麦旋风 🍟🍦🐔🐤");
  }
}

// 3
function unlock3(){
  if(document.querySelector('input[name="page3-radio"]:checked').value === '1'){
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
  }else{
    alert('1 + 2');
  }
}

// 0, 0, 1, 1,
function unlock4(){
  if( document.getElementById("page4-check1").checked == false && 
      document.getElementById("page4-check2").checked == false &&
      document.getElementById("page4-check3").checked == true &&
      document.getElementById("page4-check4").checked == true){
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
  }else{
    alert('0, 0, 1, 1');
  }
}

// yes
function unlock5(){
  if(document.getElementById('page5-input').value.toLowerCase() == 'yes'){
    document.getElementById('page5').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('navheader').style.display = 'flex';

    document.getElementById("btnhome").classList.add("active");
    document.getElementById("btnquiz").classList.remove("active");
    document.getElementById("btntime").classList.remove("active");
  }else{
    alert('yes是唯一的正确答案');
  }
}


// Local time function
function timeFunction() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date();

  var day = days[d.getDay()];
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();

  document.getElementById("day").innerHTML = day + ", " + month + " " + date + ", " + year;
}


function toggleid(id){
  if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

function toggle1(a, b, c){
  toggleid(a);
  toggleid(b);
  toggleid(c);
}

// iterate through quotes
var quoteNum = -1;//下标置负
function nextQuote(){
  if(quoteNum != quoteSource.length -1){
    quoteNum += 1;//点击一次nextQuote,quoteNum++
  }else{
    quoteNum = 0;//当下标+到数组尾，置0
  }
  document.getElementById("quote").innerHTML = '"' + quoteSource[quoteNum].quote + '"';
  document.getElementById("name").innerHTML = '- ' + quoteSource[quoteNum].name;
}

var quoteSource = [{
  quote: " 一切还有待我们去创造，顽强的毅力是最有效的武器，高尚的品德是赢得尊敬的可靠途径。",
  name:"马塞尔．达索" 
}, {
  quote:" 知识的进步主要在于对先前知识的修改。虽然我们有时（例如在考古学中）可能通过一次偶然的观察而进步，但发现的意义一般都取决于它修改我们以往理论的力量。",
  name:"卡尔·波普尔"
}, {
  quote:"不要等运气降临，应该去努力掌握知识。",
  name:"弗莱明"
}, {
  quote:"思而不学则殆。学而不厌，诲人不倦。",
  name:"孔子"
}, {
  quote:"如果我们过于爽快地承认失败。就可能使自己发觉不了我们非常接近于正确。",
  name:"卡尔·波普尔"
}];




