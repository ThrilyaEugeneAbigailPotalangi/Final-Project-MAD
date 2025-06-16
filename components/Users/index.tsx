import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Users = ({name, email, avatar}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Users;
