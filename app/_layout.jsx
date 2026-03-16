import React, { useMemo, useState } from "react";
import {
    View, Text, Pressable, StyleSheet, useWindowDimensions,
    Modal, TouchableWithoutFeedback, ScrollView,
} from "react-native";
import { Slot, Link, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, LAYOUT } from "../constants/theme.js";

const MOB_BREAKPOINT = LAYOUT.mobileBreakpoint;

const NAV_LINKS = [
    { label: "Home",      href: "/" },
    { label: "About",     href: "/about" },
    { label: "Blog",      href: "/blog" },
    { label: "Contact",   href: "/contact" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Resume",    href: "/resume" },
];

const DROPDOWN_LINKS = [
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
]

export default function RootLayout() {
    const { width } = useWindowDimensions();
    const isMobile = width < MOB_BREAKPOINT;

    return (
        <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
            <Header isMobile={isMobile} />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.pageShell}>
                    <Slot />
                </View>
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
    
}

function Header({ isMobile }) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeAll = () => {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
    };

    const brand = (
        <Link href="/" asChild>
            <Pressable onPress={() => closeAll()} style={styles.brandWrap}>
                <Text style={styles.brand}>Joseph Bentley's React Portfolio</Text>
            </Pressable>
        </Link>
    );

    const NavRow = useMemo(() => {
        return (
            <View style={styles.navRow}>
                {NAV_LINKS.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        active={pathname === item.href}
                        onNavigate={closeAll}
                    />
                ))}

                <View style={styles.dropdownWrap}>
                    <Pressable
                        onPress={() => setDropdownOpen((v) => !v)}
                        style={({ pressed }) => [
                            styles.navBtn,
                            pressed && styles.pressed,
                        ]}
                    >
                        <Text style={styles.navBtnText}> More ▾</Text>
                    </Pressable>

                    {dropdownOpen && (
                        <View style={styles.dropdown}>
                            {DROPDOWN_LINKS.map((item) => (
                                <Link key={item.href} href={item.href} asChild>
                                    <Pressable onPress={closeAll} style={styles.dropdownItem}>
                                        <Text style={styles.dropdownText}>{item.label}</Text>
                                    </Pressable>
                                </Link>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        );
    }, [pathname, dropdownOpen]);

    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                {brand}

                {!isMobile ? (
                    NavRow
                ) : (
                    <Pressable
                        onPress={() => setMobileMenuOpen(true)}
                        style={({ pressed }) => [
                            styles.hamburgerBtn,
                            pressed && styles.pressed,
                        ]}
                    >
                        <Text style={styles.hamburgerText}>☰</Text>
                    </Pressable>
                )}
            </View>

            <Modal
                visible={mobileMenuOpen}
                transparent
                animationType="fade"
                onRequestClose={closeAll}
            >
                <TouchableWithoutFeedback onPress={closeAll}>
                    <View style={styles.modalBackdrop} />
                </TouchableWithoutFeedback>

                <View style={styles.mobileSheet}>
                    <View style={styles.mobileSheetHeader}>
                        <Text style={styles.mobileTitle}>Menu</Text>
                        <Pressable onPress={closeAll} style={styles.closeBtn}>
                            <Text style={styles.closeText}>✕</Text>
                        </Pressable>
                    </View>

                    <View style={styles.mobileLinks}>
                        {NAV_LINKS.map((item) => (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                active={pathname === item.href}
                                onNavigate={closeAll}
                                isMobile
                            />
                        ))}

                        <View style={styles.mobileDivider} />

                        <Text style={styles.mobileSectionLabel}>More</Text>
                        {DROPDOWN_LINKS.map((item) => (
                            <Link key={item.href} href={item.href} asChild>
                                <Pressable onPress={closeAll} style={styles.dropdownItem}>
                                    <Text style={styles.dropdownText}>{item.label}</Text>
                                </Pressable>
                            </Link>
                        ))}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function NavItem({ href, label, active, onNavigate, isDropdown, isMobile}) {
    return (
        <Link href={href} asChild>
            <Pressable
                onPress={onNavigate}
                style={({ pressed }) => [
                    isDropdown ? styles.dropdownItem : styles.navBtn,
                    isMobile && styles.mobileNavBtn,
                    active && (isDropdown ? styles.dropdownItemActive : styles.navBtnActive),
                    pressed && styles.pressed
                ]}
            >
                <Text style={[
                    isDropdown ? styles.dropdownText : styles.navBtnText,
                    isMobile && styles.mobileNavText,
                    active && styles.activeText,
                ]}
                >
                    {label}
                </Text>
            </Pressable>
        </Link>
    );
}

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© {new Date().getFullYear()} Joseph Bentley's React Portfolio Site</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.surface,
        backgroundColor: COLORS.border,
        zIndex: 5000,
        elevation: 5000,
    },
    headerInner: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 5001,
    },
    brandWrap: {
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    brand: {
        color: COLORS.text,
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 0.4,
    },
    navRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    navBtn: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 10,
    },
    navBtnActive: {
        backgroundColor: COLORS.surfaceAlt,
    },
    navBtnText: {
        color: COLORS.textMuted,
        fontSize: 14,
        paddingVertical: 1,
    },
    activeText: {
        color: COLORS.text,
        fontWeight: "700",
    },
    dropdownWrap: {
        position: "relative",
        zIndex: 9999,
        elevation: 9999,
    },
    dropdown: {
          position: "absolute",
          right: 0,
          top: 44,
          width: 180,
          backgroundColor: COLORS.surface,
          borderWidth: 1,
          borderColor: COLORS.border,
          borderRadius: 12,
          overflow: "hidden",
          zIndex: 9999,
          pointerEvents: "auto"
    },
    dropdownItem: {
        paddingVertical: 2,
        paddingHorizontal: 16,
    },
    dropdownItemActive: {
        backgroundColor: COLORS.surfaceAlt,
    },
    dropdownText: {
        color: COLORS.textMuted,
        fontSize: 14,
    },
    hamburgerBtn: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: COLORS.surfaceAlt,
    },
    hamburgerText: {
        color: COLORS.text,
        fontSize: 20,
    },
    pressed: {
        opacity: 0.75,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    pageOuter: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    pageShell: {
        width: "100%",
        maxWidth: 1100,
        alignItems: "center",
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        backgroundColor: COLORS.surface,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    footerText: {
        fontSize: 12,
        color: COLORS.textMuted,
    },

    modalBackdrop: {
        flex: 1,
        backgroundColor: "rgba(14, 14, 14, 0.45)",
    },
    mobileSheet: {
        position: "absolute",
        right: 12,
        top: 72,
        width: 200,
        backgroundColor: COLORS.surface,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        overflow: "hidden",
    },
    mobileSheetHeader: {
        paddingHorizontal: 14,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    mobileTitle: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: "700",
    },
    closeBtn: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: COLORS.surfaceAlt,
    },
    closeText: {
        color: COLORS.text,
        fontSize: 16,
    },
    mobileLinks: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    mobileNavBtn: {
        paddingVertical: 13,
        paddingHorizontal: 14,
        borderRadius: 4,
    },
    mobileNavText: {
        color: COLORS.textMuted,
        fontSize: 15,
    },
    mobileDivider: {
        height: 2,
        backgroundColor: COLORS.border,
        marginVertical: 8,
    },
    mobileSectionLabel: {
        paddingHorizontal: 0,
        paddingVertical: 6,
        fontSize: 12,
        color: COLORS.textMuted,
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: 0.6,
    }

})