"use client"

import { motion } from "framer-motion"
import { socials } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-50 py-12">
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
  )
}
