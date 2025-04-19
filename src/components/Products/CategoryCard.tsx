
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="category-card h-full overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/e3f2fd/1e88e5?text=${category.name}`;
            }}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
