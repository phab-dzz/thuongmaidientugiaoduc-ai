import React,{useState} from 'react';
import  { HeaderNav,SearchBar,Footer,ProductGrid } from './';
import { Toast,ProductCard,ProductModal,AISuggestions } from '../component';
import { mockProducts,priceRanges } from '../data/mockProducts';    
const Home = () => {
   const [products] = useState(mockProducts);
    const [currentView, setCurrentView] = useState('products');
    const [favorites, setFavorites] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
   const [toast, setToast] = useState({ message: '', type: 'success', isVisible: false });

  const [isAISuggestionsOpen, setIsAISuggestionsOpen] = useState(false);
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max;
    return matchesSearch && matchesPrice;
  });
 const handleAISuggestionSelect = (product) => {
  setIsAISuggestionsOpen(false);
    handleViewDetails(product);
  
};
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


    return (
        <div  className='min-h-screen w-full bg-gray-100'>
            <HeaderNav 
            currentView={currentView}
        setCurrentView={setCurrentView}
        favorites={favorites}
        viewHistory={viewHistory}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SearchBar 
                searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              onAISuggest={() => setIsAISuggestionsOpen(true)}
              priceRanges={priceRanges}
                />
               
                   <ProductGrid
                        products={filteredProducts}
                        favorites={favorites}
                         onViewDetails={handleViewDetails}
                         onToggleFavorite={handleToggleFavorite}
             
                    />
                   
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
        
        />
      )}
            <Footer />
        </div>
    );
    }
export default Home;