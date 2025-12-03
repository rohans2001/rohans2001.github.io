import { motion } from 'framer-motion';
import Card from './Card';
import { FaBriefcase, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Tech Solutions Inc.',
            role: 'Senior QA Engineer',
            period: '2021 - Present',
            achievements: [
                'Reduced bug escape rate by 45% through comprehensive test automation',
                'Built CI/CD pipeline reducing deployment time by 60%',
                'Mentored team of 5 junior QA engineers',
                'Implemented performance testing framework'
            ],
            color: 'var(--color-primary)'
        },
        {
            company: 'Digital Innovations Ltd.',
            role: 'QA Engineer',
            period: '2019 - 2021',
            achievements: [
                'Automated 200+ test cases using Selenium and Cypress',
                'Improved test coverage from 60% to 95%',
                'Collaborated with developers on TDD practices',
                'Established QA best practices and documentation'
            ],
            color: 'var(--color-secondary)'
        },
        {
            company: 'StartUp Ventures',
            role: 'Junior QA Engineer',
            period: '2018 - 2019',
            achievements: [
                'Created comprehensive test plans for web applications',
                'Performed manual and automated testing',
                'Identified and documented 500+ bugs',
                'Participated in agile development sprints'
            ],
            color: 'var(--color-warning)'
        }
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Experience</h2>
                    <p className="section-subtitle">
                        My journey in quality assurance
                    </p>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-marker" style={{ background: exp.color }}>
                                <FaBriefcase />
                            </div>

                            <Card variant="glass-strong" className="timeline-content">
                                <div className="experience-header">
                                    <div>
                                        <h3>{exp.role}</h3>
                                        <h4 className="company-name">{exp.company}</h4>
                                    </div>
                                    <div className="experience-period">
                                        <FaCalendar />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="achievements-list">
                                    {exp.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.2) + (i * 0.1) }}
                                        >
                                            <FaCheckCircle style={{ color: exp.color }} />
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
