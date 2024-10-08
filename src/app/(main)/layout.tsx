import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <InfoPage /> */}
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
