import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SpeedDialSimple from '@/components/SpeedDialSimple';

// Lazy load components for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div></div>
});

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'));
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const WorkingProcessSection = dynamic(() => import('@/components/WorkingProcessSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navigation />
      <main className="min-h-screen w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <WorkingProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <SpeedDialSimple />
    </div>
  );
}
