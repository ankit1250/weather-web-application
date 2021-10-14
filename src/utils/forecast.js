const request = require('../../../weather_app/node_modules/request')

const forecast = (latitude,longitude,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=ab9d09a7ff631e3194fcba6fdf01b677&query=${latitude},${longitude}`
    request({url,json:true},(error,{body})=>{
         if(error){
             callback('Unable to connect with the web server',undefined)
         }
         else if(body.error){
             callback('unable to get the location',undefined)
         }
         else{
            const weatherData = body.current
            callback(undefined,weatherData.weather_descriptions[0])

         }
    })
}

module.exports= forecast