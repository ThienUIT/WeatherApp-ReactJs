import React from 'react';
import WeatherDay from './WeatherDay'
import {Row,Col, Container} from 'react-bootstrap'
function WeatherDays( props) {
  var {listData,data} = props
  function  getDateOfWeek(day)
  {
    var objToday = new Date(day*1000)
    var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
   var  dayOfWeek = weekday[objToday.getDay()]
    return dayOfWeek
  }
  return (
    <Container >
    <h3>Forecast</h3>
    <Row xs='12'>
    {listData.map((x,index)=>{
      return (
        <Col  key={index}>
            <WeatherDay
              day={getDateOfWeek(x.dt)}
              mintemp={x.main.temp_min}
              maxtemp={x.main.temp_max}
              icon={x.weather[0].icon}
            />
      </Col>
      )})}
    </Row>  
    </Container>
  );
}

export default WeatherDays;
