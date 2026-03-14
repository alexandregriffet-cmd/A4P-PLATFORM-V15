export default function AdminPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      <h1>Admin A4P</h1>
      <p>Back-office consolidé de la plateforme A4P.</p>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          marginTop: 24,
        }}
      >
        <a
          href="/admin/access-codes"
          style={{
            display: "block",
            padding: 20,
            border: "1px solid #d9dee8",
            borderRadius: 12,
            textDecoration: "none",
            color: "#0f172a",
            background: "#fff",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Codes d’accès</h2>
          <p style={{ marginBottom: 0 }}>Créer, suivre et désactiver les codes.</p>
        </a>

        <a
          href="/admin/entitlements"
          style={{
            display: "block",
            padding: 20,
            border: "1px solid #d9dee8",
            borderRadius: 12,
            textDecoration: "none",
            color: "#0f172a",
            background: "#fff",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Entitlements / quotas</h2>
          <p style={{ marginBottom: 0 }}>Suivre les droits achetés et le restant.</p>
        </a>

        <a
          href="/admin/consumption"
          style={{
            display: "block",
            padding: 20,
            border: "1px solid #d9dee8",
            borderRadius: 12,
            textDecoration: "none",
            color: "#0f172a",
            background: "#fff",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Consommation</h2>
          <p style={{ marginBottom: 0 }}>Historique des passations consommées.</p>
        </a>

        <a
          href="/admin/orders"
          style={{
            display: "block",
            padding: 20,
            border: "1px solid #d9dee8",
            borderRadius: 12,
            textDecoration: "none",
            color: "#0f172a",
            background: "#fff",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Commandes</h2>
          <p style={{ marginBottom: 0 }}>Suivre les ventes, paiements et statuts.</p>
        </a>
      </div>
    </main>
  );
}
