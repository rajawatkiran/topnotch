import { motion } from 'motion/react';
import { useState } from 'react';

const categories = [
  {
    title: "Clothing",
    image: "https://images.unsplash.com/photo-1653152722363-f4f84553e2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBtb2RlbHxlbnwxfHx8fDE3NjE3Mjk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1653307187366-2ec28f87715c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYWNjZXNzb3JpZXMlMjBmYXNoaW9ufGVufDF8fHx8MTc2MTgwOTA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Jewellery",
    image: "https://images.unsplash.com/photo-1761049293052-47731d0a304f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc2MTgwOTA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Home Furnishing",
    image: "https://images.unsplash.com/photo-1758974817671-24f627809115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybmlzaGluZyUyMGJlZGRpbmd8ZW58MXx8fHwxNzYxODA5MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="categories" className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Categories
        </motion.h2>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Title */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 0 }}
                animate={{ y: hoveredIndex === index ? -10 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white">{category.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[280px] h-[400px] rounded-lg overflow-hidden snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-white">{category.title}</h3>
              </div>
            </motion.div>
          ))}
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
