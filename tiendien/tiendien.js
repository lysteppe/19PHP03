// function tinhtiendien() {
// 	var name, first_date, last_date, first_number, last_number;
	
// 	name = document.getElementById('name').value;

// 	first_date = document.getElementById('first_date').value;

// 	last_date = document.getElementById('last_date').value;

// 	first_date = document.getElementById('first_date').value;

// 	last_number = document.getElementById('last_number').value;


// 	validate cac input khong duoc de trong
// 	if (name == '') {

// 	}
// }
$().ready(function() {
    $("#info").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "name": {
                required: true,
                maxlength: 15
            }
        },
        messages: {
            "name": {
                required: "Bạn chưa nhập họ tên",
                maxlength: "Hãy nhập tối đa 15 ký tự"
            },
            "first_date": {
                required: "Bạn chưa nhập kỳ đầu",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            },
        }
    });
});

function formatNumber(nStr, decSeperate, groupSeperate) {
            nStr += '';
            x = nStr.split(decSeperate);
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
            }
            return x1 + x2;
        }

$(document).change(function(){
    var first_date = new Date(document.getElementById('first_date').value);
    var last_date = new Date(document.getElementById('last_date').value);
    var today = new Date();
    var top_number = document.getElementById('top_number').value;
    var last_number = document.getElementById('last_number').value;

    if (first_date > today) {
        alert("Ngày đầu kỳ đã hơn ngày hôm nay");
    }

    if (first_date > last_date) {
        alert("Ngày cuối kỳ phải hơn ngày đầu kỳ");
    }

    if (last_number < top_number) {
        alert("Ngày cuối kỳ phải hơn ngày đầu kỳ");
    }
});

$('#submit').click(function(){
            $('#hoadon').css('display','block');
            document.getElementById('hd-name').innerHTML=$('#name').val();
            document.getElementById('hd-fdate').innerHTML=$('#first_date').val();
            document.getElementById('hd-ldate').innerHTML=$('#last_date').val();
            document.getElementById('hd-fnum').innerHTML=$('#top_number').val();
            document.getElementById('hd-lnum').innerHTML=$('#last_number').val();
            document.getElementById('hd-note').innerHTML=$('#note').val();
            $('#info').submit();
        
    var top_number=$('#top_number').val();
            var last_number=$('#last_number').val();
            var t= last_number-top_number;
            var a=1500;
            var b=2000;
            var c= 3000;
            var total;
            if(t<100){
                total= t*a;
                tien=formatNumber(total,'.',',');
                document.getElementById('hd-total').innerHTML=tien + ' VNĐ';
            }
            else{
                if(t>300){
                total= 100*a + 200*b + (t-300)*c;
                tien=formatNumber(total,'.',',');
                document.getElementById('hd-total').innerHTML=tien + ' VNĐ';
                }
                else{
                total= 100*a + (t-100)*b;
                tien=formatNumber(total,'.',',');
                document.getElementById('hd-total').innerHTML=tien + ' VNĐ';
                }
            }
            function validateForm() {
  var x = document.forms["info"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
});