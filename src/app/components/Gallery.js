"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "https://source.unsplash.com/random/600x500?nature",
  "https://source.unsplash.com/random/400x400?tech",
  "https://source.unsplash.com/random/500x700?city",
  "https://source.unsplash.com/random/400x500?abstract",
  "https://source.unsplash.com/random/700x500?landscape",
  "https://source.unsplash.com/random/500x500?design",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-gray-950 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
          My Work
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          A collection of projects and designs I have worked on.
        </p>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => {
            const gridSpan =
              index % 6 === 0
                ? "md:col-span-2 md:row-span-2" // Large image
                : index % 6 === 1 || index % 6 === 2
                ? "md:col-span-1 md:row-span-1" // Medium images
                : "md:col-span-1 md:row-span-2"; // Tall image

            return (
              <motion.div
                key={index}
                className={`relative cursor-pointer overflow-hidden rounded-xl group ${gridSpan}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">View</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-gray-900 p-4 rounded-lg shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded view"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <button
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-700 transition"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
