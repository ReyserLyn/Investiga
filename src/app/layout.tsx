import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Investiga",
  description: "Plataforma educativa de educación científica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.className}  wf-loaded-stage2 motion-on`}
    >
      <body
        className="flex flex-col min-h-svh w-full avif"
        suppressHydrationWarning
      >
        {children}
        <Toaster richColors expand />
      </body>
    </html>
  );
}
