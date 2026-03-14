type EntitlementRow = {
  owner: string;
  ownerType: string;
  moduleScope: string;
  purchasedUses: number;
  usedUses: number;
  remainingUses: number;
  status: string;
};

const demoRows: EntitlementRow[] = [
  {
    owner: "Alexandre Griffet",
    ownerType: "individual",
    moduleScope: "CMP",
    purchasedUses: 3,
    usedUses: 1,
    remainingUses: 2,
    status: "active",
  },
  {
    owner: "Rugby Asnières U18",
    ownerType: "club",
    moduleScope: "ALL",
    purchasedUses: 60,
    usedUses: 18,
    remainingUses: 42,
    status: "active",
  },
];

export default function AdminEntitlementsPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      <h1>Entitlements / quotas</h1>
      <p>Vue admin consolidée des droits d’accès aux tests.</p>

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
              <th style={th}>Client</th>
              <th style={th}>Type</th>
              <th style={th}>Module</th>
              <th style={th}>Achetés</th>
              <th style={th}>Utilisés</th>
              <th style={th}>Restants</th>
              <th style={th}>Statut</th>
            </tr>
          </thead>
          <tbody>
            {demoRows.map((row, idx) => (
              <tr key={`${row.owner}-${idx}`}>
                <td style={td}>{row.owner}</td>
                <td style={td}>{row.ownerType}</td>
                <td style={td}>{row.moduleScope}</td>
                <td style={td}>{row.purchasedUses}</td>
                <td style={td}>{row.usedUses}</td>
                <td style={td}>{row.remainingUses}</td>
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
