import Link from 'next/link'
export default function Page() {
  return (
    <main style={{maxWidth:1200, margin:'0 auto', padding:24}}>
      <h1>Admin A4P consolidé</h1>
      <ul>
        <li><Link href="/admin/access-codes">Codes d'accès</Link></li>
        <li><Link href="/admin/entitlements">Entitlements</Link></li>
        <li><Link href="/admin/consumption">Consommation</Link></li>
        <li><Link href="/admin/orders">Commandes</Link></li>
      </ul>
    </main>
  )
}
