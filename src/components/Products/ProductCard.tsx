
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="product-card h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/400x300/e3f2fd/1e88e5?text=${product.name}`;
          }}
        />
        {product.discountedPrice && (
          <Badge className="absolute top-2 right-2 bg-apollo-accent font-medium">
            {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
          </Badge>
        )}
        {product.requiresPrescription && (
          <Badge className="absolute top-2 left-2 bg-apollo-DEFAULT/90 font-medium">
            Rx
          </Badge>
        )}
      </div>
      <CardContent className="p-4 flex-grow">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-semibold text-lg text-gray-800 hover:text-apollo-DEFAULT">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2">{product.generic}</p>
        <div className="flex items-baseline mt-2">
          {product.discountedPrice ? (
            <>
              <span className="text-apollo-DEFAULT font-bold">₹{product.discountedPrice}</span>
              <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
            </>
          ) : (
            <span className="text-apollo-DEFAULT font-bold">₹{product.price}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-apollo-DEFAULT hover:bg-apollo-dark"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
