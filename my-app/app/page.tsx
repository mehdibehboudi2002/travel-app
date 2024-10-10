"use client";
import Camp from "@/components/MainSections/Camp";
import Features from "@/components/MainSections/Features";
import Hero from "@/components/MainSections/Hero";
import Guide from "@/components/MainSections/Guide";
import GetApp from "@/components/MainSections/GetApp";

export default function Home() {

  return (
    <>
      <Hero isCampDetailsPage={false} hasDescription={true} description="We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
            Whether you're climbing mountains, crossing rivers, or exploring hidden trails, our app is designed to provide you with the tools you need.
            With our advanced offline maps and real-time navigation features, you can explore safely and confidently, no matter where your adventure takes you.
            Each trip is an opportunity to discover new landscapes and challenge your boundaries, and we're here to make sure you're always prepared.
            Join us on a journey where every step brings new memories, and every destination leaves a lasting impression.
            Let Hilink be your companion as you explore the untamed beauty of the world, wherever your passion for adventure takes you." hasButton={true}/>
      <Camp isCampDetailsPage={false}/>
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
