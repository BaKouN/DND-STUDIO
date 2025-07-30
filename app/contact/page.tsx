"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { socials } from "@/lib/constants"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="text-2xl font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="bg-zinc-50 text-zinc-900 px-3 py-1 rounded-lg">D</span>
              </motion.div>
            </Link>

            {/* Back to home */}
            <Link href="/">
              <motion.div
                className="flex items-center space-x-2 text-zinc-300 hover:text-zinc-50 transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft size={20} />
                <span>Retour à l'accueil</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Prêt à transformer votre vision en réalité ? Rejoignez notre guilde et commençons ensemble votre prochaine aventure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-zinc-50 text-2xl">Démarrer une quête</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Partagez-nous les détails de votre projet et nous vous recontacterons rapidement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                          Nom complet
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-600 text-zinc-50 placeholder-zinc-500 focus:border-zinc-400"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-600 text-zinc-50 placeholder-zinc-500 focus:border-zinc-400"
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-zinc-900 border-zinc-600 text-zinc-50 placeholder-zinc-500 focus:border-zinc-400"
                        placeholder="Quel type de projet avez-vous en tête ?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="bg-zinc-900 border-zinc-600 text-zinc-50 placeholder-zinc-500 focus:border-zinc-400"
                        placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-zinc-50 hover:bg-zinc-200 text-zinc-900 font-semibold py-6 text-lg"
                    >
                      <Send className="mr-2" size={20} />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Contact Details */}
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-zinc-50 text-2xl">Informations de contact</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Plusieurs moyens de nous joindre pour votre convenance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-zinc-700 p-3 rounded-lg">
                      <Mail className="text-zinc-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-50">Email</h3>
                      <p className="text-zinc-400">haroun.bakhouche.hb@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-zinc-700 p-3 rounded-lg">
                      <Phone className="text-zinc-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-50">Téléphone</h3>
                      <p className="text-zinc-400">+33 6 01 20 20 66</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-zinc-700 p-3 rounded-lg">
                      <MapPin className="text-zinc-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-50">Localisation</h3>
                      <p className="text-zinc-400">Paris, France</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-zinc-50 text-2xl">Suivez nos aventures</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Restez connecté avec nos dernières créations et actualités.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socials.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-zinc-50 px-6 py-3 rounded-lg transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <motion.div
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-zinc-50 mb-2">Temps de réponse</h3>
                <p className="text-zinc-400">
                  Nous nous engageons à répondre à tous les messages dans les <span className="text-zinc-50 font-semibold">24 heures</span>. 
                  Pour les projets urgents, n'hésitez pas à nous appeler directement.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4">
              <span className="bg-zinc-50 text-zinc-900 px-3 py-1 rounded-lg">D</span>
              <span className="ml-2">nD Studio</span>
            </div>
            <p className="text-zinc-400 mb-4">Créateurs d'expériences légendaires entre digital et physique.</p>
            <p className="text-zinc-500">&copy; 2025 DnD Studio. Tous droits réservés.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}