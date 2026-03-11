import { Stack } from "expo-router"

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="about"     options={{ title: "About" }} />
            <Stack.Screen name="blog"      options={{ title: "Blog" }} />
            <Stack.Screen name="contact"   options={{ title: "Contact" }} />
            <Stack.Screen name="index"     options={{ title: "Home" }} />
            <Stack.Screen name="portfolio" options={{ title: "Portfolio" }} />
            <Stack.Screen name="resume"    options={{ title: "Resume" }} />
        </Stack>
    );
}