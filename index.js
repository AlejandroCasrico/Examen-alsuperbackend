const express  = require('express');
const app = express();
const PORT = 4053;
const route = require('./src/routes/index');
const loginRoute = require('./src/routes/login-index');


app.use(express.json())
app.use('/auth/',loginRoute)
app.use('/api/',route);
app.listen(PORT,()=>{
    console.log('running server on port 4053');
})

