import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, Dimensions,TouchableOpacity,StatusBar } from 'react-native';
import goku from './images/goku.jpg'

const {width : WIDTH} = Dimensions.get('window')
export default function App() {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="#1e88e5" barStyle="light-content"  />
      <Image source = {goku} style={styles.logo} />
      <View>
        <TextInput
        style={styles.input}
            placeholder={'  Name'}
            />
        <TextInput
        style={styles.input}
            placeholder={'  Phone Number'}
            />
        <TextInput
        style={styles.input}
            placeholder={'  Adress'}
            />
        <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={10}
            placeholder={'  About me'}
            />
            
      </View>
      <TouchableOpacity style={styles.btnSave}>
        <Text style= {styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,

  },
  input:{
    //backgroundColor: '#f2f2f2',
    width: WIDTH -55,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    
    fontSize: 16,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  textArea:{
    //backgroundColor: '#f2f2f2',
    width: WIDTH -55,
    height: 200,
    borderWidth: 1,
    borderRadius: 15,
    
    fontSize: 16,
    marginHorizontal: 25,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
  btnSave:{
    backgroundColor: '#f06292',
    width: WIDTH -300,
    height: 45,
    borderStyle:'solid',
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    borderColor: '#000000',
    
  },
  text:{
      color: '#ffffff',
      fontSize: 16,
      textAlign: 'center',

  },

});
