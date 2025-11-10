const Developer = require('../models/Developer');

export const createDeveloper = async (req, res) => {
  try {
    const { name, role, techStack, experience } = req.body;

    if (!name || !role || !techStack || experience === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const techArray = techStack.split(',').map(t => t.trim()).filter(t => t);
    if (techArray.length === 0) {
      return res.status(400).json({ message: 'At least one tech is required' });
    }

    const developer = new Developer({
      name,
      role,
      techStack: techArray,
      experience: Number(experience)
    });

    await developer.save();
    res.status(201).json(developer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export const getDevelopers = async (req, res) => {
  try {
    const { role, tech } = req.query;
    let query = {};

    if (role) query.role = role;
    if (tech) query.techStack = { $regex: tech, $options: 'i' };

    const developers = await Developer.find(query).sort({ createdAt: -1 });
    res.json(developers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}