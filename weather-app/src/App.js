import React, { Component } from 'react'
import Search from './components/Search'
import WeatherDays from './components/WeatherDays'
import Weather from './components/Weather'
import Axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      city:'',
      data:{
        city:null,
        pressure:null,
        feels_like:null,
        temp:null,
        mintemp:null,
        maxtemp:null,
        wind:null,
        humi:null,
        img:null,
        des:null,
        day:null
      }, 
      coords:{},
      listData:[],
      key:"7d736256e7db7fe747fe0dcb7692544f"
    }
  }
  onChangeSearch=(value)=>{
   this.setState({city:value})
  }
//init weather
  componentDidMount()
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position)=>{
        let newCoords={
          lat:position.coords.latitude,
          long:position.coords.longitude
        }
        this.setState({coords:newCoords});
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.lat}&lon=${this.state.coords.long}&appid=${this.state.key}&units=metric`).
        then(res => { let WeatherData ={
          city: res.data.name,
          day:res.data.dt,
          img:res.data.weather[0].icon,
          temp:res.data.main.temp,
          des:res.data.weather[0].description,
          mintemp:res.data.main.temp_min,
          maxtemp:res.data.main.temp_max,
          wind:res.data.wind.speed,
          humi:res.data.main.humidity,
          feels_like:res.data.main.feels_like,
          pressure:res.data.main.pressure
        }
        this.setState({data:WeatherData})
        })
        Axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.coords.lat}&lon=${this.state.coords.long}&appid=${this.state.key}&units=metric`)
        .then(res => { 
       
        let listData=[]
        for(let i=0;i< res.data.list.length;i+=8)
        {
          listData.push(res.data.list[i])
        }
        this.setState({listData:listData})
        })   
      })
    }
    else
    console.log("not supported")
  }
  onSubmitSearch=(event)=>{
    event.preventDefault();
    //api call
     Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${this.state.key}&units=metric`)
    .then(res => { 
    
    let listData=[]
    for(let i=0;i< res.data.list.length;i+=8)
    {
      listData.push(res.data.list[i])
    }
    this.setState({listData:listData})
    })     
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.key}&units=metric`).
    then(res => { 
      let WeatherData ={
      city: res.data.name,
      day:res.data.dt,
      img:res.data.weather[0].icon,
      temp:res.data.main.temp,
      des:res.data.weather[0].description,
      mintemp:res.data.main.temp_min,
      maxtemp:res.data.main.temp_max,
      wind:res.data.wind.speed,
      humi:res.data.main.humidity,
      feels_like:res.data.main.feels_like,
      pressure:res.data.main.pressure
    }
    this.setState({data:WeatherData})
    })        
  }

  
  render() {
    return (
      <div>
        <Search 
        onSubmitSearch={this.onSubmitSearch} 
        onChangeSearch={this.onChangeSearch}
        />
        <Weather data={this.state.data}/> 
        <WeatherDays listData={this.state.listData} data={this.state.data}/>
      </div>
    )
  }
}

export default App;
