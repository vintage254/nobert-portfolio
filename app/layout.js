import "./globals.css";

export const metadata = {
  title: "Nobert Kanini Kipkeretich | Data & Software Engineer",
  description: "Portfolio website of Nobert Kanini Kipkeretich, a Data and Software Engineer specializing in building innovative solutions with data and code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
