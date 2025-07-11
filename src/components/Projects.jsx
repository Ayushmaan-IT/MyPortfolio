import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Project 1 */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url("/Untitled design.png")` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>GYM Management System</h3>
          <p>
            A modern GYM-WEB platform built with HTML and CSS, JS and FIREBASE.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url("/Your paragraph text.png")` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>BOOK-MY SHOW</h3>
          <p>
            A comprehensive Movie management dashboard with analytics,
            scheduling, and Payment-Gateway features.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url("/Screenshot 2025-07-09 124641.png")`,
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>COUNSELLING SERVICE</h3>
          <p>
            A sleek productivity Counselling web with customizable work
            sessions, Live Classes, and AI-Chatbot.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
