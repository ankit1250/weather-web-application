const request = require('../../../weather_app/node_modules/request')


const geocode= (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5raXQxMjUwIiwiYSI6ImNrdHh0N3g1aDE3cWUybm14MG0xOGliM2EifQ.evcBz7e0Ulqswuh6NwgmSA&limit=1'
    
    request({url,json:true},(error,{body})=>{
       if(error){
          callback('unable to connect with the server',undefined)
       }else if(body.features.length==0){
          callback('Unable to get the location. Try another place.',undefined)
       }
       else{
          callback(undefined,{
             latitude: body.features[0].center[0],
             longitude: body.features[0].center[1],
             location: body.features[0].place_name
          })
       }
    })
}

module.exports = geocode