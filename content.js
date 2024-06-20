function hideOriginalPrices() {
  // Select all elements that contain the original price
  const originalPrices = document.querySelectorAll('.a-text-price, .priceBlockStrikePriceString');

  // Hide each original price element
  originalPrices.forEach(price => {price.style.display = 'none';});

}

// Run the function when the page loads
window.addEventListener('load', hideOriginalPrices);

// Optionally, run the function when the page is dynamically updated (4 infinite scroll)
const observer = new MutationObserver(hideOriginalPrices);
observer.observe(document.body, { childList: true, subtree: true });

