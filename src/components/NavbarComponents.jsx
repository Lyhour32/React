import React from 'react'

const NavbarComponents = () => {
  return (
    <nav style={{width:'100%',height:'50px', backgroundColor:'#f2272f'}}>
      <ul style={{width:'90%',height:'50px',margin:'auto',display:'flex',gap:'25px',alignItems:'center',listStyle:'none'}}>
        <li><a href="#" style={{textDecoration:'none',fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Home</a></li>
        <li><a href="#" style={{textDecoration:'none',fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>កម្សាន្ត</a></li>
        <li><a href="#" style={{textDecoration:'none',fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>បច្ចេកវិទ្យា</a></li>
        <li><a href="#" style={{textDecoration:'none',fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>ជីវិតនិងសង្គម</a></li>
        <li><a href="#" style={{textDecoration:'none',fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>កីឡា</a></li>
        <li><a href="#" style={{textDecoration:'none',fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Auto talk</a></li>
      </ul>
    </nav>
  )
}

export default NavbarComponents
