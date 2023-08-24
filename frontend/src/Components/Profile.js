import React, { useState, useEffect } from 'react';
import {
    MDBIcon, MDBCardImage,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBTableBody, MDBTable, MDBTableHead
} from 'mdb-react-ui-kit';
import { TextField } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';


function Profile() {

    var tempuserName = reactLocalStorage.getObject('userName');
    const userName = tempuserName[0]
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNIC] = useState("");
    const [phone, setPhone] = useState("");
    const [submit, setSubmit] = useState(true);

    async function edit(e) {
        e.preventDefault();
        const userReg = { password, name, nic, email, phone };

        try {
            const response = await axios.put("http://localhost:5000" + "/guider/update", userReg);
            console.log(response);

            Swal.fire({
                title: "Updated!",
                text: response.data.message,
                icon: "success",
                confirmButtonText: "OK",
                type: "success",
            }).then((okay) => {
                if (okay) {
                    window.location.href = "/Profile";
                }
            });

        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "Updated Not Success",
                icon: "error",
                confirmButtonText: "OK",
                type: "success",
            });
            setTimeout(() => {
                window.location.href = "/Profile";
            }, 3000);
        }
    }

    const valid = () => {
        if ((password !== "") && (name !== "") && (nic !== "") && (email !== "") && (phone !== "")) {
            setSubmit(false)
        } else {
            setSubmit(true)
        }
    }

    const getProfile = async () => {
        try {
            const res = await axios.get("http://localhost:5000" + "/guider/getguider/" + userName);
            setName(res.data[0].name)
            setEmail(res.data[0].email)
            setNIC(res.data[0].nic)
            setPhone(res.data[0].phone)
        } catch (error) {
            console.log(error);
        }
    };


    function remove() {
        axios.delete("http://localhost:5000" + "/guider/deleteguider/" + userName).then(() => {
            Swal.fire({
                title: "Delete!",
                text: "Deleted",
                icon: "success",
                confirmButtonText: "OK",
                type: "success",
            })
            setTimeout(() => {
                window.location.href = "/Login";
            }, 3000);


        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    useEffect(() => {
        getProfile()

    }, [])

    useEffect(() => {

        valid()
    }, [password, name, nic, email, phone])

    return (
        <div>
            {/* <Navbar /> */}
            <br />
            <br />
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "60%" }}>

                    <h3 style={{ marginTop: '40px' }}>Your Profile</h3>

                    <div class="row container-fluid" style={{ marginTop: '7%', marginBottom: '7%' }}>
                        <div style={{ paddingBottom: "50px" }}>
                            <img
                                src="https://t4.ftcdn.net/jpg/01/18/03/35/360_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg"
                                class="img"
                                alt="Hollywood Sign on The Hill"
                                style={{ width: "35%" }}
                            />
                        </div>
                        <form>

                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="Name" variant="outlined" style={{ width: "700px", }} placeholder='Name' onChange={(e) => {
                                        setName(e.target.value);
                                    }} value={name} />
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="Email" variant="outlined" style={{ width: "700px", }} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} value={email} disabled />
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" type='password' id="outlined-basic" label="Password" variant="outlined" style={{ width: "700px", }} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} value={password} />
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="NIC" variant="outlined" style={{ width: "700px", }} onChange={(e) => {
                                        setNIC(e.target.value);
                                    }} value={nic} />
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="Phone Number" variant="outlined" style={{ width: "700px", }}     onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const sanitizedValue = inputValue.replace(/[^0-9-]/g, '');
                                            const numericValue = sanitizedValue.replace(/^-/, '');
                                            const truncatedValue = numericValue.slice(0, 10);
                                            if (truncatedValue !== '') {
                                                setPhone(truncatedValue);
                                            }
                                        }} value={phone} />
                                </div>
                            </div>
                            <br />
                            <br />
                        </form>
                        <div className='row'>
                            <div className='col'>
                                <button type="submit" class="btn btn-success btn-block mb-5" style={{ width: "200px", backgroundColor: "green" }} onClick={edit} disabled={submit}>Update</button>
                            </div>
                            <div className='col'>

                                <button class="btn btn-danger btn-block mb-5" style={{ width: "200px", backgroundColor: "red" }} onClick={remove}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </center >
            <br />
            <br />
            <br />
            <br />
            {/* <Footer /> */}
        </div >
    )
};

export default Profile
