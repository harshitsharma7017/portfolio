"use client";
import { motion } from "framer-motion";
import { useState, useCallback, memo, useMemo } from "react";

// Optimized validation with early returns
const validateForm = (formData) => {
  const errors = {};
  const { name, email, message } = formData;
  
  // Name validation
  const trimmedName = name.trim();
  if (!trimmedName) errors.name = "Name is required";
  else if (trimmedName.length < 2) errors.name = "Name must be at least 2 characters";
  
  // Email validation
  const trimmedEmail = email.trim();
  if (!trimmedEmail) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errors.email = "Invalid email";
  
  // Message validation
  const trimmedMessage = message.trim();
  if (!trimmedMessage) errors.message = "Message is required";
  else if (trimmedMessage.length < 10) errors.message = "Message too short (min 10 chars)";
  
  return errors;
};

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

// Optimized form input with reduced re-renders
const FormInput = memo(({ 
  label, 
  id, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  error, 
  isTextarea = false
}) => {
  const inputClasses = useMemo(() => 
    `w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-white placeholder-slate-400 ${
      error 
        ? 'border-red-500 focus:ring-red-500/50' 
        : 'border-slate-600 focus:ring-emerald-500 focus:border-emerald-500'
    }`, [error]);

  return (
    <motion.div variants={itemVariants}>
      <label htmlFor={id} className="block text-slate-300 mb-2 font-medium">
        {label}<span className="text-red-400 ml-1">*</span>
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && (
        <motion.p 
          className="text-red-400 text-sm mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
});

FormInput.displayName = 'FormInput';

// Simplified contact item
const ContactItem = memo(({ href, icon, label, delay = 0 }) => (
  <motion.a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex items-center space-x-3 text-slate-300 hover:text-emerald-400 transition-colors group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    whileHover={{ x: 4 }}
  >
    <div className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
      {icon}
    </div>
    <span>{label}</span>
  </motion.a>
));

ContactItem.displayName = 'ContactItem';

// Optimized background with fewer elements
const BackgroundElements = memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
    {/* Reduced particles from 20 to 8 for better performance */}
    {Array.from({ length: 8 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
        style={{
          left: `${20 + (i * 10)}%`,
          top: `${10 + (i * 8)}%`,
        }}
        animate={{
          y: [-5, -15, -5],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2 + (i * 0.3),
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

// Optimized success message
const SuccessMessage = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-6"
  >
    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">Message Sent!</h3>
    <p className="text-slate-300 text-sm">I&apos;ll get back to you soon!</p>
  </motion.div>
));

SuccessMessage.displayName = 'SuccessMessage';

// Optimized icons as components to avoid inline SVGs
const EmailIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Main optimized component
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Optimized input handler with single state update
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Optimized submit handler
  const handleSubmit = useCallback(async () => {
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto-reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  }, [formData]);

  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  }, []);

  // Memoized contact items to prevent re-renders
  const contactItems = useMemo(() => [
    { href: "mailto:harshit.sharma8532@gmail.com", icon: <EmailIcon />, label: "harshit.sharma8532@gmail.com", delay: 0.1 },
    { href: "tel:+91 7017855982", icon: <PhoneIcon />, label: "+91 7017855982", delay: 0.15 },
    { href: null, icon: <LocationIcon />, label: "Shamli, UP", delay: 0.2 },
    { href: "https://linkedin.com/in/harshit-sharma-462a762b5", icon: <LinkedInIcon />, label: "LinkedIn", delay: 0.25 }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <BackgroundElements />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Simplified header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">
              Get In <span className="text-emerald-400">Touch</span>
            </h1>
            <p className="text-slate-300 max-w-xl mx-auto">
              Have a project in mind? Let&apos;s collaborate and bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Optimized contact info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                <div className="space-y-3">
                  {contactItems.map((item, index) => (
                    <ContactItem key={index} {...item} />
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm p-5 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Let&apos;s Collaborate</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I&apos;m always excited to work on new projects. Whether you have a specific 
                  project in mind or just want to chat, I&apos;d love to hear from you.
                </p>
              </div>
            </motion.div>

            {/* Optimized form */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50"
            >
              {isSubmitted ? (
                <div>
                  <SuccessMessage />
                  <button
                    onClick={resetForm}
                    className="w-full mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <FormInput
                    label="Name"
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                  />

                  <FormInput
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />

                  <FormInput
                    label="Message"
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    isTextarea={true}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}