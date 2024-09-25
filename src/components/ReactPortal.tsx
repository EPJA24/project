import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom';

interface ReactPortalProps {
  children: React.ReactNode;
  portalId?: string;
}

const ReactPortal = ({children, portalId}: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  function createWrapperAndAppendToBody(portalId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", portalId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

  useLayoutEffect(() => {
    let element = document.getElementById(portalId);
    let systemCreated = false;
    // if element is not found with portalId or portalId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(portalId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [portalId]);

  return wrapperElement ? createPortal(children, wrapperElement) : null;
}

export default ReactPortal