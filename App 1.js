import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class WeatherScreen extends Component {
constructor(){
  super();
  this.state={
Weather:'',
  };
}
getWeather=async()=> {
var url='https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'
return fetch(url)
.then(response => response.jason())
.then (responseJason=>{
this.setState({
  Weather:responseJason,
});
})
.catch(error=>{
  console.error(error);
});
}
componentDidMount () {
  this.getWeather();
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          {this.state.counter}
        </Text>
        <Button title="click ME!!!!!!" color="blue" onPress={this.incrementCounter}/>
            </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  subCountainer:{
    flex:1,
    borderWidth:1,
    alignItems:"center"
  },
  title:{
    marginTop: 50, 
    fontSize:30,
    fontWeight:550,
  },
  cloudImage:{
    width:200,
    height:200,
    marginTop:30,
  },
  textContainer:{
    flex:1,
    alignItems:'centre',
    flexDirection:'row',
    marginTop:-150,
  }
})