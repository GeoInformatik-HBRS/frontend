const API_BASE_URL = 'http://127.0.0.1:8000'

export async function submitReport(category) {
  const response = await fetch(API_BASE_URL + '/reports', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ category: category })
  })
  if (response.status == 204) {
    return;
  }

  if (response.status == 400){
    throw new Error ('Unbekannte Kategorie');
  }

  if (response.status == 422){
    throw new Error ('Ungültige Anfrage');
  }

    throw new Error('HTTP-Fehler; ' + response.status);
  
}