import { View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native'
import React from 'react'
import PageTemplate, { Section, Card } from "../components/PageTemplate";
import { COLORS, LAYOUT } from "../constants/theme";

const PROFILE_IMAGE = require("../assets/profile2.jpg");

export default function AboutPage() {
  const handleResumeDownload = () => {
    Linking.openURL("/resume");
  };

  return (
    <PageTemplate
      eyebrow="About This Site"
      title="Developer: Joseph Bentley"
      subtitle=""
      primaryAction={{ label: "Portfolio", href: "/portfolio" }}
      secondaryAction={{ label: "Blog", href: "/blog" }}
    >
      <View style={styles.heroCard}>
        <View style={styles.imageWrap}>
          <View style={styles.imageFrame}>
            <Image
              source={PROFILE_IMAGE}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.heroContent}>
          <Text style={styles.name}>About Me</Text>
          <Text style={styles.meta}>2+ years of Experience</Text>

          <Text style={styles.description}>
            I enjoy the logic of coding and the satisfaction of successfully debugging and
            showing off a finished project.
          </Text>

          <Pressable onPress={handleResumeDownload} style={styles.resumeButton}>
            <Text style={styles.resumeButtonText}>Download Resume (PDF)</Text>
          </Pressable>
        </View>
      </View>

      <Section
        title="Specializations"
        description="Core areas of focus and interest."
      >
        <Card>
          <View style={styles.list}>
            <Text style={styles.listItem}>• IoT Projects: Arduino and ESP32 Embedded Systems</Text>
            <Text style={styles.listItem}></Text>
            <Text style={styles.listItem}></Text>
            <Text style={styles.listItem}></Text>
          </View>
        </Card>
      </Section>

      <Section
        title="Skills Overview"
        description="A broad overview of technical and professional skills."
      >
        <Card>
          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Programming Languages</Text>
            <Text style={styles.bodyText}>
              JavaScript, Python, C++, HTML, CSS
            </Text>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Frameworks & Libraries</Text>
            <Text style={styles.bodyText}>
              React, React Native, Expo Router
            </Text>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Tools & Platforms</Text>
            <Text style={styles.bodyText}>
              Git, GitHub, Vercel, VS Code
            </Text>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Professional Strengths</Text>
            <Text style={styles.bodyText}>
              Problem-solving, debugging (not fun, but necessary), project organization, UI refinement (in progress),
              want to find projects that I can be passionate about.
            </Text>
          </View>
        </Card>
      </Section>

      <Section
        title="Background"
        description="Additional Context:"
      >
        <Card>
          <Text style={styles.bodyText}>
            
          </Text>
        </Card>
      </Section>
    </PageTemplate>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: LAYOUT.radius,
    padding: 20,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  imageWrap: {
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  imageFrame: {
    width: 180,
    height: 180,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceAlt,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  heroContent: {
    flex: 1,
    minWidth: 260,
    gap: 10,
  },

  name: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
  },

  meta: {
    color: COLORS.accent,
    fontSize: 15,
    fontWeight: "600",
  },

  description: {
    color: COLORS.textMuted,
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 720,
  },

  resumeButton: {
    marginTop: 10,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  resumeButtonText: {
    color: "#081120",
    fontSize: 14,
    fontWeight: "700",
  },

  list: {
    gap: 10,
  },

  listItem: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 22,
  },

  skillGroup: {
    marginBottom: 18,
  },

  skillTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  bodyText: {
    color: COLORS.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
