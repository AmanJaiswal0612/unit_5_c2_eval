export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {

if(size=="xs"){
  size="24px"
}else if(size=="sm"){
  size="32px"
}else if(size=="md"){
  size="40px"
}else if(size=="lg"){
  size="48px"
}else if(size===undefined){
  size="40px"
}


  return (
    <div className="inputContainer"  style={{display:"flex"}} >
      {/* Add Right Logo */}
      <input data-testid="input" onChange={onChange?(e)=>onChange(e):null} 
       type={type?type:"text"} style={{fontSize:size}}  
       className={`input`} />
      {rightLogo?<img data-testid="logo" src={rightLogo} onClick={rightLogoOnClick} 
       style={{width:"30x" ,height:"30px"}} ></img>:null}
    </div>
  );
};
