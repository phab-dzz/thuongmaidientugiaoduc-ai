import React from 'react';
import  { HeaderNav,SearchBar,Footer } from './';
import { Toast,ProductCard } from '../component';
const Home = () => {
    return (
        <div  className='min-h-screen w-full bg-gray-100'>
            <HeaderNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SearchBar />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          
                    {[...Array(8)].map((_, index) => (
                        <ProductCard 
                            key={index} 
                           
                        />
                    ))}
                    </div>
            </div>
            <Footer />
        </div>
    );
    }
export default Home;