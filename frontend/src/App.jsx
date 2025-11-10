import { useState, useEffect } from 'react';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';
import SearchFilter from './components/SearchFilter';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/developers';

function App() {
  const [developers, setDevelopers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDevelopers = async (filters = {}) => {
    setLoading(true);
    try {
      const params = new URLSearchParams(filters);
      const res = await axios.get(`${API_URL}?${params}`);
      setDevelopers(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const handleAdd = () => {
    fetchDevelopers();
  };

  const handleFilter = (filters) => {
    fetchDevelopers(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Developer Directory
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <DeveloperForm onAdd={handleAdd} />
          </div>

          <div className="lg:col-span-2">
            <SearchFilter onFilter={handleFilter} />
            {loading ? (
              <div className="flex justify-center items-center mt-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <DeveloperList developers={filtered} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
