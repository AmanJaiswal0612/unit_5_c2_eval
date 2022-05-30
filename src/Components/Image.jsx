export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img data-testid="image" src={src?src:""} 
      alt={alt?alt:"image"} 
      style={{borderRadius:borderRadius||"0px",width:width||"auto",height:height||"auto",objectFit:fit||"fill"}} />
    </div>
  );
};
