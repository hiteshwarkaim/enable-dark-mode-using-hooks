import { useState } from "react";
import "./App.css";
import { Alert } from "./Alert";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  //alert hook
  const[alert,setAlert]=useState(null);
  function showAlert(message,type){
      setAlert({
        msg:message,
        type: type
    })
    setTimeout(() => {  //after 1500ms alert disapper
      setAlert(null);
    }, 1500);
  }


  
//toggle button
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
      showAlert("Dark mode has been enables","success");
      document.title='My App-Dark';
    }
    else
    {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      })
      setBtnText("Enable Dark Mode");
      showAlert("Light mode has been enables","success");
      document.title='My App-Light';
    }
  }


  
  return (<div className="App container">

      
    <Alert alert={alert}/>

    <div style={myStyle}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique 
          officiis molestias nemo fugiat consequuntur nostrum soluta voluptatem nisi 
          fugit laborum, exercitationem natus ducimus, voluptate laboriosam officia 
          quibusdam maxime ullam quos temporibus consectetur et harum! Enim repellendus 
          commodi mollitia laborum </p>
    </div>
    <button onClick={toggleStyle}>{btnText}</button>
  </div>);
}

export default App;
