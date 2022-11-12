import React, { useEffect, useState } from "react";
import axios from 'axios'

const Authentication = () =>{


    const [ param, getParams]= useState([])

    useEffect(() => {

        const tkn = window.localStorage.getItem("token")
        axios
            .get('https://aula-virtual-ccitec.herokuapp.com/users/me', {
            headers: {
                Authorization: `Bearer ${tkn}`,
            },
            })
            .then(response => {
            // Handle success.
                getParams(response.data)

            //console.log('Data: ', response.data);
            
            })
            .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            });

    }, ["token"])

    return { param }

}


export default Authentication