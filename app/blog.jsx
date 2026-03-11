import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const blog = () => {
  return (
    <View>
      <Text>This is the blog page.</Text>
      <Link href="/" style={styles.link}>Go to Home Page</Link>
    </View>
  )
}

export default blog

const styles = StyleSheet.create({
  link: {
    marginTop: 30,
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  }
})