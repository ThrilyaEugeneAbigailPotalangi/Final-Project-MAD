import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../atomsProject/Text';
import Image from '../../atomsProject/Image';

const QuoteBox = ({ date, quote, avatarSource }) => (
  <View style={styles.quoteBox}>
    <View style={{ flex: 1 }}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.quote}>{quote}</Text>
    </View>
    <Image source={avatarSource} style={styles.avatar} />
  </View>
);

const styles = StyleSheet.create({
  quoteBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF7C2',
    width: 345,
    height: 176,
    borderRadius: 10,
    marginVertical: 5,
    paddingBottom: 5,
    padding: 15,
    alignItems: 'center',
    elevation: 10,
    marginTop: 10,
  },
  date: {
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins-Bold',
    color: '#1F7AD0',
    marginTop: 3 ,
    
  },
  quote: {
    fontFamily: 'Poppins-Medium',
    marginBottom: 3,
    fontSize: 15,
    color: '#1E609E',
  },
  avatar: {
    width: 200,
    height: 2000,
    resizeMode: 'contain',
    marginRight: -30 ,
  },
});

export default QuoteBox;
