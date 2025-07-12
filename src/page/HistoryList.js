import React from 'react';
import { Star, Heart } from 'lucide-react';

const HistoryList = ({ viewHistory, handleViewDetails, handleToggleFavorite, favorites }) => {
  return (
    <div className="space-y-4">
      {viewHistory.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
          <div className="flex gap-4">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.shortDesc}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="font-semibold text-blue-600">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleViewDetails(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={() => handleToggleFavorite(product.id)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm flex items-center gap-2 ${
                    favorites.includes(product.id)
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                  {favorites.includes(product.id) ? 'Đã thích' : 'Yêu thích'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;