import { useState } from 'react';

export default function SearchFilter({ onFilter }) {
  const [role, setRole] = useState('');
  const [tech, setTech] = useState('');

  const handleFilter = () => {
    onFilter({ role: role || undefined, tech: tech || undefined });
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
        <option>Frontend</option>
        <option>Backend</option>
        <option>Full-Stack</option>
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
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Filter
      </button>

      <button
        onClick={handleClear}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Clear
      </button>
    </div>
  );
}
