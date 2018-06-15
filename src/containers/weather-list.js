import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // const temp = cityData.list.map(weather => weather.main.temp)
    // console.log(name)
    return (
      <tr key={name}>
        <td>{name}</td>
        {/* <td>{temp}</td> */}
      </tr>
    )
  }

  render() { 
    console.log(this.props);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>    
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}          
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);