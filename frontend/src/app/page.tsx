'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Dashboard from '@/components/Dashboard';
import HiddenStars from '@/components/HiddenStars';
import SDG from '@/components/SDG';
import Footer from '@/components/Footer';

export default function Home() {
  // TODO: Improve candidate evaluation UI to better highlight context-aware scoring
  const [compareMode, setCompareMode] = useState(false);

  const [studentA, setStudentA] = useState({ score: "", schoolType: "", income: "" });
  const [studentB, setStudentB] = useState({ score: "", schoolType: "", income: "" });

  const [resultA, setResultA] = useState(null);
  const [resultB, setResultB] = useState(null);
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