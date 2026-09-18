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
      content: "If you have questions about cookies or this policy, contact us at operations@terracodedev.com."
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
      content: "This DPA shall be governed by the laws of Companies act no.7 of 2007, unless otherwise agreed."
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
      content: "This Disclaimer is governed by the laws of Companies act no.7 of 2007. Any disputes shall be resolved under the exclusive jurisdiction of courts in Respective legal courts of Srilanka."
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
      content: "This Agreement is governed by the laws of Companies act no.7 of 2007. Any disputes shall be resolved in the courts of Respective legal courts of Srilanka."
    },
  ]
},
{
  id: 4,
  title: "Privacy Policy",
  date: "17 September 2026",
  description: "Terracode (Pvt) Ltd respects the privacy of individuals who interact with our websites, applications, software platforms, SaaS products and professional services. This Privacy Policy explains how we collect, use, store, disclose and protect personal data in accordance with the Personal Data Protection Act, No. 9 of 2022 of Sri Lanka.",
  sections: [
  { title: "1. Introduction",
    content: "This Privacy Policy explains how we collect, use, store, disclose and protect personal data.",
    subsections: [
      { subDescription: "Terracode processes personal data in accordance with applicable privacy and data protection requirements, including the Personal Data Protection Act, No. 9 of 2022 of Sri Lanka, as amended and applicable." },
    ]
  },
  { title: "2. Personal Data We May Collect",
    content: "Depending on how you interact with Terracode, we may collect:",
    subsections: [
      { subDescription: "Identity Information" },
      { subDescription: "name;" },
      { subDescription: "username;" },
      { subDescription: "job title;" },
      { subDescription: "company or organisation name." },
      { subDescription: "Contact Information" },
      { subDescription: "email address;" },
      { subDescription: "telephone number;" },
      { subDescription: "business address;" },
      { subDescription: "contact preferences." },
      { subDescription: "Account Information" },
      { subDescription: "account credentials;" },
      { subDescription: "account identifiers;" },
      { subDescription: "subscription details;" },
      { subDescription: "account preferences." },
      { subDescription: "Transaction Information" },
      { subDescription: "purchases;" },
      { subDescription: "invoices;" },
      { subDescription: "subscription history;" },
      { subDescription: "billing information;" },
      { subDescription: "transaction status;" },
      { subDescription: "payment references." },
      { subDescription: "Payment card information may be collected directly by third-party payment processors. Terracode does not normally store full payment card numbers or card security codes." },
      { subDescription: "Technical Information" },
      { subDescription: "We may automatically collect:" },
      { subDescription: "IP address;" },
      { subDescription: "browser type;" },
      { subDescription: "device information;" },
      { subDescription: "operating system;" },
      { subDescription: "login records;" },
      { subDescription: "application logs;" },
      { subDescription: "timestamps;" },
      { subDescription: "security events;" },
      { subDescription: "approximate location derived from IP information; and" },
      { subDescription: "diagnostic data." },
      { subDescription: "Usage Information" },
      { subDescription: "We may collect information regarding how individuals use our websites and Services, including:" },
      { subDescription: "pages viewed;" },
      { subDescription: "features used;" },
      { subDescription: "actions performed;" },
      { subDescription: "interaction history;" },
      { subDescription: "session activity; and" },
      { subDescription: "product analytics." },
      { subDescription: "Communications" },
      { subDescription: "We may retain communications sent through:" },
      { subDescription: "email;" },
      { subDescription: "support channels;" },
      { subDescription: "contact forms;" },
      { subDescription: "customer service;" },
      { subDescription: "project communication tools; and" },
      { subDescription: "other business communication channels." },
      { subDescription: "Customer-Provided Data" },
      { subDescription: "Where customers use Terracode software to process information relating to their customers, employees, suppliers or other persons, Terracode may process such information on behalf of the customer." },
      { subDescription: "In such circumstances, the customer may act as the primary controller of that information and Terracode may act as a processor or service provider, depending on the circumstances." },
    ]
  },
  { title: "3. How We Collect Information",
    content: "Information may be collected:",
    subsections: [
      { subDescription: "directly from you;" },
      { subDescription: "when you register an account;" },
      { subDescription: "when you purchase a Service;" },
      { subDescription: "through our websites or applications;" },
      { subDescription: "through cookies and similar technologies;" },
      { subDescription: "from your organisation;" },
      { subDescription: "from systems you choose to integrate with our Services;" },
      { subDescription: "from third-party service providers; and" },
      { subDescription: "through normal operation of our software infrastructure." },
    ]
  },
  { title: "4. How We Use Personal Data",
    content: "Terracode may process personal data to:",
    subsections: [
      { subDescription: "create and administer accounts;" },
      { subDescription: "deliver purchased Services;" },
      { subDescription: "process subscriptions and transactions;" },
      { subDescription: "provide customer support;" },
      { subDescription: "communicate service information;" },
      { subDescription: "maintain and improve software;" },
      { subDescription: "customise functionality;" },
      { subDescription: "maintain cybersecurity;" },
      { subDescription: "prevent fraud and abuse;" },
      { subDescription: "troubleshoot technical problems;" },
      { subDescription: "conduct analytics;" },
      { subDescription: "manage contracts and projects;" },
      { subDescription: "comply with legal and regulatory requirements;" },
      { subDescription: "maintain accounting and business records;" },
      { subDescription: "exercise or defend legal rights; and" },
      { subDescription: "send marketing communications where legally permitted." },
      { subDescription: "We process personal data only where there is an appropriate lawful basis under applicable law." },
    ]
  },
  { title: "5. Payment Information",
    content: "Payments may be handled by external payment processors.",
    subsections: [
      { subDescription: "When payment information is entered directly into a payment processor’s system, that provider processes the information according to its own security and privacy requirements." },
      { subDescription: "Terracode may receive limited payment-related information such as:" },
      { subDescription: "customer name;" },
      { subDescription: "payment status;" },
      { subDescription: "transaction identifier;" },
      { subDescription: "payment amount;" },
      { subDescription: "payment method type; and" },
      { subDescription: "limited card information such as the final digits of the card where supplied by the processor." },
      { subDescription: "Terracode does not intentionally store full card numbers or card security codes unless expressly required and appropriately secured." },
    ]
  },
  { title: "6. Sharing of Personal Data",
    content: "Terracode does not sell personal data.",
    subsections: [
      { subDescription: "We may disclose personal data to:" },
      { subDescription: "cloud hosting providers;" },
      { subDescription: "payment processors;" },
      { subDescription: "email and communication providers;" },
      { subDescription: "analytics providers;" },
      { subDescription: "cybersecurity providers;" },
      { subDescription: "professional advisers;" },
      { subDescription: "contractors supporting delivery of our Services;" },
      { subDescription: "software integration providers;" },
      { subDescription: "AI service providers where an AI-enabled feature requires such processing; and" },
      { subDescription: "government authorities or regulators where required by law." },
      { subDescription: "We seek to disclose only information reasonably necessary for the relevant purpose." },
    ]
  },
  { title: "7. International Processing and Transfers",
    content: "Terracode may use technology service providers located outside Sri Lanka.",
    subsections: [
      { subDescription: "Accordingly, personal data may in certain circumstances be processed or stored outside Sri Lanka." },
      { subDescription: "Where applicable law requires safeguards for international transfers, Terracode will take reasonable and appropriate steps to implement the required safeguards." },
    ]
  },
  { title: "8. Data Retention",
    content: "Terracode retains personal data only for as long as reasonably necessary for the purpose for which it was collected, including to:",
    subsections: [
      { subDescription: "provide Services;" },
      { subDescription: "maintain accounts;" },
      { subDescription: "comply with financial and legal obligations;" },
      { subDescription: "maintain security records;" },
      { subDescription: "resolve disputes;" },
      { subDescription: "enforce agreements; and" },
      { subDescription: "establish, exercise or defend legal claims." },
      { subDescription: "Retention periods may differ depending on the type of data and the applicable legal or operational requirements." },
      { subDescription: "Data that is no longer required will be deleted, anonymised or securely disposed of where reasonably practicable." },
    ]
  },
  { title: "9. Your Data Protection Rights",
    content: "Subject to applicable law and any permitted exceptions, individuals may have rights including the right to:",
    subsections: [
      { subDescription: "request access to personal data;" },
      { subDescription: "request correction or completion of inaccurate personal data;" },
      { subDescription: "withdraw consent where processing is based on consent;" },
      { subDescription: "object to certain processing;" },
      { subDescription: "request erasure of personal data where applicable; and" },
      { subDescription: "request review of certain decisions made solely through automated processing." },
      { subDescription: "These rights correspond with rights recognised under Sri Lanka’s PDPA." },
      { subDescription: "Requests may be submitted to:" },
      { subDescription: "operations@terracodedev.com" },
      { subDescription: "We may request reasonable verification before processing a request." },
    ]
  },
  { title: "10. Marketing Communications",
    content: "Where legally permitted, Terracode may send information concerning:",
    subsections: [
      { subDescription: "products;" },
      { subDescription: "services;" },
      { subDescription: "updates;" },
      { subDescription: "offers;" },
      { subDescription: "events; and" },
      { subDescription: "relevant company information." },
      { subDescription: "Recipients may unsubscribe from marketing communications using the unsubscribe mechanism provided or by contacting us." },
      { subDescription: "Operational or security-related messages concerning an active account may still be sent even where marketing communications have been declined." },
    ]
  },
  { title: "11. Cookies",
    content: "Terracode websites may use cookies and similar technologies for:",
    subsections: [
      { subDescription: "essential website functionality;" },
      { subDescription: "security;" },
      { subDescription: "authentication;" },
      { subDescription: "preferences;" },
      { subDescription: "performance;" },
      { subDescription: "analytics; and" },
      { subDescription: "marketing where applicable." },
      { subDescription: "Further information is provided in our Cookie Policy." },
    ]
  },
  { title: "12. Security",
    content: "Terracode uses reasonable technical and organisational measures designed to protect personal data against:",
    subsections: [
      { subDescription: "unauthorised access;" },
      { subDescription: "accidental disclosure;" },
      { subDescription: "alteration;" },
      { subDescription: "loss;" },
      { subDescription: "destruction; and" },
      { subDescription: "misuse." },
      { subDescription: "These measures may include access controls, authentication, encryption, backups, logging and security monitoring where appropriate." },
      { subDescription: "No electronic system can guarantee absolute security." },
    ]
  },
  { title: "13. Data Breaches",
    content: "Terracode maintains procedures for investigating suspected personal data breaches.",
    subsections: [
      { subDescription: "Where notification is required under applicable law, Terracode will take appropriate steps to notify the relevant parties and authorities." },
    ]
  },
  { title: "14. Children’s Privacy",
    content: "Terracode Services are primarily intended for businesses and persons legally capable of entering into contractual relationships.",
    subsections: [
      { subDescription: "We do not knowingly collect personal data directly from children where such processing would be unlawful." },
      { subDescription: "If you believe a child has provided personal data to us improperly, please contact:" },
      { subDescription: "operations@terracodedev.com" },
    ]
  },
  { title: "15. Third-Party Websites and Services",
    content: "Our Services may contain links or integrations with third-party websites or services.",
    subsections: [
      { subDescription: "Terracode does not control the privacy practices of independent third parties. Users should review the privacy policies of those providers." },
    ]
  },
  { title: "16. Changes to This Privacy Policy",
    content: "Terracode may update this Privacy Policy to reflect changes to:",
    subsections: [
      { subDescription: "applicable law;" },
      { subDescription: "Services;" },
      { subDescription: "technology;" },
      { subDescription: "data practices; or" },
      { subDescription: "regulatory requirements." },
      { subDescription: "The latest version will display its effective date." },
    ]
  },
  { title: "17. Contact Us",
    content: "Questions, complaints or data protection requests may be directed to:",
    subsections: [
      { subDescription: "Registered Address: 274, Highlevel Road, Maharagama, Sri Lanka" },
      { subDescription: "Phone: +94112838640" },
      { subDescription: "Privacy Email: operations@terracodedev.com" },
    ]
  },
  ]
},
{
  id: 5,
  title: "Refund Policy",
  date: "17 September 2026",
  description: "This Refund and Cancellation Policy explains how refunds and cancellations are handled for Services purchased from Terracode (Pvt) Ltd, including SaaS subscriptions, software products, digital services, custom software development, consulting, integrations and other professional technology services.",
  sections: [
  { title: "1. Purpose",
    content: "This Refund and Cancellation Policy explains how refunds and cancellations are handled for Services purchased from Terracode (Pvt) Ltd.",
    subsections: [
      { subDescription: "This policy applies to:" },
      { subDescription: "SaaS subscriptions;" },
      { subDescription: "software products;" },
      { subDescription: "digital services;" },
      { subDescription: "custom software development;" },
      { subDescription: "consulting;" },
      { subDescription: "integrations; and" },
      { subDescription: "other professional technology services." },
    ]
  },
  { title: "2. Subscription Cancellation",
    content: "Customers may cancel a recurring subscription at any time before the next scheduled billing date.",
    subsections: [
      { subDescription: "Cancellation prevents the subscription from renewing for another billing period." },
      { subDescription: "Unless otherwise stated for a particular product, customers will continue to have access to the Service until the end of the billing period already paid for." },
      { subDescription: "Customers may cancel through the relevant account or subscription management interface where available, or by contacting:" },
      { subDescription: "operations@terracodedev.com" },
      { subDescription: "Customers are encouraged to cancel before the next billing date to avoid renewal." },
    ]
  },
  { title: "3. Subscription Refunds",
    content: "Subscription fees are generally non-refundable once a billing period has started and access to the Service has been provided.",
    subsections: [
      { subDescription: "However, Terracode may provide a full or partial refund where:" },
      { subDescription: "a duplicate payment was processed;" },
      { subDescription: "an incorrect amount was charged;" },
      { subDescription: "payment was taken after a valid cancellation that should already have taken effect;" },
      { subDescription: "Terracode is unable to provide the purchased Service because of a failure attributable to Terracode;" },
      { subDescription: "a significant technical failure prevents reasonable use of the paid Service and Terracode is unable to remedy the issue within a reasonable period;" },
      { subDescription: "the transaction was unauthorised and confirmed as such following investigation; or" },
      { subDescription: "a refund is otherwise required by applicable law." },
      { subDescription: "A change of mind after substantial access to or use of a digital Service will not normally qualify for a refund unless required by applicable law." },
    ]
  },
  { title: "4. Refund Request Period",
    content: "Customers should submit refund requests as soon as reasonably possible after becoming aware of the relevant issue.",
    subsections: [
      { subDescription: "Requests relating to billing errors, duplicate payments or subscription issues should preferably be submitted within 14 calendar days of the relevant transaction." },
      { subDescription: "This period does not restrict any rights that cannot legally be limited." },
    ]
  },
  { title: "5. Custom Software and Professional Services",
    content: "Payments relating to custom software development, consulting, implementation and similar professional services are treated according to the work performed.",
    subsections: [
      { subDescription: "Unless a project agreement states otherwise:" },
      { subDescription: "Payments for completed work" },
      { subDescription: "Payments relating to work already completed, accepted or substantially performed are non-refundable." },
      { subDescription: "Advance payments" },
      { subDescription: "Where an advance payment covers work that has not yet commenced, Terracode may refund the unused portion after deducting:" },
      { subDescription: "work already performed;" },
      { subDescription: "committed resources;" },
      { subDescription: "non-refundable third-party expenses; and" },
      { subDescription: "reasonable costs already incurred for the project." },
      { subDescription: "Milestone payments" },
      { subDescription: "Once a milestone has been completed or accepted, payment relating to that milestone is generally non-refundable." },
      { subDescription: "Where a project is cancelled before a milestone is completed, Terracode will determine the amount payable based on work completed up to the cancellation date and the relevant project agreement." },
    ]
  },
  { title: "6. Deposits and Setup Fees",
    content: "Deposits, setup fees, onboarding charges or implementation charges may be non-refundable where Terracode has already commenced the associated work or incurred costs.",
    subsections: [
      { subDescription: "Any different arrangement stated in a quotation, proposal or contract will take precedence." },
    ]
  },
  { title: "7. Duplicate Payments",
    content: "If a customer is accidentally charged more than once for the same transaction, the duplicate payment will be eligible for refund following verification."
  },
  { title: "8. Incorrect Charges",
    content: "Where Terracode confirms that an incorrect amount has been charged, the excess amount will be refunded."
  },
  { title: "9. Service Failure",
    content: "Where a customer is materially unable to use a paid Service because of a verified failure attributable to Terracode, the customer should first contact our support team.",
    subsections: [
      { subDescription: "Terracode may attempt to:" },
      { subDescription: "repair the issue;" },
      { subDescription: "restore the Service;" },
      { subDescription: "provide a replacement service;" },
      { subDescription: "extend the subscription period;" },
      { subDescription: "provide account credit; or" },
      { subDescription: "issue an appropriate refund." },
      { subDescription: "The remedy will depend on the circumstances and applicable law." },
    ]
  },
  { title: "10. How to Request a Refund",
    content: "To request a refund, contact:",
    subsections: [
      { subDescription: "operations@terracodedev.com" },
      { subDescription: "Please provide:" },
      { subDescription: "your name;" },
      { subDescription: "company name where applicable;" },
      { subDescription: "account email address;" },
      { subDescription: "transaction or invoice reference;" },
      { subDescription: "payment date;" },
      { subDescription: "amount paid; and" },
      { subDescription: "reason for requesting the refund." },
      { subDescription: "Terracode may request additional information where reasonably required to verify the transaction." },
    ]
  },
  { title: "11. Refund Review",
    content: "Terracode will review refund requests in good faith.",
    subsections: [
      { subDescription: "We aim to provide an initial response within 5 business days after receiving sufficient information to evaluate the request." },
    ]
  },
  { title: "12. Approved Refunds",
    content: "Once a refund is approved, Terracode will normally initiate the refund within 7 business days.",
    subsections: [
      { subDescription: "Refunds will generally be returned to the original payment method used for the transaction." },
      { subDescription: "The actual time required for funds to appear in the customer’s account may depend on the customer’s bank, card issuer or payment service provider and may therefore take additional time." },
    ]
  },
  { title: "13. Payment Gateway Charges",
    content: "Where permitted by applicable law, payment processor or banking charges that are non-refundable to Terracode may not be recoverable as part of the refund.",
    subsections: [
      { subDescription: "Any such deduction will be communicated where applicable." },
    ]
  },
  { title: "14. Chargebacks and Payment Disputes",
    content: "Customers are encouraged to contact Terracode before initiating a payment dispute or chargeback so that we have an opportunity to investigate and resolve the matter.",
    subsections: [
      { subDescription: "Nothing in this section limits a customer’s lawful right to dispute an unauthorised or improper transaction." },
    ]
  },
  { title: "15. Cancellation by Terracode",
    content: "If Terracode terminates a paid Service without customer fault and without providing the contracted Service, Terracode may provide an appropriate prorated refund for the unused portion of the affected Service.",
    subsections: [
      { subDescription: "No refund will ordinarily be provided where termination results from:" },
      { subDescription: "material violation of applicable terms;" },
      { subDescription: "unlawful activity;" },
      { subDescription: "fraud;" },
      { subDescription: "abuse of the Service; or" },
      { subDescription: "non-payment." },
    ]
  },
  { title: "16. Consumer Rights",
    content: "Nothing in this Policy excludes, restricts or modifies rights provided to consumers under applicable Sri Lankan law where those rights cannot lawfully be excluded."
  },
  { title: "17. Contact",
    content: "Registered Address: 274, Highlevel Road, Maharagama, Sri Lanka",
    subsections: [
      { subDescription: "Phone: +94112838640" },
      { subDescription: "Support Email: operations@terracodedev.com" },
    ]
  },
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
date: "17 September 2026",
description: "These Terms and Conditions (“Terms”) govern access to and use of the websites, software platforms, SaaS products, applications, custom software services, consulting services, artificial intelligence-enabled solutions and other technology services provided by Terracode (Pvt) Ltd. By accessing our website, creating an account, purchasing a subscription, or otherwise using any of our Services, you agree to these Terms.",
sections: [
  { title: "1. Introduction",
    content: "These Terms and Conditions (“Terms”) govern access to and use of the websites, software platforms, SaaS products, applications, custom software services, consulting services, artificial intelligence-enabled solutions and other technology services provided by Terracode (Pvt) Ltd (“Terracode”, “we”, “us” or “our”).",
    subsections: [
      { subDescription: "By accessing our website, creating an account, purchasing a subscription, engaging Terracode for a project, or otherwise using any of our services (“Services”), you agree to these Terms." },
      { subDescription: "If you enter into a separate written agreement, proposal, Statement of Work, service agreement or other contract with Terracode, that agreement will apply in addition to these Terms. Where there is a direct conflict, the specific written agreement will take precedence for the relevant Service." },
    ]
  },
  { title: "2. About Terracode",
    content: "Software-as-a-Service products",
    subsections: [
      { subDescription: "Custom software development" },
      { subDescription: "Web and mobile application development" },
      { subDescription: "Business software and systems integration" },
      { subDescription: "ERP, CRM and operational systems" },
      { subDescription: "Artificial intelligence and automation solutions" },
      { subDescription: "Data and database integrations" },
      { subDescription: "Technology consulting and related professional services" },
      { subDescription: "Registered Business Address: 274, Highlevel Road, Maharagama, Sri Lanka" },
      { subDescription: "Business Phone: +94112838640" },
      { subDescription: "Email: operations@terracodedev.com" },
    ]
  },
  { title: "3. Eligibility",
    content: "You must have legal capacity to enter into a binding agreement to use our Services.",
    subsections: [
      { subDescription: "Where you use our Services on behalf of a company or other organisation, you represent that you have authority to bind that organisation to these Terms." },
    ]
  },
  { title: "4. Accounts",
    content: "Certain Services require creation of an account.",
    subsections: [
      { subDescription: "You agree to:" },
      { subDescription: "provide accurate and current information;" },
      { subDescription: "maintain the confidentiality of your login credentials;" },
      { subDescription: "promptly notify us of suspected unauthorised access; and" },
      { subDescription: "accept responsibility for activity performed through your account where such activity results from your failure to adequately protect your credentials." },
      { subDescription: "Terracode may require identity, business or account verification where reasonably necessary for security, compliance, fraud prevention or service administration." },
    ]
  },
  { title: "5. Services",
    content: "The exact functionality, specifications and limitations of a Service may be described on the relevant website, subscription page, quotation, proposal, order form, Statement of Work or service agreement.",
    subsections: [
      { subDescription: "Features may differ between plans, products and customers." },
      { subDescription: "Terracode may improve, modify, update or replace features from time to time where reasonably necessary for security, technical, operational or commercial reasons." },
      { subDescription: "We will not materially reduce a paid Service during an active subscription period without reasonable justification or notice where practicable." },
    ]
  },
  { title: "6. Custom Software and Professional Services",
    content: "Custom software development, consulting, implementation and integration services may be governed by a separate quotation, proposal, agreement or Statement of Work.",
    subsections: [
      { subDescription: "Such documents may specify:" },
      { subDescription: "project scope;" },
      { subDescription: "deliverables;" },
      { subDescription: "milestones;" },
      { subDescription: "customer responsibilities;" },
      { subDescription: "payment schedules;" },
      { subDescription: "estimated timelines;" },
      { subDescription: "intellectual property arrangements;" },
      { subDescription: "support arrangements;" },
      { subDescription: "acceptance criteria; and" },
      { subDescription: "additional terms specific to the project." },
      { subDescription: "Project timelines may depend on timely feedback, approvals, access, documentation, credentials, data and other materials supplied by the customer." },
      { subDescription: "Delays caused by the customer or by third parties outside Terracode’s reasonable control may result in corresponding changes to project timelines." },
    ]
  },
  { title: "7. Prices and Payments",
    content: "Prices will be displayed on the applicable website, quotation, invoice, proposal, subscription page or order form.",
    subsections: [
      { subDescription: "Unless stated otherwise, applicable taxes, government charges or transaction charges may be added where required by law or clearly disclosed before payment." },
      { subDescription: "Payments may be processed through third-party payment processors." },
      { subDescription: "Terracode does not normally receive or store customers’ complete payment card details when payment information is entered directly into a third-party payment processor." },
      { subDescription: "By submitting a payment, you authorise Terracode and its payment service providers to process the transaction for the amount shown at checkout or stated in the applicable invoice or agreement." },
    ]
  },
  { title: "8. Subscription Services",
    content: "Certain Terracode Services are offered on a recurring subscription basis.",
    subsections: [
      { subDescription: "Before purchasing a subscription, customers will be shown the relevant:" },
      { subDescription: "subscription price;" },
      { subDescription: "billing period;" },
      { subDescription: "included features;" },
      { subDescription: "applicable taxes or fees;" },
      { subDescription: "renewal terms; and" },
      { subDescription: "cancellation options." },
      { subDescription: "Unless expressly stated otherwise, subscriptions automatically renew at the end of each billing period using the payment method authorised by the customer." },
      { subDescription: "Customers may cancel future renewal in accordance with Section 9." },
    ]
  },
  { title: "9. Subscription Cancellation",
    content: "A subscription may be cancelled at any time before the next scheduled renewal date.",
    subsections: [
      { subDescription: "Cancellation prevents future recurring charges." },
      { subDescription: "Unless otherwise stated for a particular product, the Service will remain available until the end of the billing period already paid for." },
      { subDescription: "Cancellation does not automatically create entitlement to a refund for the current billing period." },
      { subDescription: "Refund requests are handled under our Refund and Cancellation Policy." },
      { subDescription: "Where an account provides a self-service cancellation function, customers may cancel through that function. Customers may also contact us at:" },
      { subDescription: "operations@terracodedev.com" },
    ]
  },
  { title: "10. Failed Payments",
    content: "If a recurring payment cannot be processed, Terracode may:",
    subsections: [
      { subDescription: "notify the customer;" },
      { subDescription: "retry the payment;" },
      { subDescription: "temporarily restrict paid features; or" },
      { subDescription: "suspend or terminate the subscription after reasonable attempts to resolve the outstanding payment." },
      { subDescription: "Customers remain responsible for charges properly incurred before cancellation or termination." },
    ]
  },
  { title: "11. Refunds",
    content: "Refund eligibility, refund procedures, duplicate payments, subscription refunds and refunds for professional services are governed by our separate Refund and Cancellation Policy.",
    subsections: [
      { subDescription: "Nothing in these Terms limits any statutory rights that cannot lawfully be excluded." },
    ]
  },
  { title: "12. Acceptable Use",
    content: "You must not use Terracode Services to:",
    subsections: [
      { subDescription: "violate applicable law;" },
      { subDescription: "conduct fraudulent activities;" },
      { subDescription: "distribute malware or malicious code;" },
      { subDescription: "gain unauthorised access to systems, networks or accounts;" },
      { subDescription: "interfere with the security or operation of our Services;" },
      { subDescription: "infringe intellectual property or privacy rights;" },
      { subDescription: "process unlawful content;" },
      { subDescription: "conduct abusive automated activity that materially affects our infrastructure;" },
      { subDescription: "bypass technical restrictions or security measures; or" },
      { subDescription: "use our Services for purposes expressly prohibited by an applicable service agreement." },
      { subDescription: "Terracode may investigate suspected misuse and take reasonable protective action." },
    ]
  },
  { title: "13. Customer Data",
    content: "Customers retain ownership of data they lawfully submit to Terracode Services unless otherwise agreed in writing.",
    subsections: [
      { subDescription: "Customers are responsible for ensuring that they have the necessary rights, permissions and lawful basis to provide data to Terracode." },
      { subDescription: "Terracode may process customer data to:" },
      { subDescription: "provide the Service;" },
      { subDescription: "maintain security;" },
      { subDescription: "perform backups;" },
      { subDescription: "provide customer support;" },
      { subDescription: "troubleshoot technical issues;" },
      { subDescription: "comply with applicable law; and" },
      { subDescription: "perform other processing authorised by the customer." },
      { subDescription: "Personal data is handled according to our Privacy Policy." },
    ]
  },
  { title: "14. Artificial Intelligence Features",
    content: "Certain Terracode Services may include artificial intelligence, machine learning or automated features.",
    subsections: [
      { subDescription: "AI-generated outputs may occasionally be incomplete, inaccurate or unsuitable for a particular purpose." },
      { subDescription: "Customers should independently review important AI-generated outputs before relying upon them for financial, legal, medical, safety-critical or similarly significant decisions." },
      { subDescription: "Where third-party AI providers are used, relevant information may be transmitted to those providers only as necessary to provide the applicable feature and subject to applicable contractual and privacy safeguards." },
    ]
  },
  { title: "15. Third-Party Services",
    content: "Terracode Services may integrate with services provided by third parties including payment processors, cloud providers, communication services, accounting systems, social platforms, APIs and other software providers.",
    subsections: [
      { subDescription: "Third-party services remain subject to their respective terms, privacy practices, availability and technical limitations." },
      { subDescription: "Terracode is not responsible for failures caused solely by a third-party provider outside Terracode’s reasonable control." },
    ]
  },
  { title: "16. Intellectual Property",
    content: "Terracode and its licensors retain ownership of Terracode’s:",
    subsections: [
      { subDescription: "SaaS platforms;" },
      { subDescription: "reusable software components;" },
      { subDescription: "frameworks;" },
      { subDescription: "libraries;" },
      { subDescription: "source code;" },
      { subDescription: "APIs;" },
      { subDescription: "system architecture;" },
      { subDescription: "documentation;" },
      { subDescription: "designs;" },
      { subDescription: "trademarks;" },
      { subDescription: "proprietary methods; and" },
      { subDescription: "other pre-existing intellectual property." },
      { subDescription: "For custom development projects, ownership and licensing of project-specific deliverables will be determined by the relevant proposal, Statement of Work or agreement." },
      { subDescription: "Where no specific written agreement exists, Terracode retains ownership of its underlying technology and grants the customer the rights reasonably necessary to use the purchased deliverable for its intended purpose." },
    ]
  },
  { title: "17. Confidentiality",
    content: "Where either party receives confidential business, commercial, technical or operational information belonging to the other party, the receiving party shall take reasonable steps to protect such information and shall not disclose it except:",
    subsections: [
      { subDescription: "for providing the Services;" },
      { subDescription: "to personnel or contractors who require access and are subject to confidentiality obligations;" },
      { subDescription: "with the owner’s permission; or" },
      { subDescription: "where disclosure is required by law." },
    ]
  },
  { title: "18. Service Availability",
    content: "Terracode aims to maintain reliable Services but cannot guarantee uninterrupted or error-free operation.",
    subsections: [
      { subDescription: "Services may occasionally be unavailable because of:" },
      { subDescription: "maintenance;" },
      { subDescription: "software updates;" },
      { subDescription: "infrastructure failures;" },
      { subDescription: "internet or telecommunications problems;" },
      { subDescription: "third-party provider outages;" },
      { subDescription: "security incidents;" },
      { subDescription: "force majeure events; or" },
      { subDescription: "circumstances outside our reasonable control." },
      { subDescription: "Where practicable, Terracode will take reasonable steps to restore affected Services." },
    ]
  },
  { title: "19. Suspension and Termination",
    content: "Terracode may suspend or terminate access where:",
    subsections: [
      { subDescription: "these Terms are materially breached;" },
      { subDescription: "payment remains outstanding;" },
      { subDescription: "Services are used unlawfully;" },
      { subDescription: "continued access presents a security risk;" },
      { subDescription: "required by law or regulatory authority; or" },
      { subDescription: "continued provision of the Service is no longer reasonably possible." },
      { subDescription: "Where appropriate, we will provide notice and an opportunity to remedy the issue before termination." },
    ]
  },
  { title: "20. Disclaimer",
    content: "Terracode will provide Services with reasonable professional and technical care.",
    subsections: [
      { subDescription: "Except where otherwise required by law or expressly agreed in writing, Services are provided without guarantees that:" },
      { subDescription: "every Service will operate without interruption;" },
      { subDescription: "every software defect will be eliminated;" },
      { subDescription: "every third-party integration will remain available indefinitely; or" },
      { subDescription: "a particular commercial outcome will result from using the Service." },
    ]
  },
  { title: "21. Limitation of Liability",
    content: "To the maximum extent permitted by applicable law, Terracode shall not be liable for indirect, incidental, special or consequential losses arising from use of the Services.",
    subsections: [
      { subDescription: "Unless otherwise agreed in writing, Terracode’s aggregate liability relating to a paid Service shall not exceed the amount paid by the customer to Terracode for the relevant Service during the twelve months immediately preceding the event giving rise to the claim." },
      { subDescription: "This limitation does not apply where liability cannot lawfully be limited or excluded." },
    ]
  },
  { title: "22. Indemnification",
    content: "To the extent permitted by law, customers agree to indemnify Terracode against third-party claims resulting directly from:",
    subsections: [
      { subDescription: "unlawful use of the Services;" },
      { subDescription: "content or data supplied by the customer that infringes third-party rights;" },
      { subDescription: "fraudulent activity; or" },
      { subDescription: "material violation of these Terms." },
    ]
  },
  { title: "23. Complaints and Dispute Resolution",
    content: "Customers should first contact Terracode so that we can attempt to resolve complaints directly.",
    subsections: [
      { subDescription: "Complaints may be sent to:" },
      { subDescription: "operations@terracodedev.com" },
      { subDescription: "We will review complaints in good faith and seek to provide a response within a reasonable period." },
      { subDescription: "If a dispute cannot be resolved between the parties, and no separate agreement provides another dispute mechanism, the dispute shall be subject to the applicable laws and courts of Sri Lanka." },
      { subDescription: "Nothing in this section prevents a consumer from using any dispute-resolution or consumer-protection mechanism available under applicable law." },
    ]
  },
  { title: "24. Governing Law",
    content: "These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka."
  },
  { title: "25. Changes to These Terms",
    content: "Terracode may update these Terms where necessary to reflect changes in:",
    subsections: [
      { subDescription: "law;" },
      { subDescription: "technology;" },
      { subDescription: "business operations;" },
      { subDescription: "security requirements; or" },
      { subDescription: "Services." },
      { subDescription: "Material changes will be communicated where reasonably appropriate." },
      { subDescription: "The updated effective date will be displayed at the beginning of these Terms." },
    ]
  },
  { title: "26. Contact",
    content: "Registered Address: 274, Highlevel Road, Maharagama, Sri Lanka",
    subsections: [
      { subDescription: "Telephone: +94112838640" },
      { subDescription: "Email: operations@terracodedev.com" },
    ]
  },
]}
];