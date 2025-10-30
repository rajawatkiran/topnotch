import image_9090fd656e9ccaf5e4002825a683a0f53a3d8fc1 from 'figma:asset/9090fd656e9ccaf5e4002825a683a0f53a3d8fc1.png';
import { motion } from 'motion/react';
import { Palette, Users, Lightbulb, TrendingUp } from 'lucide-react';
import aboutUsImage from 'figma:asset/6992964cb96acd17dd1e7855ee3f5408eb3b22ba.png';

const designCards = [
  {
    title: "Unleashing Creativity",
    description: "Our talented designers are the heartbeat of TOP NOTCH. They don't just follow trends; they set them. Each product is infused with passion for fashion; they breathe the new every garment. Their innate ability to blend innovation with tradition results in designs that are unique yet full of depth for unique art captivating apparel.",
    icon: Palette,
    hoverType: 'rotate'
  },
  {
    title: "Strategic Collaboration with Factories",
    description: "Understanding the value of TOP NOTCH, we partner with established and credible factories, blending creativity with technical expertise to turn ideas into high-quality production ready garments. Each collaboration reflects our commitment to exceptional design and craftsmanship.",
    icon: Users,
    hoverType: 'fillLeft'
  },
  {
    title: "Forward-Thinking Forecasting",
    description: "At TOP NOTCH, we don't just respond to trends; we anticipate them. Our team stays ahead by forecasting consumer preferences and industry shifts, we create designs that capture the moment and inspire tomorrow's desires.",
    icon: TrendingUp,
    hoverType: 'float'
  },
  {
    title: "Tailor-Made Solutions",
    description: "At TOP NOTCH, we recognize that established brands have their own identity. Our expertise in creating collaborative designs allows us to honor and enhance that identity, strengthening branding and consumer loyalty.",
    icon: Lightbulb,
    hoverType: 'scale'
  }
];

export function AboutUsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* About Us Section */}
      <section id="about-intro" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={image_9090fd656e9ccaf5e4002825a683a0f53a3d8fc1}
                alt="Designer at work"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-gray-900">About Us</h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to Top Notch, where innovation meets excellence in apparel & accessories sourcing!
                </p>
                <p>
                  We are delighted to have you here as we embark on a journey of redefining the standards of the fashion sourcing landscape.
                </p>
                <p>
                  At Top Notch, we take pride in being more than just a sourcing agency; we are architects of fashion, weaving creativity and precision into every thread. Established with a passion for design and a commitment to quality, our agency is poised to be your dedicated partner in crafting remarkable women's wear, men's wear, kids wear & home furnishing collections.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-md"
            >
              <h2 className="mb-6 text-gray-900">Our Vision</h2>
              <p className="text-gray-700">
                "To be a global leader in sustainable and innovative fashion sourcing — empowering brands to create exceptional products through creativity, quality, and ethical excellence."
              </p>
            </motion.div>

            {/* Right: Globe Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1722163331639-3e8c72f6e94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZ2xvYmUlMjBuZXR3b3JrfGVufDF8fHx8MTc2MTgwODM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Global vision"
                className="rounded-2xl shadow-lg w-full h-auto max-w-sm mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Team Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZGlzY3Vzc2lvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzQwNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team discussion"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-md order-1 md:order-2"
            >
              <h2 className="mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-700">
                At Top Notch, our mission is simple but profound: to be the driving force behind the evolution of fashion world. We're committed to providing not just garments, but experiences that speak to the heart. Our goal with precision intertwine to redefine the very essence of style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Development Section */}
      <section id="design-development" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="mb-16 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Design Development
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {designCards.map((card, index) => {
              const Icon = card.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative p-8 rounded-2xl shadow-md overflow-hidden group cursor-pointer ${
                    index % 2 === 0 ? 'bg-rose-50' : 'bg-purple-50'
                  }`}
                >
                  {/* Card 1: Rotate + Shadow */}
                  {card.hoverType === 'rotate' && (
                    <motion.div
                      whileHover={{ rotate: 2, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-rose-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-gray-900 flex-1">{card.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                    </motion.div>
                  )}

                  {/* Card 2: Fill from Left */}
                  {card.hoverType === 'fillLeft' && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-rose-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-purple-600 rounded-lg transition-all duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-gray-900 group-hover:text-white transition-colors duration-300 flex-1">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Card 3: Float + Border Glow */}
                  {card.hoverType === 'float' && (
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="h-full border-2 border-transparent group-hover:border-rose-400 group-hover:shadow-xl transition-all duration-300 rounded-2xl p-6 -m-6"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-rose-600 rounded-lg transition-all duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-gray-900 flex-1">{card.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                    </motion.div>
                  )}

                  {/* Card 4: Scale + Icon Fade */}
                  {card.hoverType === 'scale' && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="p-3 bg-purple-600 rounded-lg"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-gray-900 flex-1">{card.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                      
                      {/* Small illustration fade-in */}
                      <motion.div
                        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-purple-700" />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
