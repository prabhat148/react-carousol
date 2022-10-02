
import React from 'react'
import styled from 'styled-components';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import PersonIcon from '@mui/icons-material/Person';



export const CompNav =styled.div`
height:10vh ;
padding:0.5rem ;
position:'static';
display: flex;
align-items: center;
justify-content: space-evenly;
background-color:#f3f6f4 ;

box-shadow: -1px 4px 15px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 4px 15px -1px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 4px 15px -1px rgba(0,0,0,0.75);
`

const Logobox =styled.div`
display: flex;
flex:1 ;
align-items: center;
justify-content:flex-start;
height:100% ;

margin-left:10px ;


`
const Logo =styled.div`

display: flex;
align-items: center;
justify-content: center;
height:60px ;
width:60px ;
background-color:#424242 ;
color:white ;
border-radius:50% ;
font-weight:bold ;
font-size:25px ;

`
const Navmenu =styled.div`

display: flex;
flex:2 ;
justify-content: space-evenly;
height:100% ;
align-items: center
`
const MenuItems=styled.div`
  display: flex;
  flex-direction:column ;
  align-items:center ;
  justify-content: center;
  height:inherit ;
  width:fit-content ;
  cursor: pointer;
`
const MenuLabel=styled.label`
font-weight:400 ;
font-size:12px ;
margin:5px ;
color: #616161;
cursor: pointer;
` 

const LoginMenu =styled.div`

display: flex;
flex:1;
height:100% ;
justify-content:flex-end ;
align-items: center;
margin-right:10px ;
cursor: pointer;
`
   

const NavBar = () => {
  return (
    <CompNav>
    <Logobox>

        <Logo>
            HF
        </Logo>
    </Logobox>

    <Navmenu>

        <MenuItems>
           
         <VideocamOutlinedIcon fontSize='large'/>
             <MenuLabel>Live</MenuLabel>
         
        </MenuItems>
        <MenuItems>
           
                <DirectionsRunOutlinedIcon fontSize='large'/>
                
                <MenuLabel>Plan</MenuLabel>
        </MenuItems>
        <MenuItems>
           
        <BadgeOutlinedIcon fontSize='large'/>
        <MenuLabel>Membership</MenuLabel>
        
         
        </MenuItems>
        <MenuItems>

           <GridViewOutlinedIcon fontSize='large'/>
           
           <MenuLabel>More</MenuLabel>

         
        </MenuItems>
    </Navmenu>
        <LoginMenu>
        <PersonIcon fontSize='large'/>
        <MenuLabel>Login</MenuLabel>
        </LoginMenu>
    </CompNav>
  )
}

export default NavBar