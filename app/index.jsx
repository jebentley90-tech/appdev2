import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import PageTemplate from "../components/PageTemplate";

const PROFILE_SRC = require("../assets/profile3.jpg");

export default function HomePage() {

  return (
    <View style={styles.topSpace}>
    <PageTemplate
      eyebrow="Homepage"
      title=""
      subtitle=""

    >
      <View style={styles.heroRow}>
        <View style={styles.avatarWrap}>
          <Image
            source={PROFILE_SRC}
            style={styles.avatar}
            resizeMode="contain"
            accessibilityLabel="Profile Picture"
          />
        </View>

        <View style={styles.leadText}>
          <Text style={styles.name}>Joseph Bentley</Text>
          <Text style={styles.description}>Studying at CSUB, Bachelor's in Computer Science</Text>
          <Text style={styles.description}>Programmer, Software Engineer</Text>

          <Text style={styles.title}>
            Welcome to my Vercel-hosted portfolio site.
          </Text>
          <Text style={styles.title}>
            My projects can be found in the link below.
          </Text>

          <View style={styles.ctaRow}>
            <Link href="/portfolio" asChild>
              <Pressable style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>See My Work</Text>
              </Pressable>
            </Link>

            <Link href="/contact" asChild>
              <Pressable style={styles.secondaryBtn}>
                <Text style={styles.secondaryBtnText}>Get In Touch</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </PageTemplate>
    </View>
    
  );
}

const styles = StyleSheet.create({
  topSpace: {
    paddingVertical: 40,
  },
  heroRow: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  avatarWrap: {
    width: 200,
    minWidth: 120,
    alignItems: "center",
    flexShrink: 0,
    justifyContent: "center",
  },
  avatar: {
    width: 218,
    height: 290,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#26324a",
    backgroundColor: "#0f1724",
  },
  leadText: {
    flex: 1,
    gap: 10,
  },
  name: {
    color: "#f3f7ff",
    fontSize: 26,
    fontWeight: "800",
  },
  title: {
    color: "#a8b3c7",
    fontSize: 16,
    marginTop: 2,
    marginBottom: 0,
  },
  description: {
    color: "#c7d2e6",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 760,
  },
  ctaRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  primaryBtn: {
    backgroundColor: "#6ea8fe",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  primaryBtnText: {
    color: "#081120",
    fontWeight: "700",
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#26324a",
    backgroundColor: "#182235",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  secondaryBtnText: {
    color: "#f3f7ff",
    fontWeight: "600",
  },
});
