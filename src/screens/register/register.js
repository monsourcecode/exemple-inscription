import {Button, Card, TextField} from "@material-ui/core";

import './register.css'
import {useState} from "react";
import API from "../../api/api";

const  Register = ()=>{
    const [nom, setNom]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassord]= useState('')
    const  send = ()=>{
        const data = {
            nom, email,password
        }
        API.post('/addUser',data)
            .then(res => {
                    alert(res);
                    setPassord('')
                    setEmail('')
                    setNom('')
             })
            .catch(err=>alert("error"))
    }
    return (
        <div className={'container'}>
            <Card className={'card'}>
                <h1>Register</h1>
                <TextField
                    value={nom}
                    onChange={event => setNom(event.target.value)}
                    label="Nom" />

                <TextField
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    label="Email" />

                <TextField
                    value={password}
                    onChange={event => setPassord(event.target.value)}
                    type={'password'} label="Password" />

                <Button onClick={send} style={{marginTop:5}} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}

export default Register;
