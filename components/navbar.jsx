import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly" 
    ,height:"50px", fontSize:"20px",backgroundColor:"lavender",fontWeight:"bolder"}}>
      <Link href="/">Home</Link>
      <Link href="/project">Project</Link>
      <Link href="/experience">Experience</Link>
    </div>
  )
}

export default Navbar;
