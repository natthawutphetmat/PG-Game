import localFont from "next/font/local";
import "./globals.css";
import "./style.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PGGame เล่นกันแบบสนุก ๆ | เล่นกันได้ตลอดเวลา 24 ชม.",
  description: "PGGame เล่นกันแบบสนุก ๆ | เล่นกันได้ตลอดเวลา 24 ชม. | เล่น PGGame ออนไลน์ฟรี",
  image: "https://game.ca7mobile.com/img/logo.png"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
