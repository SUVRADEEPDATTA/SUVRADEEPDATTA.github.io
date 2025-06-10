import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiPlay, 
  FiUsers, 
  FiTablet, 
  FiTrendingUp, 
  FiStar, 
  FiMail, 
  FiPhone,
  FiDownload,
  FiCheckCircle
} from "react-icons/fi";
import { 
  BiDna, 
  BiTestTube, 
  BiBook, 
  BiLaptop 
} from "react-icons/bi";

const BiologyTeacherLanding = () => {
  const [activeNote, setActiveNote] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessions: '1-on-1',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', sessions: '1-on-1', message: '' });
  };

  const sampleNotes = [
    {
      title: "DNA Structure & Replication",
      description: "Visual breakdown of double helix structure with step-by-step replication process",
      image: "https://images.pexels.com/photos/3656213/pexels-photo-3656213.jpeg"
    },
    {
      title: "Cellular Respiration Pathway",
      description: "Complete glycolysis, Krebs cycle, and electron transport chain visualization",
      image: "https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg"
    },
    {
      title: "Protein Synthesis",
      description: "From transcription to translation - molecular biology made simple",
      image: "https://images.pexels.com/photos/8533036/pexels-photo-8533036.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      grade: "Grade 12",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
      rating: 5,
      text: "Mr. X's iPad notes are absolutely amazing! I went from struggling with molecular biology to scoring 95% on my final exam. His digital teaching method makes complex concepts so easy to understand.",
      improvement: "Chemistry: 67% → 95%"
    },
    {
      name: "Marcus Johnson",
      grade: "Grade 11",
      image: "https://images.unsplash.com/photo-1589696709085-58e1b5e18338",
      rating: 5,
      text: "The way Mr. X explains DNA replication using his tablet and projector is incredible. I actually look forward to biology classes now! His notes are like having a personal textbook.",
      improvement: "Biology: 72% → 89%"
    },
    {
      name: "Emily Rodriguez",
      grade: "Grade 12",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
      rating: 5,
      text: "Best biology teacher ever! His group sessions are interactive and fun. The visualized notes help me remember everything for exams. Highly recommend to anyone struggling with molecular biology.",
      improvement: "Overall GPA: 3.2 → 3.8"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BiDna className="text-emerald-400 text-2xl" />
              <span className="text-white font-bold text-xl">Mr. X Biology</span>
            </motion.div>
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#notes" className="text-white/80 hover:text-white transition-colors">Sample Notes</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1719163534402-ba86dcb55228')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Master
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Molecular Biology{" "}
              </span>
              with Digital Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Experience revolutionary biology education with iPad-powered visualized notes, 
              projector-enhanced lessons, and personalized teaching from 1-on-1 to small groups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your First Class Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
                onClick={() => document.getElementById('notes').scrollIntoView({ behavior: 'smooth' })}
              >
                <FiPlay className="text-emerald-400" />
                <span>View Sample Notes</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-emerald-400 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BiDna size={60} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 text-cyan-400 opacity-20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BiMicroscope size={50} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Teaching Approach
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Combining cutting-edge digital technology with personalized attention 
              to make molecular biology accessible and engaging for high school students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiTablet,
                title: "iPad-Powered Notes",
                description: "Hand-written digital notes with instant sharing and crystal-clear diagrams"
              },
              {
                icon: BiLaptop,
                title: "Projector Enhanced",
                description: "Large-screen visualization for immersive learning experiences"
              },
              {
                icon: FiUsers,
                title: "Flexible Learning",
                description: "1-on-1 to 1:7 group sessions tailored to your learning style"
              },
              {
                icon: FiTrendingUp,
                title: "Proven Results",
                description: "Average grade improvement of 23% within the first semester"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-emerald-400 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-200 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Notes Showcase */}
      <section id="notes" className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sample Visualized Notes
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Experience the clarity and detail of our iPad-created study materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sampleNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={note.image} 
                    alt={note.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{note.title}</h3>
                  <p className="text-blue-200 mb-4">{note.description}</p>
                  <button className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                    <FiDownload />
                    <span>Download Sample</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Meet Mr. X
              </h2>
              <div className="space-y-6 text-blue-200 text-lg leading-relaxed">
                <p>
                  Specialist in Molecular Biology with over 8 years of experience helping 
                  high school students excel in their studies. My passion lies in making 
                  complex biological concepts accessible through innovative digital teaching methods.
                </p>
                <p>
                  I believe that every student learns differently, which is why I've developed 
                  a unique approach combining traditional biology knowledge with cutting-edge 
                  iPad technology and projector-enhanced visualizations.
                </p>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-white font-bold mb-4">Teaching Philosophy</h3>
                  <p className="text-blue-200">
                    "Visual learning combined with personalized attention creates lasting understanding. 
                    My goal is not just to help you pass exams, but to ignite a genuine curiosity 
                    for the molecular world around us."
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg" 
                  alt="Mr. X - Biology Teacher"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
              </div>
              
              {/* Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 left-8 right-8 bg-white/15 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h4 className="text-white font-bold mb-3">Credentials</h4>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>M.Sc. Molecular Biology</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>8+ Years Teaching Experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>200+ Students Taught Successfully</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Real results from real students who transformed their biology grades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-purple-300">{testimonial.grade}</p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-purple-200 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-400/30">
                  <p className="text-emerald-300 font-semibold text-center">
                    {testimonial.improvement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Biology Journey
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Choose the learning format that works best for you
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Pricing Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-400/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">1-on-1 Sessions</h3>
                  <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-4">$75<span className="text-lg text-blue-200">/hour</span></div>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>Personalized iPad notes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>Projector-enhanced lessons</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>Customized study materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>24/7 question support</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Small Group (2-7 students)</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$35<span className="text-lg text-blue-200">/hour per student</span></div>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-cyan-400" />
                    <span>Interactive group learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-cyan-400" />
                    <span>Shared iPad note sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-cyan-400" />
                    <span>Peer learning benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FiCheckCircle className="text-cyan-400" />
                    <span>Group study materials</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Book Your First Session</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-blue-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Preferred Session Type</label>
                  <select
                    name="sessions"
                    value={formData.sessions}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none transition-colors"
                  >
                    <option value="1-on-1">1-on-1 Sessions ($75/hour)</option>
                    <option value="small-group">Small Group ($35/hour per student)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your biology learning goals..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  Book Your Session Now
                </motion.button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center space-x-6">
                  <a href="mailto:example@email.com" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                    <FiMail />
                    <span>example@email.com</span>
                  </a>
                  <a href="tel:+1555123456" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                    <FiPhone />
                    <span>(555) 123-4567</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <BiDna className="text-emerald-400 text-3xl" />
              <span className="text-white font-bold text-2xl">Mr. X Biology</span>
            </div>
            <p className="text-blue-300 mb-8 max-w-2xl mx-auto">
              Transforming biology education through innovative digital teaching methods. 
              Making molecular biology accessible, engaging, and effective for high school students.
            </p>
            <div className="flex justify-center space-x-8 text-blue-300">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#notes" className="hover:text-white transition-colors">Sample Notes</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-blue-400">
                © 2025 Mr. X Biology. All rights reserved. | Empowering students through digital biology education.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BiologyTeacherLanding;