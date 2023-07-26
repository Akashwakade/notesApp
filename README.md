# notesApp

# full stack crud app

# backend

1) npm init -y
2) npm i express nodemon mongoose bcrypt jsonwebtoken
3) create index.js using New-Item -ItemType File -Name example.txt
4)add script server: nodemon index.js
5) require==> express 
invoke express as const app=express()
app.use(express.json())
app.listen
6) then  connecting to databassee what i need db

# REgistration
7) then user registration i need route
create userrout.js then inside it i require express and in this userrouter=express.Router()
create routes then export it import inside index.js
after that we need to use it..using app.use('/users',userrouter)
8) in order to register a user i will nedd userschema and model
9) create new folder models ==> user.model.js
for that we require mongoose
create userschema
and also create version key:false inside object

10) now model is a constructor function create usermodel
11) import it in userroutes
12) in registration route first we all require all the things from the req.body
13) we need to bcrypt to hash the password
14) bcrypt.hash will take 3 parameters 1)what we need to hash ,2) salt round , 3) async fun will take error,hash if error true res.json({error:err.msg}) else user=new usermodel ({name,email,pass:hash}) then await user.save()


# login

first i need to check whether email,pass present in database or not
inside try const user=await Usermodel.finfone(email)  because if i put pass also it will not going to be matched as the pass stored form is decrypt 
if user is true then i will compare pass. using bcrypt.compare(pass,user.pass,function(err,result)) if result is true res.json({msg:"login"}) 
we have to implement token also use const jwt=require jsonwebtoken
if result true then token=jwt.sign(payload,secretkey,)
send token handle error


# creating notes route

to make crud i need routes ==> express && express.router
