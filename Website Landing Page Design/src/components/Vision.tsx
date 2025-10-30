import { motion } from 'motion/react';

export function Vision() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8">"Where Vision Meets Craftsmanship"</h2>
          
          <p className="text-gray-700">
            Every great product starts with a vision. At Top Notch Sourcing, we are your creative partners—blending innovation, precision, and passion in every stitch. From women's wear and men's wear to kids' wear and accessories, we bring your ideas to life with unmatched quality and attention to detail. Elevate your brand. Redefine your style. Choose Top Notch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
