"use client";
import Camp from "@/components/MainSections/Camp";
import Features from "@/components/MainSections/Features";
import Hero from "@/components/MainSections/Hero";
import Guide from "@/components/MainSections/Guide";
import GetApp from "@/components/MainSections/GetApp";
import ScrollUp from "@/components/ScrollToSomeWhere/ScrollUp";

export default function Home() {

  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <ScrollUp/>
    </>
  );
}
