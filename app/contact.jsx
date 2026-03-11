import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const contact = () => {
  return (
    <View>
      <Text>This is the contact page.</Text>
      <Link href="/" style={styles.link}>Go to Home Page</Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({})