import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Star, Clock, Users, BookOpen, ShoppingCart, Bot, X, Menu, ChevronDown } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import ProductSkeleton from './ProductSkeleton';
const AISuggestions = ({ onClose, onSelectProduct,ProductsSuggestions }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
       
        await new Promise(resolve => setTimeout(resolve, 1500));
        
       if (!ProductsSuggestions || ProductsSuggestions.length === 0) {
          
        const suggestedProducts = mockProducts.slice(0, 3);
        setSuggestions(suggestedProducts);
       }
        else {
          setSuggestions(ProductsSuggestions);
        }
      } catch (err) {
        setError('Không thể lấy gợi ý lúc này. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">Gợi ý AI cho bạn</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          {loading && (
            <div className="space-y-4">
              <div className="text-center text-gray-600 mb-4">
                AI đang phân tích sở thích của bạn...
              </div>
            
              <ProductSkeleton />
            </div>
          )}
          
          {error && (
            <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg">
              {error}
            </div>
          )}
          
          {!loading && !error && (
            <div className="space-y-4">
              <div className="text-center text-gray-600 mb-6">
                Dựa trên lịch sử xem và sở thích của bạn, chúng tôi gợi ý:
              </div>
              
              {suggestions.map(product => (
                <div 
                  key={product.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onSelectProduct(product)}
                >
                  <div className="flex gap-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.shortDesc}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <span className="font-semibold text-blue-600">
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                          }).format(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AISuggestions;