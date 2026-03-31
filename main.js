document.addEventListener('DOMContentLoaded', () => {
    const toast = document.getElementById('toast');
    const cartButtons = document.querySelectorAll('.add-to-cart');

    // Add to Cart Logic
    cartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.getAttribute('data-product');
            showToast(`${product} added to cart!`);
            
            // Haptic feedback for mobile
            if (navigator.vibrate) navigator.vibrate(50);
            
            // Temporary button state
            const originalText = btn.innerText;
            btn.innerText = "Added ✓";
            btn.style.background = "#2A9D8F";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
            }, 1500);
        });
    });

    function showToast(msg) {
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Scroll header effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 20) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});
