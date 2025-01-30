import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('component mounted');

    return () => {
      console.log('component unmounted');
    };
    
  }, []);
  return (
    <>
      <h1 className="capitalize font-bold"> this is awesome</h1>
    </>
  );
}

export default App;
