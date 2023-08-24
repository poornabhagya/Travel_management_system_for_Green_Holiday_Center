import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';




function GuiHome() {


    return (
        <div>
            <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
            </div>
            {/* <Navbar /> */}
            <br />
            <br />
            <center>
                <div className='card' style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", width: "95%" }}>
                    <h1 class = "helloheader1">Hello</h1>
                    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://images.unsplash.com/photo-1539576776193-2c07122e5fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" class="d-block w-100"
                                    alt="Wild Landscape" style={{ height: "800px", }} />
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" class="d-block w-100" alt="Camera" style={{ height: "800px", }} />
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.unsplash.com/photo-1583317094917-8aac805fed5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" class="d-block w-100"
                                    alt="Exotic Fruits" style={{ height: "800px", }} />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </center >
            <br />
            <br />
            <br />
            {/* <Footer /> */}
        </div >
    )
};

export default GuiHome
