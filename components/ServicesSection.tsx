"use client"

import { motion } from "framer-motion"
import { Wand2, Globe, Sparkles } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-zinc-800">
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
  )
}