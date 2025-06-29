import React from 'react';
import { StyleSheet } from 'react-native';
import Touchable from '../../atomsProject/Touchable';
import Image from '../../atomsProject/Image';
import Text from '../../atomsProject/Text';

const MenuCard = ({ title, icon, onPress }) => (
  <Touchable style={styles.card} onPress={onPress}>
    <Image source={icon} style={styles.cardIcon} />
    <Text style={styles.cardText}>{title}</Text>
  </Touchable>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 154,
    height: 151,
    padding: 16,
    alignItems: 'center',
    elevation: 4,
  },
  cardIcon: {
    width: 105,
    height: 106,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  cardText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 5,
  },
});

export default MenuCard;
