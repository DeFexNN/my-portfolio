function About() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">About Me</h2>
      <p className="text-gray-700 mb-4 text-center">
        Hello, I'm a passionate developer with experience in building modern web applications.
      </p>
      <div className="text-center">
        <img src="https://via.placeholder.com/150" alt="My Photo" className="rounded-full w-32 h-32 mb-4 mx-auto" />
      </div>
      <p className="text-gray-600 text-center">
        I specialize in JavaScript, React, and Tailwind CSS. I'm always eager to learn new technologies and work on exciting projects.
      </p>
    </section>
  );
}

export default About;
