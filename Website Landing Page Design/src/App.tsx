import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutUsPage } from './components/AboutUsPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen">
      <Navbar activePage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' ? <HomePage /> : <AboutUsPage />}
      
      <Footer />
    </div>
  );
}
