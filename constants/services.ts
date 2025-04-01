/**
 * @file services.ts
 * @description This file contains a list of service offerings provided by the company.
 * Each service includes details such as title, description, image source, and a hyperlink
 * to the respective service page.
 */

/**
 * @constant {Array<Object>} services
 * @description An array of service objects representing the various services offered by the company.
 * Each service object contains the following properties:
 *
 * @property {string} title - The title of the service.
 * @property {string} description - A detailed description of the service, outlining its features and benefits.
 * @property {string} imageSrc - The relative path to the image representing the service.
 * @property {string} href - The relative URL path to the service's dedicated page.
 */

export const services = [
  {
    title: "Custom Software Development",
    description:
      "We deliver tailored software solutions aligned with your business objectives. Our team excels in enterprise-grade applications and cloud-native platforms, modernizing legacy systems through API development and seamless integration. We follow agile methodology to ensure efficient development processes that meet evolving business needs.",
    imageSrc: "/imgs/service-banner-01.jpg",
    href: "/services/custom-software",
  },
  {
    title: "Digital Transformation Services",
    description:
      "We revolutionize business operations through strategic implementation of cutting-edge technologies. Our expertise covers digital maturity assessment, technology roadmap development, and cloud migration, enhanced by IoT integration and smart infrastructure solutions. We focus on measurable outcomes through careful ROI analysis and monitoring.",
    imageSrc: "/imgs/service-banner-02.jpg",
    href: "/services/digital-transformation",
  },
  {
    title: "Digital Marketing Services",
    description:
      "We provide comprehensive digital marketing solutions to amplify your online presence. From implementing SEO strategies to social media management, content marketing including video contents and digital advertising campaigns across multiple platforms such as Facebook/Instagram, Google Ads etc, we ensure your brand stands out digitally.",
    imageSrc: "/imgs/service-banner-03.jpg",
    href: "/services/digital-marketing",
  },
  {
    title: "Website Development Services",
    description:
      "We create impactful digital experiences through professional website development. Our services include corporate website design, custom CMS development, educational portals, e-commerce platform development with secure payment systems, inventory management, and seamless user experiences, all developed with responsive design principles and optimal performance in mind.",
    imageSrc: "/imgs/service-banner-04.jpg",
    href: "/services/custom-software",
  },
  {
    title: "Brand and Motion Design",
    description:
      "We craft compelling brand identities that resonate with your target audience through innovative design and animation. Our services include logo design, visual identity development, brand strategy, motion graphics, and 2D/3D animation. We combine creative storytelling with cutting-edge animation techniques to bring brands to life across digital platforms, while ensuring consistency through messaging frameworks and brand guidelines.",
    imageSrc: "/imgs/service-banner-05.jpg",
    href: "/services/digital-transformation",
  },
  {
    title: "Mobile Application Development",
    description:
      "We build modern mobile applications for iOS and Android platforms with exceptional UI/UX design. Our development framework includes Flutter and React Native.. We offer both native and cross-platform solutions to ensure optimal performance and maximum reach. Our backend technologies include Python, NodeJs, PHP/Laravel, SQL/No-SQL databases and AI tool and platforms.",
    imageSrc: "/imgs/service-banner-06.jpg",
    href: "/services/digital-marketing",
  },
  {
    title: "Managed IT Services",
    description:
      "We provide infrastructure management and support to ensure your technology backbone remains robust and secure. We handle everything from initial IT infrastructure assessment and network design to ongoing system monitoring and security patch management. Our approach to infrastructure management includes disaster recovery planning and continuous performance optimization to minimize downtime and maximize efficiency.",
    imageSrc: "/imgs/service-banner-07.jpg",
    href: "/services/custom-software",
  },
  {
    title: "IT Consulting & Support",
    description:
      "Our dedicated IT consulting team provides round-the-clock technical expertise to keep your systems running optimally. We offer comprehensive technology strategy consulting, infrastructure optimization, and robust cybersecurity solutions, backed by 24/7 technical support. Our commitment extends to empowering your team through thorough staff training and knowledge transfer programs.",
    imageSrc: "/imgs/service-banner-08.jpg",
    href: "/services/digital-transformation",
  },
  {
    title: "Coding School & Certifications",
    description:
      "We empower the next generation of tech professionals through our coding training programs and industry-recognized certification programs. Our curriculum covers in-demand programming languages, web development, mobile app development and UI/UX design culminating in professional certifications, all led by industry-experienced instructors who combine theoretical knowledge with hands-on practical learning experiences.",
    imageSrc: "/imgs/service-banner-09.jpg",
    href: "/services/digital-marketing",
  },
];
