import "./globals.css";

export const metadata = {
  title: "Em construção | Clone TabNews",
  description: "Estamos reconstruindo o clone do TabNews. Acompanhe essa jornada e conheça o TabNews oficial.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
