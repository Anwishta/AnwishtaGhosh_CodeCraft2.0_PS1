function changeColor(bgcolor, navcolor,textcolor1, textcolor2,btncolor1,btncolor2){
    var body = document.getElementById('body');
    var navbar = document.getElementById('nav');
    var txt1 = document.getElementsByClassName('txt1')
    var txt2 = document.getElementsByClassName('txt2');
    var btn1 = document.getElementsByClassName('button1');
    var btn2 = document.getElementById('btn2');
    var circle = document.getElementById('circle');
    var sname = document.getElementById('sname');
    body.style.backgroundColor = bgcolor;
    navbar.style.backgroundColor = navcolor;
    btn2.style.backgroundColor = btncolor2;
    circle.style.borderColor = textcolor1;
    sname.style.backgroundColor = textcolor1;
    for (var i = 0; i < btn1.length; i++) {
    btn1[i].style.backgroundColor = btncolor1;
  }
  for (var j= 0; j < txt2.length; j++) {
    txt2[j].style.color = textcolor2;
  }
  for (var k= 0; k < txt1.length; k++) {
    txt1[k].style.color = textcolor1;
  }
    }
    
    
  
    