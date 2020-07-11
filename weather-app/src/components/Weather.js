import React from 'react';
import {Container,Row,Col,Jumbotron } from 'react-bootstrap'


function Weather(props) {
  const {city,day,img,temp,des,wind,maxtemp,mintemp,humi,feels_like,pressure} = props.data
  let icon=`http://openweathermap.org/img/wn/${img}@2x.png`


  
  function  getDateOfWeek(day)
  {
    var objToday = new Date(day),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  var today =  curMonth +" " + dayOfMonth +" " + curYear;
  
    return today
  }
  return (
    <Container style={{marginTop : "50px"}}>
    <Row>
    <Col>
      <h1>{city}</h1>
      <h2>
        {getDateOfWeek(day*1000)}
      </h2>
    </Col>
    </Row>
    <Row>
      <Col xs='3'>
      <img src={icon}></img>
      </Col>
      <Col xs='3'>
      <h4>{temp}°C</h4>
      <h4>{des}</h4>
      </Col>
      <Col xs='6'>
      <Jumbotron style={{backgroundColor : '#60b6e1'}}>
      <Row>
        <Col>
        <h5>{maxtemp}°C</h5>
        <h6>High</h6>
        </Col>
        <Col><h5>{wind} km</h5>
        <h6>Wind</h6></Col>
        <Col> <h5>{feels_like}°C</h5>
        <h6>Feels like</h6> </Col>
      </Row>
      <Row>
        <Col><h5>{mintemp}°C</h5>
        <h6>Min</h6></Col>
        <Col><h5>{humi}</h5>
        <h6>Humidity</h6></Col>
        <Col><h5>{pressure}</h5>
        <h6>Pressure</h6></Col>
      </Row>
      </Jumbotron>
      </Col>
    </Row>
  </Container>
  );
}

export default Weather;
