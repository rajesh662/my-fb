
import React,{useState,useContext} from 'react';
import Home from '../homepage/Home';
import './createpost.scss';
import { Button, Card } from '@mui/material';
import {HighlightOff as HighlightOffIcon, Edit as EditIcon } from '@mui/icons-material';

import imgphoto from './photo.png';
import imgprofile from './profile.png';
import imgmojo from './mojo.png';
import imgloaction from './location.png';
import imggit from './git.png';
import { Link, useLocation } from 'react-router-dom';
import { stateContext } from '../feature/stateContext';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { AccountCircleSharp } from '@mui/icons-material';

let a:any=[];
const Createpost = () => {
    const {state:{posts, posterid,posterid1,isprofcheck},dispatch}=useContext(stateContext);
   console.log(posterid);
   console.log(posterid1);
  
  
   const [posters,setPosts]=useState(posterid);
   const [posters1,setPosts1]=useState(posterid1)
    const location = useLocation()
    const getData= location.state;
    
    const[regetData,resetData]=useState(getData)

    const [post,setPost]=useState(regetData ? regetData[0].posting1 : '');
    const [postimg,setPostimg]=useState(regetData ? regetData[0].postingimg1 : '');
    const [postvideo,setPostvideo]=useState(regetData ? regetData[0].postingVideo1 : '');


    

const postFun = (r:any)=>{
    if(r.target.name === 'post'){
            setPost(r.target.value);
    }
    else if(r.target.name === 'image'){
        setPostimg(r.target.value)
    }
    else {
        setPostvideo(r.target.value)
    }

}
const postID = ()=>{
    return Math.floor(Math.random()*100000)
}

const postSubmit = (e:any)=>{
e.preventDefault();

const poster:any  ={
    id:postID(),
    posting:post,
    postingimg:postimg,
    postingVideo:postvideo,
    liked:false,
}
if(regetData != null){
    a[regetData[1]]=poster;
}
else{
    a.push(poster)
    dispatch({type:"POST",payload:a})
}


}
const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
const [anchorEl1, setAnchorEl1] = React.useState<HTMLButtonElement | null>(null);
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);

};
const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
}

const handleClose = () => {
  setAnchorEl(null);

};
const handleClose1 = () => {
    setAnchorEl1(null);

}

const idposter=()=>{
    dispatch({type:"HOME_POST_ID",payload:posters})
}
const idposter1=()=>{
    dispatch({type:"HOME_POST_ID1",payload:posters1})
}

const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;

const open1 = Boolean(anchorEl1);
const id1 = open1 ? 'simple-popover' : undefined;


  return (
    <div>
    {isprofcheck ? (<section id='post-section'>
        <div className='post-back'>
          <Home></Home>
        </div>
        <div>
            <form onSubmit={postSubmit}>
            <div className='post-card'>
            <Card className='post'>
                <h1>Create Post</h1>
                <div className='post-close'>
               <Link to='/home'>      <HighlightOffIcon ></HighlightOffIcon>  </Link> 
                </div>
                <div>
              {/* {isprofcheck ? 
              ({posters.map((val:any,index:number)=>{
                    return <div className='post-man'>
                    <div className='man-img'>
                        <img src={val.image} alt='' width="20%"></img>
                    </div>
                    <div className='man-name'>
                        <h4>{val.pname1}</h4>
                    </div>
                </div>
                })}):
                ({posters1.map((val:any,index:number)=>{
                    return <div className='post-man'>
                    <div className='man-img'>
                       <AccountCircleSharp></AccountCircleSharp> 
                    </div>
                    <div className='man-name'>
                        <h4>{val.name}</h4>
                    </div>
                </div>
                })})}   */}
                {posters.map((a:any,b:number)=>{
                        return<>
                        <div className='post-man'>
                    <div className='man-img'>
                        <img src={a.image} alt='' width="20%"></img>
                    </div>
                    <div className='man-name'>
                        <h4>{a.pname1}</h4>
                    </div>
                </div>
                        </>
                })}
                
                <div className='post-box'>
                    <input type='text' placeholder="Whats on your mind, Rajesh?" value={post} onChange={postFun} name='post'>
                      
                    </input>
                </div>
                <div className='post-icon'>
                    <div>
                        <p>Add to your Post</p>
                    </div>
                    <div className='post-img'>
                    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <Typography sx={{ p: 2 }}>iamge URL
            <input type='text' name='image' onChange={postFun} value={postimg}></input></Typography>

      </Popover>
                        <Button aria-describedby={id} onClick={handleClick}><img src={imgphoto}></img></Button>
                        <Button><img src={imgprofile}></img></Button>
                        <Button><img src={imgmojo}></img></Button>

                        <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <Typography sx={{ p: 2 }}>vedio URL
            <input type='text' name='video' onChange={postFun} value={postvideo}></input></Typography>

      </Popover>

                        <Button aria-describedby={id1} onClick={handleClick1}><img src={imgloaction}></img></Button>
                        <Button><img src={imggit}></img></Button>

                    </div>
                </div>
                <div className='post-btn'>
                    <button type='submit' onClick={()=>idposter()}>Post</button>
                </div>
                </div>
            </Card>
            </div>
            </form>
        </div>
       </section>):(<section id='post-section'>
        <div className='post-back'>
          <Home></Home>
        </div>
        <div>
            <form onSubmit={postSubmit}>
            <div className='post-card'>
            <Card className='post'>
                <h1>Create Post</h1>
                <div className='post-close'>
               <Link to='/home'>      <HighlightOffIcon ></HighlightOffIcon>  </Link> 
                </div>
                <div>
                <div className='oooo'>
                <AccountCircleSharp></AccountCircleSharp>
            {posters1.map((c:any,d:number)=>{
return<>
        <div className='post-man'>
                    <div className='man-img'>
                       
                    </div>
                    <div className='man-name'>
                      <span>{c.name}</span>
                    </div>
                </div>
</>
                })}
                </div>
                <div className='post-box'>
                    <input type='text' placeholder="Whats on your mind, Rajesh?" value={post} onChange={postFun} name='post'>
                      
                    </input>
                </div>
                <div className='post-icon'>
                    <div>
                        <p>Add to your Post</p>
                    </div>
                    <div className='post-img'>
                    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <Typography sx={{ p: 2 }}>iamge URL
            <input type='text' name='image' onChange={postFun} value={postimg}></input></Typography>

      </Popover>
                        <Button aria-describedby={id} onClick={handleClick}><img src={imgphoto}></img></Button>
                        <Button><img src={imgprofile}></img></Button>
                        <Button><img src={imgmojo}></img></Button>

                        <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <Typography sx={{ p: 2 }}>vedio URL
            <input type='text' name='video' onChange={postFun} value={postvideo}></input></Typography>

      </Popover>

                        <Button aria-describedby={id1} onClick={handleClick1}><img src={imgloaction}></img></Button>
                        <Button><img src={imggit}></img></Button>

                    </div>
                </div>
                <div className='post-btn'>
                    <button type='submit' onClick={()=>idposter1()}>Post</button>
                </div>
                </div>
            </Card>
            </div>
            </form>
        </div>
       </section>)}   
      
    
    </div>
  )
}

export default Createpost;



