function tinhLuong(){
    var luong=Number(document.getElementById("luong").value);
    var heSo=Number(document.getElementById("heso").value);
    var luongThang=luong*heSo;
    document.getElementById("luongthang").value=luongThang;
}