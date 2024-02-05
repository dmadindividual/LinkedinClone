import React, {useState} from "react";
import Logo from "./linkedinlogo.png";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const dispatch = useDispatch()

  const emailInput = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };


  const register =()=>{
    if(!name){
      return alert("Input name")
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: imageUrl
      }).then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: imageUrl

        }))
      })
    }).catch(err => alert(err.message))
  }


  const loginToApp = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth =>{
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: name,
        photoURL: userAuth.user.imageUrl
      }))
    })
  }
  return (
    <div className="Login  items-center grid ml-auto mr-auto pt-24 pb-24">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-extrabold">Linked</h1>
        <img
          className="object-contain h-20 mt-5 mb-5"
          src={Logo}
          alt="Linkedin Logo"
        />
      </div>
      <form className="flex flex-col">
        <input value={name} onChange={e => setName(e.target.value)} className="w-80 h-12 text-base pl-2.5 mb-2.5 rounded-md" placeholder="Full Name" type="text" />
        <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} className= "w-80 h-12 text-base pl-2.5 mb-2.5 rounded-md" placeholder="Profile Pic Url" type="text" />
        <input value={email} onChange={emailInput} className="w-80 h-12 text-base pl-2.5 mb-2.5 rounded-md" placeholder="Email" type="text" />
        <input value={password} onChange={e => setPassword(e.target.value)} className="w-80 h-12 text-base pl-2.5 mb-2.5 rounded-md" placeholder="Password" type="password" />

        <button className="w-80 h-12 bg-blue-500 text-white text-base rounded " type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p className="mt-5 flex items-center justify-center gap-1">Not a member?
        <span className="cursor-pointer text-blue-600 font-bold " onClick={register}>Register Now</span>
      </p>
    </div>
  );
};

export default Login;
