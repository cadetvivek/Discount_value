function calculateDiscount() {
    const price1 = parseFloat(document.getElementById('price1').value);
    const price2 = parseFloat(document.getElementById('price2').value);

    const totalPrice = price1 + price2;
    const discountPercentage = 16.59 / 100
    const discountAmount = totalPrice * discountPercentage;
    const discountedPrice = Math.floor(totalPrice - discountAmount);
    const savedMoney = Math.floor(totalPrice - discountedPrice);

    document.getElementById('discountedPrice').textContent = `रू${discountedPrice.toFixed(2)}`;
    document.getElementById('savedMoney').textContent = `रू${savedMoney.toFixed(2)}`;

    document.getElementById('output').style.display = 'block';
}
