import {Card} from "@material-ui/core";

import './list.css'
import {useEffect, useState} from "react";
import API from "../../api/api";
const List = ()=>{
    const [users, setUsers]= useState([]);
    const [refresh , setRefresh]= useState(false)
    useEffect(()=>{
        API.get('/allusers')
            .then(res=>setUsers(res.data))
            .catch(err=>console.log(err))
    },[refresh])

    const deleteUser = (id)=>{
        API.post('/deleteuser',{id})
            .then(res=>{
                alert(res.data)
                setRefresh(true)
            })
            .catch(err=>alert('not ok '))
    }
    return(
        <div className={'c-container'}>
            <h1>List users</h1>
            { users && users.map(user=>
                <Card
                    onClick={() => deleteUser(user._id)}
                    style={{backgroundColor:'#3f616b'}}
                      className={'c-card'}>
                    <h2>Nom : {user.nom}</h2>
                    <h3>email : {user.email}</h3>
                    <h3>password : {user.password}</h3>
                </Card>
            )}

        </div>
    )
}
export default List;
