const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
let total = 0;

// Обработка кликов по кнопкам "Выбрать"
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".product-card");
    const name = card.querySelector("h3").innerText;
    const price = parseInt(card.querySelector("strong").innerText);

    const li = document.createElement("li");
    li.textContent = `${name} - ${price} ₽`;
    cartItems.appendChild(li);

    total += price;
    totalPriceElement.textContent = total;
  });
});