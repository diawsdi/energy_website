'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import WhyUs from './components/WhyUs';
import Solutions from './components/Solutions';
import Technology from './components/Technology';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Transformation />
      <WhyUs />
      <Solutions />
      <Technology />
      <HowItWorks />
      <UseCases />
      <Contact />
      <Footer />
    </main>
  );
} 