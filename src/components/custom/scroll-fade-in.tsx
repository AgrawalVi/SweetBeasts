import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollFadeIn({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full flex justify-center flex-1 h-full"
        >
            {children}
        </motion.div>
    );
}