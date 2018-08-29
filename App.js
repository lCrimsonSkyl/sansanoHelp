import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  //Text,
  View,
  //Controles agregados
  //Button,
  TextInput,
  Image,
  Alert,
  //Controles responsive
  Dimensions, 
  PixelRatio,
}from 'react-native';

import { Container, Content, Button, Text } from 'native-base';

import { Font, AppLoading } from "expo";

//Funciones responsivas
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

const screenHeight = () => {
  const anchura = parseFloat(Dimensions.get('window').height);
  const retorno = anchura.toString();  
  return retorno;
};

//Carga del logo
let logoUSM = {
      uri: 'http://www.exalumnos.usm.cl/wp-content/uploads/2015/06/MARCA-Color.jpg'
};

//Formas

class Rectangle extends React.Component {
    render() {
        return (
            <View style={styles.rectangle} />
        )
    }
};



export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
          <AppLoading />
      );
    }
    return (
      <View style={styles.container}>
        <Image source={logoUSM} style={styles.logoUSM}/>
        
        <Rectangle/>
        
        <Text style = {styles.text} >Correo</Text>

        <TextInput
          style={styles.textInput}
          maxLenght={50}
          underlineColorAndroid = 'transparent'
          placeHolder="Correo USM"
          value={`${screenHeight}`}
        />
        
        <Text>Contraseña</Text>
        <TextInput
          style={styles.textInput}
          maxLenght={50}
          underlineColorAndroid = 'transparent'
          placeHolder= "Contraseña"
          secureTextEntry= {true}
          value='Hola'
        />

        <Button block warning style={{margin: widthPercentageToDP('6'),}}>
            <Text>Ingresar</Text>
        </Button>

      </View>
    );
  }
}

const ingresarPress = () => {
  Alert.alert('Hola');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Ffffff',
  },
  logoUSM: {
    width: widthPercentageToDP('88%'), 
    height: heightPercentageToDP('24%'),
    //backgroundColor: "red",
    resizeMode: 'contain',
  },
  rectangle: {
    width: widthPercentageToDP('90%'),
    height: heightPercentageToDP('0.4%'),
    backgroundColor: '#3377FF',
    margin: 10,
  },
  textInput: {
    height: heightPercentageToDP('7%'), 
    width: widthPercentageToDP('85'),
    marginBottom: 5,
    borderColor: '#3377FF',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    //fontSize: 50,
  },
  text: {
    fontFamily: 'normal',
  }
});
