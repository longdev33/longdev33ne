function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
    var p3 = document.getElementById("number").value;
     
    if(u== "") {
    alert("Vui lòng nhập tên đăng nhập!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }
    
    if(p3 == "") {
        alert("Vui lòng nhập số điện thoại!");
        return false;
        }
    alert("Đăng ký thành công")
     
    return true;
    }