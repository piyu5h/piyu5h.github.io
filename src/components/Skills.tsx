
import { useState, useEffect, useRef } from 'react';
import { Database, Cloud, Code, Cpu, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Data Processing",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Apache Spark", level: 95 },
        { name: "Hadoop", level: 85 },
        { name: "PrestoDB", level: 80 },
        { name: "dbt", level: 90 },
        { name: "pandas", level: 88 }
      ]
    },
    {
      title: "Streaming",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Kafka", level: 92 },
        { name: "Spark Streaming", level: 90 },
        { name: "Kafka Connect", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "HBase", level: 75 },
        { name: "ChromaDB", level: 70 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "AWS", level: 88 },
        { name: "GCP", level: 82 },
        { name: "Kubernetes", level: 78 }
      ]
    },
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 88 },
        { name: "SQL", level: 92 },
        { name: "SpringBoot", level: 85 },
        { name: "FastAPI", level: 80 }
      ]
    },
    {
      title: "MLOps & Orchestration",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "Airflow", level: 90 },
        { name: "Argo", level: 75 },
        { name: "Feast Feature Store", level: 85 },
        { name: "Vertex AI", level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern data platforms and ML systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Apache Hudi", "Delta Lake", "bigquery", "vertica", "Hive",
              "helm", "jenkins", "bitbucket pipeline", "great-expectations"
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-3 text-center text-gray-300 hover:bg-white/20 transition-colors cursor-default"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
