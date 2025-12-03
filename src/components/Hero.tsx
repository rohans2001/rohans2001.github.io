import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSelenium, SiCypress, SiJest } from 'react-icons/si';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    const floatingIcons = [
        { Icon: SiSelenium, color: '#43B02A', delay: 0 },
        { Icon: SiCypress, color: '#17202C', delay: 0.2 },
        { Icon: SiJest, color: '#C21325', delay: 0.4 },
    ];

    return (
        <section id="home" className="hero section">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="hero-badge glass"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="badge-dot"></span>
                            Available for Hire
                        </motion.div>

                        <h1 className="hero-title">
                            Ensuring Quality,
                            <br />
                            <span className="gradient-text">One Test at a Time</span>
                        </h1>

                        <p className="hero-description">
                            Quality Assurance Engineer specializing in automated testing,
                            performance optimization, and delivering bug-free experiences.
                            Passionate about building robust test frameworks and ensuring
                            software excellence.
                        </p>

                        <div className="hero-stats glass">
                            <div className="stat">
                                <div className="stat-value gradient-text">500+</div>
                                <div className="stat-label">Tests Automated</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                                <div className="stat-value gradient-text">99.9%</div>
                                <div className="stat-label">Bug Detection</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                                <div className="stat-value gradient-text">5+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <Button variant="primary" icon={<FaArrowRight />}>
                                View My Work
                            </Button>
                            <Button variant="outline">
                                Download CV
                            </Button>
                        </div>

                        <div className="hero-social">
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href="mailto:qa@example.com"
                                className="social-link"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaEnvelope />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="visual-container">
                            {/* Scanning Animation */}
                            <div className="scan-container glass-strong">
                                <div className="scan-line"></div>
                                <div className="scan-content">
                                    <div className="scan-header">
                                        <span className="scan-title">Running Tests...</span>
                                        <span className="scan-status success">PASSED</span>
                                    </div>
                                    <div className="scan-items">
                                        <div className="scan-item">
                                            <span className="scan-icon success">✓</span>
                                            <span>Authentication Flow</span>
                                        </div>
                                        <div className="scan-item">
                                            <span className="scan-icon success">✓</span>
                                            <span>API Integration</span>
                                        </div>
                                        <div className="scan-item">
                                            <span className="scan-icon success">✓</span>
                                            <span>UI Components</span>
                                        </div>
                                        <div className="scan-item">
                                            <span className="scan-icon warning">⚠</span>
                                            <span>Performance Tests</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Tool Icons */}
                            {floatingIcons.map(({ Icon, color, delay }, index) => (
                                <motion.div
                                    key={index}
                                    className="floating-icon glass"
                                    style={{
                                        top: `${20 + index * 25}%`,
                                        right: `${-10 + index * 5}%`
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: delay + 0.5 }}
                                >
                                    <Icon style={{ color, fontSize: '2rem' }} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
