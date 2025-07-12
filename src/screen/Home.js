import React, { useState } from 'react';
import {AISuggestions, ProductModal, Toast} from '../component';

import {ProductGrid,EmptyState,HistoryList,HeaderNav,SearchBar,Footer} from '../page';
import ChatBot from '../chatbot/ChatBot';
import { mockProducts, priceRanges } from '../data/mockProducts';

const Home = () => {
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [favorites, setFavorites] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAISuggestionsOpen, setIsAISuggestionsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('products');
  const [toast, setToast] = useState({ message: '', type: 'success', isVisible: false });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max;
    return matchesSearch && matchesPrice;
  });

  const handleToggleFavorite = (productId) => {
    setFavorites(prev => {
      const isFavorite = prev.includes(productId);
      const updated = isFavorite
        ? prev.filter(id => id !== productId)
        : [...prev, productId];

      setToast({
        message: isFavorite ? 'Đã xóa khỏi yêu thích' : 'Đã thêm vào yêu thích',
        type: 'success',
        isVisible: true
      });

      return updated;
    });
  };

  const handleAddToHistory = (product) => {
    setViewHistory(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 10);
    });
  };




  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

 const handleAISuggestionSelect = (product) => {
  setIsAISuggestionsOpen(false);


    handleViewDetails(product);

};



  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const getFavoriteProducts = () => {
    return mockProducts.filter(product => favorites.includes(product.id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      <HeaderNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        favorites={favorites}
        viewHistory={viewHistory}
      
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'products' && (
          <>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              onAISuggest={() => setIsAISuggestionsOpen(true)}
              priceRanges={priceRanges}
            />

            {filteredProducts.length === 0 ? (
              <EmptyState  title="danh sách khóa học" description="Không tìm thấy khóa học nào phù hợp" />
            ) : (
              <ProductGrid
                products={filteredProducts}
                favorites={favorites}
                onViewDetails={handleViewDetails}
                onToggleFavorite={handleToggleFavorite}
                onAddToHistory={handleAddToHistory}
              />
            )}
          </>
        )}

        {currentView === 'favorites' && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Khóa học yêu thích</h2>
            {getFavoriteProducts().length === 0 ? (
              <EmptyState title="danh sách yêu thích" description="Chưa có khóa học nào trong danh sách yêu thích" />
            ) : (
              <ProductGrid
                products={getFavoriteProducts()}
                favorites={favorites}
                onViewDetails={handleViewDetails}
                onToggleFavorite={handleToggleFavorite}
                onAddToHistory={handleAddToHistory}
              />
            )}
          </>
        )}

        {currentView === 'history' && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Lịch sử xem</h2>
            {viewHistory.length === 0 ? (
              <EmptyState title="danh sách đã xem" description="Chưa có lịch sử xem nào" />
            ) : (
              <HistoryList
                viewHistory={viewHistory}
                favorites={favorites}
                handleViewDetails={handleViewDetails}
                handleToggleFavorite={handleToggleFavorite}
              />
            )}
          </>
        )}
        
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {isAISuggestionsOpen && (
        <AISuggestions
          onClose={() => setIsAISuggestionsOpen(false)}
          onSelectProduct={handleAISuggestionSelect}
          ProductsSuggestions={ [...getFavoriteProducts(), ...viewHistory]} 
        />
      )}

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <ChatBot />
      <Footer />

    </div>
  );
};

export default Home;
