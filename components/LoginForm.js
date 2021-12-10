import axios from "axios";
import { useState } from "react";
import base_url from "../api/bootapi";
import {useRouter} from 'next/router';
import Swal from 'sweetalert2';

export default function LoginForm() {
    
    const [userDetail, setUserDetail] = useState({});
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        postDataToServer(userDetail);
        console.log(userDetail);
    }
    const postDataToServer = (data) => {
        axios.post(`${base_url}/login`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                console.log(response.data);
                const arr = response.data.split(",");
                if(arr[0] == "Valid" && arr[1] == "employee")
                    router.push("/employee");
                else if(arr[0] == "Valid" && arr[1] == "manager")
                    router.push("/manager");
                else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'Incorrect Email or Password',
                        icon: 'error',
                        confirmButtonText: 'OK'
                      })
                }
            },
            (error)=>{
                console.log(error);
                console.log("error");
                router.push("/error");
            }
        );
    }
    return (
        <>

            <div className="box-container">
                <div className="box">
                    <p className="signIn">SignIn</p>
                <form onSubmit={handleSubmit}>
                <div className="name">
                    <input type="text" className="control" name="userName" placeholder="Full Name" required onChange={
                        (e) => {
                            setUserDetail({...userDetail, userName: e.target.value});
                        }
                    }/>
                </div>
                <div className="email">
                    <input type="email" name="userEmail" className="control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required onChange={
                        (e) => {
                            setUserDetail({...userDetail, userEmail: e.target.value});
                        }
                    }/>
                </div>
                <div className="password">
                    <input type="password" name="userPassword" className="control" placeholder="userPassword" required onChange={
                        (e) => {
                            setUserDetail({...userDetail, userPassword: e.target.value});
                        }
                    }/>
                </div>
                <button className="button" type="submit">Submit</button>
            </form>  
                </div>
            </div>            
        </>
    )

}
