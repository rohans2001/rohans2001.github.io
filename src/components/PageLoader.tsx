import { motion } from 'framer-motion';
import './PageLoader.css';

const PageLoader = () => {
    return (
        <motion.div
            className="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="loader-content">
                <div className="loader-icon">
                    <div className="scan-box glass">
                        <div className="scan-line-loader"></div>
                        <div className="loader-text">
                            <span className="loader-title gradient-text">QA Portfolio</span>
                            <span className="loader-subtitle">Running Quality Checks...</span>
                        </div>
                    </div>
                </div>

                <div className="progress-bar">
                    <motion.div
                        className="progress-fill"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                </div>

                <div className="loader-stats">
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="stat-icon">✓</span>
                        <span>Components Loaded</span>
                    </motion.div>
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="stat-icon">✓</span>
                        <span>Styles Applied</span>
                    </motion.div>
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <span className="stat-icon">✓</span>
                        <span>Animations Ready</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default PageLoader;
