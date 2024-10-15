import React, { useState, useEffect } from 'react';
import TextAnimation from './components/TextAnimation';
import CategorySelection from './components/CategorySelection';
import SleepCategory from './components/SleepCategory';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCategories(true);
    }, 6000); // Increased to account for longer text and pause

    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundVideo />
      <div className="z-10 text-white text-center">
        <TextAnimation />
        {showCategories && !selectedCategory && (
          <CategorySelection onSelectCategory={handleCategorySelect} />
        )}
        {selectedCategory === "Can't sleep?" && (
          <SleepCategory />
        )}
      </div>
    </div>
  );
}

export default App;