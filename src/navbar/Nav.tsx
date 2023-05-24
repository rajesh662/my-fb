import  React ,{useState,useContext}from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Card } from "@mui/material";
import {
  FacebookOutlined as FacebookOutlinedIcon,
  Home as HomeIcon,
  AddToQueue as AddToQueueIcon,
  Store as StoreIcon,
  Diversity1Outlined as Diversity1OutlinedIcon,
  SportsEsportsOutlined as SportsEsportsOutlinedIcon,
  AccountBox as AccountBoxIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import "./nav.scss";
import { Link, useNavigate } from "react-router-dom";
import { stateContext } from "../feature/stateContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Nav = () => {
  const {state:{logins,isprofcheck,profilepost,posts,},dispatch}=useContext(stateContext);
  console.log(logins);
  const nava:any = useNavigate()
  const [newAcou,setnewaco]=useState(isprofcheck)
  console.log(newAcou);
  const [acount,setacount]=useState(profilepost)
  console.log(acount);
  
 
 let notcount=[];
  for(let i= 0; i<posts.length; i++){
    notcount.push(i);
    
  }
  console.log(notcount);
  let ee = notcount.length;
  
  
  const newAcount =()=>{
  dispatch({type:"NEW_SIGIN_UP",payload:newAcou})
nava('/signup')
  }
  const logout=()=>{
    dispatch({type:"LOGOUT",payload:false})
    nava('/')
  }


  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu 
    
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="popup-box">
        {acount.map((val:any,index:number)=>{
 return <Card className="popup-img">
          <div className="popupimg-name">
            <div>
            <img src={val.image} alt="error" width="50px"></img>
            </div>
           <div>
            <h4>{val.pname1}</h4>
           </div>
          </div>
        </Card>
        })}
      <MenuItem onClick={handleMenuClose}>
      {/* <Link to='/profile'> <AccountBoxIcon></AccountBoxIcon><span> Profile</span></Link>  */}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
 <AccountCircle></AccountCircle><span onClick={()=>newAcount()}> new account</span>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <LogoutIcon></LogoutIcon><span onClick={()=>logout()}>logout</span> 
      </MenuItem>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  
            <MailIcon />
         
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
        <Badge badgeContent={ee} color="error">
                  <NotificationsIcon />
                </Badge>
          
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    // ==========================================================================

    <div id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Button className="face-icon">
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon className="search-icon" />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>
            <Box sx={{ flexGrow:2}}>
              {/* ==================================================================== */}
              <div className="navic-icon">
                <div className="navnav-icon active">
                  <HomeIcon></HomeIcon>
                </div>
                <div className="navnav-icon">
                  <AddToQueueIcon></AddToQueueIcon>
                </div>
                <div className="navnav-icon">
                  <StoreIcon></StoreIcon>
                </div>
                <div className="navnav-icon">
                  <Diversity1OutlinedIcon></Diversity1OutlinedIcon>
                </div>
                <div className="navnav-icon">
                  <SportsEsportsOutlinedIcon></SportsEsportsOutlinedIcon>
                </div>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            ben
            <IconButton
              size="large"
              edge="start"
              className="side-icon"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                className="side-icon"
              >
              
                  <MailIcon />
              
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                className="side-icon"
              >
                   <Badge badgeContent={ee} color="error">
                  <NotificationsIcon />
                </Badge>
              
              </IconButton>
              {/* {isprofcheck ? (acount.map((val:any,index:number)=>{
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="side-icon"
              >
               <img src={val.image} width="40px" className="frofro"></img>
              </IconButton> 
              })):(<IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="side-icon"
              >
               <AccountCircle />
              </IconButton> )} */}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="side-icon"
              >
              
               <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                className="side-icon"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};
export default Nav;
