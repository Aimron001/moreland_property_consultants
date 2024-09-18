import { useState, useEffect } from 'react';

const SlidingText = () => {
  const sentences = [
    "From the heart of Konza Technopolis, to the world,",
    "we unlock your dream property in style.",
  ];

  const [currentSentence, setCurrentSentence] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // Track sliding animation

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true); // Start the slide-out animation

      setTimeout(() => {
        setCurrentSentence((prevSentence) => (prevSentence + 1) % sentences.length);
        setIsSliding(false); // Trigger the slide-in animation after change
      }, 1000); // This timeout should match the slide-out animation duration (1s)
    }, 7000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="sliding-text-container">
      <div className={`sliding-text ${isSliding ? 'slide-out' : 'slide-in'}`}>
        {sentences[currentSentence]}
      </div>
    </div>
  );
};

export default SlidingText;
