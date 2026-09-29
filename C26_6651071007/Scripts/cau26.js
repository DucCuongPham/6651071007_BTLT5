const btnTinh = document.getElementById("btnTinh");
const namInput = document.getElementById("nam");
const canChiInput = document.getElementById("canChi");
const error = document.getElementById("error");
const CAN = [
    "Canh", "Tân", "Nhâm", "Quý", "Giáp","Ất", "Bính", "Đinh", "Mậu", "Kỷ"
];
const CHI = [
    "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ","Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"
];
btnTinh.addEventListener("click", function () {
    const value = namInput.value.trim();
    if (value === "") {
        error.textContent = "Vui lòng nhập năm dương lịch!";
        canChiInput.value = "";
        namInput.focus();
        return;
    }
    if (!/^\d+$/.test(value)) {
        error.textContent = "Năm phải là một số nguyên dương!";
        canChiInput.value = "";
        namInput.focus();
        return;
    }
    const nam = Number(value);
    if (nam < 1 || nam > 9999) {
        error.textContent = "Năm phải nằm trong khoảng từ 1 đến 9999!";
        canChiInput.value = "";
        namInput.focus();
        return;
    }
    const can = CAN[(nam + 6) % 10];
    const chi = CHI[(nam + 8) % 12];

    canChiInput.value = `${can} ${chi}`;
    error.textContent = "";
});
