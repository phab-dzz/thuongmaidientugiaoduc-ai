import React from 'react';
import { BookOpen, Heart, Clock, Menu } from 'lucide-react';

const HeaderNav = ({ currentView, setCurrentView, favorites, viewHistory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    return(
            <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           <div
  onClick={() => setCurrentView('products')}
  className="flex items-center cursor-pointer"
>
  <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
  <h1 className="text-xl font-bold text-gray-800">EduEcom AI</h1>
</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentView('products')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'products' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Tất cả khóa học
              </button>
              <button
                onClick={() => setCurrentView('favorites')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  currentView === 'favorites' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Heart className="h-4 w-4" />
                Yêu thích ({favorites.length})
              </button>
              <button
                onClick={() => setCurrentView('history')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  currentView === 'history' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Clock className="h-4 w-4" />
                Lịch sử ({viewHistory.length})
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
              
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setCurrentView('products');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                    currentView === 'products' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Tất cả khóa học
                </button>
                <button
                  onClick={() => {
                    setCurrentView('favorites');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    currentView === 'favorites' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Heart className="h-4 w-4" />
                  Yêu thích ({favorites.length})
                </button>
                <button
                  onClick={() => {
                    setCurrentView('history');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    currentView === 'history' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  Lịch sử ({viewHistory.length})
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    
)}
export default HeaderNav;