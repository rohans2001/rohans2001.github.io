import { motion } from 'framer-motion';
import Card from './Card';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <FaCode />,
            title: 'Test Automation',
            description: 'Expert in building scalable test frameworks',
            color: 'var(--color-primary)'
        },
        {
            icon: <FaRocket />,
            title: 'Performance',
            description: 'Optimizing for speed and reliability',
            color: 'var(--color-secondary)'
        },
        {
            icon: <FaUsers />,
            title: 'Collaboration',
            description: 'Working seamlessly with dev teams',
            color: 'var(--color-warning)'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Implementing cutting-edge QA practices',
            color: 'var(--color-accent)'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>About Me</h2>
                    <p className="section-subtitle">
                        Dedicated to delivering flawless software experiences
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card variant="glass-strong">
                            <h3 className="gradient-text">Quality Assurance Engineer</h3>
                            <p>
                                With over 1 year of experience in software quality assurance,
                                I'm developing expertise in creating effective test strategies that ensure
                                product excellence. My skills span automated testing, performance
                                optimization, and continuous integration.
                            </p>
                            <p>
                                I'm passionate about finding bugs before users do, building
                                robust testing frameworks, and collaborating with development teams
                                to deliver quality software. My approach combines technical knowledge
                                with attention to detail and user experience.
                            </p>
                            <p>
                                I actively contribute to open-source testing tools and stay updated
                                with the latest testing methodologies and automation frameworks,
                                continuously expanding my expertise in quality assurance.
                            </p>
                        </Card>
                    </motion.div>

                    <div className="about-highlights">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Card className="highlight-card">
                                    <div
                                        className="highlight-icon"
                                        style={{ color: item.color }}
                                    >
                                        {item.icon}
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
