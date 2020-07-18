import React from 'react';
import GetWeather from "./GetWeather"

const Body = () => {
    return (
        <div>
            <header className="jumbotron" style={{paddingBottom: "0 px"}}>
                <div className="container" style={{paddingTop: "0 px"}}>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Weather Today</h1>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p>This segment of the website displays location's weather using a web API from
                                openweathermap!</p>

                        </div>

                    </div>
                </div>
            </header>
            {/*<div className="container1" style={{paddingTop: "20px"}}>


                <div className="geoType">
                    <h3>User GeoLocation Based Weather</h3>
                    Please allow location access in order to access this feature.
                    <div>
                        <h2 className="city">CityName</h2>
                        <small></small>
                        <div className="middle">
                            <img src="./img/logo.png" alt="icon" id="icon" height="50px"/>
                                <div className="degrees">
                                    <h1 id="temp">23</h1>
                                    <span>&#176;</span>
                                </div>
                                <h3 id="desc">Description</h3>
                        </div>
                    </div>
                </div>
            </div>*/}
            {/*<div className="container1 cityType col-md-6">
                <h3>User Query Based Weather</h3>

                Enter your city below to view the current weather
                <div id="cityForm">
                    <form action="#" onSubmit="getWeather(document.getElementById('CityName').value);return false"
                          id="nameform">
                        <div className="form-group">
                            <label htmlFor="CityName">CityName</label>
                            <input type="text" className="form-control col-md-6 offset-md-3" id="CityName"
                                   placeholder="Enter Here"/>
                                <small className="form-text text-muted">We'll soon include dropdown support.</small>
                        </div>
                        <button type="submit" className="btn btn-primary col-md-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>*/}
        </div>
)
}


export default Body();