import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isAngularScriptLoaded, setIsAngularScriptLoaded] = useState(false);
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
    const angularScript = document.createElement('script');
    angularScript.src = 'http://localhost:3002/main-BU4IDBYS.js'; 
    angularScript.async = true;
  
    angularScript.onload = () => {
      setIsAngularScriptLoaded(true);
    };
  
    angularScript.onerror = (e) => {
      console.error('Error loading Angular web component:', e);
    };
  
    document.body.appendChild(angularScript);
    console.log(angularScript)
  
    return () => {
      document.body.removeChild(angularScript);
    };
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
        console.error('Error loading React web component:', e);
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

      {isAngularScriptLoaded ? (
        <shop-info></shop-info> 
      ) : (
        <p>Loading Shop Info...</p>
      )}
    </div>
  );
}

export default App;
