import React from 'react';
import { MoonStar, Clock, Compass, Focus } from 'lucide-react';

const categories = [
  {
    title: "Can't sleep?",
    description: "Meditation can significantly improve sleep quality by reducing physical tension and calming the nervous system.",
    icon: MoonStar,
  },
  {
    title: "Thinking of the past?",
    description: "Meditation can help prevent dwelling on past experiences by training the mind to focus on the present moment and reducing attachment to thoughts and emotions.",
    icon: Clock,
  },
  {
    title: "Trouble Focusing?",
    description: "Sometimes, a racing mind or overwhelming thoughts can make it tough to focus. This space is here to help you find calm, sharpen your attention, and bring you back to center.",
    icon: Focus,
  },
  {
    title: "Seeking Spiritual Growth?",
    description: "Meditate to explore deeper questions of existence, connect with your spirituality, and feel more connected to a sense of purpose or higher power.",
    icon: Compass,
  },
];

interface CategorySelectionProps {
  onSelectCategory: (category: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4 md:px-12 max-w-7xl mx-auto">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all duration-300 cursor-pointer transform hover:scale-105 opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 0.5}s`, animationDuration: '3s' }}
          onClick={() => onSelectCategory(category.title)}
        >
          <category.icon className="w-12 h-12 mb-4 text-yellow-300" />
          <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
          <p className="text-sm text-gray-300">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySelection;