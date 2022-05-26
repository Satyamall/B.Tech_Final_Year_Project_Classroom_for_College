import Axios from "axios";
import React, { useEffect, useState } from "react";
import InfoById from "../../Library/InfoById";
import ClassNavbar from "../Navbar/class.navbar";
import DefaultProfile from "../../Icons/profile.png";
const URL = process.env.REACT_APP_BACKEND_URL;
const People = (params) => {
    const [classInfo, setClassInfo] = useState({});
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const classId = params.match.params.classId;
        Axios.get(`${URL}/class/get/class/${classId}`)
        .then(res => setClassInfo(() => res.data))
    }, [params.match.params.classId])

    useEffect(() => {
        if(classInfo){
            InfoById(classInfo.owner)
            .then(result => {
                setTeachers(teachers => [...teachers, result]);
            });
            if(classInfo.teacher){
                (classInfo.teacher).forEach(teacher => {
                    InfoById(teacher)
                    .then(result => {
                        setTeachers(teachers => [...teachers, result])
                    })
                })
            }
            if(classInfo.students){
                (classInfo.students).forEach(student => {
                    InfoById(student)
                    .then(result => setStudents(students => [...students, result]))
                })
            }
        }
    }, [classInfo])

    return(
        <div className="container-fluid">
            <ClassNavbar classInfo = {classInfo} />
            <div className="container">
                <h2 className="box-title" style={{color:"teal",border:0}}>Teachers:</h2>
                {teachers.map(teacher => {
                    if(teacher){
                        if(teacher.profile_picture){
                            return <div key={teacher._id} className="box">
                                <img src = {`${URL}/${teacher.profile_picture.filename}`} className="pp" alt={teacher.username} />
                                <b>&nbsp;{teacher.username}</b> <span>({teacher.email})</span>
                                </div>
                        }else{
                            return <div key={teacher._id} style={{}}>
                                <div style={{display: 'flex',justifyContent: 'center',border:"1px solid grey",width:"40%",padding:"10px",borderRadius:"5px",textAlign:"center",margin:"auto"}}>
                                    <div>
                                    <img src = {DefaultProfile} className="pp" alt={teacher.username} />
                                    </div>
                                    <div style={{paddingTop:"6px"}}>
                                    <b>&nbsp;{teacher.username}</b> <span>({teacher.email})</span>
                                    </div>
                                </div>
                                </div>
                        }
                    }else return null;
                })}
                <h2 className="box-title" style={{color:"teal",border:0}}>Students:</h2>
                {students.map(student => {
                    if(student){
                        if(student.profile_picture){
                            return <div key={student._id} className="box">
                            <img src = {`${URL}/${student.profile_picture.filename}`} className="pp" alt={student.username} />
                            <b>&nbsp;{student.username}</b> <span>({student.email})</span>
                            </div>
                        }
                        else{
                            return <div key={student._id}>
                                 <div style={{display: 'flex',justifyContent: 'center',border:"1px solid grey",width:"40%",padding:"10px",borderRadius:"5px",textAlign:"center",margin:"auto"}}>
                                    <div>
                                    <img src = {DefaultProfile} className="pp" alt={student.username} />
                                </div>
                                    <div style={{paddingTop:"6px"}}>
                                    <b>&nbsp;{student.username}</b> <span>({student.email})</span>
                                </div>
                                </div>
                                 </div>
                        }
                    }else return null;
                })}
            </div>
        </div>
    )
}

export default People;