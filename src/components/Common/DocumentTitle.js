import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DocumentTitle = ({ prefix, listen }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (listen) {
      const handler = event => {
        setPos({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener('mousemove', handler);

      return () => {
        window.removeEventListener('mousemove', handler);
      };
    }

    return () => null;
  }, [listen]);

  useEffect(() => {
    const positionTitle = `${prefix} - ${pos.x}, ${pos.y}`;
    document.title = positionTitle;
    setTitle(positionTitle);
  }, [pos, prefix]);

  return <h3>{title}</h3>;
};

DocumentTitle.propTypes = {
  prefix: PropTypes.string,
  listen: PropTypes.bool,
};

export default DocumentTitle;
