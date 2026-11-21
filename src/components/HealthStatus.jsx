import { useState } from "react";

function HealthStatus (){
    const [status, setStatus] = useState('Noch nicht geprüft')
    // Funktion, Button und Status-Anzeige ergänzen 
    async function checkBackend() {
        setStatus('Verbindung wird geprüft ...')
        try {
            const response = await fetch('http://127.0.0.1:8000/health')
            if (!response.ok) {
            throw new Error('HTTP-Anfrage fehlgeschlagen')
            }
            const data = await response.json()
            if (data.status !== 'ok') {
            throw new Error('Unerwartete Antwort')
            }
            setStatus('Backend erreichbar')
        } catch (error) {
            setStatus('Backend nicht erreichbar')
            console.error(error)
        }
    }
    return ( 
        <div> 
            <button onClick = {checkBackend}>
                Backend prüfen
            </button>

            <p> {status} </p>
        </div>
    )

}
export default HealthStatus