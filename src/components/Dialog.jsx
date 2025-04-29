import React, { useEffect } from 'react';

const Dialog = ({ isOpen, onClose, title = "Success!", message = "Operation completed successfully!" }) => {
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.classList.add('dialog-open');
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.classList.remove('dialog-open');
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="dialog-overlay" onClick={onClose}>
            <div 
                className="dialog-content" 
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
            >
                <h2 id="dialog-title">{title}</h2>
                <p>{message}</p>
                <div className="dialog-buttons">
                    <button 
                        className="dialog-button primary"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;