import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
    const elementDiv = document.createElement('div');
    useEffect(() => {
        portalRoot.appendChild(elementDiv);
        return () => portalRoot.removeChild(elementDiv);
    }, [elementDiv, portalRoot]);
    return createPortal(children, elementDiv);
};

export default Portal;
