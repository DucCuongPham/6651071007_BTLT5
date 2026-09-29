function tinhTien() {
    const thucAn = document.getElementById("thucAnSelect");
    const nuocUong = document.getElementById("nuocUongSelect");
    const ketQua = document.getElementById("ketqua");
    let tongTien = 0;
    let danhSachMon = [];
    while (ketQua.rows.length > 1) {
        ketQua.deleteRow(1);
    }
    for (let i = 0; i < thucAn.options.length; i++) {
        if (thucAn.options[i].selected) {
            let mon = thucAn.options[i];
            danhSachMon.push(mon.text);
            tongTien += Number(mon.value);
        }
    }
    for (let i = 0; i < nuocUong.options.length; i++) {
        if (nuocUong.options[i].selected) {
            let mon = nuocUong.options[i];
            danhSachMon.push(mon.text);
            tongTien += Number(mon.value);
        }
    }
    const banDem = document.getElementById("bannight").checked;
    if (banDem) {
        tongTien *= 1.10;
    }
    danhSachMon.forEach(function(mon) {
        let row = ketQua.insertRow();
        let cellMon = row.insertCell(0);
        let cellTien = row.insertCell(1);
        cellMon.innerHTML = mon;
        let gia = 0;
        for (let i = 0; i < thucAn.options.length; i++) {
            if (thucAn.options[i].text === mon) {
                gia = Number(thucAn.options[i].value);
            }
        }
        for (let i = 0; i < nuocUong.options.length; i++) {
            if (nuocUong.options[i].text === mon) {
                gia = Number(nuocUong.options[i].value);
            }
        }
        cellTien.innerHTML = gia.toLocaleString("vi-VN");
    });
    let rowTong = ketQua.insertRow();
    let cellTong = rowTong.insertCell(0);
    let cellTienTong = rowTong.insertCell(1);
    cellTong.innerHTML = "Tổng tiền";
    cellTienTong.innerHTML = tongTien.toLocaleString("vi-VN") + " đồng";
}
