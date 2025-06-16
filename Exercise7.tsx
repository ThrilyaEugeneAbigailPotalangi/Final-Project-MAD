import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import Users from './components/Users';

const RestApi = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12', {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .then(res => setUsers(res.data.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <ScrollView style={{padding: 10}} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>User List</Text>

      {error && (
        <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
      )}
      {users.length === 0 && !error ? (
        <Text style={{textAlign: 'center', marginTop: 20}}>Loading...</Text>
      ) : (
        users.map(item => (
          <Users
            key={item.id}
            name={`${item.last_name} ${item.first_name}`}
            email={item.email}
            avatar={item.avatar}
          />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
    marginTop: 15,
    paddingHorizontal: 10,
  },
});

export default RestApi;
