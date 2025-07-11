import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Star, Clock, Users, BookOpen, ShoppingCart, Bot, X, Menu, ChevronDown } from 'lucide-react';
const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center gap-2">
        <Heart className="h-5 w-5" />
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Toast;