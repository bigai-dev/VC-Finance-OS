import { pnlRows, pnlColumns, pnlPctHeader } from "@/lib/mock-data";

export function PnlTable() {
  return (
    <div className="card">
      <div className="pnl-scroll">
        <table className="pnl-table">
          <thead>
            <tr>
              <th style={{ width: "38%" }}>Line Item</th>
              {pnlColumns.map((c) => (
                <th key={c}>{c}</th>
              ))}
              <th>{pnlPctHeader}</th>
            </tr>
          </thead>
          <tbody>
            {pnlRows.map((row, i) => {
              if (row.type === "header") {
                return (
                  <tr key={`h-${i}`} className="header">
                    <td colSpan={6}>{row.label}</td>
                  </tr>
                );
              }
              if (row.type === "total") {
                return (
                  <tr key={`t-${i}`} className="total">
                    <td>{row.label}</td>
                    {row.values!.map((v, j) => (
                      <td key={j}>{v}</td>
                    ))}
                    <td className={row.pctClass ?? ""}>{row.pctOfRev}</td>
                  </tr>
                );
              }
              const rowClass = row.type === "subtotal" ? "subtotal" : "";
              return (
                <tr key={`r-${i}`} className={rowClass}>
                  <td>{row.label}</td>
                  {row.values!.map((v, j) => (
                    <td key={j} className={row.valuesClass?.[j] ?? ""}>
                      {v}
                    </td>
                  ))}
                  <td>{row.pctOfRev}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
