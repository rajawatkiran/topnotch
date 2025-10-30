import { motion } from 'motion/react';
import { useRef } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc2tldGNofGVufDF8fHx8MTc2MTc2MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Fashion design sketch"
  },
  {
    url: "https://images.unsplash.com/photo-1759405327498-9cdb5313d078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhYnJpYyUyMHJvbGxzfGVufDF8fHx8MTc2MTgwOTA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Colorful fabric rolls"
  },
  {
    url: "https://images.unsplash.com/photo-1759310232983-b6912ed350cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwdGV4dGlsZXxlbnwxfHx8fDE3NjE4MDkwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Sewing machine"
  }
];

export function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-center">Embark on Your Creative Journey with Top Notch</h2>
          
          <div className="space-y-6 text-gray-700">
            <p>
              At Top Notch Sourcing, we are more than just a service provider: we are your dedicated partner in bringing your fashion visions to life. From the initial spark of an idea to the final product, we offer comprehensive support at every stage of the production process, ensuring excellence and precision in every stitch.
            </p>
            
            <p>
              Whether you're a budding designer with an innovative concept, or an established brand looking to expand, our network of skilled artisans and state-of-the-art facilities are here to transform your ideas into tangible, high-quality products. With unwavering dedication to craftsmanship and a passion for innovation, we help you craft pieces that truly resonate with your audience and stand out in the market.
            </p>
          </div>
        </motion.div>

        {/* Scrollable Images */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
