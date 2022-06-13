require ('./Config/db');
const express = require ('express');
const myRoute = require ('./Router/router')
const port = 2004;
const app = express();


app.use(express.json())
app.use('/api', myRoute)
app.get('/api', (req, res) => {
   res.send('Welcome to my Api')
})

app.listen(port, ()=> {
    console.log(`App is listening to ${port}`)
})
