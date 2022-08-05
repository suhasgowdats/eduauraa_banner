import { Button } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Images/Eduauraa.png'

function Nav() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", flexWrap:'wrap'  }} >
    <div >
        <img style={{height:'120px', borderRadius:'60px', cursor:'pointer', padding:'20px'}} src={Logo} alt='logo' />
    </div >
    <div style={{padding:'2%'}}>
        <Button colorScheme={"gray"}>Login/SignIn</Button><br></br>
        <a className='tab' href='/'>Class </a>
        <a className='tab' href='/'>Buy a course </a>
        <a className='tab' href='/'>Scholarschip</a>
        <a className='tab' href='/'>About</a>
        </div>
    </div>
  )
}

export default Nav