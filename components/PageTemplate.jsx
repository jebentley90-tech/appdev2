import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../constants/theme.js";

export default function PageTemplate({
    eyebrow,
    title,
    subtitle,
    primaryAction,
    secondaryAction,
    children,
}) {
    return (
        <View style={styles.pageOuter}>
        <View style={styles.page}>
            <View style={styles.hero}>
                {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
                <Text style={styles.title}>{title}</Text>
                {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

                {(primaryAction || secondaryAction) && (
                    <View style={styles.actions}>
                        {primaryAction ? (
                            <Link href={primaryAction.href} asChild>
                                <Pressable style={styles.primaryButton}>
                                    <Text style={styles.primaryButtonText}>{primaryAction.label}</Text>
                                </Pressable>
                            </Link>
                        ) : null}

                        {secondaryAction ? (
                            <Link href={secondaryAction.href} asChild>
                                <Pressable style={styles.secondaryButton}>
                                    <Text style={styles.secondaryButtonText}>
                                        {secondaryAction.label}
                                    </Text>
                                </Pressable>
                            </Link>
                        ) : null}
                    </View>
                )}
            </View>
            <View styles={styles.content}>{children}</View>
        </View>
        </View>
    );
}

export function Section({ title, description, children }) {
    return (
        <View style={styles.section}>
            {title ? <Text style={styles.sectionTitle}>{title}</Text> : null}
            {description ? <Text style={styles.sectionDescription}>{description}</Text> : null}
            <View style={styles.sectionBody}>{children}</View>
        </View>
    );
}

export function Card({ title, text, children }) {
    return (
        <View style={styles.card}>
            {title ? <Text style={styles.cardTitle}>{title}</Text> : null}
            {text ? <Text style={styles.cardText}>{text}</Text> : null}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    pageOuter: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    page: {
        maxWidth: 1100,
        paddingVertical: 30,
        gap: 32,
    },
    hero: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 20,
        padding: 24,
        gap: 2,
    },
    eyebrow: {
        color: COLORS.accent,
        fontSize: 12,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 1,
        paddingVertical: 2,
        paddingHorizontal: 20,
    },
    title: {
        color: COLORS.text,
        fontSize: 24,
        fontWeight: "800",
        lineHeight: 40,
    },
    subtitle: {
        color: COLORS.textMuted,
        fontSize: 16,
        lineHeight: 24,
        maxWidth: 760,
    },
    actions: {
        flexDirection: "row",
        gap: 12,
        flexWrap: "wrap",
        marginTop: 8,
    },
    primaryButton: {
        backgroundColor: COLORS.accent,
        paddingHorizontal: 16,
        paddingVertical: 12,
        broderRadius: 12,
    },
    primaryButtonText: {
        color: COLORS.button,
        fontWeight: "700",
        fontSize: 14,
    },
    secondaryButton: {
        borderWidth: 1,
        borderColor: COLORS.border,
        backgroundColor: COLORS.surfaceAlt,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
    },
    secondaryButtonText: {
        color: COLORS.text,
        fontWeight: "600",
        fontSize: 14,
    },
    content: {
        gap: 24,
    },
    section: {
        gap: 12,
    },
    sectionTitle: {
        color: COLORS.text,
        fontSize: 22,
        fontWeight: "700",
    },
    sectionDescription: {
        color: COLORS.textMuted,
        fontSize: 15,
        lineHeight: 22,
        maxWidth: 760,
    },
    sectionBody: {
        gap: 16,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 18,
        gap: 10,
    },
    cardTitle: {
        color: COLORS.text,
        fontSize: 18,
        fontWeight: "700",
    },
    cardText: {
        color: COLORS.textMuted,
        fontSize: 14,
        lineHeight: 21,
    },
});