const express = require('express');

const app=express();
// initialise express

const port=5000;
const userRouter=require('./routers/userRouter');
const jobRouter=require('./routers/jobRouter');
const projectRouter=require('./routers/projectRouter');
const cors=require('cors');

app.use(cors());
// add json format (json to javascipt)

app.use(express.json());
app.use('/user',userRouter);
app.use('/job',jobRouter);
app.use('/project',projectRouter);

app.get('/',(req,res)=>{
    res.send('response from backend');
})
app.get("/add",(req,res)=>{
    res.send('response from add route')
})
app.get("/update",(req,res)=>{
    res.send('response from update route')
})
app.get("/delete",(req,res)=>{
    res.send('response from delete route')
})

app.listen(port,()=>{
    console.log('server started ');
});