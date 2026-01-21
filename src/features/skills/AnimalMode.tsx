'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type AnimalType = 'corgi' | 'cat';

interface Animal {
  id: number;
  type: AnimalType;
  direction: 'left' | 'right';
  y: number;
  speed: number;
}

const ANIMALS: Record<AnimalType, string> = {
  corgi: '🐕',
  cat: '🐈'
};

export function AnimalMode() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const spawnAnimal = () => {
      const type: AnimalType = Math.random() > 0.5 ? 'corgi' : 'cat';
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const id = Date.now();
      
      const newAnimal: Animal = {
        id,
        type,
        direction,
        y: Math.random() * 80 + 10, // 10% to 90% of container height
        speed: Math.random() * 15 + 10, // seconds for full cross
      };

      setAnimals(prev => [...prev, newAnimal]);

      // Remove animal after it crosses
      setTimeout(() => {
        setAnimals(prev => prev.filter(a => a.id !== id));
      }, newAnimal.speed * 1000 + 1000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) { spawnAnimal(); }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {animals.map((animal) => (
        <motion.div
          key={animal.id}
          initial={{ 
            x: animal.direction === 'right' ? '-10%' : '110%', 
            y: `${animal.y}%`,
            scaleX: animal.direction === 'right' ? 1 : -1 
          }}
          animate={{ x: animal.direction === 'right' ? '110%' : '-10%' }}
          transition={{ duration: animal.speed, ease: "linear" }}
          className="absolute text-2xl filter drop-shadow-md opacity-40 grayscale-[0.2]"
        >
          {ANIMALS[animal.type]}
        </motion.div>
      ))}
    </div>
  );
}
