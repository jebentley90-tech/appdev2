import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import pic from '../assets/Super Mario Generations.webp';

//<Image source={pic} style={{ width: 200, height: '100%', marginBottom: 20 }} />

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>-Welcome to the AI-controlled App!</Text>
      <Text style={{ marginTop: 10, marginBottom: 20}}>
      -This app is controlled by an AI, and it writes some of the lines you see here!</Text>
      <Text style={styles.card}>MUHAHAHAHAHAHAHAHA!</Text>
      <Text></Text>
      <StatusBar style="auto" />

    <Link href="/about" style={styles.link}>Go to About Page</Link>
    <Link href="/blog" style={styles.link}>Go to Blog Page</Link>
    <Link href="/contact" style={styles.link}>Go to Contact Page</Link>
    <Link href="/portfolio" style={styles.link}>Go to Portfolio Page</Link>
    <Link href="/resume" style={styles.link}>Go to Resume Page</Link>
    
    </View>
    
  );
}

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
    marginTop: 8,
    fontSize: 14,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  }
});
