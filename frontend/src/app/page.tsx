'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Dashboard from '@/components/Dashboard';
import HiddenStars from '@/components/HiddenStars';
import SDG from '@/components/SDG';
import Footer from '@/components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Dashboard />
        <HiddenStars />
        <SDG />
      </main>
      <Footer />
    </>
  );
}
