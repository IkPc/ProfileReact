import './App.css';
import withPermission from './components/withPermission';
import Homepage from './pages/homepage';

function App() {
  const ProtectedSettings = withPermission(Homepage);
  
  return (
    <body className='App'>
      <ProtectedSettings hasPermission={true} />
    </body>
  );
}

export default App;
