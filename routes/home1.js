const api = 'http://localhost:21263'

let btnApi = document.getElementById('bass1')
btnApi.addEventListener('click', ()=>{
    fetch(api)
        .then((response)=>{
            response.json()
            


        })
        .then((date)=>{
            console.log(date)
        })
})