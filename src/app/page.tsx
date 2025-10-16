import { HeroSection } from '@/components/hero-section';
import { InfoSection } from '@/components/info-section';
import { HighlightsSection } from '@/components/highlights-section';
import { LineupSection } from '@/components/lineup-section';
import { PromoSlider } from '@/components/promo-slider';
import { TicketsSection } from '@/components/tickets-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <InfoSection />
      <PromoSlider />
      <HighlightsSection />
      <LineupSection />
      <TicketsSection />
    </div>
  );
}
