import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import eye from "./Components/eye.svg";
import { useState } from "react";



function App() {
  const [val,setVal]=useState(false)
  const [text,setText]=useState("")
  const [select,seTselect]=useState(0);
const rightLogoOnClick= ()=>{
  setVal(!val);
}
const handleChange= (e)=>{
  setText(e.target.value)
}

  return (
    <div className="container">
      <Input onChange={handleChange} type={val?"text":"password"}  size="xs" variant="outline" rightLogo={eye} rightLogoOnClick={rightLogoOnClick}  />
      <Image src="https://www.bing.com/th?id=OIP.Blag-F1I9HmWBEf6jGLw5gHaFF&w=150&h=103&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="image" borderRadius="70px" width={"200px"} height="200px" object-fit={"cover"}
      
      />
      <Pagination total="10" selected={select} onPageChange={(val)=>{
        seTselect(select+val)
      }
      } />
    </div>
  );
}

export default App;
