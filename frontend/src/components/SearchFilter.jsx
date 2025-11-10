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
        className="p-2 border rounded-lg flex-1"
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
        className="p-2 border rounded-lg flex-1"
      />

      <button
        onClick={handleFilter}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Filter
      </button>

      <button
        onClick={handleClear}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        Clear
      </button>
    </div>
  );
}