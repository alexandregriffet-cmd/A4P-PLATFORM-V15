export const metadata = {
  title: 'A4P Platform V15',
  description: 'Plateforme A4P V15'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{fontFamily:'Arial, sans-serif', margin:0, background:'#f5f7fb', color:'#1f2937'}}>
        <header style={{padding:'18px 24px', background:'#17365D', color:'#fff'}}>
          <strong>A4P Platform V15</strong>
        </header>
        {children}
      </body>
    </html>
  )
}
