import React from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-container"
      id='reviews'
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-palanquin text-center text-4xl font-bold"
      >
        What Our
        <span className="text-indigo-600"> Customers </span>
        Say?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="info-text m-auto mt-4 max-w-lg text-center"
      >
        Voices of Delight: Customer Reviews That Speak Volumes
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.customerName}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ReviewCard
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CustomerReviews;
