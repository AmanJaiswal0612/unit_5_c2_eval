import { useRef } from "react";

export const Pagination = ({ total, selected, onPageChange }) => {
  if(total==undefined){
    total=1
  }
  let arr= new Array(Number(total)).fill(0)
  let divRef= useRef([]);
 
  return <div style={{display:'flex'}} data-testid="main" className="pageContainer">
    <button style={{border:"1px solid black"}} disabled={selected==0}  onClick={()=>{
       onPageChange(-1);
       for(let i=0;i<total;i++){
        if(selected==i){
          divRef.current[i].style.border="1px solid blue"
        }
        else{
          divRef.current[i].style.border="1px solid black"
        }
      }
    }} >prev</button>
          {arr.map((el,index)=>{
            return<div 
            ref={(element)=>{
              if(element&&divRef.current){
              divRef.current[index]=element;
              }
            }}
            
            onClick={()=>{
              if(divRef.current){
              for(let i=0;i<total;i++){  
              if(index==i){  
              divRef.current[i].style.border="1px solid blue"
              }else{
                divRef.current[i].style.border="1px solid black"
              }
              }
            }
            }}

            style={{width:"40px",height:"50px" ,border:"1px solid black"}}
            key={index}>{index+1}</div>
          })}
      <button style={{border:"1px solid black"}} disabled={selected>total} onClick={()=>{
        onPageChange(+1);
        for(let i=0;i<total;i++){
          if(selected==i){
            divRef.current[i].style.border="1px solid blue"
          }
          else{
            divRef.current[i].style.border="1px solid black"
          }
        }
        
      }} >next</button>    
  </div>;
};
