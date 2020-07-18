import React from 'react';
import Navigator from './Navigator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './newStyles.css';
import Body from "./weatherBody";
import GetWeather from "./GetWeather";




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
            {Body}
            <GetWeather />


        </div>


    );
}

export default App;
