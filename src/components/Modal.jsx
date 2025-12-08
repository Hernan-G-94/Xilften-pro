import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
    return createPortal(
        <div 
            className="modal"
            onClick={onClose}
        >
            <div 
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}