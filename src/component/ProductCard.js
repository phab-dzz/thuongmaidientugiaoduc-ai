import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Star, Clock, Users, BookOpen, ShoppingCart, Bot, X, Menu, ChevronDown } from 'lucide-react';
import { formatPrice } from '../ultils/formatPrice';
import { mockProducts } from '../data/mockProducts';


const ProductCard = () => {


 
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={mockProducts[0].image} 
          alt={mockProducts[0].name}
          className="w-full h-48 object-cover"
        />
        <button
         
          className='absolute top-3 right-3 p-2 rounded-full transition-all duration-200 
           
              bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
        >
          <Heart className='h-5 w-5 ' />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{mockProducts.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{mockProducts[0].shortDesc}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{mockProducts[0].rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{mockProducts[0].students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{mockProducts[0].duration}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{formatPrice(mockProducts[0].price)}</span>
          <button
           
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;