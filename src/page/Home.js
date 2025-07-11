import React from 'react';
import  { HeaderNav,SearchBar } from './';
const Home = () => {
    return (
        <div  className='min-h-screen w-full'>
            <HeaderNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SearchBar />
            </div>
        
        </div>
    );
    }
export default Home;