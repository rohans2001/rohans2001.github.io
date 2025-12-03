import { motion } from 'framer-motion';
import { FaBug, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <motion.div
                    className="error-icon"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <FaBug />
                </motion.div>

                <motion.h1
                    className="error-code"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    404
                </motion.h1>

                <motion.h2
                    className="error-title gradient-text"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Test Failed: Page Not Found
                </motion.h2>

                <motion.p
                    className="error-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Looks like this page didn't pass our quality checks.
                    The URL you're looking for doesn't exist or has been moved.
                </motion.p>

                <motion.div
                    className="error-details glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="detail-item">
                        <span className="detail-label">Error Type:</span>
                        <span className="detail-value">Page Not Found</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Status Code:</span>
                        <span className="detail-value error-code-small">404</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Severity:</span>
                        <span className="detail-value severity-high">High</span>
                    </div>
                </motion.div>

                <motion.div
                    className="error-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link to="/" className="btn btn-primary">
                        <FaHome />
                        <span>Return to Home</span>
                    </Link>
                </motion.div>

                <motion.div
                    className="bug-animation"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <FaBug className="floating-bug" />
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
