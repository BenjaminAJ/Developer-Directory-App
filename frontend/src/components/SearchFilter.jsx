import { useState } from 'react';

export default function SearchFilter({ onFilter, loading }) {
  const [role, setRole] = useState('');
  const [tech, setTech] = useState('');

  const handleFilter = () => {
    onFilter({ role: role || "", tech: tech || "" });
  };

  const handleClear = () => {
    setRole('');
    setTech('');
    onFilter({});
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row gap-3">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Roles</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Full-Stack">Full-Stack</option>
      </select>

      <input
        type="text"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
        placeholder="Search tech (e.g. React)"
        className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleFilter}
        disabled={loading}
        className={`px-6 py-3 rounded-lg font-medium transition cursor-pointer ${
          loading
            ? 'bg-green-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
        } text-white`}
      >
        {loading ? 'Filtering...' : 'Filter'}
      </button>

      <button
        onClick={handleClear}
        disabled={loading}
        className={`px-6 py-3 rounded-lg font-medium transition cursor-pointer ${
          loading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
        } text-white`}
      >
        Clear
      </button>
    </div>
  );
}
