import React from "react";
import anamika from "../Icons/Anamika.jpg";
import satya from "../Icons/Satya-Profile.jpg";
import jaswant from "../Icons/Jaswant.jpg";
import indrajeet from "../Icons/Indrajeet.jpg";
import Anurag_Sir from "../Icons/Anurag-Sir.jpg"
const Home = () => {
    return(
    <div>
        <div style={{ textAlign:"center"}}>
            <h1>Welcome to iLearn</h1>
            <p style={{ width: "80%", margin: "auto", fontSize: "30px", lineHeight: "40px"}}>
            iLearn is an app for teachers and students that facilitates online education. iLearn is an online teaching and learning environment where teachers and students can present course materials, engage and interact with other members of the iLearn, and work in groups together. This app is totally build using MERN(MongoDB Express.js React.js Node.js) Stack. We are using Material UI for better user experience.
            </p>
        </div>
        <h1 style={{ textAlign: "center", margin: "50px"}}> iLearn Team : </h1>
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap:"10rem", padding: "10px"}}>
                <div style={{width: "200px"}}>
                  <img src={Anurag_Sir} alt="Dr. Anurag Sewak" width="180px" height="180px" style={{ borderRadius: "50%"}}/>
                  <h3>  Dr. Anurag Sewak</h3>
                  <h4>Assistant Professor ( CSED )</h4>
                </div>
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap:"2rem", padding: "10px"}}>
           <div>
                <img src={satya} alt="Satya Prakash Mall" width="150px" height="150px" style={{ borderRadius: "50%"}}/>
                <h3>Satya Prakash Mall ( CSE )</h3>
                <h4>Batch: ( 2018 - 2022 )</h4>
            </div>
           <div>
                <img src={jaswant} alt="Jaswant Chaudhary" width="150px" height="150px" style={{ borderRadius: "50%"}}/>
                <h3>Jaswant Chaudhary ( CSE )</h3>
                <h4>Batch: ( 2018 - 2022 )</h4>
            </div>
           <div>
                <img src={anamika} alt="Anamika Gupta" width="150px" height="150px" style={{ borderRadius: "50%"}}/>
                <h3>Anamika Gupta ( CSE )</h3>
                <h4>Batch: ( 2018 - 2022 )</h4>
            </div>
           <div>
                <img src={indrajeet} alt="Indrajeet Kumar" width="150px" height="150px" style={{ borderRadius: "50%"}}/>
                <h3>Indrajeet Kumar ( CSE )</h3>
                <h4>Batch: ( 2018 - 2022 )</h4>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Home;