import { ReactNode } from "react";

const Button = (
    {disable,children,onClick}:
    {disable:boolean,children:ReactNode,onClick:(number:Number)=> void}) => {
    
    
    
    return (
    <button 
        onClick={()=>onClick(100)}
        style={{backgroundColor:disable ? 'red' : 'blue',padding:'10px 20px',borderRadius:'1rem',color:'white'}}> 
        {children}
    </button>);
}
 
export default Button;