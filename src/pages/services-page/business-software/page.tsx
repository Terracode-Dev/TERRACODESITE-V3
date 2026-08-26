import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";

const Page2: React.FC = () => {
  return (
    <>
    <ServicePage
      badge="Transform your business operations with tailor-made systems"
      title="Business Software Systems"
      image="/mainicons/B-Software.png"
      name="View Business Softwares"
      selectedCategory="System"
      imageObjectPositionClassName="object-top"
    />
    <ServiceAbout
      paragraph1="Terracode specializes in building  powerful and scalable software systems such as ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), IMS (Inventory Management Systems), and other business-critical platforms."
      paragraph2="We don’t just stop at functionality - our systems are enhanced with modern AI capabilities that automate processes, provide intelligent insights, and help you make data-driven decisions."
      paragraph3="Whether you’re managing a growing team or scaling operations across multiple branches, our systems are designed to adapt and evolve with your business needs."
      highlights={[
        { id: 1, text: "Custom ERP, CRM, IMS, and operational systems" },
        { id: 2, text: "AI-driven insights & automation" },
        { id: 3, text: "Integration with third-party tools" },
        { id: 4, text: "Secure, cloud-ready architecture" },
        { id: 5, text: "Post-launch support and scaling" },
      ]}
    />
    <Questions />
    </>
    
  );
};

export default Page2;
