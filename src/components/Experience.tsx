
import { useState } from 'react';
import { Calendar, MapPin, ChevronRight, Code, Database, Cloud } from 'lucide-react';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experiences = [
    {
      company: "Apnatime Tech",
      role: "Lead Data Engineer",
      period: "2022-05 to Present",
      location: "Remote",
      achievements: [
        "Led end-to-end architecture of data platform supporting 100+ data analysts, software engineers and data scientists",
        "Architected and deployed an event ingestion platform handling 10B+ events daily, leveraging Spring Boot Reactive Framework",
        "Designed and implemented an Embedding Based Retrieval architecture for the recommendation engine using MongoDB VectorSearch improving click-through rates by 20%",
        "Used LLM to generate quality training data for fine-tuning encoder models for recommendation which led to 25% user retention",
        "Designed and implemented CDC Ingestion Pipelines from different databases (MongoDB, Postgres, ElasticSearch) to Lakehouse using in-house Kafka Connect",
        "Developed internal CLI tool to streamline data pipeline creation and validation, increasing data team productivity by 2X",
        "Developed Multiple Realtime Feature Transformation pipelines using Feast Feature Store, Kafka, Redis, BigQuery which increased the user retention by 30%",
        "Designed and implemented self-serve query schedule platform for data analysts to increase productivity",
        "Helped build data quality & contracts framework using Python & Airflow to ensure quality of data products"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      company: "To The New",
      role: "Senior Data Engineer",
      period: "2021-07 to 2022-04",
      location: "Noida, India",
      achievements: [
        "Helped and managed to create Central Data Lake with multiple integrations for different business verticals",
        "Led development of real time pipeline that is using Confluent Kafka, spark Structured Streaming and Confluent Kafka Connectors for Customers Transaction data at large scale (60M+/day)",
        "Optimized Spark jobs reducing resource utilization by 50% while maintaining performance",
        "Designed and implemented Monitoring Framework for all the pipelines triggered using Airflow",
        "Helped Multiple Teams in same competency for Pipelines and design of the system",
        "Created Data models in Vertica and Postgres that can support dynamic queries of Power BI for Analytics reports"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      company: "Innoeye Technologies",
      role: "Senior Data Engineer",
      period: "2020-05 to 2021-07",
      location: "Bangalore, India",
      achievements: [
        "Collaborated with multiple teams and management to understand the requirement and design the product for advanced telecom analytics",
        "Optimized and re-architected Spark Jobs to cut the resources by 80%",
        "Responsible for creating Spark Jobs using Spark SQL and Java for BI applications and geospatial visualization",
        "Developed NIFI Workflows to schedule spark jobs and manage ingestion of data",
        "Built data models in HBase and MySQL for web applications and big data analytics",
        "Used spring-boot and Hibernate to write REST APIs in microservices architecture",
        "Built Streaming services for real time processing of 10M users using Java and Kafka"
      ],
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      company: "Innoeye Technologies",
      role: "Data Engineer",
      period: "2017-05 to 2020-05",
      location: "Bangalore, India",
      achievements: [
        "Developed Spark Jobs to analyze multiple source data for Network Operators at Terabyte Scale",
        "Migrated Legacy Spark Jobs from RDD to Datasets",
        "Designed data models in HBase to support web application and analytics",
        "Collaborated with the team on ETL tasks, maintaining data integrity and verifying pipeline stability",
        "Supported team in creating org-wide common spark framework which reduced code duplication"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of building scalable data solutions and leading engineering teams
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company List */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedJob(index)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedJob === index
                      ? 'bg-gradient-to-r ' + exp.color + ' text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-gray-50 border border-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      selectedJob === index ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{exp.company}</h3>
                      <p className={`text-sm ${
                        selectedJob === index ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {exp.role}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${
                      selectedJob === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${experiences[selectedJob].color} text-white text-sm font-medium mb-4`}>
                  <Calendar className="w-4 h-4" />
                  {experiences[selectedJob].period}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {experiences[selectedJob].role}
                </h3>
                <p className="text-xl text-gray-600 mb-2">
                  {experiences[selectedJob].company}
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{experiences[selectedJob].location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {experiences[selectedJob].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
