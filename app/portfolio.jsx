import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const portfolio = () => {
  return (
    <View>
      <Text>This is the portfolio page.</Text>

      <Link href="/" style={styles.link}>Go to Home Page</Link>
    </View>
  )
}

export default portfolio

const styles = StyleSheet.create({})