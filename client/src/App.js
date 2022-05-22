import React from "react";
import Routes from "./Routes";

const App = () => (
   <div>
        <div style={{ width: "100%", display: "flex", flexWrap:"wrap", gap:"2rem",alignItems:"center", justifyContent: "center",borderBottom: "1px solid white", background: "rgb(34,40,150)"}}>
           <div style={{ marginLeft: "30px"}}>
               <a href="http://localhost:3000/home">
                  <img src="http://recsonbhadra.ac.in/static/media/Collegelogo.96cbe2da.png" width="100px" alt="REC-SONBHADRA"/>
               </a>
           </div>
           <div style={{color: "white", textAlign: "center"}}>
               <p>राजकीय इंजीनियरिंग कॉलेज सोनभद्र</p>
               <p>Rajkiya Engineering College Sonbhadra</p>
               <p>An AICTE approved Government Engineering College affiliated to AKTU Lucknow (College Code 841)</p>
           </div>
           <div>
               <a  href="http://localhost:3000/about" style={{ textDecoration: "none", color:"white"}}>ABOUT</a>
           </div>
           <div>
               <a href="http://localhost:3000/" style={{ textDecoration: "none", color:"white"}}>iLearn</a>
           </div>
           <div>
               <a href="http://localhost:3000/login" style={{ textDecoration: "none", color:"white"}}>LOGIN / REGISTER</a>
           </div>
       </div>
       <Routes />
   </div>
)

export default App;