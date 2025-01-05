import { motion } from 'framer-motion';
import PageTransition from './PageTransition';

function Contact() {
  return (
    <PageTransition>
      <section className="bg-gray-900 p-12 rounded-lg shadow-2xl">
        <motion.h2
          className="text-3xl font-bold text-yellow-500 mb-6 text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.form 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['name', 'email', 'message'].map((field, index) => (
            <motion.div 
              key={field}
              className="mb-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <label className="block text-gray-400" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  rows="4"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                />
              )}
            </motion.div>
          ))}
          
          <motion.button
            type="submit"
            className="bg-yellow-500 text-gray-900 p-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </section>
    </PageTransition>
  );
}

export default Contact;