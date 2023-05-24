import React, { useContext, useEffect, useState } from 'react';
import Home from '../homepage/Home';
import './profile.scss';
import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {HighlightOff as HighlightOffIcon, Edit as EditIcon  } from '@mui/icons-material';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { stateContext } from '../feature/stateContext';

const Profile = () => {
const nava:any = useNavigate();
let r:any =[];
                           
 const {state:{logins,},dispatch}=useContext(stateContext);

 
 

 const location =useLocation();
 const profgeting = location.state;

 
 const [prof,setProf]=useState(profgeting);
 console.log(prof);
 
let name:any = prof.map((val:any,index:number)=>{
    return val.pName
})



let Sname:any = prof.map((val:any,index:number)=>{
    return val.pSname
})
// getpass ? getpass[0].name1 :
// getpass ? getpass[0].sname1 :
// getpass ? getpass[0].imgs1 :
const [proName,setProname]= useState(name);
const [proSname,setProsname]= useState(Sname);
const [proImg,setImg]=useState('');
    const [avatars,setavathars]=useState([])

    useEffect(()=>{
        getCard();
        
      },[])
      
        const getCard = ()=>{
        
          fetch(`https://randomuser.me/api/?results=10`)
          .then((response) => response.json())
          .then((json) =>setavathars(json.results));
        }

        const proInput =(rk:any)=>{
if(rk.target.name === "data1"){
    setProname(rk.target.value)
   
}
else if(rk.target.name === "img"){
    setImg(rk.target.value)
}
else{
    setProsname(rk.target.value)
}

        }
        const CreateId=()=>{
            return Math.floor(Math.random()*100000);
        }

       
        const profileSubmit = (e:any)=>{
e.preventDefault();

const profiles:any ={
    id:CreateId(),
    image:proImg,
    pname1:proName.toString(),
    pSname1:proSname.toString(),
} 


    r.push(profiles)
    dispatch({type:"PROFILEPOST",payload:r})


console.log(r);

}



  return (
    <section id='profile-section'>
        <div className='profile-back'>
          <Home></Home>
        </div>
        <div className='profile-card-postion'>
            <div className='profile-card'>
            <Card className='profile'>
                <form onSubmit={profileSubmit}>
                <div>
                <h1>Create Profile</h1>
                </div>
                 <div className='profile-btn'>
                <Link to={'/home'}> <HighlightOffIcon  ></HighlightOffIcon></Link>   
                </div> 
              
                {/* <Link to='/profile' state={[{imgs1:proImg,name1:proName,sname1:proSname}]}> */}
              
                <div className='profile-img'>
                    <div>
                        <input type='text' onChange={proInput} value={proImg} name='img'></input>
                        <div className='edit-icon'>
                          
                            <EditIcon></EditIcon>
                            <p>Edit</p>
                       
                        </div> 
                        <div>
                            <AvatarGroup max={4}>
                                {avatars.map((val:any,index:number)=>{
                                    return <>
      <Avatar alt="Remy Sharp" src={val.picture.medium} />

                                    </>
                                })}
      
      
    </AvatarGroup>
                            </div>
                    </div>           
                </div>  
                <div className='porfile-input'>
                
                  <div>
              <div>
              <TextField id="standard-basic" label="Name" variant="standard" onChange={proInput} value={proName} name='data1'/>
                </div>
                <div>
                <TextField id="standard-basic" label="Nickname" variant="standard" onChange={proInput} value={proSname} name='data2'/>
                </div>
                </div>

                </div>
               
                  <div className='pro-save'>
               <button type='submit'  >save</button>

                    </div>                  
                </form>
            </Card>
            </div>
        </div>
    </section>
  )
}

export default Profile
