"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles, Wand2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socials } from "@/lib/constants"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import PhilosophySection from "@/components/PhilosophySection"


export default function DnDStudioLanding() {

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50">

      <Hero />

      <ServicesSection />

      <PhilosophySection />

      {/* Footer removed from here */}
    </div>
  )
}