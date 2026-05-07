const pathname = window.location.pathname.split("/").pop() || "index.html";

const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const submenuToggles = document.querySelectorAll("[data-submenu-toggle]");
const langButtons = document.querySelectorAll("[data-lang]");
const metaDescription = document.querySelector('meta[name="description"]');

const headerTranslations = {
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    about_overview: "Tổng quan",
    about_vision: "Tầm nhìn & Sứ mệnh",
    about_team: "Đội ngũ",
    about_partners: "Thành tựu & Đối tác",
    services: "Dịch vụ",
    service_export: "Export Enablement",
    service_factory: "Factory Onboarding",
    service_matching: "Buyer Matching & AI Sales",
    service_logistics: "Packaging & Logistics",
    service_ecommerce: "Cross-border E-commerce",
    industries: "Ngành hàng",
    industry_fnb: "Food & Beverage",
    industry_agri: "Agricultural Products",
    industry_packaging: "Shopping Bags & Packaging",
    industry_wellness: "Herbs & Wellness",
    partners: "Đối tác",
    sustainability: "Bền vững",
    sustainability_esg: "Khung ESG",
    sustainability_commitment: "Cam kết bền vững",
    newsroom: "Tin tức",
    newsroom_latest: "Tin mới nhất",
    newsroom_blog: "Bài viết nổi bật",
    careers: "Tuyển dụng",
    contact: "Liên hệ",
    menu: "Mở menu"
  },
  en: {
    home: "Home",
    about: "About Us",
    about_overview: "Overview",
    about_vision: "Vision & Mission",
    about_team: "Leadership",
    about_partners: "Achievements & Partners",
    services: "Services",
    service_export: "Export Enablement",
    service_factory: "Factory Onboarding",
    service_matching: "Buyer Matching & AI Sales",
    service_logistics: "Packaging & Logistics",
    service_ecommerce: "Cross-border E-commerce",
    industries: "Industries",
    industry_fnb: "Food & Beverage",
    industry_agri: "Agricultural Products",
    industry_packaging: "Shopping Bags & Packaging",
    industry_wellness: "Herbs & Wellness",
    partners: "Partners",
    sustainability: "Sustainability",
    sustainability_esg: "ESG Framework",
    sustainability_commitment: "Sustainability Commitments",
    newsroom: "Newsroom",
    newsroom_latest: "Latest News",
    newsroom_blog: "Featured Stories",
    careers: "Careers",
    contact: "Contact",
    menu: "Open menu"
  }
};

const pageTranslations = {
  "index.html": {
    title: "Matching Vietnam | Trusted Samples, Direct from Factories",
    description:
      "Matching Vietnam connects international buyers with Vietnamese factories through supplier qualification, sample management, and direct factory sales activation.",
    ops: [
      { selector: ".hero-copy p", en: "Matching Vietnam helps international buyers reach the right Vietnamese factories, control sample quality, and activate cross-border sales pipelines faster and with less risk." },
      { selector: ".hero-actions a:nth-child(1)", en: "Explore services" },
      { selector: ".hero-actions a:nth-child(2)", en: "See partner ecosystem" },
      { selector: ".hero-notes span:nth-child(1)", en: "50+ factories pre-screened" },
      { selector: ".hero-notes span:nth-child(2)", en: "10+ buyer markets being served" },
      { selector: ".floating-card.top p", en: "Connect the right buyers, in the right category, at the right time, using real market signals." },
      { selector: ".floating-card.bottom p", en: "Assess capabilities, export readiness, and sample standards so buyers can work directly with factories." },
      { selector: "main > section:nth-of-type(2) .stat-card:nth-child(1) span", en: "Factory profiles reviewed" },
      { selector: "main > section:nth-of-type(2) .stat-card:nth-child(2) span", en: "Buyer markets connected" },
      { selector: "main > section:nth-of-type(2) .stat-card:nth-child(3) span", en: "Response rate within the first 48 hours" },
      { selector: "main > section:nth-of-type(2) .stat-card:nth-child(4) span", en: "Initial brief turnaround time" },
      { selector: "main > section:nth-of-type(3) .section-header h2", en: "Instead of fragmented sourcing, we build a verified route into Vietnamese factories." },
      { selector: "main > section:nth-of-type(3) .section-header .kicker", en: "Matching Vietnam operates as an enablement layer between international buyers and Vietnamese factories: selecting, standardizing, and supporting from sample to shipment." },
      { selector: "main > section:nth-of-type(3) .card:nth-child(1) h3", en: "Assess manufacturing capability" },
      { selector: "main > section:nth-of-type(3) .card:nth-child(1) p", en: "Review legal profiles, operational capacity, quality standards, and export readiness." },
      { selector: "main > section:nth-of-type(3) .card:nth-child(2) h3", en: "Control the sample workflow" },
      { selector: "main > section:nth-of-type(3) .card:nth-child(2) p", en: "Standardize requirements, track lead times, respond to buyers, and reduce spec mismatch loops." },
      { selector: "main > section:nth-of-type(3) .card:nth-child(3) h3", en: "Activate cross-border sales" },
      { selector: "main > section:nth-of-type(3) .card:nth-child(3) p", en: "Run buyer matching, prepare sales assets, brief logistics, and coordinate the first transaction." },
      { selector: "main > section:nth-of-type(4) .spotlight h2", en: "Five core services built for a practical export journey." },
      { selector: "main > section:nth-of-type(4) .spotlight p", en: "From factory onboarding to cross-border e-commerce, we design one unified pipeline instead of disconnected tasks." },
      { selector: "main > section:nth-of-type(4) .list-card:nth-child(1) p", en: "Build factory-specific profiles, sales narratives, and buyer-ready communication standards." },
      { selector: "main > section:nth-of-type(4) .list-card:nth-child(2) p", en: "Prioritize the right buyers based on category, production fit, and market growth signals." },
      { selector: "main > section:nth-of-type(4) .list-card:nth-child(3) p", en: "Design online sales channel structures so Vietnamese products can reach global markets more effectively." },
      { selector: "main > section:nth-of-type(5) .section-header h2", en: "Categories Matching Vietnam is prioritizing right now." },
      { selector: "main > section:nth-of-type(5) .section-header .kicker", en: "We focus on products with supply-side advantages, clear origin stories, and strong growth headroom." },
      { selector: "main > section:nth-of-type(5) .card:nth-child(1) p", en: "Snacks, signature drinks, and consumer goods with brand stories tied to Vietnam." },
      { selector: "main > section:nth-of-type(5) .card:nth-child(2) p", en: "Processed agricultural products, core ingredients, and export items with stable supply consistency." },
      { selector: "main > section:nth-of-type(5) .card:nth-child(3) p", en: "Packaging solutions, shopping bags, and materials built for private-label demand." },
      { selector: "main > section:nth-of-type(5) .card:nth-child(4) p", en: "Herbal, health-support, and wellness products with distinctive local identity." },
      { selector: "main > section:nth-of-type(6) .section-header h2", en: "A partner ecosystem that helps buyers move from shortlist to order faster." },
      { selector: "main > section:nth-of-type(6) .section-header .kicker", en: "It includes factories, packaging partners, logistics, inspection, and commercial support around each opportunity." },
      { selector: "main > section:nth-of-type(7) .section-header h2", en: "Short updates on markets, factories, and export opportunities." },
      { selector: "main > section:nth-of-type(7) .section-header .btn", en: "View all articles" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(1) .news-meta span:nth-child(2)", en: "5 min read" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(1) h3", en: "Three signals international buyers are looking for in wellness products from Vietnam" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(1) p", en: "The criteria buyers use to quickly assess shelf potential and vendor readiness." },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(2) .news-meta span:nth-child(2)", en: "6 min read" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(2) h3", en: "Standardizing the sample room: a small step that directly affects win rates" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(2) p", en: "Why many buyer opportunities stall at the sample stage and how to fix it." },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(3) .news-meta span:nth-child(2)", en: "4 min read" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(3) h3", en: "Design export packaging to reduce transit damage and optimize cost" },
      { selector: "main > section:nth-of-type(7) .news-card:nth-child(3) p", en: "A practical view for businesses entering cross-border shipping lanes for the first time." },
      { selector: "main > section:nth-of-type(8) .cta-panel h2", en: "Send a buyer brief or factory profile. We respond within 48 hours." },
      { selector: "main > section:nth-of-type(8) .cta-panel p", en: "Matching Vietnam is built for buyers who need vetted factory shortlists and for Vietnamese businesses that want a more structured export route." },
      { selector: "main > section:nth-of-type(8) .hero-actions a:nth-child(1)", en: "Contact us now" },
      { selector: "main > section:nth-of-type(8) .hero-actions a:nth-child(2)", en: "Learn about Matching Vietnam" },
      { selector: ".footer-copy p:nth-of-type(1)", en: "MCV GLOBAL JSC - Tax ID: 0111272400" },
      { selector: ".footer-copy p:nth-of-type(3)", en: "169 Nguyen Ngoc Vu Building, Hanoi, Vietnam" },
      { selector: ".footer-links > div:nth-child(1) strong", en: "Navigation" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "About Us" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Services" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(3)", en: "Industries" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(4)", en: "Contact" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "about.html": {
    title: "About | Matching Vietnam",
    description:
      "Learn about Matching Vietnam, its vision, mission, and how it builds a direct bridge between international buyers and Vietnamese factories.",
    ops: [
      { selector: ".page-hero-copy h1", en: "Build the shortest bridge from international buyers to Vietnamese factories." },
      { selector: ".page-hero-copy p", en: "Matching Vietnam was built to solve a very specific problem: buyers need reliable supply, and factories need to be presented in a way that helps buyers decide quickly." },
      { selector: ".info-strip span:nth-child(1)", en: "Hanoi, Vietnam" },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "Overview" },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card p", en: "We operate at the intersection of sourcing, sample management, sales enablement, and international go-to-market so each buyer opportunity has a clearer path forward." },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(1)", en: "Verify factory capability before making an introduction" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(2)", en: "Standardize documents, samples, and buyer feedback loops" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(3)", en: "Coordinate with logistics, packaging, and sales channels" },
      { selector: "main > section:nth-of-type(2) .split-section article:nth-child(1) h3", en: "Become the most trusted Vietnamese supply connection platform for international buyers." },
      { selector: "main > section:nth-of-type(2) .split-section article:nth-child(1) p", en: "Beyond opening connections, we aim to standardize how both sides communicate commercially." },
      { selector: "main > section:nth-of-type(2) .split-section article:nth-child(2) h3", en: "Turn Vietnamese manufacturing capability into commercial opportunities that can be activated quickly." },
      { selector: "main > section:nth-of-type(2) .split-section article:nth-child(2) p", en: "It starts with the right data, the right sample, and the right sales story." },
      { selector: "main > section:nth-of-type(3) .section-header h2", en: "Three core values shape how we work." },
      { selector: "main > section:nth-of-type(3) .card:nth-child(1) h3", en: "Trust first" },
      { selector: "main > section:nth-of-type(3) .card:nth-child(1) p", en: "We only introduce capabilities we have verified and can explain clearly to buyers." },
      { selector: "main > section:nth-of-type(3) .card:nth-child(2) h3", en: "Practical execution" },
      { selector: "main > section:nth-of-type(3) .card:nth-child(2) p", en: "We prioritize response speed, sample quality, and decisions that move deals forward step by step." },
      { selector: "main > section:nth-of-type(3) .card:nth-child(3) h3", en: "Long-term thinking" },
      { selector: "main > section:nth-of-type(3) .card:nth-child(3) p", en: "We build buyer-factory relationships on collaboration quality, not short-term promises that cannot be sustained." },
      { selector: "main > section:nth-of-type(4) .section-header h2", en: "Matching Vietnam's growth timeline." },
      { selector: "main > section:nth-of-type(4) .timeline-card:nth-child(1) h3", en: "Built the initial factory network" },
      { selector: "main > section:nth-of-type(4) .timeline-card:nth-child(1) p", en: "Started building a vendor and factory network with export capability across priority categories." },
      { selector: "main > section:nth-of-type(4) .timeline-card:nth-child(2) h3", en: "Standardized the buyer workflow" },
      { selector: "main > section:nth-of-type(4) .timeline-card:nth-child(2) p", en: "Established a structured process for incoming briefs, samples, feedback, and factory introductions." },
      { selector: "main > section:nth-of-type(4) .timeline-card:nth-child(3) h3", en: "Accelerated buyer matching with data and AI sales" },
      { selector: "main > section:nth-of-type(4) .timeline-card:nth-child(3) p", en: "Expanded the commercial pipeline more proactively using category data and demand signals." },
      { selector: "main > section:nth-of-type(5) .quote-card blockquote", en: "\"We believe good supply needs to be told the right way so buyers can decide faster.\"" },
      { selector: "main > section:nth-of-type(5) .quote-card p", en: "That is why Matching Vietnam does not stop at sourcing, but extends into sales enablement and sample execution." },
      { selector: "main > section:nth-of-type(5) .split-section > .card h3", en: "A lean operating team focused on execution." },
      { selector: "main > section:nth-of-type(5) .split-section > .card p", en: "Matching Vietnam is led by a commercial and market development team with direct experience working with buyers, factories, and the export ecosystem." },
      { selector: ".footer-copy p:nth-of-type(2)", en: "169 Nguyen Ngoc Vu Building, Hanoi, Vietnam" },
      { selector: ".footer-links > div:nth-child(1) strong", en: "Navigation" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "Services" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Partners" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(3)", en: "Careers" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "services.html": {
    title: "Services | Matching Vietnam",
    description:
      "Matching Vietnam services include export enablement, factory onboarding, buyer matching, packaging, and cross-border e-commerce.",
    ops: [
      { selector: ".page-hero-copy h1", en: "We design export workflows around buyers, not internal complexity." },
      { selector: ".page-hero-copy p", en: "Each Matching Vietnam service solves a specific bottleneck on the journey from factory to first transaction." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "Five service blocks" },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card p", en: "Enough for Vietnamese businesses to enter international markets with a repeatable operating model." },
      { selector: "#export-enablement > div p", en: "Build the buyer-facing foundation for a factory: profile, capability deck, sample offer, and sales storyline." },
      { selector: "#export-enablement .feature-list li:nth-child(1)", en: "Build sales assets for each product category" },
      { selector: "#export-enablement .feature-list li:nth-child(2)", en: "Standardize the sales story and product specifications" },
      { selector: "#export-enablement .feature-list li:nth-child(3)", en: "Create more clarity during buyer discovery" },
      { selector: "#factory-onboarding > div p", en: "Assess export readiness, profile structure, and delivery capability before go-live." },
      { selector: "#factory-onboarding .feature-list li:nth-child(1)", en: "Review legal documents, certificates, and operating records" },
      { selector: "#factory-onboarding .feature-list li:nth-child(2)", en: "Classify capability against buyer requirements" },
      { selector: "#factory-onboarding .feature-list li:nth-child(3)", en: "Define sample room standards and lead time discipline" },
      { selector: "#buyer-matching > div p", en: "Prioritize buyers with the highest fit and accelerate outbound using category-level data signals." },
      { selector: "#buyer-matching .feature-list li:nth-child(1)", en: "Create buyer shortlists by market and category" },
      { selector: "#buyer-matching .feature-list li:nth-child(2)", en: "Build outreach cadence and sales response flows" },
      { selector: "#buyer-matching .feature-list li:nth-child(3)", en: "Track opportunities and optimize the pipeline" },
      { selector: "#packaging-logistics > div p", en: "Coordinate packaging, labels, packing, and logistics plans for each trade lane." },
      { selector: "#packaging-logistics .feature-list li:nth-child(1)", en: "Optimize packaging for operations and brand image" },
      { selector: "#packaging-logistics .feature-list li:nth-child(2)", en: "Brief logistics early to reduce back-and-forth" },
      { selector: "#packaging-logistics .feature-list li:nth-child(3)", en: "Prepare shipping conditions based on buyer requirements" },
      { selector: "#cross-border-ecommerce > div p", en: "Open a new growth channel for Vietnamese products across digital platforms and international markets." },
      { selector: "#cross-border-ecommerce .feature-list li:nth-child(1)", en: "Position the right categories for online channels" },
      { selector: "#cross-border-ecommerce .feature-list li:nth-child(2)", en: "Prepare listing content and commercial imagery" },
      { selector: "#cross-border-ecommerce .feature-list li:nth-child(3)", en: "Connect the required fulfillment operations" },
      { selector: "main > section:nth-of-type(3) .form-panel h2", en: "Send your request and we will recommend the right service." },
      { selector: "main > section:nth-of-type(3) .form-note", en: "This client-side demo form simulates the first contact flow." },
      { type: "label", selector: "main > section:nth-of-type(3) form .field-grid:nth-of-type(1) label:nth-child(1)", en: "Full name" },
      { type: "label", selector: "main > section:nth-of-type(3) form .field-grid:nth-of-type(1) label:nth-child(2)", en: "Work email" },
      { type: "label", selector: "main > section:nth-of-type(3) form .field-grid:nth-of-type(2) label:nth-child(1)", en: "Request type" },
      { type: "label", selector: "main > section:nth-of-type(3) form .field-grid:nth-of-type(2) label:nth-child(2)", en: "Company" },
      { type: "label", selector: "main > section:nth-of-type(3) form > label", en: "Describe your request" },
      { type: "attr", selector: 'input[name="name"]', attr: "placeholder", en: "John Smith" },
      { type: "attr", selector: 'input[name="company"]', attr: "placeholder", en: "Company name" },
      { type: "attr", selector: 'textarea[name="message"]', attr: "placeholder", en: "Describe the buyer brief or the product context you are working with" },
      { selector: "main > section:nth-of-type(3) .form-success", en: "Your information has been captured in the demo. Please contact us directly by hotline or email for real handling." },
      { selector: "main > section:nth-of-type(3) button[type='submit']", en: "Send request" },
      { selector: "main > section:nth-of-type(3) .contact-panel .card h3", en: "Typical outputs clients need" },
      { selector: "main > section:nth-of-type(3) .contact-panel .check-list li:nth-child(1)", en: "A pre-screened shortlist of factories that fits the brief" },
      { selector: "main > section:nth-of-type(3) .contact-panel .check-list li:nth-child(2)", en: "A clear sales profile and sample workflow" },
      { selector: "main > section:nth-of-type(3) .contact-panel .check-list li:nth-child(3)", en: "A buyer-ready execution roadmap for the next 30 to 90 days" },
      { selector: ".footer-links > div:nth-child(1) strong", en: "Quick links" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "Industries" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Newsroom" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "industries.html": {
    title: "Industries | Matching Vietnam",
    description:
      "Matching Vietnam focuses on priority industries including food and beverage, agricultural products, packaging, and herbs wellness.",
    ops: [
      { selector: ".page-hero-copy h1", en: "Focused on categories with manufacturing strength and a clear origin story." },
      { selector: ".page-hero-copy p", en: "Matching Vietnam prioritizes industries that buyers can assess quickly for quality, packaging, and growth potential." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "How we choose categories" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(1)", en: "Supply advantage or stable manufacturing capability" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(2)", en: "Easy to prove through samples and capability profiles" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(3)", en: "Able to grow further in private label or e-commerce" },
      { selector: "#food-beverage h2", en: "Food and beverage products with a clear Vietnamese origin advantage." },
      { selector: "#food-beverage > div p", en: "A fit for buyers looking for products differentiated by flavor, local story, or fresh positioning." },
      { selector: "#food-beverage .card h3", en: "Representative products" },
      { selector: "#food-beverage .card p", en: "Snacks, signature drinks, processed ingredients, and F&B gifting products that can scale under private label." },
      { selector: "#agricultural-products h2", en: "Agricultural products that require clear supply documentation and consistent processing." },
      { selector: "#agricultural-products > div p", en: "Focused on pre-processing capability, quality standards, and the ability to meet buyer briefs by shipment lot." },
      { selector: "#agricultural-products .card h3", en: "Representative products" },
      { selector: "#agricultural-products .card p", en: "Agricultural ingredients, processed products, and items that can tell a compelling origin story." },
      { selector: "#shopping-bags-packaging h2", en: "Packaging and shopping bags for retail, gifting, and private-label programs." },
      { selector: "#shopping-bags-packaging > div p", en: "Buyers often need a quick read on materials, finish quality, and production flexibility." },
      { selector: "#shopping-bags-packaging .card h3", en: "Representative products" },
      { selector: "#shopping-bags-packaging .card p", en: "Paper bags, flexible packaging, rigid boxes, and packaging sets for new brands or retail chains." },
      { selector: "#herbs-wellness h2", en: "Wellness products with herbal roots and cultural differentiation." },
      { selector: "#herbs-wellness > div p", en: "This is a buyer group that cares deeply about sample quality, clean brand storytelling, and packaging." },
      { selector: "#herbs-wellness .card h3", en: "Representative products" },
      { selector: "#herbs-wellness .card p", en: "Herbs, teas, health-support products, and wellness gifts positioned for international markets." },
      { selector: ".footer-copy p", en: "Matching Vietnam is positioned around a factory-first and buyer-ready approach." },
      { selector: ".footer-links > div:nth-child(1) strong", en: "See more" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "Services" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Partners" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "partners.html": {
    title: "Partners | Matching Vietnam",
    description:
      "Matching Vietnam's partner ecosystem includes factories, vendors, packaging, and logistics partners.",
    ops: [
      { selector: ".page-hero-copy h1", en: "Build trusted shortlists through a curated partner ecosystem." },
      { selector: ".page-hero-copy p", en: "Matching Vietnam works with factories, packaging partners, inspection, and logistics providers so buyers do not have to assemble each piece themselves." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "Partner selection criteria" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(1)", en: "Clear execution capability" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(2)", en: "Fast response and transparent communication" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(3)", en: "Ready to work to international buyer standards" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(1) p", en: "Industry: Food & Beverage" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(2) p", en: "Industry: Agricultural Products" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(3) p", en: "Industry: Shopping Bags & Packaging" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(3) .partner-tags span:nth-child(1)", en: "Ho Chi Minh City" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(4) p", en: "Industry: Herbs & Wellness" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(5) p", en: "Support area: Packaging & Logistics" },
      { selector: "main > section:nth-of-type(2) .partner-card:nth-child(6) p", en: "Support area: Factory Onboarding" },
      { selector: "main > section:nth-of-type(3) .cta-panel h2", en: "Apply to join the Matching Vietnam partner ecosystem." },
      { selector: "main > section:nth-of-type(3) .cta-panel p", en: "If your business offers manufacturing capability or export support services that fit, send your profile for review." },
      { selector: "main > section:nth-of-type(3) .btn", en: "Send partner profile" },
      { selector: ".footer-copy p", en: "The partner ecosystem is built so buyers can move from discovery to execution faster." },
      { selector: ".footer-links > div:nth-child(1) strong", en: "Links" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "Industries" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Contact" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "sustainability.html": {
    title: "Sustainability | Matching Vietnam",
    description:
      "Matching Vietnam's sustainability commitments are built on ESG, responsible sourcing, and CSR activity.",
    ops: [
      { selector: ".page-hero-copy h1", en: "Sustainability is the condition for long-term buyer trust." },
      { selector: ".page-hero-copy p", en: "Matching Vietnam weaves ESG into supplier screening, product storytelling, and the way we collaborate with partners." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "ESG focus" },
      { selector: "main > section:nth-of-type(2) .card:nth-child(1) p", en: "Encourage smarter packaging, better waste management, and supply sources that are conscious of environmental impact." },
      { selector: "main > section:nth-of-type(2) .card:nth-child(2) p", en: "Prioritize partners with transparent operations, stable working conditions, and respectful collaboration." },
      { selector: "main > section:nth-of-type(2) .card:nth-child(3) p", en: "Standardize business data, legal profiles, and response processes so buyers can assess suppliers with confidence." },
      { selector: "main > section:nth-of-type(3) .split-section article:nth-child(1) h3", en: "Matching Vietnam commitments" },
      { selector: "main > section:nth-of-type(3) .split-section article:nth-child(1) .check-list li:nth-child(1)", en: "Never introduce unverified capability" },
      { selector: "main > section:nth-of-type(3) .split-section article:nth-child(1) .check-list li:nth-child(2)", en: "Be transparent about lead time, sample status, and export readiness" },
      { selector: "main > section:nth-of-type(3) .split-section article:nth-child(1) .check-list li:nth-child(3)", en: "Encourage supply partners with a long-term development story" },
      { selector: "main > section:nth-of-type(3) .split-section article:nth-child(2) h3", en: "Community responsibility" },
      { selector: "main > section:nth-of-type(3) .split-section article:nth-child(2) p", en: "Matching Vietnam aims to connect commercial growth with stronger operating standards for Vietnamese businesses entering export markets." },
      { selector: ".footer-copy p", en: "ESG is not presentation polish. It is the condition that makes buyers trust supply capability." },
      { selector: ".footer-links > div:nth-child(1) strong", en: "Navigation" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "About Us" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Services" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "newsroom.html": {
    title: "Newsroom | Matching Vietnam",
    description:
      "News and market views from Matching Vietnam on buyer matching, factory readiness, and export logistics.",
    ops: [
      { selector: ".page-hero-copy h1", en: "Short articles focused on what buyers and factories actually care about." },
      { selector: ".page-hero-copy p", en: "From market signals to sample execution, Matching Vietnam's newsroom prioritizes execution-focused insight over generic news." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "Featured topics" },
      { selector: "main > section:nth-of-type(2) .featured-story h2", en: "How do international buyers assess a factory in the first 15 minutes?" },
      { selector: "main > section:nth-of-type(2) .featured-story p", en: "A guide to preparing capability proof, sample cues, and narrative so opportunities do not stall in the first round." },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(1) .news-meta span:nth-child(2)", en: "6 min read" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(1) h3", en: "When does a buyer need a sample immediately, and when is capability proof enough?" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(1) p", en: "Understanding the right moment for samples helps reduce lead time and avoid wasted iteration." },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(2) .news-meta span:nth-child(2)", en: "4 min read" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(2) h3", en: "Five common mistakes in factory profiles that cause opportunities to be ignored" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(2) p", en: "The points buyers judge quickly but many suppliers still miss in their sales materials." },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(3) .news-meta span:nth-child(2)", en: "5 min read" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(3) h3", en: "Vietnam wellness: what evidence do buyers prioritize more than brand story?" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(3) p", en: "The balance between origin story, data sheet, and samples in an emerging category." },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(4) .news-meta span:nth-child(2)", en: "4 min read" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(4) h3", en: "Packaging is not just about appearance: three checks buyers use to judge readiness" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(4) p", en: "Packaging signals factory maturity and the brand's ability to scale." },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(5) .news-meta span:nth-child(2)", en: "7 min read" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(5) h3", en: "How do you keep buyer outbound from becoming too scattered?" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(5) p", en: "Use data, positioning, and industry focus to build a tighter, more effective pipeline." },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(6) .news-meta span:nth-child(2)", en: "3 min read" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(6) h3", en: "How many back-and-forth loops can be saved by preparing logistics briefings early?" },
      { selector: "main > section:nth-of-type(3) .news-card:nth-child(6) p", en: "A few components should be clarified as soon as the buyer sends an inquiry to avoid delays later." },
      { selector: ".footer-copy p", en: "Matching Vietnam's newsroom focuses on execution rather than jargon." },
      { selector: ".footer-links > div:nth-child(1) strong", en: "See more" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "Services" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Contact" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "careers.html": {
    title: "Careers | Matching Vietnam",
    description:
      "Career opportunities at Matching Vietnam across operations, partner development, and international commerce.",
    ops: [
      { selector: ".page-hero-copy h1", en: "We look for people who care about execution, clear work, and building real markets." },
      { selector: ".page-hero-copy p", en: "Matching Vietnam fits people who want to stay close to buyers, close to factories, and close to the real impact of their work on live deals." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "How we work" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(1)", en: "Prioritize response speed and personal accountability" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(2)", en: "Work lean, stay practical, and stay close to commerce" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(3)", en: "Respect data, commitments, and execution quality" },
      { selector: "main > section:nth-of-type(2) .culture-card:nth-child(1) p", en: "Understand how factories operate so communication with buyers becomes more grounded." },
      { selector: "main > section:nth-of-type(2) .culture-card:nth-child(2) p", en: "Know which signals matter inside a commercial opportunity and respond to the right issues." },
      { selector: "main > section:nth-of-type(2) .culture-card:nth-child(3) p", en: "Do not wait for instructions on every small task. Drive the work to a finished outcome." },
      { selector: "main > section:nth-of-type(3) .section-header h2", en: "Open positions" },
      { selector: "main > section:nth-of-type(3) .job-card:nth-child(1) p", en: "Build and assess factory, vendor, and service partner networks." },
      { selector: "main > section:nth-of-type(3) .job-card:nth-child(1) .job-meta span:nth-child(1)", en: "Hanoi" },
      { selector: "main > section:nth-of-type(3) .job-card:nth-child(2) p", en: "Support buyer matching, pipeline management, and commercial response coordination." },
      { selector: "main > section:nth-of-type(3) .job-card:nth-child(2) .job-meta span:nth-child(1)", en: "Hybrid" },
      { selector: "main > section:nth-of-type(3) .job-card:nth-child(3) p", en: "Create sales assets, category insights, and buyer-facing materials for each category." },
      { selector: "main > section:nth-of-type(3) .job-card:nth-child(3) .job-meta span:nth-child(1)", en: "Hanoi" },
      { selector: "main > section:nth-of-type(4) .form-panel h2", en: "Send your application." },
      { selector: "main > section:nth-of-type(4) .form-note", en: "This is a client-side demo form. For real applications, please send your CV to the company email." },
      { type: "label", selector: "main > section:nth-of-type(4) form .field-grid:nth-of-type(1) label:nth-child(1)", en: "Full name" },
      { type: "label", selector: "main > section:nth-of-type(4) form .field-grid:nth-of-type(1) label:nth-child(2)", en: "Email" },
      { type: "label", selector: "main > section:nth-of-type(4) form .field-grid:nth-of-type(2) label:nth-child(1)", en: "Position" },
      { type: "label", selector: "main > section:nth-of-type(4) form .field-grid:nth-of-type(2) label:nth-child(2)", en: "Phone number" },
      { type: "label", selector: "main > section:nth-of-type(4) form > label", en: "Short introduction" },
      { type: "attr", selector: 'textarea[name="message"]', attr: "placeholder", en: "Relevant experience, motivation to apply, and your strongest points" },
      { selector: "main > section:nth-of-type(4) .form-success", en: "Captured in the demo. For a real application, please send your CV to ceo@matchingvietnam.com." },
      { selector: "main > section:nth-of-type(4) button[type='submit']", en: "Send application" },
      { selector: "main > section:nth-of-type(4) .contact-panel .card h3", en: "A strong fit if you" },
      { selector: "main > section:nth-of-type(4) .contact-panel .check-list li:nth-child(1)", en: "Like working on real commercial problems" },
      { selector: "main > section:nth-of-type(4) .contact-panel .check-list li:nth-child(2)", en: "Communicate clearly and manage your own pace" },
      { selector: "main > section:nth-of-type(4) .contact-panel .check-list li:nth-child(3)", en: "Care about sourcing, buyer behavior, and international growth" },
      { selector: ".footer-copy p", en: "Matching Vietnam hires people who can move work to a real output." },
      { selector: ".footer-links > div:nth-child(1) strong", en: "See more" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "About Us" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Contact" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  },
  "contact.html": {
    title: "Contact | Matching Vietnam",
    description:
      "Contact Matching Vietnam to send a buyer brief, factory profile, or export consultation request.",
    ops: [
      { selector: ".page-hero-copy h1", en: "Send a buyer brief, factory profile, or partnership request." },
      { selector: ".page-hero-copy p", en: "We respond to initial commercial requests within 48 business hours." },
      { selector: "main > section:nth-of-type(1) .page-hero-grid > .card h3", en: "Contact details" },
      { selector: "main > section:nth-of-type(1) .check-list li:nth-child(3)", en: "Address: 169 Nguyen Ngoc Vu Building, Hanoi, Vietnam" },
      { selector: "main > section:nth-of-type(2) .form-panel h2", en: "Start with a short brief." },
      { type: "label", selector: "main > section:nth-of-type(2) form .field-grid:nth-of-type(1) label:nth-child(1)", en: "Full name" },
      { type: "label", selector: "main > section:nth-of-type(2) form .field-grid:nth-of-type(1) label:nth-child(2)", en: "Email" },
      { type: "label", selector: "main > section:nth-of-type(2) form .field-grid:nth-of-type(2) label:nth-child(1)", en: "Contact type" },
      { type: "label", selector: "main > section:nth-of-type(2) form .field-grid:nth-of-type(2) label:nth-child(2)", en: "Phone number" },
      { type: "label", selector: "main > section:nth-of-type(2) form > label", en: "Message" },
      { type: "attr", selector: 'textarea[name="message"]', attr: "placeholder", en: "Describe the product group, target market, or the support you need" },
      { selector: "main > section:nth-of-type(2) .form-success", en: "The demo has captured your information. For real handling, please call the hotline or email us directly." },
      { selector: "main > section:nth-of-type(2) button[type='submit']", en: "Send contact request" },
      { selector: "main > section:nth-of-type(2) .contact-panel .card h3", en: "Working hours" },
      { selector: "main > section:nth-of-type(2) .contact-panel .card p:nth-of-type(1)", en: "Monday to Friday: 08:30 - 17:30" },
      { selector: "main > section:nth-of-type(2) .contact-panel .card p:nth-of-type(2)", en: "Buyer brief responses are prioritized during office hours." },
      { type: "attr", selector: ".map-frame", attr: "title", en: "Matching Vietnam office map" },
      { selector: ".footer-copy p:nth-of-type(1)", en: "MCV GLOBAL JSC - Tax ID: 0111272400" },
      { selector: ".footer-copy p:nth-of-type(2)", en: "169 Nguyen Ngoc Vu Building, Hanoi, Vietnam" },
      { selector: ".footer-links > div:nth-child(1) strong", en: "Quick links" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(1)", en: "Services" },
      { selector: ".footer-links > div:nth-child(1) a:nth-of-type(2)", en: "Partners" },
      { selector: ".footer-links > div:nth-child(2) strong", en: "Contact" }
    ]
  }
};

const getStoredLang = () => {
  const lang = window.localStorage.getItem("siteLang");
  return lang === "en" ? "en" : "vi";
};

const getLabelText = (node) => {
  const textNode = Array.from(node.childNodes).find(
    (child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim()
  );
  return textNode ? textNode.textContent.trim() : "";
};

const setLabelText = (node, value) => {
  const textNode = Array.from(node.childNodes).find(
    (child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim()
  );

  if (textNode) {
    textNode.textContent = `${value}\n`;
    return;
  }

  node.insertBefore(document.createTextNode(`${value}\n`), node.firstChild);
};

const getOperationValue = (operation) => {
  const type = operation.type || "text";
  const node = document.querySelector(operation.selector);

  if (!node) {
    return null;
  }

  if (type === "attr") {
    return node.getAttribute(operation.attr);
  }

  if (type === "label") {
    return getLabelText(node);
  }

  return node.textContent;
};

const applyOperationValue = (operation, value) => {
  const type = operation.type || "text";
  const node = document.querySelector(operation.selector);

  if (!node || value == null) {
    return;
  }

  if (type === "attr") {
    node.setAttribute(operation.attr, value);
    return;
  }

  if (type === "label") {
    setLabelText(node, value);
    return;
  }

  node.textContent = value;
};

const capturePageState = (config) => {
  if (!config) {
    return null;
  }

  return {
    title: document.title,
    description: metaDescription ? metaDescription.getAttribute("content") : null,
    ops: config.ops.map((operation) => ({
      ...operation,
      original: getOperationValue(operation)
    }))
  };
};

const restorePageState = (state) => {
  if (!state) {
    return;
  }

  document.title = state.title;

  if (metaDescription && state.description != null) {
    metaDescription.setAttribute("content", state.description);
  }

  state.ops.forEach((operation) => {
    applyOperationValue(operation, operation.original);
  });
};

const applyHeaderLanguage = (lang) => {
  const dict = headerTranslations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((node) => {
    const key = node.dataset.i18nKey;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  if (toggle) {
    toggle.setAttribute("aria-label", dict.menu);
  }

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const originalPageState = capturePageState(pageTranslations[pathname]);

const applyPageLanguage = (lang) => {
  const config = pageTranslations[pathname];
  if (!config) {
    return;
  }

  if (lang !== "en") {
    restorePageState(originalPageState);
    return;
  }

  if (config.title) {
    document.title = config.title;
  }

  if (metaDescription && config.description) {
    metaDescription.setAttribute("content", config.description);
  }

  config.ops.forEach((operation) => {
    applyOperationValue(operation, operation.en);
  });
};

const applyLanguage = (lang) => {
  applyHeaderLanguage(lang);
  applyPageLanguage(lang);
};

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-nav] a").forEach((link) => {
  const href = link.getAttribute("href");
  const normalized = href ? href.split("#")[0] : "";
  if (normalized === pathname || (pathname === "" && normalized === "index.html")) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-match]").forEach((item) => {
  const matches = item.dataset.match.split(",");
  if (matches.includes(pathname)) {
    item.classList.add("is-active");
  }
});

submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".nav-item");
    if (!item) {
      return;
    }

    const shouldOpen = !item.classList.contains("is-open");
    document.querySelectorAll(".nav-item.is-open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("is-open");
        const openButton = openItem.querySelector("[data-submenu-toggle]");
        if (openButton) {
          openButton.setAttribute("aria-expanded", "false");
        }
      }
    });

    item.classList.toggle("is-open", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang === "en" ? "en" : "vi";
    window.localStorage.setItem("siteLang", lang);
    applyLanguage(lang);
  });
});

applyLanguage(getStoredLang());

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((item) => {
  revealObserver.observe(item);
});

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const el = entry.target;
      const target = Number(el.dataset.target || 0);
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${target}${suffix}`;
        }
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll("[data-counter]").forEach((item) => {
  counterObserver.observe(item);
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = form.querySelector(".form-success");
    form.reset();

    if (success) {
      success.classList.add("is-visible");
      window.setTimeout(() => success.classList.remove("is-visible"), 4000);
    }
  });
});
