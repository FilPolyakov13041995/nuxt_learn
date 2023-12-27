export default defineEventHandler(async (event) => {

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_Xh8oplkhIQwki6Q50iqm4Sm11EzORLTIz0XjXqom&currencies=EUR%2CUSD%2CCAD')
    
    return data
})