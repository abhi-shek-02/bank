import React from 'react'
import './Button.css'
const ContainerA = () => {
    const mycss = {
        height:"300px",
        width:"20%",
        fontFamily: "Arial",
         background:"white",
        'box-shadow' :'0 2px 10px 5px rgb(0 0 0 / 8%)',
        'border-radius':"10px",
        margin:'10px',
        display:"flex",
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        // 'background':'#66e3c4',

      };
    const btn = {
         height:"40px",
         width:"150px",
         fontFamily: "Arial",
         background:"white",
        // 'box-shadow' :'0 2px 10px 5px rgb(0 0 0 / 8%)',
        'border-radius':"10px",
         margin:'10px',
         display:"flex",
        'justify-content': 'center',
        'align-items': 'center',
        'background':'#66e3c4',
        'colour':'white',

      };
  return (
    <div style={mycss}> 
      <button className="button-9" role="button"> <span class="text">Home</span> </button>
      <button className="button-9" role="button"> <span class="text">Favourite</span> </button>
    </div>
  )
}

export default ContainerA;




