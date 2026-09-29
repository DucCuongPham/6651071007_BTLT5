document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('product-table');

    // Sử dụng event delegation để bắt sự kiện click cho các nút "Xóa"
    table.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-delete')) {
            // Xác định dòng <tr> chứa nút xóa được bấm và xóa bỏ nó
            const row = event.target.closest('tr');
            if (row) {
                row.remove();
            }
        }
    });
});