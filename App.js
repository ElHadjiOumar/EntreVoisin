import React , { useState } from 'react';
import { StyleSheet, Dimensions,StatusBar ,FlatList,Image, View,Right,Text} from 'react-native';

import goku from './images/goku.jpg';
import Toolbar from './lib/Toolbar';

//import DeleteIcon from '@material-ui/icons/Delete';

import { ListItem } from 'react-native-elements'


export default function App() {
  
    const [ list,setList ] = useState([
      {
      
        name: 'Goku',
        avatar_url: 'https://zupimages.net/up/20/16/comb.jpg',
        delete:'https://zupimages.net/up/20/17/alew.png',
        id: '1'
      },
      {
      
        name: 'Vegeto',
        avatar_url: 'https://zupimages.net/up/20/16/2v3d.jpg',
        delete:'https://zupimages.net/up/20/17/alew.png',
        id: '2'
      },
    {
      
      name: 'Naruto',
      avatar_url: 'https://zupimages.net/up/20/17/c7wb.png',
      delete:'https://zupimages.net/up/20/17/alew.png',
      id: '3'
    },
    {
      name: 'luffy',
      avatar_url: 'https://zupimages.net/up/20/17/gjhi.png',
      delete:'https://zupimages.net/up/20/17/alew.png',
      id: '4'
    },
    {
      name: 'gohan',
      avatar_url: 'https://zupimages.net/up/20/17/yqgv.png',
      delete:'https://zupimages.net/up/20/17/alew.png',
      id: '5'
    },
    {
      name: 'zoro',
      avatar_url: 'https://zupimages.net/up/20/17/ahjk.jpg',
      delete:'https://zupimages.net/up/20/17/alew.png',
      id: '6'
    },
    {
      name: 'kakashi',
      avatar_url: 'https://zupimages.net/up/20/17/uj2c.jpg',
      delete:'https://zupimages.net/up/20/17/alew.png',
      id: '7'
    },
    
    
  ]);
  
  
    return (
      <View>
        <StatusBar backgroundColor="#1e88e5" barStyle="light-content"  />
        <Toolbar title="Entrevoisins" ></Toolbar> 
        
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={({item}) => {
          return(
            <ListItem
          
            title={item.name}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            //icons={{ source: { uri: item.delete } }}
            subtitle={
              <View style={styles.subtitleView}>
                <Image source={require('./images/delete.png')} style={styles.ratingImage}/>
              </View>
            }
            bottomDivider
            delete
            


            
            
            
            >
              
            
            
          </ListItem>
          )
           }}

      />
      </View>
    );
    
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal:20 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ListItem: {
    flex:1,
    justifyContent: 'center' ,
    alignItems: 'center',
  },
   
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,

  },
  icons:{
    marginLeft :20,
  },
  subtitleView: {
    
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    marginLeft:280,
    paddingTop:22,
    height: 20,
    width: 20
  },
  

});
