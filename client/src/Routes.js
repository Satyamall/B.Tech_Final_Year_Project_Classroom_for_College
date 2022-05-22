import React from "react";

import {Route, Switch} from 'react-router-dom';

import About from "./Components/About/about.component";
import Archived from "./Components/Class/archived.component";
import Class from "./Components/Class/class.component";
import Classwork from "./Components/Class/classwork.component";
import JoinClass from "./Components/Class/join_class.component";
import People from "./Components/Class/people.component";
import ClassSetting from "./Components/Class/setting.component";
import Checkbox from "./Components/Classwork/checkbox.classwork";
import LongAnswer from "./Components/Classwork/long-answer.classwork";
import Material from "./Components/Classwork/material.classwork";
import MultipleChoice from "./Components/Classwork/multiple-choice.classwork";
import ShortAnswer from "./Components/Classwork/short-asnwer.classwork";
import ZeroFourZero from "./Components/Error/404.component";
import Classroom from "./Components/class.component";
import Login from "./Components/login.component";
import Logout from "./Components/logout.component";
import EditProfile from "./Components/Profile/edit_profile.component";
import Profile from "./Components/Profile/profile.component";
import Register from "./Components/register.component";
import Home from "./Components/home.component";

const Routes = () => (
    <>
        <Switch>
            <Route exact path = "/" component = {Classroom} />
            <Route exact path = "/home" component = {Home} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/about" component = {About} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/logout" component = {Logout} />
            <Route exact path = "/profile/edit" component = {EditProfile} />
            <Route exact path = "/profile" component = {Profile} />
            <Route exact path = "/archived" component = {Archived} />
            <Route exact path = "/join" component = {JoinClass} />
            <Route exact path = "/:classId/c/:classworkId" component = {Checkbox} />
            <Route exact path = "/:classId/mc/:classworkId" component = {MultipleChoice} />
            <Route exact path = "/:classId/la/:classworkId" component = {LongAnswer} />
            <Route exact path = "/:classId/sa/:classworkId" component = {ShortAnswer} />
            <Route exact path = "/:classId/m/:materialId" component = {Material} />
            <Route exact path = "/:classId/classwork" component = {Classwork} />
            <Route exact path = "/:classId/setting" component = {ClassSetting} />
            <Route exact path = "/:classId/people" component = {People} />
            <Route exact path = "/:classId" component = {Class} />
            <Route exact path = "*" component = {ZeroFourZero} />
        </Switch>
    </>
)

export default Routes;