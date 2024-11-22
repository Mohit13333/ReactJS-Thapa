import axios from 'axios';


const api=axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/660ef2a095b358b822ff3308"
})


const currencyConverter=(formCurrency,toCurrency,amount) => {
    return api.get(`/pair/${formCurrency}/${toCurrency}/${amount}`)
}


export {currencyConverter}