function Contact() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Contact Me</h2>
      <form className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
