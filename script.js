/**
 * TEXTILE ENGINEER PORTFOLIO - JAVASCRIPT SYSTEM
 * Professional Portfolio for Waseur Rahman (Textile Engineer)
 * 
 * Includes:
 * 1. Centralized Image Management System (Placeholder-First Architecture)
 * 2. Vanilla JS Lightbox for Gallery
 * 3. Case Study Details Modal
 * 4. Theme Manager (Dark/Light with LocalStorage persistence)
 * 5. Category Filters for Projects & Skills
 * 6. Responsive Mobile Navigation
 * 7. Accessible Form Validation & Toast Notifications
 */

/* ==========================================================================
   1. Central Image Management Configuration
   ==========================================================================
   HOW TO USE:
   - Leave `src: ""` empty to display a polished, responsive CSS placeholder.
   - When ready, paste the relative file path into `src` (e.g. "assets/images/profile/profile.jpg").
   - You can add images one at a time without breaking the layout.
   ========================================================================== */
const IMAGES = {
  profile: {
    src: "assets/images/profile/profile.jpg",
    alt: "Profile photo of Waseur Rahman - Debater & Textile Engineer",
    recommendedSize: "400 × 400px (1:1)",
    label: "Waseur Rahman",
    hint: "assets/images/profile/profile.jpg"
  },
  about: {
    src: "assets/images/profile/about.jpg",
    alt: "Waseur Rahman at Ha-Meem Group Industrial Complex",
    recommendedSize: "500 × 375px (4:3)",
    label: "Ha-Meem Group Industrial Fieldwork",
    hint: "assets/images/profile/about.jpg"
  },
  hero: {
    src: "assets/images/hero/hero.jpg",
    alt: "Waseur Rahman presenting BUFT Industrial Training Report",
    recommendedSize: "1920 × 600px (Wide)",
    label: "BUFT Textile Engineering Defense",
    hint: "assets/images/hero/hero.jpg"
  },
  projects: [
    {
      src: "assets/images/projects/project-1.jpg",
      alt: "Garment manufacturing and sewing line quality inspection at Ha-Meem Group",
      recommendedSize: "600 × 340px (16:9)",
      label: "Apparel Line Quality & Productivity",
      hint: "assets/images/projects/project-1.jpg"
    },
    {
      src: "assets/images/projects/project-2.jpg",
      alt: "Dhaka International Textile Machinery Exhibition (DTG) - Ring frame and drawing rollers",
      recommendedSize: "600 × 340px (16:9)",
      label: "Spinning & Machinery Engineering",
      hint: "assets/images/projects/project-2.jpg"
    },
    {
      src: "assets/images/projects/project-3.jpg",
      alt: "BUFT Apparel Arena 2026 Champions - The Textile Institute & Entrust Group",
      recommendedSize: "600 × 340px (16:9)",
      label: "BUFT Apparel Arena 2026 Champions",
      hint: "assets/images/projects/project-3.jpg"
    },
    {
      src: "assets/images/projects/project-4.jpg",
      alt: "IGNITE Champions Team - BUFT Merchandising Club",
      recommendedSize: "600 × 340px (16:9)",
      label: "IGNITE Champions Presentation",
      hint: "assets/images/projects/project-4.jpg"
    },
    {
      src: "",  // Placeholders remain active for future project uploads!
      alt: "Sustainable denim and gaseous ozone washing trial",
      recommendedSize: "600 × 340px (16:9)",
      label: "Sustainable Denim & Ozone Finishing",
      hint: "assets/images/projects/project-5.jpg"
    },
    {
      src: "",  // Placeholders remain active for future project uploads!
      alt: "Spectrophotometric color formulation and fastness testing lab",
      recommendedSize: "600 × 340px (16:9)",
      label: "Advanced Textile QA Lab & CCM",
      hint: "assets/images/projects/project-6.jpg"
    }
  ],
  gallery: [
    {
      src: "assets/images/hero/hero.jpg",
      alt: "Waseur Rahman presenting BUFT Industrial Training Report",
      caption: "Industrial Training Report Presentation & Defense — BGMEA University of Fashion & Technology (BUFT)",
      recommendedSize: "800 × 600px",
      label: "BUFT Training Defense"
    },
    {
      src: "assets/images/profile/about.jpg",
      alt: "Waseur Rahman at Ha-Meem Group Industrial Complex",
      caption: "Industrial Operations & Plant Exposure at Ha-Meem Group, Bangladesh",
      recommendedSize: "800 × 600px",
      label: "Ha-Meem Group Complex"
    },
    {
      src: "assets/images/projects/project-1.jpg",
      alt: "Apparel Manufacturing & Sewing Production Line Inspection",
      caption: "Apparel Manufacturing & Sewing Floor Quality Inspection (Ha-Meem Group)",
      recommendedSize: "800 × 600px",
      label: "Sewing Floor Inspection"
    },
    {
      src: "assets/images/projects/project-2.jpg",
      alt: "Dhaka International Textile Machinery Exhibition (DTG)",
      caption: "DTG International Textile Machinery Expo — Ring frame and draw frame component review",
      recommendedSize: "800 × 600px",
      label: "DTG Machinery Expo"
    },
    {
      src: "assets/images/projects/project-3.jpg",
      alt: "BUFT Apparel Arena 2026 Champions",
      caption: "Champions of BUFT Apparel Arena 2026 — Organized by BUFT Merchandising Club & The Textile Institute",
      recommendedSize: "800 × 600px",
      label: "Apparel Arena 2026"
    },
    {
      src: "assets/images/projects/project-4.jpg",
      alt: "IGNITE Champions Team - BUFT Merchandising Club",
      caption: "Champions Team — IGNITE Public Speaking & Case Presentation Arena (BUFT)",
      recommendedSize: "800 × 600px",
      label: "IGNITE Champions"
    },
    {
      src: "assets/images/hero/hero-award.jpg",
      alt: "BUFT International Model United Nations Award",
      caption: "Award of Accomplishment — BUFT International Model United Nations",
      recommendedSize: "800 × 600px",
      label: "BUFT MUN Award"
    },
    {
      src: "assets/images/hero/rahmat-group-visit.jpg",
      alt: "Rahmat Group Industrial Field Visit",
      caption: "Industrial Field Visit & Manufacturing Mill Exposure at Rahmat Group of Industries",
      recommendedSize: "800 × 600px",
      label: "Rahmat Group Mill Visit"
    },
    {
      src: "assets/images/hero/speaking-award.jpg",
      alt: "Winner - Public Speaking (English) at Southeast University Lit Fest",
      caption: "Winner — Public Speaking (English), Southeast University Lit Fest 1.0",
      recommendedSize: "800 × 600px",
      label: "SEU Speaking Winner"
    }
  ]
};

/* ==========================================================================
   2. Comprehensive Case Studies Data
   ========================================================================== */
const CASE_STUDIES = [
  {
    id: 0,
    title: "Industrial Apparel Manufacturing & Quality Control Optimization",
    category: "Garment Manufacturing & Industrial Engineering",
    impact: "AQL 1.5 Quality Compliance | Critical Stitch Defect Reduction",
    date: "Ha-Meem Group Industrial Fieldwork",
    client: "Ha-Meem Group / Apparel Division",
    overview: "Conducted hands-on technical fieldwork across high-capacity sewing and finishing floors at Ha-Meem Group, optimizing seam integrity, critical stitch inspection, and line throughput.",
    challenge: "High-speed assembly of denim and woven bottoms can generate critical defects including broken stitches, skipped stitches, and seam puckering, requiring standardized inline monitoring without slowing line cadence.",
    solution: "Analyzed sewing machine needle temperature, thread tension profiling across Juki lockstitch units, and implemented standardized visual inspection checkpoints at critical assembly stages.",
    results: [
      "Standardized inline quality audit protocol aligned with AQL 1.5 international acceptance levels.",
      "Reduced repair rework rates on critical waist-band and inseam joinings.",
      "Demonstrated improved thread tension balancing across diverse denim fabric weights (10 oz to 14 oz).",
      "Documented comprehensive industrial training findings for BUFT academic defense."
    ],
    standards: "AQL 1.5, ASTM D6193 (Stitches & Seams), ISO 4915, ISO 9001:2015"
  },
  {
    id: 1,
    title: "Advanced Spinning Machinery & Component Evaluation",
    category: "Spinning & Machinery Engineering",
    impact: "High-Speed Dynamic Balancing | Precision Drafting Roller Analysis",
    date: "DTG International Expo",
    client: "Dhaka International Textile Machinery Exhibition (DTG)",
    overview: "Evaluated high-precision drafting rollers, speed frame arbors, and plastic bobbin technology (SOKI, Teknoplast) during the international textile machinery exhibition.",
    challenge: "Modern high-speed ring spinning frames (exceeding 20,000 RPM) demand micron-level roller concentricity and specialized alloy surface treatments to avoid roving draft waves and end-break spikes.",
    solution: "Performed comparative structural analysis of aerospace heat-treated alloy steel top rollers, ball thrust arrangements, and low-friction bobbin geometries to maximize yarn count uniformity.",
    results: [
      "Evaluated top roller maintenance intervals and hardness specifications (Shore A 68° vs 75°).",
      "Assessed impact of bobbin tube concentricity on centrifugal spindle vibration at peak RPM.",
      "Synthesized technical findings on comber detaching rollers for high-yield combed cotton production.",
      "Formulated machinery selection recommendations for modern spinning plants."
    ],
    standards: "ISO 2060, ASTM D1425 (Yarn Unevenness), Uster Statistics 6"
  },
  {
    id: 2,
    title: "BUFT Apparel Arena 2026 — National Championship Strategy",
    category: "Apparel Strategy & Merchandising",
    impact: "1st Place Champions (25,000 BDT) | The Textile Institute",
    date: "2026",
    client: "BUFT Merchandising Club, Entrust Group & The Textile Institute",
    overview: "Crowned National Champions in the prestigious BUFT Apparel Arena 2026, delivering an end-to-end industrial merchandising, costing, and sustainable supply-chain case study.",
    challenge: "Competing against top national textile engineering and merchandising teams to create a viable, circular fashion collection balancing material science, compliance, and production margin constraints.",
    solution: "Engineered an integrated product portfolio leveraging recycled PET-cotton blends, low-liquor dyeing, accurate consumption factoring, and strategic supply chain mapping.",
    results: [
      "Secured 1st Place Championship out of dozens of competing textile institutions nationwide.",
      "Awarded 25,000 BDT prize money and championship crests from The Textile Institute.",
      "Praised by industry judges for rigorous manufacturing feasibility and accurate costing models.",
      "Demonstrated strategic leadership, public presentation mastery, and team execution."
    ],
    standards: "Sustainable Garment Costing, Consumption Calculation, Higg Index FEM"
  },
  {
    id: 3,
    title: "IGNITE Public Speaking Arena — Champion Case Presentation",
    category: "Technical Communications & Public Speaking",
    impact: "1st Place Champion Team | BUFT Merchandising Club",
    date: "2024 - 2025",
    client: "BUFT Merchandising Club",
    overview: "Led the champion team in the IGNITE national case presentation and public speaking competition, articulating the commercial and environmental trajectory of modern textile engineering.",
    challenge: "Communicating intricate technical textile engineering concepts—such as closed-loop wet processing and technical textiles—into compelling, actionable strategies for industry executives.",
    solution: "Synthesized technical lab data, regulatory policies (OEKO-TEX, ZDHC), and financial returns into a cohesive, persuasive keynote presentation.",
    results: [
      "Achieved 1st Place Champion Team recognition in the IGNITE speaking arena.",
      "Demonstrated exceptional articulation, technical debate capability, and communication clarity.",
      "Recognized for excellence in bridge-building between engineering and corporate management."
    ],
    standards: "Strategic Technical Presentation, Industrial Case Analysis"
  },
  {
    id: 4,
    title: "Sustainable Denim & Ozone Finishing Optimization",
    category: "Sustainable Processing",
    impact: "-68% Water Usage | Zero Hazardous Bleach",
    date: "2024",
    client: "EcoWear Global Mills",
    overview: "Spearheaded an industrial pilot to transition traditional sodium hypochlorite bleaching to high-efficiency gaseous ozone washing and bio-enzymatic abrasion in a 50,000 meters/month denim facility.",
    challenge: "Traditional denim finishing consumed over 70 liters of fresh water per pair of jeans while discharging high TDS and residual chlorine into effluent treatment plants (ETP). The challenge was achieving high-contrast wash effects and authentic vintage fade without degrading fabric tensile strength.",
    solution: "Calibrated micro-mist ozone application cycles coupled with cellulase enzyme washing at neutral pH. Implemented continuous spectrophotometric tracking to guarantee lot-to-lot color repeatability.",
    results: [
      "Reduced water consumption from 72L to 23L per garment (-68%).",
      "Eliminated sodium hypochlorite completely, reducing ETP chemical load by 40%.",
      "Maintained warp tensile strength retention above 88% (ASTM D5034).",
      "Earned OEKO-TEX Standard 100 Annex 6 certification for finished lots."
    ],
    standards: "ASTM D5034, AATCC 8, AATCC 61 (2A), OEKO-TEX Standard 100"
  },
  {
    id: 5,
    title: "Advanced Textile QA Lab & Spectrophotometric Color Matching",
    category: "Quality Assurance & Color Chemistry",
    impact: "ΔE < 0.65 Metamerism Control | First-Time-Right Dyeing at 93%",
    date: "2023 - 2024",
    client: "Apex Quality Dyeing House",
    overview: "Built and standardized a central textile quality testing and computerized color matching (CCM) laboratory compliant with international accreditation protocols.",
    challenge: "The dyehouse suffered from a 68% first-time-right (FTR) batch rate, causing costly re-dyeing, high shade metamerism under D65 vs Store Light (TL84), and customer claim rejections.",
    solution: "Installed Datacolor 1000 benchtop spectrophotometer with computerized recipe prediction. Calibrated optical absorption and scattering coefficients (K/S curves) across 45 primary reactive and disperse dye classes under strict relative humidity (65% ± 2%) and temperature controls.",
    results: [
      "Elevated First-Time-Right (FTR) dyeing production rate from 68% to 93.4%.",
      "Tightened production batch tolerance to ΔE*cmc < 0.65 across all fashion shades.",
      "Cut laboratory lab-dip approval cycle from 6 days down to 36 hours.",
      "Achieved laboratory accreditation compliance under ISO/IEC 17025 standard."
    ],
    standards: "AATCC EP1 (Instrumental Color Evaluation), ISO 105-J03, ISO/IEC 17025"
  }
];

/* ==========================================================================
   3. Image Loader & Placeholder Renderer Engine
   ========================================================================== */
class ImageSystem {
  static init() {
    this.renderSingleImage('profile-img-slot', IMAGES.profile, 'aspect-1-1');
    this.renderSingleImage('about-img-slot', IMAGES.about, 'aspect-4-3');
    this.renderHeroMedia('hero-img-slot', IMAGES.hero);
    this.renderProjectImages();
    this.renderGallery();
  }

  /**
   * Helper to create SVG Icon element based on type
   */
  static getSvgIcon(type) {
    if (type === 'camera') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;
    }
    if (type === 'fabric') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`;
    }
    if (type === 'lab') {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4.69 18.5a2 2 0 0 0 1.62 3.5h15.38a2 2 0 0 0 1.62-3.5L14 9.31V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`;
    }
    // Default image icon
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
  }

  /**
   * Generates HTML markup for a styled CSS placeholder block
   */
  static createPlaceholderMarkup(config, iconType = 'fabric') {
    const title = config.label || "Photo Coming Soon";
    const size = config.recommendedSize || "Standard Ratio";
    const hint = config.hint || "Add path in script.js";

    return `
      <div class="placeholder-box" aria-label="${config.alt}">
        <div class="placeholder-icon-wrap">
          ${this.getSvgIcon(iconType)}
        </div>
        <div class="placeholder-text">
          <span class="placeholder-title">${title}</span>
          <span class="placeholder-tag">${size}</span>
          <span class="placeholder-hint">${hint}</span>
        </div>
      </div>
    `;
  }

  /**
   * Renders a single image slot (Profile, About, etc.)
   */
  static renderSingleImage(containerId, config, aspectClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.className = `img-slot ${aspectClass}`;
    container.innerHTML = '';

    if (config && config.src && config.src.trim() !== '') {
      const img = document.createElement('img');
      img.src = config.src;
      img.alt = config.alt || "Textile Portfolio Image";
      img.loading = "lazy";
      img.decoding = "async";
      
      img.onload = () => img.classList.add('loaded');
      img.onerror = () => {
        // Fallback to placeholder on broken path
        container.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'camera');
      };
      
      container.appendChild(img);
    } else {
      container.innerHTML = this.createPlaceholderMarkup(config, aspectClass === 'aspect-1-1' ? 'camera' : 'lab');
    }
  }

  /**
   * Renders Hero section visual container
   */
  static renderHeroMedia(containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.className = 'img-slot aspect-hero';
    container.innerHTML = '';

    if (config && config.src && config.src.trim() !== '') {
      const img = document.createElement('img');
      img.src = config.src;
      img.alt = config.alt || "Textile Hero Banner";
      img.loading = "eager"; // Hero can load eagerly for fast First Contentful Paint
      
      img.onload = () => img.classList.add('loaded');
      img.onerror = () => {
        container.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'fabric');
      };

      container.appendChild(img);
    } else {
      container.innerHTML = this.createPlaceholderMarkup(config, 'fabric');
    }
  }

  /**
   * Injects images or placeholders into Project cards
   */
  static renderProjectImages() {
    const projectSlots = document.querySelectorAll('.project-img-slot');
    projectSlots.forEach((slot, index) => {
      const config = IMAGES.projects[index] || {
        src: "",
        alt: `Project ${index + 1}`,
        recommendedSize: "600 × 340px (16:9)",
        label: `Project ${index + 1}`,
        hint: `assets/images/projects/project-${index + 1}.jpg`
      };

      slot.className = 'img-slot aspect-16-9 project-card-media';
      slot.innerHTML = '';

      if (config.src && config.src.trim() !== '') {
        const img = document.createElement('img');
        img.src = config.src;
        img.alt = config.alt;
        img.loading = "lazy";
        img.onload = () => img.classList.add('loaded');
        img.onerror = () => {
          slot.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'fabric');
        };
        slot.appendChild(img);
      } else {
        slot.innerHTML = ImageSystem.createPlaceholderMarkup(config, 'fabric');
      }
    });
  }

  /**
   * Dynamically renders Gallery items from IMAGES.gallery array
   */
  static renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    IMAGES.gallery.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.setAttribute('data-gallery-index', index);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.label || item.alt}`);

      const slot = document.createElement('div');
      slot.className = 'img-slot aspect-4-3';

      if (item.src && item.src.trim() !== '') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.loading = "lazy";
        img.onload = () => img.classList.add('loaded');
        img.onerror = () => {
          slot.innerHTML = ImageSystem.createPlaceholderMarkup(item, 'fabric');
        };
        slot.appendChild(img);
      } else {
        slot.innerHTML = ImageSystem.createPlaceholderMarkup(item, 'fabric');
      }

      const overlay = document.createElement('div');
      overlay.className = 'gallery-overlay';
      overlay.innerHTML = `
        <span class="gallery-caption-title">${item.label || "Textile Specimen"}</span>
        <span class="gallery-zoom-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          Click to inspect
        </span>
      `;

      card.appendChild(slot);
      card.appendChild(overlay);

      // Event listener for opening lightbox
      const openHandler = () => Lightbox.open(index);
      card.addEventListener('click', openHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openHandler();
        }
      });

      galleryGrid.appendChild(card);
    });
  }
}

/* ==========================================================================
   4. Vanilla JS Lightbox System
   ========================================================================== */
class Lightbox {
  static currentIndex = 0;
  static modal = null;
  static contentBox = null;
  static captionBar = null;

  static init() {
    this.modal = document.getElementById('lightbox-modal');
    this.contentBox = document.getElementById('lightbox-content-box');
    this.captionBar = document.getElementById('lightbox-caption-bar');

    if (!this.modal) return;

    // Close button
    const closeBtn = document.getElementById('lightbox-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Navigation buttons
    const prevBtn = document.getElementById('lightbox-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());

    const nextBtn = document.getElementById('lightbox-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Close on backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  static open(index) {
    if (!this.modal || !IMAGES.gallery || IMAGES.gallery.length === 0) return;
    this.currentIndex = (index + IMAGES.gallery.length) % IMAGES.gallery.length;
    this.updateContent();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  static close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  static prev() {
    this.open(this.currentIndex - 1);
  }

  static next() {
    this.open(this.currentIndex + 1);
  }

  static updateContent() {
    const item = IMAGES.gallery[this.currentIndex];
    if (!item) return;

    this.contentBox.innerHTML = '';

    if (item.src && item.src.trim() !== '') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.className = 'lightbox-image';
      this.contentBox.appendChild(img);
    } else {
      // If no photo file yet, show high-res preview placeholder
      const preview = document.createElement('div');
      preview.style.padding = '3.5rem 2rem';
      preview.style.width = '100%';
      preview.style.textAlign = 'center';
      preview.style.color = '#fff';
      preview.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔬</div>
        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem;">${item.label || "Textile Gallery Slot"}</h3>
        <p style="color: #94a3b8; font-size: 0.95rem; max-width: 500px; margin: 0 auto;">${item.caption}</p>
        <span style="display: inline-block; margin-top: 1rem; font-size: 0.8rem; font-family: monospace; background: rgba(255,255,255,0.1); padding: 0.3rem 0.8rem; border-radius: 999px;">
          Placeholder slot ${this.currentIndex + 1} of ${IMAGES.gallery.length}
        </span>
      `;
      this.contentBox.appendChild(preview);
    }

    if (this.captionBar) {
      this.captionBar.innerHTML = `<strong>${this.currentIndex + 1}/${IMAGES.gallery.length}:</strong> ${item.caption || item.alt}`;
    }
  }
}

/* ==========================================================================
   5. Case Study Details Modal
   ========================================================================== */
class CaseStudyModal {
  static modal = null;
  static content = null;

  static init() {
    this.modal = document.getElementById('case-modal');
    this.content = document.getElementById('case-modal-body');

    if (!this.modal) return;

    const closeBtn = document.getElementById('case-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Attach to all project cards "View Details" buttons
    document.querySelectorAll('.project-detail-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const projectId = parseInt(e.currentTarget.getAttribute('data-project-id'), 10);
        CaseStudyModal.open(projectId);
      });
    });
  }

  static open(projectId) {
    const study = CASE_STUDIES.find(s => s.id === projectId);
    if (!study || !this.modal || !this.content) return;

    const resultsList = study.results.map(r => `<li>${r}</li>`).join('');

    this.content.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-teal); letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          ${study.category} • ${study.date}
        </span>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); line-height: 1.25; margin-bottom: 0.5rem;">
          ${study.title}
        </h2>
        <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">
          Client / Partner: ${study.client} | Applied Standards: <span style="color: var(--primary); font-family: var(--font-mono);">${study.standards}</span>
        </div>
      </div>

      <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-left: 4px solid var(--accent-teal);">
        <strong style="color: var(--text-primary); display: block; font-size: 0.85rem; text-transform: uppercase;">Key Impact:</strong>
        <span style="color: var(--accent-teal); font-weight: 700; font-size: 1.05rem;">${study.impact}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Project Overview</h4>
          <p>${study.overview}</p>
        </div>

        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">The Engineering Challenge</h4>
          <p>${study.challenge}</p>
        </div>

        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Technical Methodology & Solution</h4>
          <p>${study.solution}</p>
        </div>

        <div>
          <h4 style="color: var(--text-primary); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem;">Quantitative Industrial Results</h4>
          <ul style="list-style: square; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem;">
            ${resultsList}
          </ul>
        </div>
      </div>
    `;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  static close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   6. Theme Manager (Dark / Light Theme Toggle)
   ========================================================================== */
class ThemeManager {
  static init() {
    const savedTheme = localStorage.getItem('textile_portfolio_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    this.setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
      });
    }
  }

  static setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('textile_portfolio_theme', theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` 
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    }
  }
}

/* ==========================================================================
   7. Filtering Systems (Projects & Skills)
   ========================================================================== */
class FilterSystem {
  static init() {
    // Project Category Filtering
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Skill Category Filtering
    const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-domain-card');

    skillFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        skillFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-skill-filter');

        skillCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

/* ==========================================================================
   8. Navigation, Mobile Menu & Scroll Observers
   ========================================================================== */
class NavigationSystem {
  static init() {
    const header = document.querySelector('.site-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    // Sticky header shadow on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      NavigationSystem.highlightActiveSection();
    });

    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const isOpen = navLinks.classList.contains('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        mobileMenuBtn.innerHTML = isOpen
          ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
          : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      });

      // Close mobile menu when link is clicked
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          navLinks.classList.remove('open');
          if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
          }
        });
      });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  static highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }
}

/* ==========================================================================
   9. Contact Form & Feedback Toast
   ========================================================================== */
class ContactSystem {
  static init() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast-notice');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Simulate successful dispatch
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        // Show Toast Notice
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 4500);
        }
      }, 700);
    });
  }
}

/* ==========================================================================
   10. App Initialization on DOM Ready
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  ImageSystem.init();
  Lightbox.init();
  CaseStudyModal.init();
  FilterSystem.init();
  NavigationSystem.init();
  ContactSystem.init();
});
