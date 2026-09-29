function multiply(){
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    var ketQua=num1*num2;
    document.getElementById("ketqua").innerText="Kết quả: "+ketQua;
}
function divide(){
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    if (num2==0){
        document.getElementById("ketqua").innerText="Không thể chia cho 0";
    }
    var ketQua=num1/num2;
    document.getElementById("ketqua").innerText="Kết quả: "+ketQua;
}
