import {Button, Card, TextField} from "@material-ui/core";

import './register.css'
const  Register = ()=>{
    return (
        <div className={'container'}>
            <Card className={'card'}>
                <h1>Register</h1>
                <TextField  label="Nom" />

                <TextField   label="Email" />

                <TextField type={'password'} label="Password" />

                <Button style={{marginTop:5}} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}

export default Register;
