
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import Compare from './Pages/Compare';
import { makeStyles } from '@material-ui/core';
import Alert from './Components/Alert'
const useStyles = makeStyles(()=>({
  App:{
    background:"#14161a",
    color:"white",
    minHeight:"100vh",
  },
}));


function App() {

 
  const classes = useStyles();

  return (
    <BrowserRouter>
   
    <div className={classes.App}>
     <Header/>
    <Routes>
     
      <Route path="/" element={<HomePage/>} exact/>
      <Route path="/coins/:id" element={<CoinPage/>} />
      <Route path="/compare" element={<Compare/>} />


      </Routes>
      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
