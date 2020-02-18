const express=require('express');
const app=express();

const students=[
    {id:1,name:'Mike'},
    {id:2,name:'Walt'},
    {id:3,name:'Jesse'}
];
app.get('/',(req,res) => {
    res.send('Hello express');
});

app.get('/api/students',(req,res) =>{
    res.send(students);
});
app.get('/api/students/:sid',(req,res) => {
    //res.send(`${req.params.hour}:${req.params.minute}`);
    const result = students.find(s => s.id === parseInt(req.params.sid));
    if(!result)
        res.status(404).send('Dame dame');
    else
        res.send(result);    
});

const port=process.env.PORT || 3000;
app.listen(port,() => {console.log(`Listening Port: ${port}`)});
