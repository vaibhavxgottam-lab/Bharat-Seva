/* ============================================
   BHARAT SEVA — Application Logic
   AI-Powered Unified Government Services
   ============================================ */

// ── Government Departments Database ──
const departments = [
  {
    id: 'health',
    name: 'Health & Medical Services',
    icon: '🏥',
    description: 'Hospitals, sanitation, medical facilities, health schemes, pandemic response, and disease control.',
    tags: ['Hospital', 'Medical', 'Ayushman', 'Sanitation'],
    keywords: ['hospital', 'doctor', 'medical', 'medicine', 'health', 'clinic', 'disease', 'treatment', 'ambulance', 'sanitation', 'hygiene', 'vaccination', 'ayushman', 'bharat', 'insurance', 'patient', 'pharmacy', 'nurse', 'dengue', 'malaria', 'covid', 'infection', 'epidemic', 'sick', 'illness', 'fever', 'surgery', 'healthcare']
  },
  {
    id: 'revenue',
    name: 'Revenue & Taxation',
    icon: '💰',
    description: 'Property tax, income tax, GST, land records, property registration, and revenue disputes.',
    tags: ['Tax', 'Property', 'GST', 'Land Records'],
    keywords: ['tax', 'revenue', 'property', 'gst', 'income', 'registration', 'stamp', 'duty', 'land', 'record', 'mutation', 'khasra', 'khatauni', 'assessment', 'refund', 'pan', 'return', 'filing', 'challan', 'payment', 'collection']
  },
  {
    id: 'education',
    name: 'Education Department',
    icon: '🎓',
    description: 'Schools, colleges, scholarships, examinations, teacher grievances, and educational infrastructure.',
    tags: ['School', 'College', 'Scholarship', 'Exam'],
    keywords: ['school', 'college', 'education', 'university', 'teacher', 'student', 'exam', 'scholarship', 'admission', 'result', 'certificate', 'degree', 'diploma', 'tuition', 'fees', 'library', 'syllabus', 'principal', 'classroom', 'marksheet', 'board']
  },
  {
    id: 'transport',
    name: 'Transport & Roads',
    icon: '🚗',
    description: 'Road repairs, traffic management, driving licenses, vehicle registration, and public transport.',
    tags: ['Roads', 'License', 'Traffic', 'RTO'],
    keywords: ['road', 'pothole', 'traffic', 'license', 'driving', 'vehicle', 'registration', 'rto', 'transport', 'bus', 'highway', 'bridge', 'flyover', 'signal', 'accident', 'speed', 'parking', 'toll', 'rc', 'permit', 'car', 'bike', 'motorcycle']
  },
  {
    id: 'police',
    name: 'Police & Law Enforcement',
    icon: '🚔',
    description: 'FIR filing, cyber crime, missing persons, traffic violations, and law enforcement complaints.',
    tags: ['FIR', 'Crime', 'Cyber', 'Safety'],
    keywords: ['police', 'fir', 'crime', 'theft', 'robbery', 'murder', 'assault', 'harassment', 'cyber', 'fraud', 'scam', 'missing', 'lost', 'stolen', 'violence', 'domestic', 'safety', 'security', 'complaint', 'officer', 'station', 'investigation']
  },
  {
    id: 'municipal',
    name: 'Municipal Corporation',
    icon: '🏗️',
    description: 'Garbage collection, street lights, drainage, building permits, and urban development.',
    tags: ['Garbage', 'Street Light', 'Drainage', 'Building'],
    keywords: ['garbage', 'waste', 'street', 'light', 'lamp', 'drainage', 'sewer', 'nagar', 'palika', 'municipal', 'corporation', 'building', 'construction', 'permit', 'demolition', 'encroachment', 'footpath', 'park', 'garden', 'cleaning', 'sweeping', 'dump']
  },
  {
    id: 'water',
    name: 'Water Supply & Irrigation',
    icon: '💧',
    description: 'Water supply issues, pipeline leaks, water quality, irrigation canals, and bore wells.',
    tags: ['Water', 'Pipeline', 'Quality', 'Irrigation'],
    keywords: ['water', 'supply', 'pipeline', 'leak', 'tap', 'bore', 'well', 'tanker', 'quality', 'contamination', 'purification', 'sewage', 'dam', 'irrigation', 'canal', 'flood', 'drought', 'jal', 'jeevan', 'mission', 'drinking']
  },
  {
    id: 'electricity',
    name: 'Electricity & Power',
    icon: '⚡',
    description: 'Power outages, billing disputes, new connections, transformer issues, and solar energy.',
    tags: ['Power', 'Billing', 'Connection', 'Outage'],
    keywords: ['electricity', 'power', 'current', 'outage', 'blackout', 'load', 'shedding', 'transformer', 'wire', 'cable', 'bill', 'meter', 'reading', 'connection', 'solar', 'voltage', 'short', 'circuit', 'electric', 'energy', 'unit']
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Farming',
    icon: '🌾',
    description: 'Crop insurance, farmer subsidies, soil testing, MSP, and agricultural equipment.',
    tags: ['Farming', 'Subsidy', 'PM-KISAN', 'Crop'],
    keywords: ['agriculture', 'farm', 'farmer', 'crop', 'seed', 'fertilizer', 'pesticide', 'harvest', 'mandi', 'msp', 'subsidy', 'kisan', 'loan', 'irrigation', 'soil', 'testing', 'animal', 'husbandry', 'cattle', 'dairy', 'pm-kisan', 'insurance']
  },
  {
    id: 'housing',
    name: 'Housing & Urban Development',
    icon: '🏠',
    description: 'PM Awas Yojana, housing allotment, colony development, and urban planning complaints.',
    tags: ['Housing', 'PM Awas', 'Colony', 'Urban'],
    keywords: ['house', 'housing', 'home', 'flat', 'apartment', 'colony', 'society', 'awas', 'yojana', 'allotment', 'urban', 'development', 'planning', 'builder', 'rera', 'rent', 'tenant', 'landlord', 'property', 'construction']
  },
  {
    id: 'pds',
    name: 'Public Distribution (Ration)',
    icon: '🍚',
    description: 'Ration card applications, PDS shop complaints, food grain distribution, and fair price shops.',
    tags: ['Ration Card', 'PDS', 'Food', 'Fair Price'],
    keywords: ['ration', 'card', 'pds', 'food', 'grain', 'wheat', 'rice', 'sugar', 'kerosene', 'fair', 'price', 'shop', 'distribution', 'bpl', 'apl', 'annapurna', 'aadhaar', 'linking', 'quota']
  },
  {
    id: 'social',
    name: 'Social Welfare & Pension',
    icon: '🤝',
    description: 'Old age pension, widow pension, disability benefits, social security schemes, and welfare programs.',
    tags: ['Pension', 'Welfare', 'Disability', 'SC/ST'],
    keywords: ['pension', 'welfare', 'social', 'disability', 'widow', 'old', 'age', 'senior', 'citizen', 'sc', 'st', 'obc', 'caste', 'certificate', 'domicile', 'income', 'benefit', 'scheme', 'yojana', 'assistance']
  }
];

// ── Sample Request Data for Demo ──
const sampleRequests = [
  {
    id: 'BS-2024-7891',
    title: 'Hospital sanitation complaint',
    department: 'Health & Medical Services',
    deptIcon: '🏥',
    status: 'processing',
    statusLabel: 'Processing',
    date: '28 Aug 2024',
    state: 'Maharashtra',
    district: 'Mumbai Suburban',
    priority: 'High',
    timeline: [
      { title: 'Request Submitted', desc: 'Your complaint has been received and logged into the system.', time: '28 Aug, 10:30 AM', status: 'completed' },
      { title: 'AI Routed to Health Department', desc: 'AI identified this as a health & sanitation concern and routed to the State Health Department.', time: '28 Aug, 10:31 AM', status: 'completed' },
      { title: 'Department Acknowledged', desc: 'The Health Department has acknowledged receipt of your complaint and assigned an officer.', time: '28 Aug, 2:15 PM', status: 'completed' },
      { title: 'Investigation In Progress', desc: 'Assigned officer is conducting an on-site inspection of the hospital facility.', time: '29 Aug, 11:00 AM', status: 'active' },
      { title: 'Resolution & Response', desc: 'Awaiting inspection results and corrective action from the department.', time: 'Pending', status: 'pending' }
    ]
  },
  {
    id: 'BS-2024-7456',
    title: 'Pothole on main road causing accidents',
    department: 'Transport & Roads',
    deptIcon: '🚗',
    status: 'processing',
    statusLabel: 'In Review',
    date: '25 Aug 2024',
    state: 'Karnataka',
    district: 'Bangalore Urban',
    priority: 'Critical',
    timeline: [
      { title: 'Request Submitted', desc: 'Your complaint about road potholes has been received.', time: '25 Aug, 9:00 AM', status: 'completed' },
      { title: 'AI Routed to Transport Dept', desc: 'AI identified road infrastructure issue and routed to PWD/Transport.', time: '25 Aug, 9:01 AM', status: 'completed' },
      { title: 'Under Review', desc: 'The PWD engineer is reviewing the complaint and scheduling repair work.', time: '26 Aug, 3:00 PM', status: 'active' },
      { title: 'Repair Scheduled', desc: 'Awaiting road repair crew assignment.', time: 'Pending', status: 'pending' },
      { title: 'Resolved', desc: 'Awaiting completion confirmation.', time: 'Pending', status: 'pending' }
    ]
  },
  {
    id: 'BS-2024-6120',
    title: 'Ration card application pending for 3 months',
    department: 'Public Distribution (Ration)',
    deptIcon: '🍚',
    status: 'resolved',
    statusLabel: 'Resolved',
    date: '10 Aug 2024',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    priority: 'Normal',
    timeline: [
      { title: 'Request Submitted', desc: 'Complaint about delayed ration card received.', time: '10 Aug, 11:00 AM', status: 'completed' },
      { title: 'AI Routed to PDS Department', desc: 'Identified as Public Distribution System concern.', time: '10 Aug, 11:01 AM', status: 'completed' },
      { title: 'Department Acknowledged', desc: 'PDS office confirmed the application was stuck in verification.', time: '11 Aug, 10:00 AM', status: 'completed' },
      { title: 'Verification Expedited', desc: 'Verification process was fast-tracked after complaint escalation.', time: '15 Aug, 4:00 PM', status: 'completed' },
      { title: 'Ration Card Issued', desc: 'Your new ration card has been issued and dispatched to your address.', time: '20 Aug, 2:00 PM', status: 'completed' }
    ]
  }
];

// ── State Variables ──
let currentUser = null;
let submittedRequests = [...sampleRequests];
let lastGeneratedId = '';
let aiDebounceTimer = null;

// ── Initialize App ──
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  renderServices();
  renderHistory();
  animateCounters();
  checkAuthState();
});

// ── Navigation ──
function initNavigation() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  // Smooth scroll for nav links
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-nav');
      navigateTo(targetId);
    });
  });
}

function navigateTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 80;
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });

    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('mobileMenuBtn');
    navLinks.classList.remove('mobile-open');
    menuBtn.classList.remove('active');
  }
}

function updateActiveNav() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentSection = '';

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-nav') === currentSection) {
      link.classList.add('active');
    }
  });
}

function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const menuBtn = document.getElementById('mobileMenuBtn');
  navLinks.classList.toggle('mobile-open');
  menuBtn.classList.toggle('active');
}

// ── Scroll Animations (IntersectionObserver) ──
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Counter Animation ──
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateNumber(entry.target, 0, target, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateNumber(element, start, end, duration) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    element.textContent = Math.floor(eased * (end - start) + start) + (end >= 50 ? '+' : '');
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

// ── Render Services Grid ──
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = departments.map((dept, i) => `
    <div class="service-card reveal reveal-delay-${(i % 4) + 1}" onclick="selectDepartment('${dept.id}')">
      <div class="service-icon">${dept.icon}</div>
      <h3 class="service-name">${dept.name}</h3>
      <p class="service-desc">${dept.description}</p>
      <div class="service-tags">
        ${dept.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Re-observe new elements
  setTimeout(() => initScrollAnimations(), 100);
}

function filterServices(query) {
  const cards = document.querySelectorAll('.service-card');
  const q = query.toLowerCase();

  cards.forEach((card, i) => {
    const dept = departments[i];
    const matches = dept.name.toLowerCase().includes(q) ||
                    dept.description.toLowerCase().includes(q) ||
                    dept.tags.some(t => t.toLowerCase().includes(q)) ||
                    dept.keywords.some(k => k.includes(q));

    card.style.display = matches ? '' : 'none';
  });
}

function selectDepartment(deptId) {
  navigateTo('submit');
  // Pre-fill a hint
  const dept = departments.find(d => d.id === deptId);
  if (dept) {
    showToast('success', `Selected: ${dept.name}. Describe your issue below.`);
  }
}

// ── AI Complaint Analysis ──
function analyzeComplaint(text) {
  clearTimeout(aiDebounceTimer);

  if (text.length < 10) {
    document.getElementById('aiResults').innerHTML = `
      <div class="ai-placeholder">
        <div class="icon">🧠</div>
        <p>Start describing your issue and the AI will automatically detect the relevant department</p>
      </div>
    `;
    return;
  }

  // Show typing indicator
  document.getElementById('aiResults').innerHTML = `
    <div style="text-align:center; padding:var(--space-xl);">
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
      <p style="font-size:var(--text-sm); color:var(--text-muted); margin-top:var(--space-sm);">Analyzing your request...</p>
    </div>
  `;

  aiDebounceTimer = setTimeout(() => {
    const result = detectDepartment(text);
    renderAIResults(result);
  }, 800);
}

function detectDepartment(text) {
  const lowerText = text.toLowerCase();
  const scores = [];

  departments.forEach(dept => {
    let score = 0;
    let matchedKeywords = [];

    dept.keywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        score += keyword.length > 5 ? 3 : 2; // Longer keywords get higher scores
        matchedKeywords.push(keyword);
      }
    });

    // Bonus for multiple keyword matches
    if (matchedKeywords.length > 2) score += matchedKeywords.length * 2;

    if (score > 0) {
      scores.push({
        department: dept,
        score,
        matchedKeywords,
        confidence: Math.min(95, 50 + score * 5)
      });
    }
  });

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);

  if (scores.length === 0) {
    // Default fallback
    return {
      primary: { department: departments[5], confidence: 30, matchedKeywords: [] }, // Municipal as default
      secondary: null,
      category: 'General Grievance'
    };
  }

  return {
    primary: scores[0],
    secondary: scores.length > 1 ? scores[1] : null,
    category: categorizeRequest(lowerText)
  };
}

function categorizeRequest(text) {
  if (text.includes('complaint') || text.includes('problem') || text.includes('issue') || text.includes('broken') || text.includes('not working'))
    return 'Complaint / Grievance';
  if (text.includes('apply') || text.includes('application') || text.includes('new') || text.includes('register'))
    return 'New Application';
  if (text.includes('status') || text.includes('update') || text.includes('pending'))
    return 'Status Inquiry';
  if (text.includes('emergency') || text.includes('urgent') || text.includes('danger') || text.includes('accident'))
    return 'Emergency Report';
  return 'Service Request';
}

function renderAIResults(result) {
  const primary = result.primary;
  const secondary = result.secondary;

  let html = `
    <div class="ai-result detected">
      <div class="ai-result-label">Detected Department</div>
      <div class="ai-result-value">${primary.department.icon} ${primary.department.name}</div>
      <div class="ai-confidence">
        <div class="confidence-bar">
          <div class="confidence-fill" style="width:${primary.confidence}%;"></div>
        </div>
        <span class="confidence-text">${primary.confidence}%</span>
      </div>
    </div>

    <div class="ai-result">
      <div class="ai-result-label">Request Category</div>
      <div class="ai-result-value" style="font-size:var(--text-base);">${result.category}</div>
    </div>
  `;

  if (primary.matchedKeywords && primary.matchedKeywords.length > 0) {
    html += `
      <div class="ai-result">
        <div class="ai-result-label">Matched Keywords</div>
        <div style="display:flex; flex-wrap:wrap; gap:var(--space-xs); margin-top:var(--space-sm);">
          ${primary.matchedKeywords.slice(0, 6).map(k =>
            `<span class="service-tag" style="background:rgba(255,153,51,0.1); color:var(--saffron); border-color:rgba(255,153,51,0.2);">${k}</span>`
          ).join('')}
        </div>
      </div>
    `;
  }

  if (secondary) {
    html += `
      <div class="ai-result" style="opacity:0.6;">
        <div class="ai-result-label">Alternative Match</div>
        <div class="ai-result-value" style="font-size:var(--text-base);">${secondary.department.icon} ${secondary.department.name}</div>
        <div class="ai-confidence">
          <div class="confidence-bar">
            <div class="confidence-fill" style="width:${secondary.confidence}%; background:var(--gradient-saffron);"></div>
          </div>
          <span class="confidence-text" style="color:var(--saffron);">${secondary.confidence}%</span>
        </div>
      </div>
    `;
  }

  document.getElementById('aiResults').innerHTML = html;
}

// ── Submit Request ──
function submitRequest() {
  const name = document.getElementById('citizenName').value.trim();
  const state = document.getElementById('citizenState').value;
  const district = document.getElementById('citizenDistrict').value.trim();
  const complaint = document.getElementById('complaintText').value.trim();
  const priority = document.getElementById('priorityLevel').value;

  // Validation
  if (!name) { showToast('error', 'Please enter your name.'); return; }
  if (!state) { showToast('error', 'Please select your state.'); return; }
  if (!district) { showToast('error', 'Please enter your district.'); return; }
  if (complaint.length < 20) { showToast('error', 'Please describe your issue in more detail (at least 20 characters).'); return; }

  // Generate tracking ID
  const trackingId = `BS-2024-${Math.floor(1000 + Math.random() * 9000)}`;
  lastGeneratedId = trackingId;

  // Detect department
  const aiResult = detectDepartment(complaint);
  const dept = aiResult.primary.department;

  // Create new request
  const newRequest = {
    id: trackingId,
    title: complaint.substring(0, 60) + (complaint.length > 60 ? '...' : ''),
    department: dept.name,
    deptIcon: dept.icon,
    status: 'pending',
    statusLabel: 'Submitted',
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    state: document.getElementById('citizenState').selectedOptions[0].text,
    district: district,
    priority: priority.charAt(0).toUpperCase() + priority.slice(1),
    timeline: [
      { title: 'Request Submitted', desc: `Your complaint has been received and assigned tracking ID ${trackingId}.`, time: 'Just now', status: 'completed' },
      { title: `AI Routed to ${dept.name}`, desc: `AI detected this as a ${dept.name} concern with ${aiResult.primary.confidence}% confidence.`, time: 'Just now', status: 'active' },
      { title: 'Awaiting Department Acknowledgment', desc: 'The relevant department will review and acknowledge your request.', time: 'Pending', status: 'pending' },
      { title: 'Investigation', desc: 'Department will investigate your complaint.', time: 'Pending', status: 'pending' },
      { title: 'Resolution', desc: 'Final resolution and response.', time: 'Pending', status: 'pending' }
    ]
  };

  submittedRequests.unshift(newRequest);

  // Show success
  document.getElementById('submitForm').style.display = 'none';
  document.getElementById('submitSuccess').style.display = 'block';
  document.getElementById('generatedTrackingId').textContent = trackingId;

  showToast('success', `Request ${trackingId} submitted and routed to ${dept.name}!`);
  renderHistory();
}

function resetSubmitForm() {
  document.getElementById('submitForm').style.display = '';
  document.getElementById('submitSuccess').style.display = 'none';
  document.getElementById('citizenName').value = '';
  document.getElementById('citizenState').value = '';
  document.getElementById('citizenDistrict').value = '';
  document.getElementById('complaintText').value = '';
  document.getElementById('priorityLevel').value = 'normal';
  document.getElementById('aiResults').innerHTML = `
    <div class="ai-placeholder">
      <div class="icon">🧠</div>
      <p>Start describing your issue and the AI will automatically detect the relevant department</p>
    </div>
  `;
}

function trackSubmittedRequest() {
  navigateTo('track');
  setTimeout(() => {
    document.getElementById('trackInput').value = lastGeneratedId;
    trackRequest();
  }, 500);
}

// ── Render History ──
function renderHistory() {
  const list = document.getElementById('historyList');
  list.innerHTML = submittedRequests.map(req => `
    <div class="history-card" onclick="showRequestStatus('${req.id}')">
      <div class="history-icon">${req.deptIcon}</div>
      <div class="history-info">
        <h4>${req.title}</h4>
        <p>${req.department} • ${req.id}</p>
      </div>
      <div class="history-date">${req.date}</div>
      <span class="status-badge ${req.status}">${req.statusLabel}</span>
    </div>
  `).join('');
}

// ── Track Request ──
function trackRequest() {
  const inputId = document.getElementById('trackInput').value.trim().toUpperCase();

  if (!inputId) {
    showToast('error', 'Please enter a tracking ID.');
    return;
  }

  const request = submittedRequests.find(r => r.id === inputId);

  if (!request) {
    showToast('error', `No request found with ID: ${inputId}`);
    return;
  }

  showRequestStatus(inputId);
}

function showRequestStatus(requestId) {
  const request = submittedRequests.find(r => r.id === requestId);
  if (!request) return;

  const dashboard = document.getElementById('statusDashboard');
  dashboard.classList.add('active');

  // Header
  document.getElementById('statusReqId').textContent = `Request #${request.id}`;
  const badge = document.getElementById('statusBadge');
  badge.textContent = request.statusLabel;
  badge.className = `status-badge ${request.status}`;

  // Meta info
  document.getElementById('statusMeta').innerHTML = `
    <div class="status-meta-item">
      <div class="status-meta-label">Department</div>
      <div class="status-meta-value">${request.deptIcon} ${request.department}</div>
    </div>
    <div class="status-meta-item">
      <div class="status-meta-label">Filed On</div>
      <div class="status-meta-value">${request.date}</div>
    </div>
    <div class="status-meta-item">
      <div class="status-meta-label">Location</div>
      <div class="status-meta-value">${request.district}, ${request.state}</div>
    </div>
    <div class="status-meta-item">
      <div class="status-meta-label">Priority</div>
      <div class="status-meta-value">${request.priority}</div>
    </div>
  `;

  // Timeline
  document.getElementById('statusTimeline').innerHTML = request.timeline.map(item => `
    <div class="timeline-item ${item.status}">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
        <div class="timeline-time">${item.time}</div>
      </div>
    </div>
  `).join('');

  // Scroll to dashboard
  setTimeout(() => {
    dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);

  document.getElementById('trackInput').value = request.id;
}

// ── Auth Modal ──
function openAuthModal() {
  document.getElementById('authModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabLogin = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');

  if (tab === 'login') {
    loginForm.style.display = '';
    registerForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = '';
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
  }
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    showToast('error', 'Please fill in all fields.');
    return;
  }

  // Simulate login
  currentUser = { name: 'Citizen', email };
  localStorage.setItem('bharatSevaUser', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
  showToast('success', 'Welcome back! You are now logged in.');
}

function handleRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();

  if (!name || !email || !phone) {
    showToast('error', 'Please fill in all required fields.');
    return;
  }

  currentUser = { name, email, phone };
  localStorage.setItem('bharatSevaUser', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
  showToast('success', `Welcome, ${name}! Your account has been created.`);
}

function handleGovLogin(provider) {
  const providerNames = { digilocker: 'DigiLocker', aadhaar: 'Aadhaar' };
  showToast('success', `Redirecting to ${providerNames[provider]} authentication... (Demo mode)`);
  setTimeout(() => {
    currentUser = { name: 'Verified Citizen', email: `user@${provider}.gov.in` };
    localStorage.setItem('bharatSevaUser', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showToast('success', `Authenticated via ${providerNames[provider]}!`);
  }, 1500);
}

function checkAuthState() {
  const saved = localStorage.getItem('bharatSevaUser');
  if (saved) {
    currentUser = JSON.parse(saved);
    updateAuthUI();
  }
}

function updateAuthUI() {
  const loginBtn = document.getElementById('loginBtn');
  if (currentUser) {
    loginBtn.innerHTML = `👤 ${currentUser.name}`;
    loginBtn.onclick = () => {
      if (confirm('Do you want to logout?')) {
        logout();
      }
    };
  } else {
    loginBtn.innerHTML = '🔐 Login';
    loginBtn.onclick = openAuthModal;
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('bharatSevaUser');
  updateAuthUI();
  showToast('success', 'You have been logged out.');
}

// ── Toast Notifications ──
function showToast(type, message) {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <span class="toast-message">${message}</span>
    <span class="toast-close" onclick="this.parentElement.remove()">✕</span>
  `;

  container.appendChild(toast);

  // Auto remove after 4 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}

// ── Close modal on outside click ──
document.addEventListener('click', (e) => {
  if (e.target.id === 'authModal') {
    closeAuthModal();
  }
});

// ── Keyboard shortcuts ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAuthModal();
  }
});
