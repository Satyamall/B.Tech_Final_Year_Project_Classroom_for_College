
import React from "react";

const About = () => {
    
    return(
        <div style={{ textAlign: "center"}}>
           <h1>Rajkiya Engineering College , Sonbhadra</h1>
           <p style={{ width: "90%", margin: "auto", fontSize: "20px", lineHeight: "30px"}}>Rajkiya Engineering College, Sonbhadra was established by the Government of Uttar Pradesh in the year 2015. The college offered its first course in Computer Science Engineering programme with an annual intake of sixty students. Later in 2016, two new branches, Electrical Engineering and Electronics Engineering came up with an intake of sixty students each. The academic activities of REC Sonbhadra were initiated at KNIT Sultanpur in year 2015. The college started functioning on its present campus at Churk, Roberstganj, Sonbhadra from the year 2017-18. It is a safe and secure campus. Students will find the beautiful and peaceful campus a great place to live. The College has a total campus area of 30 acres. This includes Administrative block, Academic block, Open Auditorium (Student activity centre), hostels, ATM, Canteen. The hallmark of the campus is the good facilities which cater to the academic and extracurricular interests of the students. The campus is equipped with facilities like laboratories, library, workshop, High-Speed Internet connection, and other seminar and conference facilities.</p>
           <div style={{ width: "90%", display: "flex",flexWrap: "wrap", gap: "5rem", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
               <a href="https://aktu.ac.in/">
                   <img src="http://recsonbhadra.ac.in/static/media/AKTU.c3eb24b5.png" alt="aktu" width="100px"/>
               </a>
               <a href="https://www.aicte-india.org/">
                   <img src="http://recsonbhadra.ac.in/static/media/AICTE.bd51b4d9.jpg" alt="aicte" width="100px"/>
               </a>
               <a href="https://nptel.ac.in/">
                   <img src="http://recsonbhadra.ac.in/static/media/NPTEL.0d3ebaf3.png" alt="nptel" width="100px"/>
               </a>
               <a href="https://prutor.ai/college/aktu841/">
                   <img src="http://recsonbhadra.ac.in/static/media/PRUTOR.1e2968d3.jpg" alt="prutor" width="100px"/>
               </a>
           </div>
        </div>
    )
}

export default About;