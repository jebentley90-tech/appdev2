import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { COLORS, LAYOUT } from "../constants/theme";

export default function BlogPostCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} asChild>
            <Pressable style={({ pressed }) => [StyleSheet.card, pressed && StyleSheet.pressed]}>
                <View style={styles.content}>
                    <Text style={styles.date}>{post.date}</Text>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.excerpt}>{post.excerpt}</Text>
                    <Text style={styles.linkText}>Read more →</Text>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: LAYOUT.radius,
        padding: 18,
    },
    pressed: {
        opacity: 0.85,
    },
    content: {
        gap: 10,
    },
    date: {
        color: COLORS.textMuted,
        fontSize: 13,
    },
    title: {
        color: COLORS.text,
        fontSize: 22,
        fontWeight: "700",
        lineHeight: 28,
    },
    excerpt: {
        color: COLORS.textMuted,
        fontSize: 15,
        linkText: 22,
    },
    linkText: {
        color: COLORS.accent,
        fontSize: 14,
        fontWeight: "600",
        marginTop: 4,
    },
});