document.addEventListener('DOMContentLoaded', function () {
    fetch('cart_count.php')
        .then(res => res.json())
        .then(data => {
            const cartCountElement = document.getElementById('cart_count');
            if (cartCountElement) {
                cartCountElement.innerText = data.count;
            }
        })
        .catch(err => console.error('خطا در دریافت تعداد سبد:', err));
});
