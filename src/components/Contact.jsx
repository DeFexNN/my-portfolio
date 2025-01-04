import { motion } from 'framer-motion';
import PageTransition from './PageTransition';

function Contact() {
  return (
    <PageTransition>
      <section className="modern-card">
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
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <input
                type={field === 'email' ? 'email' : 'text'}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-4 bg-transparent border border-gray-700 rounded-lg 
                          focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 
                          transition-all duration-300 outline-none"
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-yellow-500"
                initial={{ width: "0%" }}
                whileFocus={{ width: "100%" }}
              />
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