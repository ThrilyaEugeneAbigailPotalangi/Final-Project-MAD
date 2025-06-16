import React from "react";
import { View, Text, StyleSheet } from "react-native";
//layout digunakan pada view
const Flexbox = () => {
  return (
    <View style ={styles.container}> 
      <View style={styles.redContainer}/>
      <View style={styles.greenContainer}/>
      <View style={styles.blueContainer}/>     
    </View>
  );
}; 

export default Flexbox;

const styles = StyleSheet.create({
    //ubah pada parent
    container: {
        backgroundColor: 'yellow', //ubah bg color
        flex: 1, //atur fill dari main container
        flexDirection: 'row', //mengatur arah baris/kolom
        justifyContent: 'center', //ubah posisi (main axis)
        alignItems: 'center' //(cross axis)

    },
    redContainer: {
        backgroundColor: 'red',
        height: 100,
        width: 100
    },
    greenContainer: {
        backgroundColor: 'green',
        height: 100,
        width: 100
    },
    blueContainer: {
        backgroundColor: 'blue',
        height: 100,
        width: 100
    }
});