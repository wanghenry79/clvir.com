import "./globals.css";

export const metadata = {
    title: "Clvir",
    description: "Clvir Landing Page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-[#111111] text-white">
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
