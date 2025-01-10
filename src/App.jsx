import React from 'react';
import { Hero } from "@/pages/Hero";
import { About } from "@/pages/About";
import { Portfolio } from "@/pages/Portfolio";
import Certification from '@/components/Certification';
import { Stack } from "@/pages/Stack";
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Certification />
      <Portfolio />
      <Footer />
    </div>
  );
};


export default App;
