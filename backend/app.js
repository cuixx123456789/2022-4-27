let express=require('express');
let app=express();
const jct=require('jsonwebtoken');

app.get('/',(req,res)=>{
    res.send('helloword')
})
app.post('/login',(req,res)=>{
    let data='';
    req.on('data',(chunk)=>{
        data+=chunk
    })
    req.on('end',()=>{
        data=decodeURI(data)
        console.log(data)
        
        let msg='CHAIN';
        let token=jct.sign(data,msg)
        res.send({status:200,message:'登录成功',token:token})
    })
    
})
app.listen(3000,()=>{
    console.log('app start port 3000')
})