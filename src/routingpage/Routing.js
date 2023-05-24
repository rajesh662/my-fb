
import React, { useReducer } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from '../loginpage/Login';
import Createpost from '../createpostpage/Createpost';
import Signup from '../sigin-uppage/Signup';
import Profile from '../profilepage/Profile';
import Home from '../homepage/Home';
import { initialState, stateReducer } from '../feature/Reducer';
import { stateContext } from '../feature/stateContext';
const Routing = () => {
  const [state,dispatch]=useReducer(stateReducer,initialState)
  return (
    
 <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
   
    {state?.islogin?<Routes>
   <Route path='/signup'element={<Signup/>}> </Route>
   <Route path='/'element={<Login/>}> </Route>
     <Route path='/home' element={<Home/>}></Route> 
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/post' element={<Createpost/>}></Route>
    </Routes>
   :<Routes>
   <Route path='/'element={<Login/>}> </Route>
   <Route path='/signup'element={<Signup/>}> </Route>
    </Routes>}
    </BrowserRouter>
    </stateContext.Provider>
 
  )
}

export default Routing;
