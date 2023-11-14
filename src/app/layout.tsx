import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Evolution IT Logística",
  description: "Sistema de Logística",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col h-screen">
          <div className="h-[94px]"></div>

          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
