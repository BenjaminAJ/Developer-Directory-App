import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/api/developers';

export default function DeveloperForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    role: '',
    techStack: '',
    experience: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.role || !form.techStack || !form.experience) {
      toast.error('All fields are required!');
      return;
    }

    if (form.experience < 0) {
      toast.error('Experience cannot be negative!');
      return;
    }

    try {
      await axios.post(API_URL, form);
      toast.success('Developer added successfully!');
      setForm({ name: '', role: '', techStack: '', experience: '' });
      onAdd();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add developer');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Developer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Role</option>
          <option>Fronend</option>
          <option>Backend</option>
          <option>Full-Stack</option>
        </select>

        <input
          type="text"
          name="techStack"
          value={form.techStack}
          onChange={handleChange}
          placeholder="Tech Stack (e.g. React, Node, MongoDB)"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Years of Experience"
          min="0"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Developer
        </button>
      </form>
    </div>
  );
}