import { HeroSection } from '@/components/hero-section';
import { InfoSection } from '@/components/info-section';
import { LineupSection } from '@/components/lineup-section';
import { PromoSlider } from '@/components/promo-slider';
import { SplitSection } from '@/components/split-section';
import { FestivalTicketsSection } from '@/components/festival-tickets-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <InfoSection />
      <SplitSection />
      <FestivalTicketsSection />
      <PromoSlider />
      <LineupSection />
    </div>
  );
}
