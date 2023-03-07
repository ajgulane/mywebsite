const expenses = document.querySelector('#expenses')
const productMade = document.querySelector('#productMade')
const productPrice = document.querySelector('#productPrice')
const btn = document.querySelector('#btn')
const productSale = document.querySelector('#productSale')

const totalProfit = document.querySelector('#totalProfit')



btn.addEventListener('click', function() {

    if (totalProfit == true) {
        totalProfit = "Total Profit: "
    }
    totalProfit.innerHTML = parseFloat(productSale.value)  * parseFloat(productPrice.value)  - parseFloat(expenses.value)


    console.log(expenses.value)
    
})

