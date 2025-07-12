import React, { useState, useEffect } from 'react';
import { formatPrice } from '../ultils/formatPrice';
import { Search, Filter, Heart, Star, Clock, Users, BookOpen, ShoppingCart, Bot, X, Menu, ChevronDown } from 'lucide-react';
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

 
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Chi tiết khóa học</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.longDesc}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Giảng viên: {product.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700">{product.rating}/5 ({product.students} học viên)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Thời lượng: {product.duration}</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;