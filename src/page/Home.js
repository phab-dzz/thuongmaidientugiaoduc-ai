import React,{useState} from 'react';
import  { HeaderNav,SearchBar,Footer,ProductGrid } from './';
import { Toast,ProductCard,ProductModal } from '../component';
import { mockProducts,priceRanges } from '../data/mockProducts';    
const Home = () => {
    const [favorites, setFavorites] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };



    return (
        <div  className='min-h-screen w-full bg-gray-100'>
            <HeaderNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SearchBar />
               
                   <ProductGrid
                        products={mockProducts}
                        favorites={favorites}
                         onViewDetails={handleViewDetails}
                    />
                   
            </div>
             <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
            <Footer />
        </div>
    );
    }
export default Home;