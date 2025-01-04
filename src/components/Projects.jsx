function Projects() {
    return (
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
            <p className="text-gray-600">A brief description of the project.</p>
          </div>
  
          {/* Project 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
            <p className="text-gray-600">Another exciting project that I've worked on.</p>
          </div>
  
          {/* Project 3 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
            <p className="text-gray-600">Description of the third project.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  