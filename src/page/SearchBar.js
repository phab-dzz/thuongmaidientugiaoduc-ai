import React from 'react';
import { Search, Bot, ChevronDown } from 'lucide-react';

const SearchFilterBar = ({ searchTerm, setSearchTerm, selectedPriceRange, setSelectedPriceRange, priceRanges, onAISuggest }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Tìm kiếm khóa học..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div className="relative">
        <select
          value={selectedPriceRange.label}
          onChange={(e) => {
            const range = priceRanges.find(r => r.label === e.target.value);
            setSelectedPriceRange(range);
          }}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        >
          {priceRanges.map(range => (
            <option key={range.label} value={range.label}>{range.label}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>

      <button
        
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
      >
        <Bot className="h-5 w-5" />
        Gợi ý sản phẩm phù hợp
      </button>
    </div>
  );
};

export default SearchFilterBar;