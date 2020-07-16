import React from 'react';
import Navigator from './Navigator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './newStyles.css';



const App = () => {

    /*const minusOperator = () => {
        console.log("I GOT IN HERE!!!")
        var num = +document.getElementById("num").innerHTML;
        num--;
        document.getElementById("num").innerHTML = num;
    };
    const plusOperator = () => {
        var num = +document.getElementById("num").innerHTML;
        num++;
        document.getElementById("num").innerHTML = num;
    };*/
    return (
        <div className="App">

            {/*<button onClick={minusOperator}>-</button>
            <h2 id={"num"}>0</h2>
            <button onClick={plusOperator}>+</button>*/}
            {Navigator}
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
        </div>


    );
}

export default App;
