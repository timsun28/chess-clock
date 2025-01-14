import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

const APP_NAME = "Chess Clock";
const APP_DEFAULT_TITLE = "Chess Clock";
const APP_TITLE_TEMPLATE = "%s - Chess Clock";
const APP_DESCRIPTION = "Simple Chess Clock";

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <body>{children}</body>
        </html>
    );
}
