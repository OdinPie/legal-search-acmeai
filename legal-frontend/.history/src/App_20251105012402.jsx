import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate resource loading (like API, components, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return  <button className="btn">Default</button>
}

export default App
