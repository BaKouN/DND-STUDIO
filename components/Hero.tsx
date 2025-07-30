'use client'

import React from "react"
import AnimatedBackground from "./AnimatedBackground"
import { Button } from "@/components/ui/button"

export default function Hero() {
    console.log("Hero mounted")
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <section className="py-24 text-center">
            <AnimatedBackground />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                D&D Studio<br />
                <span className="text-zinc-400 text-2xl md:text-3xl font-normal block mt-4">
                Nous transformons les marques en mondes vivants.
                </span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
                De la gamification à l’expérience transmedia, nous imaginons des aventures digitales qui marquent les esprits.
            </p>
            <Button
                size="lg" 
                className="bg-zinc-50 hover:bg-zinc-200 text-zinc-900 px-8 py-3 text-lg"
                onClick={() => {
                    const section = document.getElementById("philosophy")
                    console.log(section)
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" })
                    }
                }}
            >
                Commencer l’aventure
            </Button>
        </section>
    </section>
  )
}