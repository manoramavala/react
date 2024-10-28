import React from 'react';

function Quote({ quote, author }) {
  return (
    <div className="quote">
      <p>{quote}</p>
      <p className="author">— {author}</p>
    </div>
  );
}

export default Quote;
