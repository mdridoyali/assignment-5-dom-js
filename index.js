
let total = 0;
function handleClickBtn(target) {
    const itemName = target.childNodes[5].childNodes[1].innerText;
    const li = document.createElement('li');
    const selectedProductList = document.getElementById('selected-product-list');
    const listItemNumber = selectedProductList.children.length + 1;
    li.innerText = `${listItemNumber}. ${itemName}`;
    selectedProductList.appendChild(li);

    const price = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const totalPrice = parseFloat(document.getElementById('total-price').innerText = total.toFixed(2));

    // purchese button
    const purchaseBtn = document.getElementById('purchase-btn');
    purchaseBtn.disabled = total < 1;

    // promocode input field
    const promocodeBtn = document.getElementById('promocode-btn');
    promocodeBtn.disabled = total < 200;

    // promocodeBtn click and discount
    promocodeBtn.addEventListener('click', function () {
        const discount = document.getElementById('discount-price');
        // console.log(discount)
        const promocodeInput = document.getElementById('promocode-input').value;

        if (promocodeInput === 'SELL200') {
            const totalWithDiscount = document.getElementById('total');
            const discountString = discount.innerText;
            // console.log( discountString)
            const discountPrice = total * 20 / 100;
            discount.innerText = discountPrice.toFixed(2);

            let afterDiscount = total - parseFloat(discountString);
            totalWithDiscount.innerText = afterDiscount.toFixed(2);
            // console.log(typeof afterDiscount)

            document.getElementById('go-home-btn').addEventListener('click', function () {
                // totalPrice.innerText = ''
                selectedProductList.innerText = ''
                discount.innerText = '00'
                totalWithDiscount.innerText = '00';
                promocodeInput.value = '';

            })
        }
    })

    // Click the goHomeBtn and clear the all purchese data
    document.getElementById('go-home-btn').addEventListener('click', function () {
        document.getElementById('total-price').innerText = '00'
        document.getElementById('promocode-input').value = '';
        total = 0;
        selectedProductList.innerText = '';
        purchaseBtn.disabled = true;
        promocodeBtn.disabled = true;

    })

}