import React, { useEffect } from "react";
import Cookies from "universal-cookie";

const Logout = () => {
    useEffect(() => {
        const token = new Cookies()
        token.remove('token');
        localStorage.clear();
        window.location = "/";
    }, [])
    return(
        <h1>Loading...</h1>
    )
}

export default Logout;