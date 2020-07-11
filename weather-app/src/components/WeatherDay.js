import React from 'react';
import {Jumbotron} from 'react-bootstrap'
function WeatherDay( props) {
     var icon = props.icon
     let img=`http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <div className="justify-content-md-center">
        <Jumbotron style={{backgroundColor:"#60b6e1"}}>
        <h5 xs="auto"> {props.day}</h5>
        <img src={img}></img>
        <h5 className="notBold">Min : {props.mintemp}°C</h5>
        <h5 className="notBold">Max : {props.maxtemp}°C</h5>
    </Jumbotron>
    </div>
  );
}
export default WeatherDay;
