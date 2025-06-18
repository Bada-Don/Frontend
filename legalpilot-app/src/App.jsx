import React, { Suspense, lazy } from 'react';

// Lazy load components for better initial load time
const Navbar = lazy(() => import('./components/layout/Navbar'));
const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const TrustIndicatorsSection = lazy(() => import('./components/sections/TrustIndicatorsSection'));
const FeaturesSection = lazy(() => import('./components/sections/FeaturesSection'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));
const PricingSection = lazy(() => import('./components/sections/PricingSection'));
const CtaSection = lazy(() => import('./components/sections/CtaSection'));
const Footer = lazy(() => import('./components/layout/Footer'));
const ScrollToTopButton = lazy(() => import('./components/common/ScrollToTopButton'));

function App() {
  // Basic loading fallback for Suspense
  const LoadingFallback = () => (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl text-text-primary">Loading LegalPilot...</p>
    </div>
  );

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <main>
          <HeroSection />
          <TrustIndicatorsSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <CtaSection />
        </main>
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </>
  );
}

export default App;