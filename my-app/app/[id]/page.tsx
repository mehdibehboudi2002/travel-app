import CampPageClient from '@/components/MainSections/CampPage';
import { EVERY_CAMP } from '@/constants';

type CampType = {
  id: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
  countOfReviews: number;
  qualityOfReviews: string;
};

export async function generateStaticParams() {
  return EVERY_CAMP.map((camp) => ({
    id: camp.id.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function CampPage({ params }: { params: { id: string } }) {
  const selectedCamp: CampType | undefined = EVERY_CAMP.find(
    (camp) => camp.id.toLowerCase().replace(/\s+/g, '-') === params.id
  );

  return <CampPageClient selectedCamp={selectedCamp} />;
}
