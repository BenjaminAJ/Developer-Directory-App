const getRoleBadge = (role) => {
  const baseClasses = "inline-block px-3 py-1 text-xs font-semibold rounded-full";
  switch (role) {
    case 'Frontend':
      return `${baseClasses} bg-green-100 text-green-800`;
    case 'Backend':
      return `${baseClasses} bg-red-100 text-red-800`;
    case 'Full-Stack':
      return `${baseClasses} bg-purple-100 text-purple-800`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};

export default function DeveloperList({ developers }) {
  if (developers.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">No developers found.</p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {developers.map((dev) => (
        <div
          key={dev._id}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{dev.name}</h3>
          <span className={getRoleBadge(dev.role)}>{dev.role}</span>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Experience:</strong> {dev.experience} years
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {dev.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
