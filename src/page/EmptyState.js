import React from 'react';

const EmptyState = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center py-12">
      {Icon && <Icon className="h-16 w-16 text-gray-300 mx-auto mb-4" />}
      <p className="text-gray-500 text-lg">{title}</p>
      {description && <p className="text-gray-400 text-sm mt-2">{description}</p>}
    </div>
  );
};

export default EmptyState;