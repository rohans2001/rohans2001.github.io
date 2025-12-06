import { motion } from 'framer-motion';
import Card from './Card';
import {
    SiSelenium,
    SiCypress,
    SiJavascript,
    SiTypescript,
    SiPostman,
    SiJenkins,
    SiGit,
    SiBurpsuite,
    SiApachejmeter
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Test Automation',
            color: 'var(--color-primary)',
            skills: [
                { name: 'Selenium', icon: <SiSelenium />, level: 95 },
                { name: 'JMeter', icon: <SiApachejmeter />, level: 85 },
                { name: 'Cypress', icon: <SiCypress />, level: 50 },
                { name: 'BurpSuite', icon: <SiBurpsuite />, level: 40 },
            ]
        },
        {
            title: 'Programming',
            color: 'var(--color-secondary)',
            skills: [
                { name: 'Java', icon: <FaJava />, level: 80 },
                { name: 'JavaScript', icon: <SiJavascript />, level: 60 },
                { name: 'TypeScript', icon: <SiTypescript />, level: 50 },
            ]
        },
        {
            title: 'Tools & DevOps',
            color: 'var(--color-warning)',
            skills: [
                { name: 'Postman', icon: <SiPostman />, level: 90 },
                { name: 'Git', icon: <SiGit />, level: 80 },
                { name: 'Jenkins', icon: <SiJenkins />, level: 60 },
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Tools and technologies I use to ensure quality
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 }}
                        >
                            <Card variant="glass-strong" className="skill-category">
                                <div className="category-header">
                                    <h3>{category.title}</h3>
                                    <div
                                        className="category-accent"
                                        style={{ background: category.color }}
                                    ></div>
                                </div>

                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className="skill-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                                        >
                                            <div className="skill-info">
                                                <div className="skill-icon">{skill.icon}</div>
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-level">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <motion.div
                                                    className="skill-progress"
                                                    style={{ background: category.color }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
