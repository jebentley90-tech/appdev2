import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const resume = () => {
  return (
    <View>
      <Text>This is the resume page.
      </Text>
      <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      its quoting LATIN AT MEEEE!
      </Text>
      <Link href="/" style={styles.link}>Go to Home Page</Link>
    </View>
  )
}

export default resume

const styles = StyleSheet.create({})