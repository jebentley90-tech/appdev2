import React from "react";
import { View, StyleSheet } from "react-native";
import PageTemplate, { Section } from "../../components/PageTemplate";
import BlogPostCard from "../../components/BlogPostCard";
import { posts } from "../../data/posts";

export default function BlogPage() {
    return (
        <PageTemplate
            eyebrow="Blog"
            title=""
            subtitle=""
        >
            <Section
                title="Recent Posts"
                description=""
            >
                <View style={styles.list}>
                    {posts.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </View>
            </Section>
        </PageTemplate>
    );
}

const styles = StyleSheet.create({
    list: {
        gap: 16,
    },
});