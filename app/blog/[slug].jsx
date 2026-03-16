import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PageTemplate from "../../components/PageTemplate";
import { posts } from "../../data/posts";
import { Link, useLocalSearchParams } from "expo-router";
import { COLORS } from "../../constants/theme";

export default function BlogDetailPage() {
    const params = useLocalSearchParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const post = posts.find((item) => item.slug === slug);

    if (!post) {
        return (
            <PageTemplate
                eyebrow="Blog"
                title="Post not Found"
                subtitle="These aren't the blog posts you are looking for."
            />
        );
    }

    return (
        <PageTemplate
            eyebrow="Blog Post"
            title={post.title}
            subtitle={post.date}
        >
            <View style={styles.contentWrap}>
                <Text style={styles.content}>{post.content}</Text>

                {post.tags && post.tags.length > 0 ? (
                    <View style={styles.tagRow}>
                        {post.tags.map((tag) => (
                            <View key={tag} style={styles.tag}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                ) : null}

                <Link href="/blog" style={styles.backLink}>
                    ← Back to Blog
                </Link>
            </View>
        </PageTemplate>
    );
}

const styles = StyleSheet.create({
    contentWrap: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 20,
        gap: 18,
    },
    content: {
        color: COLORS.text,
        fontSize: 16,
        lineHeight: 26,
    },
    tagRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    tag: {
        backgroundColor: COLORS.surfaceAlt,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    tagText: {
        color: COLORS.text,
        fontSize: 12,
        fontWeight: "600",
    },
    backLink: {
        color: COLORS.accent,
        fontSize: 15,
        fontWeight: "600",
    },
});