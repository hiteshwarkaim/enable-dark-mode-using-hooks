import { useState } from "react";
import "./App.css";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  function toggleStyle(){
    if(myStyle.color==='black'){
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      })
      setBtnText("Enable Light Mode")
    }
    else
    {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return <div className="App">
    <div style={myStyle}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique officiis molestias nemo fugiat consequuntur nostrum soluta voluptatem nisi fugit laborum, exercitationem natus ducimus, voluptate laboriosam officia quibusdam maxime ullam quos temporibus consectetur et harum! Enim repellendus commodi mollitia laborum ex quam? Molestias id voluptatem neque iure consequatur, eum maxime! Assumenda ipsam quasi sequi ipsum totam voluptatum sit quaerat veritatis alias deleniti eveniet, obcaecati accusamus laboriosam ad officiis nesciunt reiciendis explicabo recusandae praesentium sapiente. Ipsam, ipsum quas magnam est repellat dicta animi ex, quasi nesciunt nam quos id, ratione sequi voluptatum dolorum veniam quam. Tempore dolorum distinctio et facilis fuga.</p>
    </div>
    <button onClick={toggleStyle}>{btnText}</button>
  </div>;
}

export default App;
