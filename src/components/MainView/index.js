import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageStore } from 'react-native';

import PratyushInput from '../CustomTextInput';

export default function MainView(){
    return(
    <View style={styles.container}>
      <Text style={{padding:20, fontSize:30}}>Welcome to CodeStar</Text>
      <Image 
        source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwO9tbsu2JNlt_4PBhLa7Qhfbhwp_zimmew&usqp=CAU',
        }}
        style={{width: 200, height: 200}}
      /> 
      <Text style={{marginTop: 20,padding:10}}>Enter Your User ID: </Text>
      <PratyushInput placeholder="example@gmail.com" placeholderColor="#fff" />

      <Text style={{padding:10}}>Enter Your Password: </Text>
      <TextInput secureTextEntry={true} style={{}} placeholder='Password' style={{backgroundColor: "#fff", paddingRight: 80}}></TextInput>
      <TouchableOpacity
        onPress={() => alert('Logged in successfully!')}
        style={{ backgroundColor: '#000', margin: 20 }}>
        <Text style={{ fontSize: 20, color: '#fff' , marginHorizontal: 20}}>Log in</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      color: 'blue'
    }
  });
