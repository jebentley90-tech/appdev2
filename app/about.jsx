import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const about = () => {
  return (
    <View style={styles.container}>
      <Text>This is the About Page.</Text>

      <Link href="/" style={styles.link}>Go to Home Page</Link>
      
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    //flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#eeeeee',
    padding: 2,
    borderRadius: 5,
    marginBottom: 10,
    boxShadow: '4px 4px rgba(0, 0, 0, 0.1)',
  },
  link: {
    marginTop: 30,
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  }
});