import HealthStatus from "./components/HealthStatus"

import CategoryForm from './components/CategoryForm'

function App() {
  function handleCategorySubmit(category) {
    console.log('Ausgewählte Kategorie:', category)
  }

  return (
    <main className="app">
      <h1>GeoInformatik - Meldeplattform</h1>
      <HealthStatus />
      <p>Das Frontend läuft. Hier entsteht die Anwendung.</p>

      <CategoryForm onSubmit={handleCategorySubmit} />
    </main>
  )
}

export default App
