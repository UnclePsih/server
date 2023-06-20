const express = require('express')
const exphbs = require('express-handlebars')
const robotRoutes = require('./routes/robot')

const PORT =process.env.PORT || 3000
const app=express()
const hbs=exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.urlencoded({ extended: true }))
app.use(robotRoutes)
app.use(express.static(__dirname + '/public'))

app. listen(PORT,()=>{
    console.log(`Server has been started on PORT=${PORT}...`)
})