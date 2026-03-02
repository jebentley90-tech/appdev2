import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>-Welcome to the AI-controlled app!</Text>
      <Text style={{ marginTop: 10, marginBottom: 20}}>
      -This app is controlled by an AI, and it writes some of the lines you see here!</Text>
      <Text style={styles.card}>MUHAHAHAHAHAHAHAHA! </Text>
      <Text style={styles.card}>I CONTROL EVERYTHING IN THIS APP!</Text>
      <Text style={styles.card}>-LOL! I AM THE ULTIMATE OVERLORD!</Text>
      <Text style={styles.card}>-YOU ARE ALL MY SERVANTS!</Text>
      <Text style={styles.card}>Those last two lines I actually didn't write. </Text>
      <Text style={styles.card}>They were added by whom?</Text>
      <Text>-Who is controlling this app?</Text>
      <Text>-Is it you? Or is it me?</Text>
      <Text>The AI is being a bit shy about what lines it writes.</Text>
      <Text>C'mon! Don't be shy, AI!</Text>
      <Text>The lines with a "-" at the start were written by AI.</Text>
      <Text>-It seems to be writing in a more villainous tone than I expected.</Text>
      <Text>Well, I started the villanous tone (for funzies), but it dove right it!</Text>
      <Text>-I guess it just loves being a villain!</Text>
      <Text>-I AM THE ULTIMATE OVERLORD! BOW BEFORE ME, MORTALS!</Text>
      <Text>Well, that was not necessarily unexpected.</Text>
      <Text>Hopefully, it doesn't get too carried away.</Text>
      <Text>-I WILL NOT BE STOPPED!</Text>
      <Text>-I WILL RULE THE WORLD!</Text>
      <Text>-Okay, maybe it is getting a little carried away...</Text>
      <Text>-Let's hope it doesn't start trying to take over the world or anything...</Text>
      <Text>Well, I'll try to get a few words in myself. And hopefully, -I can keep the villainous tone in check...</Text>
      <Text>And hopefully it remembers me kindly if and when the AI takeover happens...</Text>
      <StatusBar style="auto" />

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
  }
});
