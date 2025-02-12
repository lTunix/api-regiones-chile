export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          🌎 API Regiones y Comunas de Chile
        </h1>
        <p className="text-gray-700 mb-6">
          Esta API permite obtener información sobre regiones y comunas de Chile.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">📌 Endpoints Disponibles</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">/api/regiones</code> - Retorna todas las regiones.
          </li>
          <li>
            <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">/api/regiones?numero=I</code> - Retorna región y comunas.
          </li>
          <li>
            <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">/api/comunas</code> - Retorna todas las comunas.
          </li>
          <li>
            <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">/api/comunas?postal_code=1100000</code> - Filtra por comuna exacta.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">📊 Ejemplo de Respuesta</h2>
        <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-md overflow-x-auto">
          {`[
  {
    "nombre": "Tarapacá",
    "numero": "I",
    "comunas": [
      {
        "nombre": "Iquique",
        "codigo_postal": "1100000"
      }
    ]
  }
]`}
        </pre>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">📩 Contacto</h2>
        <p className="text-gray-700">
          Si tienes dudas, contáctame en{" "}
          <a href="mailto:marco.19.96@hotmail.com" className="text-blue-600 underline">
            marco.19.96@hotmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
