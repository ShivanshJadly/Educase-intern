import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Educase-Intern",
  description: "Intern selection round project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen w-full flex justify-center items-center bg-[#F7F8F9]">
          <div className="w-full max-w-md min-h-screen border border-gray-300">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
