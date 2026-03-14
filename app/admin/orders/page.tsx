type OrderRow = {
  reference: string;
  customer: string;
  product: string;
  amount: string;
  status: string;
};

const demoRows: OrderRow[] = [
  {
    reference: "ORD-2026-001",
    customer: "Alexandre Griffet",
    product: "CMP individuel 3 passages",
    amount: "29,00 €",
    status: "paid",
  },
  {
    reference: "ORD-2026-002",
    customer: "Rugby Asnières",
    product: "Pack club 60 passages",
    amount: "490,00 €",
    status: "paid",
  },
];

export default function AdminOrdersPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      <h1>Commandes</h1>
      <p>Suivi des paiements, statuts et produits commandés.</p>

      <div
        style={{
          marginTop: 24,
          padding: 16,
          border: "1px solid #d9dee8",
          borderRadius: 12,
          background: "#fff",
          overflowX: "auto",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Référence</th>
              <th style={th}>Client</th>
              <th style={th}>Produit</th>
              <th style={th}>Montant</th>
              <th style={th}>Statut</th>
            </tr>
          </thead>
          <tbody>
            {demoRows.map((row) => (
              <tr key={row.reference}>
                <td style={td}>{row.reference}</td>
                <td style={td}>{row.customer}</td>
                <td style={td}>{row.product}</td>
                <td style={td}>{row.amount}</td>
                <td style={td}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 10px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: 14,
};

const td: React.CSSProperties = {
  padding: "12px 10px",
  borderBottom: "1px solid #f1f5f9",
  fontSize: 14,
};
