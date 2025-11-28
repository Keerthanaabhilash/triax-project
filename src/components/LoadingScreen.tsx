import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-primary animate-fade-out">
      <div className="flex flex-col items-center gap-6 animate-scale-in">
        <img 
          src={logo} 
          alt="Triaxiz Logo" 
          className="h-32 w-32 animate-pulse"
        />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">Triaxiz</h2>
          <p className="text-lg text-white/90 italic">Concept to Creation</p>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
