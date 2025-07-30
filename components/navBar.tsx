'use client'

import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handler pour Grimoire
  const handleGrimoireClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      const section = document.getElementById("services")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/#services")
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-zinc-900/80 backdrop-blur-md shadow-sm`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="bg-zinc-50 text-zinc-900 px-3 py-1 rounded-lg">D</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-zinc-300 hover:text-zinc-50 transition-colors"
              onClick={handleGrimoireClick}
            >
              Grimoire
            </a>
            <Link
              href="/contact"
              className="text-zinc-300 hover:text-zinc-50 transition-colors"
            >
              <motion.span
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Contact
              </motion.span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden text-zinc-50 pr-6" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-zinc-900/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#services"
              className="block text-zinc-300 hover:text-zinc-50 transition-colors"
              onClick={handleGrimoireClick}
            >
              Grimoire
            </a>
            <Link
              href="/contact"
              className="block text-zinc-300 hover:text-zinc-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default NavBar