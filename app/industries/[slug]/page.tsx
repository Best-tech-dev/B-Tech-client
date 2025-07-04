import React from "react";
import { notFound } from "next/navigation";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import IndustryDetailClient from "@/components/Industries/IndustryDetailClient";

interface IndustryData {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  caseStudies?: {
    title: string;
    description: string;
    results: string[];
  }[];
}

const industries: Record<string, IndustryData> = {
  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Transforming healthcare through innovative technology solutions",
    fullDescription:
      "The healthcare industry is rapidly evolving with digital transformation at its core. We provide comprehensive technology solutions that improve patient care, streamline operations, and ensure compliance with healthcare regulations while maintaining the highest security standards.",
    challenges: [
      "Patient data security and privacy compliance",
      "Integration with legacy healthcare systems",
      "Regulatory compliance and documentation",
      "Scalability for growing patient volumes",
      "Real-time access to critical patient information",
    ],
    solutions: [
      "Electronic Health Records (EHR) systems",
      "Telemedicine and virtual consultation platforms",
      "Patient management and scheduling systems",
      "Medical imaging and diagnostic tools",
      "Healthcare analytics and reporting dashboards",
    ],
    benefits: [
      "Improved patient outcomes and satisfaction",
      "Reduced operational costs and inefficiencies",
      "Enhanced compliance with healthcare regulations",
      "Better data-driven decision making",
      "Streamlined workflows and processes",
    ],
  },
  finance: {
    slug: "finance",
    title: "Finance",
    description:
      "Empowering financial institutions with secure, scalable solutions",
    fullDescription:
      "In the fast-paced financial sector, technology is crucial for competitive advantage. We deliver robust fintech solutions that enhance security, improve customer experience, and ensure regulatory compliance while driving innovation in financial services.",
    challenges: [
      "Cybersecurity threats and fraud prevention",
      "Regulatory compliance and reporting",
      "Legacy system modernization",
      "Real-time transaction processing",
      "Customer experience and digital adoption",
    ],
    solutions: [
      "Digital banking and mobile payment platforms",
      "Fraud detection and risk management systems",
      "Automated compliance and reporting tools",
      "Investment management platforms",
      "Cryptocurrency and blockchain solutions",
    ],
    benefits: [
      "Enhanced security and fraud protection",
      "Improved customer experience and retention",
      "Automated compliance and reduced risk",
      "Faster transaction processing",
      "Data-driven investment insights",
    ],
  },
  education: {
    slug: "education",
    title: "Education",
    description: "Revolutionizing education with modern learning platforms",
    fullDescription:
      "Education technology is reshaping how we learn and teach. We create innovative solutions that enhance learning experiences, improve educational outcomes, and make quality education more accessible to learners worldwide.",
    challenges: [
      "Engaging students in digital learning environments",
      "Managing diverse learning styles and needs",
      "Tracking and assessing student progress",
      "Ensuring accessibility and inclusivity",
      "Integration with existing educational systems",
    ],
    solutions: [
      "Learning Management Systems (LMS)",
      "Virtual classroom and video conferencing tools",
      "Student information systems",
      "Educational content management platforms",
      "Assessment and grading automation tools",
    ],
    benefits: [
      "Personalized learning experiences",
      "Improved student engagement and outcomes",
      "Efficient administrative processes",
      "Better parent-teacher communication",
      "Data-driven educational insights",
    ],
  },
  government: {
    slug: "government",
    title: "Government",
    description:
      "Modernizing government services through digital transformation",
    fullDescription:
      "Government organizations need efficient, transparent, and secure systems to serve citizens effectively. We develop solutions that modernize public services, improve citizen engagement, and enhance operational efficiency while ensuring data security and compliance.",
    challenges: [
      "Legacy system modernization and integration",
      "Data security and citizen privacy protection",
      "Transparency and accountability requirements",
      "Citizen service delivery and accessibility",
      "Budget constraints and resource optimization",
    ],
    solutions: [
      "Citizen service portals and e-government platforms",
      "Document management and workflow systems",
      "Public data analytics and reporting tools",
      "Digital identity and authentication systems",
      "Smart city infrastructure solutions",
    ],
    benefits: [
      "Improved citizen service delivery",
      "Enhanced transparency and accountability",
      "Reduced operational costs and inefficiencies",
      "Better data-driven policy making",
      "Increased citizen engagement and satisfaction",
    ],
  },
  retail: {
    slug: "retail",
    title: "Retail",
    description: "Enhancing retail experiences with cutting-edge technology",
    fullDescription:
      "The retail landscape is continuously evolving with e-commerce and omnichannel experiences driving growth. We provide comprehensive retail technology solutions that enhance customer experiences, optimize operations, and drive sales growth.",
    challenges: [
      "Omnichannel customer experience integration",
      "Inventory management across multiple channels",
      "Customer data analysis and personalization",
      "Supply chain optimization and visibility",
      "Competition from online marketplaces",
    ],
    solutions: [
      "E-commerce platforms and mobile shopping apps",
      "Point-of-sale (POS) and inventory management systems",
      "Customer relationship management (CRM) tools",
      "Supply chain and logistics optimization",
      "Analytics and business intelligence dashboards",
    ],
    benefits: [
      "Increased sales and customer loyalty",
      "Improved inventory accuracy and turnover",
      "Enhanced customer insights and personalization",
      "Streamlined operations and cost reduction",
      "Better demand forecasting and planning",
    ],
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = industries[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <IndustryDetailClient industry={industry} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "finance" },
    { slug: "education" },
    { slug: "government" },
    { slug: "retail" },
  ];
}
