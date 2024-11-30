function toggleCart(cart) {
    const body = cart.querySelector('.cart-body');
    const isExpanded = body.style.maxHeight;
  
    // Collapse all other cart items
    document.querySelectorAll('.cart-body').forEach((el) => {
      el.style.maxHeight = null;
      el.style.padding = "0 10px";
    });
  
    // Toggle the clicked cart item
    if (!isExpanded || isExpanded === '0px') {
      body.style.maxHeight = body.scrollHeight + "px";
      body.style.padding = "10px";
    } else {
      body.style.maxHeight = null;
      body.style.padding = "0 10px";
    }
  }
  