type AccessCodeRow = {
  code: string;
  label: string;
  status: string;
  activationType: string;
  maxActivations: number;
  usedActivations: number;
};

const demoRows: AccessCodeRow[] = [
  {
    code: "CMP-IND-3PASSAGES",
    label: "CMP individuel 3 passages",
    status: "active",
    activationType: "individual_bind_once",
    maxActivations: 1,
    usedActivations: 0,
  },
  {
    code: "CLUB-U18-60",
    label: "Club U18 - 60 passages",
    status: "active",
    activationType: "club_bind_once",
    maxActivations: 1,
    usedActivations: 1,
  },
];

export default function AdminAccessCodesPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      <h1>Admin — Codes d’accès</h1>
      <p>Créer, suivre et sécuriser les codes d’activation.</p>

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
              <th style={th}>Code</th>
              <th style={th}>Libellé</th>
              <th style={th}>Statut</th>
              <th style={th}>Type</th>
              <th style={th}>Max</th>
              <th style={th}>Utilisé</th>
            </tr>
          </thead>
          <tbody>
            {demoRows.map((row) => (
              <tr key={row.code}>
                <td style={td}>{row.code}</td>
                <td style={td}>{row.label}</td>
                <td style={td}>{row.status}</td>
                <td style={td}>{row.activationType}</td>
                <td style={td}>{row.maxActivations}</td>
                <td style={td}>{row.usedActivations}</td>
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
