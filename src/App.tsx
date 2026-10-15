/** React + TypeScript host for the preserved Reparto Quito experience.
 * The existing interaction flow remains intact while the responsive fixes
 * are applied to the legacy screen, avoiding a disruptive redesign.
 */
export default function App() {
  return (
    <main className="app-shell">
      <iframe
        className="legacy-frame"
        title="Reparto Quito"
        src="./reparto-legacy.html"
        allow="geolocation"
      />
    </main>
  );
}
