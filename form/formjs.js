function show(){
    
    var fullname = document.getElementById('fullname').value;
    var birthday = document.getElementById('birthday').value;
    var city = document.getElementById('citys').value;
    document.getElementById("citys").innerHTML = city;
    var female= document.getElementById('female').checked;
    var male= document.getElementById('male').checked;
    var date = new Date(birthday);
        year = date.getFullYear();
                
    if (fullname ==''){
        alert('Bạn Chưa Nhập Tên');
    }
    else if (birthday ==''){
        alert('Bạn Chưa Nhập Ngày Sinh');
    }
    else if (city ==''){
        alert('Bạn Chưa Chọn Tỉnh/Thành');
    }
    
    else{
        document.getElementById('show').style.display = ('block');
        document.getElementById('name').innerHTML=fullname;
        document.getElementById('date').innerHTML=year;
        document.getElementById('citys').innerHTML=city;
        if (male) {
        document.getElementById('show').style.background = ('yellow');
        document.getElementById('gender').innerHTML='Nam';
        }
        else if (female) {
        document.getElementById('show').style.background = ('pink');
        document.getElementById('gender').innerHTML='Nữ';
        }
        if (year < 1998) {
        document.getElementById('show').style.color = ('green');        
        }
        else if (year > 1998) {
        document.getElementById('show').style.color= ('red');
        }
        if (city == "hue" || city == "dn" || city == "qn" ) {
        document.getElementById("citys").style.fontSize = "30px";
        }
        else {
        document.getElementById("citys").style.fontSize = "20px";
        }
        
    }
    
}