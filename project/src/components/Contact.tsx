import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2195kno",   // 🔹 replace with your EmailJS Service ID
        "template_4no7p5v",  // 🔹 replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "ToVdg2l0YMtwGj9li"    // 🔹 replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("Oops! Something went wrong.");
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "astha2333@gmail.com",
      link: "mailto:astha2333@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "9852403024",
      link: "tel:+919852403024"
    },
    {
     icon: MapPin,
      title: "Location",
      details: "Chapra, Bihar",
      link: "https://www.google.com/maps/place/Chhapra,+Bihar"
    }

  ];

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Start a Conversation
            </h3>

           <div className="space-y-6">
  {contactInfo.map((item, index) => (
    <a
      key={index}
      href={item.link}
      onClick={(e) => {
        // Only apply fallback for Email
        if (item.title === "Email") {
          e.preventDefault();
          // Try opening Gmail first
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${item.details}`, "_blank");
          // Fallback to default mail client after short delay
          setTimeout(() => {
            window.location.href = `mailto:${item.details}`;
          }, 500);
        }
      }}
      className={`flex items-center p-4 rounded-xl transition-all hover:scale-105 ${
        darkMode
          ? 'bg-gray-900 text-gray-300 hover:bg-gray-700'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      } shadow-md hover:shadow-lg`}
    >
      <div className={`p-3 rounded-lg mr-4 ${
        darkMode
          ? 'bg-blue-600 text-white'
          : 'bg-blue-100 text-blue-600'
      }`}>
        <item.icon size={24} />
      </div>
      <div>
        <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {item.title}
        </h4>
        <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
          {item.details}
        </p>
      </div>
    </a>
  ))}
</div>


          <div className="mt-8">
  <p
    className={`mb-4 ${
      darkMode ? 'text-gray-300' : 'text-gray-700'
    }`}
  >
    Or find me on social media:
  </p>

  <div className="flex space-x-4">
    {[
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/astha-61b27a257/' },
      { name: 'Twitter', url: 'https://twitter.com/YOUR_TWITTER_HANDLE' },
      { name: 'GitHub', url: 'https://github.com/ShrivastavaAstha' },
    ].map((platform, index) => (
      <a
        key={index}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
          darkMode
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {platform.name}
      </a>
    ))}
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl shadow-lg ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Let's work together!"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
