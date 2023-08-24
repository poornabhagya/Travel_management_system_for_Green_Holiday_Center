import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import Swal from 'sweetalert2';



function Home() {
    const [name, setName] = useState("");
    const [feedbacks, setFeedback] = useState("");
    const [fed, setFed] = useState([]);
    const [btn, setBtn] = useState(true);

    const valid = () => {
        if ((name !== '') && (feedbacks !== '')) {
            setBtn(false)
        }
        else {
            setBtn(true)
        }
    }
    const get = async () => {
        try {
            const res = await axios.get("http://localhost:5000" + "/feedback/allfeedback/");
            setFed(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    async function save(e) {

        const feedback = { name, feedbacks };

        try {
            const response = await axios.post("http://localhost:5000" + "/feedback/addfeedback", feedback);
            console.log(response.data);

            Swal.fire({
                title: 'Success!',
                text: 'Form Filled',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            setTimeout(() => {
                window.location.href = '/Home';
            }, 1000);
        } catch (error) {
            console.log(error.message);

            Swal.fire({
                title: 'Error!',
                text: 'Form Not Filled',
                icon: 'error',
                confirmButtonText: 'OK'
            });

            window.location.href = '/Home';
        }
    }

    useEffect(() => {
        get()
        valid()
    }, [name, feedbacks])
    return (
        <div>
            <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
            </div>
            {/* <Navbar /> */}
            <br />
            <br />
            <center style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
                display: "flex",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div style={{ color: "white", textAlign: "left", paddingLeft: "74px", paddingTop: "362px" }}>
                    <h1 style={{ fontSize: "65px", fontWeight: 'bold', }} >EXPLORE YOUR TOUR</h1>
                    <h1 style={{ fontSize: "65px", fontWeight: 'bold', }}>WITH THE EXPERT</h1>
                    <br />
                    <a href='/Register'>
                        <button type="button" class="btn btn-primary" style={{ fontSize: "15px" }}>Join With US AS A GUIDER</button></a>
                </div>
            </center >
            <br />
            <br />
            <center>
                <div style={{
                    width: "90%"
                }}>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card">
                                <h3 class="card-title">Planning And Organizing Tours</h3>
                                <img src="https://images.unsplash.com/photo-1541261248870-4a12b1b68308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpc2hlcm1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div class="card-body">

                                    <p class="card-text">
                                    Researching the area
                                    Identifying attractions and activities
                                    Making travel arrangements
                                    Creating a schedule
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <h3 class="card-title">Providing Detailed Information</h3>
                                <img src="https://media.istockphoto.com/id/502631824/photo/temple-of-the-tooth-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=2ltjIh94gedLEJ0rgu8djEXhrfatIcVBZCH6WVr3z0k=" class="card-img-top"
                                    alt="Palm Springs Road" />
                                <div class="card-body">

                                    <p class="card-text">
                                    Sharing historical and cultural information.
                                    Describing local landmarks and attractions
                                    Answering questions


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <h3 class="card-title">Handling Any Issues Or Emergencies</h3>
                                <img src="https://images.unsplash.com/uploads/1413387158190559d80f7/6108b580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top"
                                    alt="Los Angeles Skyscrapers" />
                                <div class="card-body">

                                    <p class="card-text">Using clear and engaging language
                                    Being approachable
                                    Introducing themselves and setting expectations</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <h3 class="card-title">Communicating With Tourists</h3>
                                <img src="https://images.unsplash.com/photo-1589882485484-c073e3742e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top"
                                    alt="Skyscrapers" />
                                <div class="card-body">

                                    <p class="card-text">
                                    Staying alert
                                    Responding to medical emergencies
                                    Dealing with lost or stolen items
                                    Handling transportation issues
                                    
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </center>
            <br></br>
            <br></br>
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "60%" }}>

                    <h2 style={{ marginTop: '40px', textAlign: "left", paddingLeft: "30px" }}>Add  Feed back</h2>

                    <div class="row container-fluid" >
                        <form>
                            <div class="mb-3" style={{ textAlign: "left" }}>
                                <label for="exampleFormControlInput1" class="form-label h6" >Guider Name</label>
                                <input type="text" class="form-control" placeholder=""
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }} value={name} />

                            </div>
                            <div class="mb-3" style={{ textAlign: "left" }}>
                                <label for="exampleFormControlInput1" class="form-label h6">FeedBack</label>
                                <textarea type="text" class="form-control" placeholder="" onChange={(e) => {
                                    setFeedback(e.target.value);
                                }} value={feedbacks} />
                            </div>


                            <br />
                        </form>
                        <div className='row'>
                            <div className='col' style={{ paddingRight: "646px" }}>
                                <button type="submit" class="btn btn-success btn-block mb-5" style={{ width: "200px", backgroundColor: "green" }} onClick={save} disabled={btn}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            <br />
            <br />
            <center>
                <h2><u>Feedbacks :</u></h2>
                <br />
                <br />
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {fed.map((fed, key) => (
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title" style={{ textAlign: "left" }}>{fed.name}</h4>
                                    <p class="card-text">
                                        {fed.feedbacks}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
            <br />
            <br />
            <br />
            {/* <Footer /> */}
        </div >
    )
};

export default Home
