export default function DeveloperList({ developers }) {
  if (developers.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">No developers found.</p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {developers.map((dev) => (
        <div
          key={dev._id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-gray-800">{dev.name}</h3>
          <p className="text-sm text-blue-600 font-medium mt-1">{dev.role}</p>

          <div className="mt-3">
            <p className="text-sm text-gray-600">
              <strong>Experience:</strong> {dev.experience} years
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {dev.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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