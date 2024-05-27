let products = [
    {name: 'banana', price: 100 },
    {name: 'apple', price: 220 },
    {name: 'mango', price: 340 },
]

function priceGreaterThanZero(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].price <= 0) {
            return false; 
        } 
    } return true;
}
let priceProduct = priceGreaterThanZero(products);
console.log(`Tất cả sản phẩm trong giỏ hàng có giá lớn hơn 0: ${priceProduct}`);