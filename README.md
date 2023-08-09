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
local db==>mongodb://127.0.0.1:27017/notesData
mongodb==> 

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
create get,patch,delete,post routes
then export noterouter and use it inside index 
then create notemodel
but this note routes are restricted i need some auth
for auth i need to create middleware
now inside middleware what we need
 we need jwt from jsonwebtoken
 then create auth middleware
  now from where we will get token token=req.headers.authorization?.split(" ")[1] then put try catch block if i got the token then 
  create decoded=jwt.verify(token,"secret key") if decoded is true then i will go to next() else res.json({msg:"not authorized}) inside catch(err) res.json({err:err.message}) 

  else res.json({msg:'please login first"}) 
  then export auth and rquire to the noterotes
  then use it as noteRouter.use(auth) top of noterouter methods


  # post logic notes
  simply create try catch block
  create note using new notemodel(req.body)
  then await note.save()
  then res.json({msg:"note has been added},note:req.body)

  inside catch handle error
  currently we are not adding relationship so maually write user while making post request to the notes route
  if i directly try to post it will give me msg please login to login
  to login i should have token 
  then login you will get token
   copy the token inside note routes create  go to headers
add key=Authorization and value as  Bearer token then clicking on send then new note will get created

# get logic notes
copy paste post part
just do const notes=await notemodel.find() and send it as res
now if i make get req. i am getting all the notes
but this should not be the case everything should be dynamic
in order to achieve this i need relationship conection between note connection and user connection
 
 how to create relationshion===>
 1) you can put parents(independant) id inside child(dependant) 
 2) among user coll. and note coll. which one is independant and which one is dependant?
 user is independent  (because user can exist if there are no notes)
 note is dependent(note can not exist without user)

 if i do not have user account can i post
 so put userid inside note
 go to note model along with user put userID:string
 am i putting this id manually by myself mongodb created userid
 if i do not know user id how can i put this inside notemodel 
so the authmiddleware is connected to user and note

jwt gives 3 things 1) headers
                   2) random payload
                   3) 

while login we will put id using jwt and catch the id back insdie note     
try consoling decoded in the auth middleware you will get random payload course:be and iat there you can pass userid in object like{userID:user._id} because in mongdb id get stored as _id
before sending to next() req.body.userID=decoded.userID  and req.body.user=decoded.user then next()  
making new request now i am not adding user still it got added automatically.  

# patch request
to implement patch and delete we have to take care of one thing
we have to check whether the notes we are updating is that particular user or not ====> solution is relationship.
to update one thing is clear id===userid 
from where we will get useridinnote coming from note.userID but from where we will get note ===>notemodel.find({_id==userID})  ===>userid coming from params

userid coming from req.body.userid then apply trycatch block
now the point is how to update?
to update write like this localhost:4500/notes/update/64cf646c92cdbc0273ecd560

# Delete

same logic just remove extra object and do findbyidanddelete


