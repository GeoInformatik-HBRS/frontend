
import CategoryForm from './components/CategoryForm'

function App() {
  function handleCategorySubmit(category) {
    console.log('Ausgewählte Kategorie:', category)
  }

  return (
    <main>
      <h1>GeoInformatik – Meldeplattform</h1>

      <CategoryForm onSubmit={handleCategorySubmit} />
    </main>
  )
}

export default App
