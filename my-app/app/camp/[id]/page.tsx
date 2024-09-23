"use client";
import { useParams } from 'next/navigation';
import { EVERY_MAP } from '@/constants';

export default function CampPage() {
  const { campId } = useParams();

  const camp = EVERY_MAP.find(camp => camp.id.toLowerCase().replace(/\s+/g, '-') === campId);

  return <>
    {
      EVERY_MAP.map((item)=>(
        <p>
          {item.title}
        </p>
      ))
    }
  </>
}
