import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const clients = [
  { name: "Myntra", color: "#F43397" },
  { name: "SHEIN", color: "#000000" },
  { name: "R&B", color: "#2E5CFF" },
  { name: "ALE COLLECTION", color: "#8B4513" },
  { name: "MYNTRA", color: "#F43397" },
  { name: "HOUSE OF INDIGO", color: "#4B0082" },
  { name: "STUDIO REFINERY FORGE", color: "#2C3E50" }
];

export function Clients() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % (clients.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h2>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 items-center"
            style={{
              transform: `translateX(${offset}px)`,
              transition: 'transform 0.05s linear'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-md p-6 min-w-[180px] h-[100px]"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="text-center"
                  style={{ color: client.color }}
                >
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
