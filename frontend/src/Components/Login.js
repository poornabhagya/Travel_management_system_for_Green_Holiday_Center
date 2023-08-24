import React, { useState, useEffect } from 'react';
import { MDBIcon, MDBBtn, MDBCol, MDBCard, MDBCardImage, MDBRow, MDBCardBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setdisabled] = useState(true);

    const btn = () => {
        if ((email !== "") && (password !== "")) {
            setdisabled(false)
        }
        else {
            setdisabled(true)
        }
    }


    async function login(e) {
        e.preventDefault();

        let user = { email, password };
        console.log(user);
        try {
            const response = await axios.post("http://localhost:5000" + "/guider/login", user);
            console.log(response.data.message);

            if (response.data.message === true) {


                await Swal.fire({
                    title: "Success!",
                    text: "Login Success",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                });
                reactLocalStorage.setObject("userName", [email]);
                window.location.href = "/GuiHome";
            } else {
                await Swal.fire({
                    title: "Error!",
                    text: "Login Not Success",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"
                });
                window.location.href = "/Login";
            }
        } catch (error) {
            console.error(error);
            await Swal.fire({
                title: "Error!",
                text: "Login Not Success",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            });
            window.location.href = "/Login";
        }
    }
    useEffect(() => {
        btn()
    }, [email, password])
    return (
        <div>
            <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
            </div>
            {/* <Navbar /> */}
            <MDBRow style={{ marginBottom: '10%', width: '99%' }}>
                <MDBCol sm='1'></MDBCol>
                <MDBCol sm='6'>
                    <MDBCard className="border-0 shadow-0">
                        <MDBCardImage style={{ width: '99%', marginTop: '15%' }} position='top' alt='...' src='https://images.pexels.com/photos/2811837/pexels-photo-2811837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='5' style={{ paddingTop: "253px" }}>
                    <MDBCard className="border-0 shadow-0 p-5" >
                        <MDBCardBody className="pt-5 mt-3 text-left">
                            <div className="bg-light p-4" >
                                <center><h1 className="text-uppercase">Log In to Continue</h1></center>
                                <br />
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label" style={{ fontSize: "18px" }}>Email </label>
                                    <input class="form-control" type='email' id="pass" style={{ fontSize: "18px" }} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label" style={{ fontSize: "18px" }}>Password</label>
                                    <input class="form-control" type="password" id="pass" style={{ fontSize: "18px" }} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>

                                <div class="mt-3 mb-2">
                                    <div class="d-grid gap-2">
                                        <br />
                                        <button class="btn text-white bg-success d-letter-spacing fw-light" style={{ fontSize: "18px" }} disabled={disabled} onClick={login}>Login</button>
                                        <p>Don't have an account? <a href="/Register" class="link-info">Register here</a></p>
                                    </div>
                                </div>

                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            {/* <Footer /> */}
        </div>
    )
};

export default Login
