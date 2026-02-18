console.log("modal.js loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const addToCartBtn = document.getElementById('addToCart');
  const cartCountEl = document.getElementById('cart-count');

  sessionStorage.removeItem('cart');

function updateCartCount() {
  const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
  cartCountEl.innerText = cart.length;
}

function showToast(text) {
  let t = document.getElementById('toastMessage');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toastMessage';
    document.body.appendChild(t);
  }
  t.innerText = text;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1500);
}

  document.querySelectorAll('.item_food_grid').forEach(item => {
    const openModal = () => {
      modalTitle.innerText = item.querySelector('h5').innerText;
      modalDesc.innerText = item.querySelector('p').innerText;
      modalPrice.innerText = item.querySelector('.bottom_item_food_grid span').innerText;
      modalImage.src = item.querySelector('img').src;
      modal.style.display = 'block';
    };

    item.addEventListener('click', openModal);
    const btn = item.querySelector('button');
    if (btn) btn.addEventListener('click', e => { e.stopPropagation(); openModal(); });
  });

  document.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

  addToCartBtn.addEventListener('click', () => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart.push({
      title: modalTitle.innerText,
      price: modalPrice.innerText,
      img: modalImage.src
    });
    sessionStorage.setItem('cart', JSON.stringify(cart));
    showToast("The item has been successfully added✔");
    modal.style.display = 'none';
    updateCartCount();
  });

  updateCartCount();
});
