import React, {useEffect} from 'react';
import Widgets from './Widgets';
import './App.css';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Sidebar from './Sidebar';
import Feed from './Feed';

import Login from './Login';
import { auth } from './firebaseConfig';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
   auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL

      }))
    }else{
      dispatch(logout())
    }
   })

  }, [])


  return (
    <div className="App bg-linkbg flex flex-col ">
 

      <Header/>

        {!user ?(
          <Login/>
        ): (
          <div className='app__body flex  mt-9  justify-center'>
          <Sidebar/>
          <Feed/>

          <Widgets/>
          </div>
        )

        }
    


      </div>

  );
}

export default App;
