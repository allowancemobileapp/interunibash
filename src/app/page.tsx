import { HeroSection } from '@/components/hero-section';
import { InfoSection } from '@/components/info-section';
import { LineupSection } from '@/components/lineup-section';
import { PromoSlider } from '@/components/promo-slider';
import { SplitSection } from '@/components/split-section';
import { FestivalTicketsSection } from '@/components/festival-tickets-section';
import { MerchSection } from '@/components/merch-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <InfoSection />
      </div>
      <SplitSection />
      <FestivalTicketsSection />
      <MerchSection />
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <PromoSlider />
        <LineupSection />
      </div>
    </>
  );
}
