import React from 'react';
import PopularProductCard from '../components/PopularProductCard';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { products } from '../constants';

const PopularProducts = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id='products'
      className='max-container max-sm:mt-12'
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex flex-col justify-start gap-5'
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-4xl font-palanquin font-bold'
        >
          Explore our <span className='text-indigo-600'>Popular</span> Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'
        >
          Immerse yourself in the world of style and comfort with Vans. Our popular products go
          beyond mere footwear and accessories – they're a canvas for self-expression, seamlessly
          merging street culture with innovative design for a one-of-a-kind lifestyle experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'
        >
          Ready for a unique visual journey? Try our cutting-edge 3D animation on the popular
          product cards below. Click, drag, and discover the extraordinary blend of style and
          technology.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'
        style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
      >
        {products.map((product) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onClick={handleReset}
        className='mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300'
      >
        Reset Animation
      </motion.button>
    </motion.section>
  );
};

export default PopularProducts;
