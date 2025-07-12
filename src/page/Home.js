import React,{useState} from 'react';
import  { HeaderNav,SearchBar,Footer,ProductGrid } from './';
import { Toast,ProductCard } from '../component';
import { mockProducts,priceRanges } from '../data/mockProducts';    
const Home = () => {
    const [favorites, setFavorites] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);
    return (
        <div  className='min-h-screen w-full bg-gray-100'>
            <HeaderNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SearchBar />
               
                   <ProductGrid
                        products={mockProducts}
                        favorites={favorites}
                        
                    />
                   
            </div>
            <Footer />
        </div>
    );
    }
export default Home;