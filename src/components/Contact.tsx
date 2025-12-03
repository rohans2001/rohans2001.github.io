import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Card from './Card';
import Button from './Button';
import Toast from './Toast';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

// EmailJS Configuration
// To use EmailJS, sign up at https://www.emailjs.com/
// Then replace these with your actual IDs from the EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_luvtlyr';
const EMAILJS_TEMPLATE_ID = 'template_f3kajrs';
const EMAILJS_PUBLIC_KEY = 'Bjz2vGbo6OJ2TtOwY';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Check if EmailJS is configured
            
            await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        to_name: 'QA Engineer',
                    },
                    EMAILJS_PUBLIC_KEY
                );

                setToast({
                    message: 'Message sent successfully! I will get back to you soon.',
                    type: 'success'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });

                return;


            if (
                EMAILJS_SERVICE_ID === 'service_luvtlyr' ||
                EMAILJS_TEMPLATE_ID === 'template_f3kajrs' ||
                EMAILJS_PUBLIC_KEY === 'Bjz2vGbo6OJ2TtOwY'
            ) {
                // Demo mode - show success without actually sending
                await new Promise(resolve => setTimeout(resolve, 1000));
                setToast({
                    message: 'Message sent successfully! (Demo mode - configure EmailJS to send real emails)',
                    type: 'success'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                // Send email using EmailJS
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        to_name: 'QA Engineer',
                    },
                    EMAILJS_PUBLIC_KEY
                );

                setToast({
                    message: 'Message sent successfully! I will get back to you soon.',
                    type: 'success'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setToast({
                message: 'Failed to send message. Please try again or contact me directly.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'qa.engineer@example.com',
            link: 'mailto:qa.engineer@example.com'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/qa-engineer',
            link: 'https://linkedin.com'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            value: 'github.com/qa-engineer',
            link: 'https://github.com'
        }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}

                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's discuss how I can help ensure your software quality
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card variant="glass-strong">
                            <h3 className="gradient-text">Contact Information</h3>
                            <p>
                                Feel free to reach out through any of these channels.
                                I'm always open to discussing new opportunities and collaborations.
                            </p>

                            <div className="contact-info-list">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        className="contact-info-item glass"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="contact-icon">{info.icon}</div>
                                        <div className="contact-details">
                                            <div className="contact-label">{info.label}</div>
                                            <div className="contact-value">{info.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card variant="glass-strong">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="What's this about?"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Your message..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    icon={<FaPaperPlane />}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
