function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    
     
    if(u== "") {
    alert("Vui lòng nhập tên đăng nhập!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
    alert("Hệ thống đang quá tải vui lòng thử lại sau!");
    return true;
    }
    