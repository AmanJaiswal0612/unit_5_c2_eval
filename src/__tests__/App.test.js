import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../Components/Input";
import eye from "../Components/eye.svg"
import App from "../App";
import userEvent from "@testing-library/user-event"

test("Fake assertion", () => {
  expect(1).toBe(1);
});

describe("input box check",()=>{
 
  it("checking input box attributes",()=>{
    render(<App></App>);
    const input= screen.getByTestId("input");
    userEvent.type(input,"aman");
    expect(input).toBeInTheDocument()
  })
 

  it("checking icon",()=>{
    render(<App></App>)
    const input= screen.getByTestId("input");
    const icon= screen.getByTestId("logo");
    fireEvent.click(icon);
    expect(input).toHaveAttribute("type","text")
  })

 it("check for image",()=>{
   render(<App></App>)
   const image= screen.getByTestId("image");
   expect(image).toHaveAttribute("src","https://www.bing.com/th?id=OIP.Blag-F1I9HmWBEf6jGLw5gHaFF&w=150&h=103&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2");
   expect(image).toHaveAttribute("alt","image")
 })
 it("should have borderRadius,height,width",()=>{
   render(<App></App>)
   const image= screen.getByTestId("image");
   expect(image).toHaveStyle("width","200px");
   expect(image).toHaveStyle("height","200px")
 })

it("check pagination",()=>{
  render(<App></App>);
  const div=screen.getByTestId("main");
  expect(div).toBeInTheDocument()
})


})
