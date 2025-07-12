import React from 'react';
import ProductCard from '../component/ProductCard';


const ProductGrid = ({ products, onViewDetails, onToggleFavorite, favorites, onAddToHistory,catelory }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product) => (
                <ProductCard
                      key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(product.id)}
          onAddToHistory={onAddToHistory}
                />
            ))}

    

        </div>
    )}
export default ProductGrid;