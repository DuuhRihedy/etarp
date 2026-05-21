import React from 'react';
import Hero from '../components/sections/Hero';
import KpiBar from '../components/sections/KpiBar';
import UnitsGrid from '../components/sections/UnitsGrid';
import SegmentsTabs from '../components/sections/SegmentsTabs';
import DifferentialsGrid from '../components/sections/DifferentialsGrid';
import Partners from '../components/sections/Partners';
import CtaBlock from '../components/sections/CtaBlock';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <KpiBar />
      <UnitsGrid />
      <SegmentsTabs />
      <DifferentialsGrid />
      <Partners />
      <CtaBlock />
    </div>
  );
}
