import React, { useState, useEffect } from 'react';

const TextAnimation: React.FC = () => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(true);
  const fullText = "Let us help you find peace.";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typeInterval);
        
        // Set a timeout to start fading out the text
        setTimeout(() => {
          setVisible(false);
        }, 1000); // Adjust this value to change when the text starts fading out
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <h1 
      className={`text-4xl md:text-6xl font-bold mb-8 tracking-wide text-center text-white transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TextAnimation;