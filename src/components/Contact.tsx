
import { Mail, Phone, Linkedin, Github, MapPin, Award } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Always excited to discuss data engineering, MLOps, and building scalable systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:piyush4porwal@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">piyush4porwal@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+917415845040"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91-7415845040</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/piyu5h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white group-hover:shadow-lg transition-shadow">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/piyu5h</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Open Source & Speaking</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <span>Apache Hudi: Fixed issue reading Merge-on-Read tables with timestamp types in v0.12.1</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <span>Speaker at Prestocon24 on "Data Infrastructure and Presto on Kubernetes"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Summary */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor of Computer Science Engineering</h4>
                  <p className="text-gray-600">IPS Academy, Indore</p>
                  <p className="text-gray-500 text-sm">2013-06 to 2017-04</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Lead Data Engineer with 8+ years of experience designing and implementing scalable, 
                cloud-native data platforms, real-time streaming pipelines, and MLOps solutions. 
                Expert in Apache Spark, Kafka, Airflow, dbt, and cloud ecosystems (AWS, GCP). 
                Proven track record in reducing infrastructure costs and leading cross-functional teams. 
                Open-source contributor and tech speaker passionate about building high-performance data systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
