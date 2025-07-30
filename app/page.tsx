"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles, Wand2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socials } from "@/lib/constants"
import Hero from "@/components/Hero"


export default function DnDStudioLanding() {

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50">

      <Hero />

      {/* Services Section */}
      <section id="grimoire" className="py-20 bg-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre Grimoire de Services</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Trois disciplines maîtrisées pour créer des expériences inoubliables
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wand2 size={40} />,
                title: "Création Web Créative",
                description:
                  "Des sites web qui racontent votre histoire et captivent vos utilisateurs avec des expériences uniques et mémorables.",
              },
              {
                icon: <Globe size={40} />,
                title: "Campagnes Transmedia",
                description:
                  "Nous créons des ponts entre le digital et le physique pour des campagnes qui marquent les esprits.",
              },
              {
                icon: <Sparkles size={40} />,
                title: "Transformation de Marque",
                description:
                  "Nous aidons les marques digital native à conquérir le monde physique avec audace et créativité.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                viewport={{ once: true }}
              >
                <motion.div className="text-zinc-300 mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-zinc-900 text-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Notre Philosophie</h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Dans un monde où le digital domine, nous croyons en la magie de la connexion humaine.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Comme des maîtres du jeu, nous orchestrons des expériences qui transcendent les écrans pour toucher le
                cœur et l'âme de vos audiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-zinc-400"
              >
                Chaque projet est une nouvelle aventure, chaque marque une quête unique vers l'extraordinaire.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold mb-4">
                <span className="bg-zinc-50 text-zinc-900 px-3 py-1 rounded-lg">D</span>
                <span className="ml-2">nD Studio</span>
              </div>
              <p className="text-zinc-400">Créateurs d'expériences légendaires entre digital et physique.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">Rejoindre la Guilde</h4>
              <div className="space-y-2 text-zinc-400">
                <p>haroun.bakhouche.hb@gmail.com</p>
                <p>+33 6 01 20 20 66</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">Suivez nos Aventures</h4>
              <div className="flex space-x-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    className="text-zinc-400 hover:text-zinc-50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-zinc-600 mt-8 pt-8 text-center text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 DnD Studio. Tous droits réservés.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}