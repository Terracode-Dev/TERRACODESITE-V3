interface Section {
  title?: string;
  content?: string;
  subsections?: SubSection[];
}
interface SubSection {
    subtopic?: string;
    subDescription?: string;
    subDescription1?: string;
    subDescription2?: string;
    subDescription3?: string;
}

export interface SidebarItem {
  id: number;
  title: string;
  date?: string;
  description: string;
  sections: Section[];
}

export const articlesData: SidebarItem[] = [
{
  id: 0,
  title: "Cookie Policy",
  date: "2 August 2025",
  description: "This Cookie Policy explains how Terracode (“we,” “our,” or “us”) uses cookies and similar technologies when you visit our websites, applications, and SaaS products (“Services”).",
  sections: [
    { title: "1. What Are Cookies?",
      content: "Cookies are small text files placed on your device to collect information about your browsing activity. They help us provide, secure, and improve our Services."
    },
    { title: "2. Types of Cookies We Use", subsections: [
      { subtopic: "Strictly Necessary Cookies", subDescription: "Required for core website functions such as account login, secure payment processing, and session management.", subDescription1: "These cannot be disabled.", subDescription2: "Examples: Authentication tokens, session cookies." },
      { subtopic: "Performance & Analytics Cookies", subDescription: "Collect information about how users interact with our Services (e.g., pages visited, time spent, errors encountered).", subDescription1: "Used to improve website performance and user experience.", subDescription2: "Examples: Google Analytics, error tracking tools." },
      { subtopic: "Functional Cookies", subDescription: "Enable enhanced features such as remembering preferences, language settings, and customized layouts.", subDescription1: "Examples: Saved login details, theme preferences." },
      { subtopic: "Advertising & Targeting Cookies", subDescription: "Used to deliver relevant advertisements and measure campaign effectiveness.", subDescription1: "These may be placed by Terracode or trusted third-party partners.", subDescription2: "Examples: Google Ads, social media pixels." },
      { subtopic: "Third-Party Cookies", subDescription: "Some cookies are placed by third-party service providers we integrate with, including payment gateways, analytics platforms, and cloud services.", subDescription1: "These providers have their own privacy and cookie policies." },
    ]},
    { title: "3. Cookie Retention", subsections: [
      { subDescription: "Session Cookies expire when you close your browser." },
      { subDescription: "Persistent Cookies remain on your device for a set period or until manually deleted." },
      { subDescription: "Retention periods vary by cookie type (typically 1 day to 24 months)." },
    ]},
    { title: "4. Managing Cookies",
      content: "You can control and manage cookies through your browser or device settings. Options include:",
      subsections: [
        { subDescription: "Blocking all cookies" },
        { subDescription: "Blocking third-party cookies only" },
        { subDescription: "Deleting existing cookies" },
        { subDescription: "Please note: disabling cookies may affect functionality of our Services, including logins, payments, and personalization." },
      ]
    },
    { title: "5. Consent",
      content: "For regions where required (e.g., EU/EEA), we use a cookie consent banner. By continuing to use our Services, you consent to the use of cookies in line with this policy."
    },
    { title: "6. Updates to This Policy",
      content: "We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated “Last Updated” date."
    },
    { title: "7. Contact Us",
      content: "If you have questions about cookies or this policy, contact us at [Insert Contact Email]."
    },
  ]
},
{
  id: 1,
  title: "Data Processing Agreement (DPA)",
  date: "2 November 2024",
  description: "This Data Processing Agreement (“DPA”) forms part of the agreement between Terracode (“Processor”) and the customer (“Controller”) regarding the processing of personal data in connection with Terracode’s Services.",
  sections: [
    { title: "1. Definitions", subsections: [
      { subDescription: "“Controller” means the entity that determines the purposes and means of personal data processing." },
      { subDescription: "“Processor” means Terracode, which processes personal data on behalf of the Controller." },
      { subDescription: "“Personal Data” means any information relating to an identified or identifiable individual." },
      { subDescription: "“Sub-processor” means third-party entities engaged by Terracode to process personal data." },
    ]},
    { title: "2. Roles and Responsibilities", subsections: [
      { subDescription: "Controller is responsible for ensuring lawful collection and transfer of personal data." },
      { subDescription: "Terracode acts only on documented instructions from the Controller." },
      { subDescription: "Terracode will not process personal data for its own purposes without consent." },
    ]},
    { title: "3. Categories of Data Processed", subsections: [
      { subDescription: "Contact information (name, email, phone, company details)" },
      { subDescription: "Authentication and account details" },
      { subDescription: "Payment-related information (processed by third-party gateways; Terracode does not store card data)" },
      { subDescription: "Usage data (logs, device data, IP addresses, SaaS interactions)" },
    ]},
    { title: "4. Purpose of Processing", subsections: [
      { subDescription: "Deliver SaaS and software services" },
      { subDescription: "Manage accounts, billing, and subscriptions" },
      { subDescription: "Provide customer support and troubleshooting" },
      { subDescription: "Improve product performance and security" },
      { subDescription: "Comply with legal obligations" },
    ]},
    { title: "5. Sub-processing",
      content: "Terracode may engage trusted sub-processors, including:",
      subsections: [
        { subDescription: "Cloud providers (e.g., AWS, GCP, Azure)" },
        { subDescription: "Payment gateways (e.g., Stripe, PayPal, local payment processors)" },
        { subDescription: "Analytics providers (e.g., Google Analytics)" },
        { subDescription: "Sub-processors will be bound by obligations equivalent to this DPA." },
        { subDescription: "Terracode will notify the Controller of significant changes to sub-processors." },
      ]
    },
    { title: "6. International Data Transfers",
      content: "Terracode may transfer personal data outside the country of origin.",
      subsections: [
        { subDescription: "For EU customers, transfers outside the EEA will rely on:" },
        { subDescription: "Adequacy Decisions (where applicable), or" },
        { subDescription: "Standard Contractual Clauses (SCCs) approved by the European Commission." },
        { subDescription: "For U.S. customers, transfers comply with CCPA and applicable state laws." },
      ]
    },
    { title: "7. Data Security",
      content: "Terracode implements technical and organizational measures, including:",
      subsections: [
        { subDescription: "Encryption in transit (TLS/SSL) and at rest" },
        { subDescription: "Role-based access controls" },
        { subDescription: "Logging and monitoring" },
        { subDescription: "Regular penetration testing and audits" },
        { subDescription: "Secure development lifecycle (SDLC) practices" },
      ]
    },
    { title: "8. Data Subject Rights",
      content: "Terracode will assist the Controller in fulfilling user rights requests, including:",
      subsections: [
        { subDescription: "Right of access, rectification, and deletion" },
        { subDescription: "Right to restrict or object to processing" },
        { subDescription: "Right to data portability" },
        { subDescription: "Right to withdraw consent" },
      ]
    },
    { title: "9. Breach Notification", subsections: [
      { subDescription: "Terracode will notify the Controller of any personal data breach within 72 hours of discovery." },
      { subDescription: "Notification will include details of the breach, mitigation steps, and corrective measures." },
    ]},
    { title: "10. Data Retention & Deletion", subsections: [
      { subDescription: "Personal data is retained only as long as necessary to provide Services or comply with legal obligations." },
      { subDescription: "Upon termination of the agreement, data will be securely deleted or returned upon request." },
    ]},
    { title: "11. Audits & Compliance", subsections: [
      { subDescription: "Controller has the right to request information or conduct audits (subject to confidentiality)." },
      { subDescription: "Terracode will provide relevant certifications or reports (e.g., ISO, SOC 2, if applicable)." },
    ]},
    { title: "12. Governing Law",
      content: "This DPA shall be governed by the laws of [Insert Jurisdiction], unless otherwise agreed."
    },
  ]
},
{
  id: 2,
  title: "Disclaimer Policy",
  date: "2 December 2024",
  description: "This Disclaimer Policy (“Disclaimer”) applies to Terracode’s websites, SaaS products, custom software services, mobile applications, and related offerings (“Services”). By using our Services, you acknowledge and agree to the terms set out below.",
  sections: [
    { title: "1. General Disclaimer",
      content: "All Services provided by Terracode are delivered on an “AS IS” and “AS AVAILABLE” basis. While we strive for accuracy, reliability, and uptime, Terracode makes no warranties, expressed or implied, regarding the completeness, accuracy, or reliability of our Services."
    },
    { title: "2. No Professional Advice",
      content: "The information, content, and materials provided by Terracode do not constitute legal, financial, or professional advice. You should seek independent advice before making business or technical decisions."
    },
    { title: "3. Third-Party Services & Integrations", subsections: [
      { subDescription: "Our Services may integrate with third-party providers, such as cloud platforms, analytics tools, and payment gateways." },
      { subDescription: "Terracode does not control and is not responsible for the availability, accuracy, or security of these third-party services." },
      { subDescription: "Use of third-party services is at your own risk and subject to their respective terms and policies." },
    ]},
    { title: "4. Limitation of Liability",
      content: "To the maximum extent permitted by law, Terracode, its affiliates, employees, and partners shall not be liable for:",
      subsections: [
        { subDescription: "Indirect, incidental, or consequential damages, including data loss, business interruption, or loss of profits." },
        { subDescription: "Damages arising from reliance on content, errors, bugs, or interruptions in service." },
        { subDescription: "Unauthorized access to or use of data stored on our systems." },
      ]
    },
    { title: "5. Security & Availability", subsections: [
      { subDescription: "While we implement industry-standard security measures, no method of transmission or storage is 100% secure." },
      { subDescription: "Terracode does not guarantee uninterrupted service, and downtime may occur due to maintenance, system updates, or factors beyond our control." },
    ]},
    { title: "6. Changes to Services",
      content: "Terracode reserves the right to modify, suspend, or discontinue Services at any time without prior notice. We are not liable for any impact resulting from such changes."
    },
    { title: "7. Jurisdiction",
      content: "This Disclaimer is governed by the laws of [Insert Jurisdiction]. Any disputes shall be resolved under the exclusive jurisdiction of courts in [Insert Jurisdiction]."
    },
  ]
},
{
  id: 3,
  title: "End-User License Agreement (EULA)",
  date: "2 December 2024",
  description: "This End-User License Agreement (“Agreement”) governs your use of Terracode’s SaaS products, downloadable software, and related services (“Software”). By accessing or using the Software, you agree to the terms of this Agreement. If you do not agree, you may not use the Software.",
  sections: [
    { title: "1. License Grant", subsections: [
      { subDescription: "Terracode grants you a limited, non-exclusive, non-transferable, revocable license to use the Software solely for internal business purposes, in accordance with this Agreement." },
      { subDescription: "All rights not expressly granted are reserved by Terracode." },
    ]},
    { title: "2. Restrictions",
      content: "You shall not:",
      subsections: [
        { subDescription: "Copy, modify, or create derivative works of the Software." },
        { subDescription: "Reverse engineer, decompile, or disassemble the Software." },
        { subDescription: "Rent, lease, sublicense, sell, or transfer the Software to third parties." },
        { subDescription: "Use the Software for competitive analysis or to build a similar product." },
        { subDescription: "Remove or alter proprietary notices, trademarks, or legal disclaimers." },
      ]
    },
    { title: "3. Ownership & Intellectual Property", subsections: [
      { subDescription: "The Software is licensed, not sold." },
      { subDescription: "All intellectual property rights in the Software, including source code, databases, designs, and documentation, remain the sole property of Terracode." },
      { subDescription: "Any unauthorized use constitutes a violation of copyright and intellectual property laws." },
    ]},
    { title: "4. Updates & Upgrades", subsections: [
      { subDescription: "Terracode may provide updates, patches, or new versions of the Software." },
      { subDescription: "Such updates are covered under this Agreement unless accompanied by a separate license." },
      { subDescription: "Terracode reserves the right to discontinue features or versions at its discretion." },
    ]},
    { title: "5. Termination", subsections: [
      { subDescription: "Terracode may suspend or terminate your license immediately if you breach this Agreement." },
      { subDescription: "Upon termination, you must cease all use of the Software and destroy all copies." },
    ]},
    { title: "6. Disclaimer of Warranties", subsections: [
      { subDescription: "The Software is provided “AS IS” without warranties of any kind." },
      { subDescription: "Terracode expressly disclaims all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement." },
      { subDescription: "Terracode does not warrant that the Software will be error-free, uninterrupted, or meet your requirements." },
    ]},
    { title: "7. Limitation of Liability", subsections: [
      { subDescription: "Terracode shall not be liable for indirect, incidental, consequential, or punitive damages." },
      { subDescription: "Terracode’s total liability is limited to the amount you paid for the license in the past 12 months." },
    ]},
    { title: "8. Indemnification",
      content: "You agree to indemnify, defend, and hold harmless Terracode, its affiliates, and employees from any claims, damages, or expenses arising from your misuse of the Software."
    },
    { title: "9. Export Control",
      content: "You may not use or export the Software in violation of applicable export control laws or regulations."
    },
    { title: "10. Governing Law",
      content: "This Agreement is governed by the laws of [Insert Jurisdiction]. Any disputes shall be resolved in the courts of [Insert Jurisdiction]."
    },
  ]
},
{
  id: 4,
  title: "Privacy Policy",
  date: "2 December 2024",
  description: "Terracode (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you use our software services, SaaS products, websites, and applications (“Services”).",
  sections: [
    { title: "1. Information We Collect",
      content: "We may collect the following categories of information:",
      subsections: [
        { subDescription: "Personal Information: Name, email, phone number, company details, billing information." },
        { subDescription: "Payment Information: Processed securely through third-party payment gateways; Terracode does not store credit card details." },
        { subDescription: "Usage Data: Interactions with our Services, log files, device identifiers, IP addresses, and analytics data." },
        { subDescription: "Cookies & Tracking: Data collected through cookies, beacons, and tracking technologies (see Cookie Policy)." },
      ]
    },
    { title: "2. How We Use Your Information",
      content: "We process information to:",
      subsections: [
        { subDescription: "Provide and improve Services" },
        { subDescription: "Process payments and manage subscriptions" },
        { subDescription: "Customize user experience and recommendations" },
        { subDescription: "Ensure security and fraud prevention" },
        { subDescription: "Communicate updates, support, and marketing (where consented)" },
        { subDescription: "Comply with legal obligations" },
      ]
    },
    { title: "3. Data Sharing & Third Parties",
      content: "We may share limited data with:",
      subsections: [
        { subDescription: "Payment processors (for transactions)" },
        { subDescription: "Cloud service providers (for hosting and storage)" },
        { subDescription: "Analytics providers (to improve performance)" },
        { subDescription: "We never sell personal data to third parties." },
      ]
    },
    { title: "4. International Transfers",
      content: "If you access our Services outside [Insert Jurisdiction], your information may be transferred and stored in countries where Terracode or its service providers operate."
    },
    { title: "5. Data Retention",
      content: "We retain personal data only as long as necessary to provide Services, fulfill legal obligations, or resolve disputes."
    },
    { title: "6. User Rights",
      content: "Depending on your location, you may have rights to:",
      subsections: [
        { subDescription: "Access, update, or delete your personal data" },
        { subDescription: "Restrict or object to processing" },
        { subDescription: "Request data portability" },
        { subDescription: "Withdraw consent at any time" },
        { subDescription: "To exercise rights, contact us at [Insert Contact Email]." },
      ]
    },
    { title: "7. Security",
      content: "We employ administrative, technical, and physical safeguards to protect data. However, no method of transmission or storage is 100% secure."
    },
    { title: "8. Children’s Privacy",
      content: "Our Services are not directed to individuals under 16. We do not knowingly collect data from minors."
    },
    { title: "9. Updates to This Policy",
      content: "We may update this Privacy Policy periodically. Changes will be posted on our website with a new “Last Updated” date."
    },
    { title: "10. Contact Us",
      content: "For questions, email us at [Insert Legal Contact Email]."
    },
  ]
},
{
  id: 5,
  title: "Refund Policy",
  date: "2 December 2024",
  description: "At Terracode, we aim to ensure our customers are satisfied with our software services and SaaS products. This Refund Policy outlines when refunds may be granted.",
  sections: [
    { title: "1. SaaS Subscriptions", subsections: [
      { subDescription: "Free Trials: If a free trial is provided, charges begin only after the trial period ends." },
      { subDescription: "Monthly Subscriptions: Refunds are not generally issued for partial months of service. If you cancel, access continues until the end of the billing cycle." },
      { subDescription: "Annual Subscriptions: Refunds may be requested within 14 days of the initial purchase. After this period, refunds will not be issued, but you may cancel renewal." },
      { subDescription: "Billing Errors: If you are charged incorrectly (e.g., duplicate payments), we will issue a full refund of the erroneous charge." },
    ]},
    { title: "2. Custom Software Services", subsections: [
      { subDescription: "Upfront Deposits: Deposits paid to initiate a project are non-refundable, as they secure development resources." },
      { subDescription: "Milestone Payments: Once a milestone has been completed and delivered, refunds are not applicable." },
      { subDescription: "Project Cancellations: If a project is canceled mid-way, we will assess work completed and may issue a partial refund for unspent, unused hours." },
    ]},
    { title: "3. Exceptions",
      content: "Refunds may also be granted in the following circumstances:",
      subsections: [
        { subDescription: "Fraudulent or unauthorized charges proven with documentation." },
        { subDescription: "Inability to deliver Services due to issues on Terracode’s side." },
        { subDescription: "Technical issues preventing SaaS access, where Terracode cannot provide a resolution." },
      ]
    },
    { title: "4. Requesting a Refund",
      content: "To request a refund, contact us at [Insert Billing Email] with transaction details. Refund requests are typically processed within 7–14 business days."
    },
    { title: "5. Non-Refundable Items", subsections: [
      { subDescription: "Setup fees, onboarding costs, or third-party service fees are non-refundable." },
      { subDescription: "Services or SaaS products purchased through resellers or partners must follow their refund policies." },
    ]},
  ]
},
{
  id: 6,
  title: "Service Level Agreement (SLA)",
  date: "2 December 2024",
  description: "This Service Level Agreement (“SLA”) is part of the Terms and Conditions governing the use of Terracode’s SaaS products and custom software services (“Services”). The SLA defines service availability, support commitments, and remedies for service failures.",
  sections: [
    { title: "1. Service Availability", subsections: [
      { subDescription: "Terracode guarantees 99.9% uptime per calendar month for SaaS products, excluding scheduled maintenance." },
      { subDescription: "Scheduled Maintenance: We will provide at least 48 hours’ notice for planned maintenance that may affect availability." },
      { subDescription: "Exclusions: Downtime caused by force majeure events, third-party failures (e.g., internet providers, payment gateways), or customer misuse is not counted against uptime." },
    ]},
    { title: "2. Support Commitments",
      content: "Terracode provides enterprise-grade technical support with the following response time targets:",
      subsections: [
        { subDescription: "Support channels include email, ticketing system, and dedicated account manager (enterprise plans only)." },
      ]
    },
    { title: "3. Escalation Path",
      content: "If resolution targets are not met, issues will escalate to:",
      subsections: [
        { subDescription: "Tier 1: Support Engineer" },
        { subDescription: "Tier 2: Senior Engineer" },
        { subDescription: "Tier 3: Engineering Manager" },
        { subDescription: "Tier 4: CTO/Executive Oversight" },
      ]
    },
    { title: "4. Service Credits",
      content: "If uptime falls below guaranteed levels, customers may request service credits:",
      subsections: [
        { subDescription: "Credits are applied to future invoices and cannot exceed 50% of one month’s fee." },
        { subDescription: "Customers must request credits within 30 days of the incident." },
      ]
    },
    { title: "5. Customer Responsibilities", subsections: [
      { subDescription: "Maintain stable internet connectivity and updated browsers/software." },
      { subDescription: "Provide accurate information when reporting issues." },
      { subDescription: "Follow best practices for security and account management." },
    ]},
    { title: "6. SLA Exclusions",
      content: "This SLA does not apply to:",
      subsections: [
        { subDescription: "Beta or trial features" },
        { subDescription: "Third-party software or integrations" },
        { subDescription: "Issues caused by customer’s hardware, networks, or misuse" },
        { subDescription: "Force majeure events beyond Terracode’s control" },
      ]
    },
    { title: "7. Governing Law",
      content: "This SLA is governed by the same jurisdiction as Terracode’s Terms & Conditions."
    },
  ]
},
{
id: 7,
title: "Terms & Conditions",
date: "2 December 2024",
description: "These Terms and Conditions (“Terms”) govern your use of Terracode’s software services, SaaS products, websites, and applications (“Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you may not use our Services.",
sections: [
{ title: "1. Scope of Services",
  content: "Terracode provides custom software development, consulting, and SaaS subscription products. Services may include ERP, CRM, mobile applications, AI-powered solutions, and other digital platforms."
},
{ title: "2. User Responsibilities",
  content: "You agree to use our Services lawfully, refrain from harmful or unauthorized activities, and comply with all applicable laws and regulations."
},
{ title: "3. Account Registration",
  content: "For SaaS products, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account and credentials."
},
{ title: "4. Payments & Subscriptions", subsections: [
   { subDescription: "SaaS subscriptions are billed on a recurring basis via third-party payment gateways." },
   { subDescription: "Custom software services may be billed on milestones or retainers." },
   { subDescription: "You authorize Terracode to process payments through secure third-party providers." },
]},
{ title: "5. Intellectual Property",
  content: "All intellectual property, including code, designs, and documentation, remains owned by Terracode unless otherwise agreed in writing. Clients receive a license to use deliverables as specified in agreements."
},
{ title: "6. Service Availability",
  content: "Terracode strives to provide reliable Services but does not guarantee uninterrupted access. Scheduled maintenance or unforeseen outages may occur."
},
{ title: "7. Limitation of Liability",
  content: "Terracode is not liable for indirect, incidental, or consequential damages arising from the use of Services. Liability is limited to the amount paid by you in the past 12 months."
},
{ title: "8. Termination",
  content: "Terracode reserves the right to suspend or terminate your account or Services for breach of these Terms."
},
{ title: "9. Governing Law & Dispute Resolution",
  content: "These Terms are governed by the laws of [Insert Jurisdiction]. Disputes shall be resolved through arbitration or courts in [Insert Jurisdiction]."
},
]}
];