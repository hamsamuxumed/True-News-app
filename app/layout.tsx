import "../styles/globals.css";
import Header from "./Header";

//dark:bg-zinc-900

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-150 transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
