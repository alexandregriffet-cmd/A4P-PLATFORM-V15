import Link from 'next/link'

export default function HomePage() {
  const linkStyle = {display:'inline-block', padding:'12px 16px', background:'#17365D', color:'#fff', borderRadius:10, textDecoration:'none', marginRight:12, marginBottom:12}
  return (
    <main style={{maxWidth:1200, margin:'0 auto', padding:24}}>
      <h1>Portail A4P</h1>
      <p>Double entrée : individuel et club, avec sécurité commerciale, paiement et administration consolidée.</p>
      <div>
        <Link href="/individuel/tests/cmp" style={linkStyle}>CMP individuel</Link>
        <Link href="/individuel/tests/pmp" style={linkStyle}>PMP individuel</Link>
        <Link href="/individuel/tests/psycho" style={linkStyle}>PSYCHO individuel</Link>
        <Link href="/club/dashboard" style={linkStyle}>Dashboard club</Link>
        <Link href="/pricing" style={linkStyle}>Offres & Paiement</Link>
        <Link href="/admin" style={linkStyle}>Admin</Link>
      </div>
    </main>
  )
}
