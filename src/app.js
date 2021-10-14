const path = require('path')
const hbs = require('hbs')
const express = require('express')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000
//define paths for Express config
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,"../templates/views")
const partialspath = path.join(__dirname,"../templates/partials")
console.log(viewsPath)
// setup handlebars engine and views location
app.set('view engine','hbs')
app.set("views",viewsPath)
hbs.registerPartials(partialspath)

//setup static directory to serve
app.use(express.static(publicPath))

// app.get('/weather',(req,res)=>{
//     res.render('index')
// })
// const address = process.argv[2]

app.get('',(req,res)=>{
    res.render("index",{
        title:'weather App',
        name:'Ankit Kumar'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'weather App',
        name:'Ankit Kumar'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:'Ankit Kumar',
        message:"This is the help page"
    })
})
// app.get('/help',(req,res)=>{
//     res.send('This is a help page')
// })

// app.get('/about',(req,res)=>{
    
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send("Please provide an address")
    }
    else{
        geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
            if(error){
                res.send(error)
            }
            else{
                console.log(location)
                forecast(longitude,latitude,(error,weatherForecast)=>{
                    if(error){
                        console.log(error)
                    }
                    else{
                        res.send({
                            weather:weatherForecast,
                            location:location
                        })
                    }
                })
            }
        })
    }
 
})


app.get('/help/data',(req,res)=>{
    res.send("Help data")
})
app.get('/help/*',(req,res)=>{
    res.send("Help page not found")
})
app.get('*',(req,res)=>{
    res.send("404 Error page")
})
app.listen(port,()=>{
    console.log('Server is running')
})