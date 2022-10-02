import React from 'react'
import styled from 'styled-components';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

 const Container=styled.div`
 
display: flex;
 height:100% ;
 padding:2rem ;
 flex-direction:column ;

 `
 const NextIcon =styled.div`

 display: flex;
 align-items: center;
 justify-content: center;
 position:absolute;
 margin-left:40% ;
 margin-top: 3%;
 height:20px ;
 width: 20px;
 background-color:white ;
 border-radius:50% ;
 padding:0.2rem ;
 font-weight:bold ;
 opacity:0 ;
 
 `
const Heading= styled.h1`
color: #182747;
font-family: 'Helvetica Neue', sans-serif ;
`
const Content =styled.div`
display: flex;
height:500px ;
border-radius:10px ;
overflow:hidden ;

`

const Items = styled.image`

object-fit:cover;
display: flex;
flex:1 ;
background-size:cover ;
/* height: 100%; */
width:100% ;
background: ${props => `url(${props.Image}) center`};
transition:all ease 0.5s ;
&:hover{
    flex:2 ;
   

}

&:hover ${NextIcon}{
  opacity:0.8;
  z-index:1 ;
  position:relative ;
  margin-left:80% ;
  margin-top:8% ;
}



`
const ImageTitle= styled.h3`
position:absolute ;
margin-left:6% ;
margin-top:3% ;
color:#D8D8D8 ;
font-weight:700 ;
letter-spacing:2px ;
font-family:Arial, Helvetica, sans-serif ;
text-shadow: 0px 1px 19px rgba(83, 37, 0, 1);

`

const data =[
  {
    image:'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'Strenth'
  },
  {
    image:'https://images.pexels.com/photos/8769162/pexels-photo-8769162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'Mobility'
  },
  {
    image:'https://images.pexels.com/photos/33703/relay-race-competition-stadium-sport.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'Drill'
  },
 
]

const Carousole = () => {
  return (
  <Container>
    <Heading>RUNNER's WORKOUT</Heading>
    <Content>
    {data.map(items=>
      
        <Items  Image ={items.image}>
     <ImageTitle>{items.title}</ImageTitle>
     <NextIcon><ArrowForwardIosRoundedIcon fontSize='small'></ArrowForwardIosRoundedIcon></NextIcon>
        </Items>
    )}
    </Content>
   </Container>
  )
}

export default Carousole