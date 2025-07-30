"use client"

import { motion } from "framer-motion"

export default function PhilosophySection() {
  return (
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
  )
}
