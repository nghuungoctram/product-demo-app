import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', image: 'https://i.ytimg.com/vi/OfR5EphhbxY/maxresdefault.jpg' },
  { id: 2, name: 'Product 2', image: 'https://i.ytimg.com/vi/OfR5EphhbxY/maxresdefault.jpg' },
  { id: 3, name: 'Product 3', image: 'https://i.ytimg.com/vi/OfR5EphhbxY/maxresdefault.jpg' },
  { id: 4, name: 'Product 4', image: 'https://i.ytimg.com/vi/OfR5EphhbxY/maxresdefault.jpg' },
  { id: 5, name: 'Product 5', image: 'https://i.ytimg.com/vi/OfR5EphhbxY/maxresdefault.jpg' },
  { id: 6, name: 'Product 6', image: 'https://i.ytimg.com/vi/OfR5EphhbxY/maxresdefault.jpg' },
];

const ProductDisplay = ({ reset }) => {
  const [selectedProducts, setSelectedProducts] = useState(new Set());

  const toggleSelectProduct = (id) => {
    setSelectedProducts((prevSelected) => {
      const updated = new Set(prevSelected);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  React.useEffect(() => {
    if (reset) {
      setSelectedProducts(new Set());
    }
  }, [reset]);

  return (
    <div>
      <div style={{ textAlign: 'right' }}>
        <input
          type="checkbox"
          onChange={() => toggleSelectProduct('all')}
          checked={selectedProducts.size === products.length}
        />
        Select All
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <input
              type="checkbox"
              checked={selectedProducts.has(product.id) || selectedProducts.has('all')}
              onChange={() => toggleSelectProduct(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
