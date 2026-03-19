import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { ExchangesReturns } from './pages/ExchangesReturns';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-brand-brown selection:bg-brand-sand selection:text-brand-brown">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/trocas-devolucoes" element={<ExchangesReturns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
