function xuatThu() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var d = new Date(nam, thang - 1, ngay);
    var thu = ["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6", "Thứ 7"];
    document.getElementById("ketqua").value = thu[d.getDay()] +    " Ngày " + ngay +    " tháng " + thang +    " năm " + nam;
}