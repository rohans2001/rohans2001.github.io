import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBug, FaCheckCircle, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section using Intersection Observer
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -50% 0px',
                threshold: 0
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="navbar-content">
                        <motion.div
                            className="navbar-logo"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <FaBug className="logo-icon" />
                            <span className="logo-text">
                                Rohan<span className="gradient-text"> Samanta</span>
                            </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="navbar-menu">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className={`navbar-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="navbar-end">
                            <motion.a
                                href="#contact"
                                className="navbar-cta desktop-only"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaCheckCircle />
                                <span>Hire Me</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Bottom Navigation for Mobile */}
            <div className="bottom-nav mobile-only">
                {navItems.map((item) => {
                    let Icon;
                    switch (item.name) {
                        case 'Home': Icon = FaHome; break;
                        case 'About': Icon = FaUser; break;
                        case 'Skills': Icon = FaCode; break;
                        case 'Experience': Icon = FaBriefcase; break;
                        case 'Contact': Icon = FaEnvelope; break;
                        default: Icon = FaHome;
                    }

                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`bottom-nav-item ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            <Icon className="nav-icon" />
                            <span className="nav-label">{item.name}</span>
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default Navbar;
