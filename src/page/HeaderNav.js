import React from 'react';
import { BookOpen, Heart, Clock, Menu } from 'lucide-react';

const HeaderNav = () => {
  
    return(
            <header className="bg-gray-300 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           <div className="flex items-center cursor-pointer">
        <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
      <h1 className="text-xl font-bold text-gray-800">EduMarket AI</h1>
    </div>
           
            <nav className="hidden md:flex space-x-8">
              <button
                
                className='px-3 py-2 rounded-md text-sm font-medium transition-colors 
                     text-gray-500 hover:text-gray-700'
                
              >
                Tất cả khóa học
              </button>
              <button
               
                className='px-3 py-2 rounded-md text-sm font-medium transition-colors 
                     text-gray-500 hover:text-gray-700'
              >
              
                Yêu thích
              </button>
              <button
                
                 className='px-3 py-2 rounded-md text-sm font-medium transition-colors 
                     text-gray-500 hover:text-gray-700'
              >
                
                Lịch sử 
              </button>
            </nav>


           
   
        </div>
</div>
      </header>
    
)}
export default HeaderNav;