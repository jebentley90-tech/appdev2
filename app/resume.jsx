import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PageTemplate, { Section, Card } from "../components/PageTemplate";
import { COLORS } from "../constants/theme";

export default function ResumePage() {
  return (
    <PageTemplate
      eyebrow="Resume"
      title="Professional Background"
      subtitle="This page presents an overview of my skills, experience, and educational background."
    >
      {/* PROFESSIONAL SUMMARY */}
      <Section
        title="Professional Summary"
        description="A short overview of my professional interests."
      >
        <Card>
          <Text style={styles.text}>
            I enjoy the feeling of being able to logically complete a programming task.
            I am passionate about video games and have looked into and utilized several
            options for creating games.
          </Text>
        </Card>
      </Section>

      {/* TECHNICAL SKILLS */}
      <Section
        title="Technical Skills"
        description="Technologies and tools I have experience working with."
      >
        <Card>
          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Languages</Text>
            <Text style={styles.text}>
              JavaScript, Python, C++, CSS, Java
            </Text>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Frameworks & Libraries</Text>
            <Text style={styles.text}>
              React, React Native, Expo Router, Arduino IDE
            </Text>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillTitle}>Tools</Text>
            <Text style={styles.text}>
              Git, GitHub, VS Code, Vercel
            </Text>
          </View>
        </Card>
      </Section>

      {/* EDUCATION */}
      <Section
        title="Education"
        description="Formal education and relevant coursework."
      >
        <Card>
          <View style={styles.itemBlock}>
            <Text style={styles.itemTitle}>AVC and CSUB</Text>
            <Text style={styles.itemSubtitle}>
              Associates in Computer Science • 
            </Text>
            <Text style={styles.text}>
              Received a certificate.
            </Text>
          </View>
        </Card>
      </Section>

      {/* EXPERIENCE */}
      <Section
        title="Experience"
        description="Relevant projects, work, or leadership roles."
      >
        <Card>
          <View style={styles.itemBlock}>
            <Text style={styles.itemTitle}>Personal Projects</Text>
            <Text style={styles.itemSubtitle}>
              Personal Project and Year
            </Text>

            <Text style={styles.text}>
              
            </Text>
          </View>

          <View style={styles.itemBlock}>
            <Text style={styles.itemTitle}>Experience</Text>
            <Text style={styles.itemSubtitle}>
              
            </Text>
              
            <Text style={styles.text}>
              
            </Text>
          </View>
        </Card>
      </Section>
    </PageTemplate>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 22,
  },

  skillGroup: {
    marginBottom: 16,
  },

  skillTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },

  itemBlock: {
    marginBottom: 18,
  },

  itemTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "700",
  },

  itemSubtitle: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginBottom: 6,
  },
});