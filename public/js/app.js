console.log("Client side javascript file is loaded");
// var address='Boston'
// const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5raXQxMjUwIiwiYSI6ImNrdHh0N3g1aDE3cWUybm14MG0xOGliM2EifQ.evcBz7e0Ulqswuh6NwgmSA&limit=1'

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//        console.log(data)
//     })
// })
// console.log(url)

const weatherForm =  document.querySelector('form') 
const locat = document.querySelector('#search')
var content = document.querySelector("#content")
var err= document.querySelector("#err")


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc = locat.value
    fetch('/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{


        content.textContent = JSON.stringify(data)

        // if(data.error){
        //     err.textContent = "Unable to search"
        // }
        // else{
            
        // }
        //  content.innerHTML = `location: ${data.location}<br>weather: ${data.weather}`
         })
 })
})