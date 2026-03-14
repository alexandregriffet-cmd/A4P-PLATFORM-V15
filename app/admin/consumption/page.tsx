type ConsumptionRow = {
  date: string;
  module: string;
  subject: string;
  context: string;
  consumed: number;
  remainingAfter: number;
};

const demoRows: ConsumptionRow[] = [
  {
    date: "2026-03-14 10:30",
    module: "CMP",
    subject: "Alexandre Griffet",
    context: "individual",
    consumed: 1,
    remainingAfter: 2,
  },
  {
    date: "2026-03-14 11:15",
    module: "PMP",
    subject: "Rugby Asnières U18",
    context: "club",
    consumed: 1,
    remainingAfter: 41,
  },
];

export default function AdminConsumptionPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      <h1>Consommation</h1>
      <p>Historique des passations consommées et du quota restant.</p>

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
              <th style={th}>Date</th>
              <th style={th}>Module</th>
              <th style={th}>Sujet</th>
              <th style={th}>Contexte</th>
              <th style={th}>Consommé</th>
              <th style={th}>Restant après</th>
            </tr>
          </thead>
          <tbody>
            {demoRows.map((row, idx) => (
              <tr key={`${row.date}-${idx}`}>
                <td style={td}>{row.date}</td>
                <td style={td}>{row.module}</td>
                <td style={td}>{row.subject}</td>
                <td style={td}>{row.context}</td>
                <td style={td}>{row.consumed}</td>
                <td style={td}>{row.remainingAfter}</td>
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
