
import { useState } from 'react'

function CategoryForm({ onSubmit }) {
  const [category, setCategory] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (category === '') {
      return
    }

    onSubmit(category)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Problem melden</h2>

      <label htmlFor="category">
        Problemkategorie:
      </label>

      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Bitte auswählen</option>
        <option value="street_damage">Straßenschaden</option>
        <option value="broken_streetlight">
          Defekte Straßenbeleuchtung
        </option>
        <option value="illegal_waste">
          Illegal entsorgter Müll
        </option>
        <option value="unknown_problem">
          Test: Unbekanntes Problem
        </option>
      </select>

      <button type="submit">
        Meldung senden
      </button>
    </form>
  )
}

export default CategoryForm
