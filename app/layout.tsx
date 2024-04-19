import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import ModalProvider from "@/components/providers/modal-provider";

const font = Urbanist({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(font.className)}>
                <ModalProvider />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
