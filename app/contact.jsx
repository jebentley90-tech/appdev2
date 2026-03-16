import React, { useState } from "react";
import {
  View, Text, TextInput,
  Pressable, Linking, StyleSheet,
} from "react-native";
import PageTemplate, { Section, Card } from "../components/PageTemplate";
import { COLORS, LAYOUT } from "../constants/theme";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Placeholder behavior for now
    console.log("Contact form submitted:", { name, email, message });
    setSubmitted(true);
  };

  return (
    <PageTemplate
      eyebrow="Contact"
      title="Get in Touch"
      subtitle="Feel free to reach out through the form below or the social links provided."
    >
      <Section
        title="Social Links"
        description="You can find me on these platforms:"
      >
        <View style={styles.socialRow}>
          <Pressable
            onPress={() => Linking.openURL("https://github.com/jebentley90-tech")}
            style={styles.socialButton}
          >
            <Text style={styles.socialButtonText}>GitHub</Text>
          </Pressable>

          <Pressable
            onPress={() => Linking.openURL("https://www.linkedin.com/in/joseph-bentley-9849a63b7")}
            style={styles.socialButton}
          >
            <Text style={styles.socialButtonText}>LinkedIn</Text>
          </Pressable>
        </View>
      </Section>

      <Section
        title="Contact Form"
        description="Send a message directly from this page."
      >
        <Card>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              placeholderTextColor={COLORS.textMuted}
              style={styles.input}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="jebentley90@gmail.com"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Write your message here..."
              placeholderTextColor={COLORS.textMuted}
              multiline
              textAlignVertical="top"
              style={styles.textarea}
            />
          </View>

          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>

          {submitted ? (
            <Text style={styles.successText}>
              Thanks — your message has been recorded locally for now.
            </Text>
          ) : null}
        </Card>
      </Section>
    </PageTemplate>
  );
}

const styles = StyleSheet.create({
  socialRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  socialButton: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: LAYOUT.radius,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  socialButtonText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "600",
  },
  formGroup: {
    gap: 8,
    marginBottom: 16,
  },
  label: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: COLORS.text,
    fontSize: 14,
  },
  textarea: {
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: COLORS.text,
    fontSize: 14,
    minHeight: 140,
  },
  submitButton: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  submitButtonText: {
    color: "#081120",
    fontSize: 14,
    fontWeight: "700",
  },
  successText: {
    marginTop: 14,
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});