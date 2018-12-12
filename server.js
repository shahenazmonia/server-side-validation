const express = require('express');
const bodyParser = require('body-parser');
const validate = require('./validate');
const {loginValidation, signupValidation} = require('./validation');
const {celebrate} = require('celebrate')
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/signup',validate(signupValidation), (req,res)=>{
  const{ body:{ username, email, password, confirmPassword, role, mobile }}  = req;
  console.log(username,email,password);
   res.json({succes: "signup validation is confirmed"})
});

app.get('/loginPage', (req,res)=>{
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.post('/login', validate(loginValidation), (req,res)=>{
  res.json({succes: "login validation is confirmed"})
})

app.listen(3000, () => {
console.log(`Our app is running on http://localhost:3000`);
});
