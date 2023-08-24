
import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBCardImage,
    MDBCard, MDBCardBody, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import passwordValidator from 'password-validator';

var schema = new passwordValidator();

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    function showPassword() {
        setPasswordShown(passwordShown ? false : true);
    }

    schema
        .is().min(4)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits(2)
        .has().not().spaces()
        .is().not().oneOf(['Passw0rd', 'Password123']);

    const [isValidCFpassword, setIsValidCfpassword] = useState(false);
    const [isValidCFpassword2, setIsValidCfpassword2] = useState(false);
    const [messageCfpassword, setMessageCfpassword] = useState('');
    const [messageStrongpassword, setmessageStrongpassword] = useState('');
    const [password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNIC] = useState("");
    const [phone, setPhone] = useState("");
    const [Registrationbtn, setRegistrationbtn] = useState(true);

    const setPasswordFunction = (event) => {
        if (schema.validate(event) === false) {
            setIsValidCfpassword2(false);
            setmessageStrongpassword('Password is not strong');

        } else {
            setIsValidCfpassword2(true);
            setmessageStrongpassword('Password is strong');

        }
        setPassword(event);
    }
    async function Registration(e) {
        e.preventDefault();
        const userReg = { password, name, nic, email, phone };

        try {
            const response = await axios.post("http://localhost:5000" + "/guider/register", userReg);
            console.log(response);
            if (response.data.message !== "Email is Already Used") {

                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success",
                    confirmButtonText: "OK",
                    type: "success",
                }).then((okay) => {
                    if (okay) {
                        window.location.href = "/Login";
                    }
                });
            }
            else {
                Swal.fire({
                    title: "Error!",
                    text: "Email Already Taken",
                    icon: "error",
                    confirmButtonText: "OK",
                    type: "success",
                });
                setTimeout(() => {
                    window.location.href = "/Register";
                }, 3000);
            }
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "Registration Not Success",
                icon: "error",
                confirmButtonText: "OK",
                type: "success",
            });
            setTimeout(() => {
                window.location.href = "/Register";
            }, 3000);
        }
    }


    const setCPasswordFnction = (event) => {
        const ConfirmPassword = event;

        if ((ConfirmPassword === password) && (ConfirmPassword !== '') && (ConfirmPassword !== null)) {
            setIsValidCfpassword(true);
            setMessageCfpassword('Password Are Matching');

        } else {
            setIsValidCfpassword(false);
            setMessageCfpassword('Passwords Are Not Match');
        }
        setCPassword(event);
    };

    const registerBtn = () => {
        if ((nic !== '') && (name !== '') && (phone !== '') && (email !== '') && (password !== '') && (CPassword !== '') && isValidCFpassword && isValidCFpassword2) {
            setRegistrationbtn(false)
        }
        else {
            setRegistrationbtn(true)
        }
    }

    useEffect(() => {
        registerBtn()
    }, [name, nic, phone, email, password, CPassword])

    return (
        <div>
            {/* <Navbar /> */}
            <MDBRow style={{ marginTop: '1%', marginBottom: '10%', width: '99%' }}>
                <MDBCol sm='1'></MDBCol>
                <MDBCol sm='5'>
                    <MDBCard className="border-0 shadow-0">
                        <MDBCardImage style={{ width: '200', height: '800px', marginTop: '10% ' }} position='top' alt='...' src='https://images.unsplash.com/photo-1608570004513-472c257f2149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBCard className="border-0 shadow-0 p-5">
                        <MDBCardBody className="pt-5 mt-3 text-left">
                            <div className="bg-light p-4">
                                <center><h2 className="text-uppercase">Sign Up </h2></center>
                                <br />
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        required
                                    />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input class="form-control" type={passwordShown ? "text" : "password"} id="pass" onChange={(e) => {
                                        setPasswordFunction(e.target.value);
                                    }} />
                                    <span style={{ fontSize: '12px', margin: '0px', padding: '0px' }} className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                                        {messageStrongpassword}
                                    </span>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Retype Password</label>
                                    <input class="form-control" type={passwordShown ? "text" : "password"} id="pass" onChange={(e) => {
                                        setCPasswordFnction(e.target.value);
                                    }} />
                                    <span style={{ fontSize: '12px', margin: '0px', padding: '0px' }} className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                                        {messageCfpassword}
                                    </span>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">NIC</label>
                                    <input type="text" class="form-control"
                                        onChange={(e) => {
                                            setNIC(e.target.value);
                                        }} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder=""
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const sanitizedValue = inputValue.replace(/[^0-9-]/g, '');
                                            const numericValue = sanitizedValue.replace(/^-/, '');
                                            const truncatedValue = numericValue.slice(0, 10);
                                            if (truncatedValue !== '') {
                                                setPhone(truncatedValue);
                                            }
                                        }}
                                        value={phone}
                                    />
                                </div>
                                <div class="mt-3 mb-2">
                                    <div className='row'>
                                        <div className='col'>
                                            <div class="d-grid gap-2">
                                                <br />
                                                <button class="btn text-white bg-success d-letter-spacing fw-light" style={{ fontSize: "15px" }} onClick={Registration} disabled={Registrationbtn}>Register</button>
                                            </div>
                                        </div>

                                        <div className='col'>
                                            <div class="d-grid gap-2">
                                                <br />
                                                <MDBBtn class="btn text-white bg-dark d-letter-spacing fw-light" style={{ fontSize: "15px" }}>Cancel</MDBBtn>
                                            </div>
                                        </div>
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

export default Register;