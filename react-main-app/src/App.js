import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptSrc, setScriptSrc] = useState(null);

  useEffect(() => {
    const fetchAssetManifest = async () => {
      try {
        const response = await fetch('http://localhost:3001/asset-manifest.json');
        const manifest = await response.json();
        const mainJsFile = manifest.files['main.js'];
        if (mainJsFile) {
          setScriptSrc(`http://localhost:3001${mainJsFile}`);
        } else {
          console.error('Main JS file not found in asset manifest');
        }
      } catch (error) {
        console.error('Error fetching asset manifest:', error);
      }
    };

    fetchAssetManifest();
  }, []);

  useEffect(() => {
    if (scriptSrc) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;

      script.onload = () => {
        if (window.customElements.get('product-display')) {
          setIsScriptLoaded(true);
        }
      };

      script.onerror = (e) => {
        console.error('Error loading product app script:', e);
      };

      document.body.appendChild(script);
    }
  }, [scriptSrc]);

  return (
    <div className="App">
      <h1>Main App</h1>
      {isScriptLoaded ? (
        <product-display></product-display>
      ) : (
        <p>Loading Product Display...</p>
      )}
    </div>
  );
}

export default App;
