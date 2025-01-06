import { motion } from 'framer-motion';
import PageTransition from './PageTransition';

function Contact() {
  const socialLinks = [
    { 
      icon: "fa-brands fa-telegram", 
      text: "Телеграм канал", 
      description: "Приєднуйтесь до нашого каналу для останніх оновлень.",
      url: "https://t.me/defexhacks",
      color: "#0088cc"
    },
    { 
      icon: "fa-brands fa-telegram", 
      text: "Телеграм чат", 
      description: "Спілкуйтесь з нами в нашому чаті.",
      url: "https://t.me/defexchatix",
      color: "#0088cc"
    },
    { 
      icon: "fa-brands fa-telegram", 
      text: "Личка телеграм", 
      description: "Зв'яжіться зі мною особисто.",
      url: "https://t.me/defexgg",
      color: "#0088cc"
    },
    { 
      icon: "fa-brands fa-instagram", 
      text: "Інстаграм", 
      description: "Слідкуйте за нашими фото та відео.",
      url: "https://www.instagram.com/defex_tv/",
      color: "#E1306C"
    },
    { 
      icon: "fa-brands fa-youtube", 
      text: "Ютуб", 
      description: "Дивіться наші відео на YouTube.",
      url: "https://www.youtube.com/channel/UC1P4rmz_sIUHGvxLoj1LSQA",
      color: "#FF0000"
    },
    {
      icon: "fa-solid fa-envelope",
      text: "Email Me",
      description: "Напишіть мені на пошту.",
      url: "mailto:super.denchuk@gmail.com",
      color: "#D44638"
    }
  ];

  return (
    <PageTransition>
      <section className="modern-card p-8">
        <motion.h2
          className="text-3xl font-bold text-yellow-500 mb-12 text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Let's Connect
        </motion.h2>

        <motion.div 
          className="social-links-grid mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.url}
              href={link.url}
              className="social-button"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              style={{
                '--hover-color': link.color
              }}
            >
              <i className={link.icon} style={{ color: link.color }}></i>
              <div className="social-button-content">
                <span className="text-lg font-medium">{link.text}</span>
                <p className="text-sm text-gray-400">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}

export default Contact;