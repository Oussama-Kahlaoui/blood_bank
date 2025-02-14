import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/donors")
      .then(response => setDonors(response.data))
      .catch(error => console.error("Erreur :", error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Liste des donneurs</h1>
      <ul className="mt-3">
        {donors.map(donor => (
          <li key={donor.id} className="p-2 bg-gray-100 my-2 rounded">
            {donor.name} - {donor.blood_type} ({donor.city})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
