import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

function AnimatedBackground() {
      const { scrollYProgress } = useScroll()
      const particlesY = useTransform(scrollYProgress, [0, 1], [0, -200])

    return (
        <motion.div className="absolute inset-0 z-0" style={{ y: particlesY }}>
          {[...Array(50)].map((_, i) => {
            // Use deterministic positioning based on index
            const left = (i * 37 + 23) % 100
            const top = (i * 43 + 17) % 100
            const duration = 3 + (i % 3)
            const delay = (i * 0.3) % 2
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-zinc-600 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay,
                }}
              />
            )
          })}
        </motion.div>
  )
}

export default AnimatedBackground

