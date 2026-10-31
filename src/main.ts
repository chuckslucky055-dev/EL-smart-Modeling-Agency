import './styles.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App root not found');

app.innerHTML = `
<header class="nav">
  <a class="brand" href="#top"><span>EL</span>-smart</a>
  <nav>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#models">Models</a>
    <a href="#contact">Contact</a>
  </nav>
  <a class="nav-cta" href="https://wa.me/2347069714950" target="_blank" rel="noreferrer">Book a Model</a>
</header>

<main id="top">
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">MODEL MANAGEMENT • NIGERIA</p>
      <h1>Where <em>presence</em> meets possibility.</h1>
      <p class="lead">EL-smart Modeling Agency connects emerging and established talent with fashion, beauty, media and brand opportunities.</p>
      <div class="actions">
        <a class="button primary" href="https://wa.me/2347069714950" target="_blank" rel="noreferrer">Start a Conversation <span>↗</span></a>
        <a class="button ghost" href="#models">Explore Models</a>
      </div>
    </div>
    <div class="hero-art">
      <div class="portrait portrait-main"><span>EL</span></div>
      <div class="portrait portrait-small"><span>SMART</span></div>
      <div class="vertical">EL-SMART / MODELING AGENCY</div>
    </div>
  </section>

  <section class="intro" id="about">
    <p class="eyebrow">THE AGENCY</p>
    <div>
      <h2>Talent with <em>character.</em></h2>
      <p>Built around individuality, confidence and professional presentation, EL-smart is positioned to develop talent and connect models with opportunities that fit their image.</p>
    </div>
  </section>

  <section class="services" id="services">
    <div class="section-head"><div><p class="eyebrow">WHAT WE DO</p><h2>Made for the <em>spotlight.</em></h2></div><p>From discovery to bookings, we help talent show up prepared and brands find the right presence.</p></div>
    <div class="service-grid">
      <article><b>01</b><h3>Model Management</h3><p>Professional guidance, representation and development for promising talent.</p></article>
      <article><b>02</b><h3>Fashion & Editorial</h3><p>Models for campaigns, lookbooks, editorials and creative productions.</p></article>
      <article><b>03</b><h3>Brand Promotion</h3><p>Talent for product launches, activations, commercial content and appearances.</p></article>
      <article><b>04</b><h3>Talent Development</h3><p>Helping aspiring models build confidence, presentation and a professional portfolio.</p></article>
    </div>
  </section>

  <section class="models" id="models">
    <div class="section-head"><div><p class="eyebrow">THE PORTFOLIO</p><h2>Faces that <em>stand out.</em></h2></div><p>Selected portfolio placeholders for the demo. Replace with EL-smart's actual models and photography.</p></div>
    <div class="gallery">
      <div class="card tall"><div class="model-photo p1"><span>01</span></div><div><strong>Editorial</strong><small>FASHION / BEAUTY</small></div></div>
      <div class="card"><div class="model-photo p2"><span>02</span></div><div><strong>Commercial</strong><small>BRAND / CAMPAIGN</small></div></div>
      <div class="card"><div class="model-photo p3"><span>03</span></div><div><strong>Runway</strong><small>FASHION / EVENTS</small></div></div>
      <div class="card wide"><div class="model-photo p4"><span>04</span></div><div><strong>Creative</strong><small>EDITORIAL / MEDIA</small></div></div>
    </div>
  </section>

  <section class="casting">
    <div><p class="eyebrow">FOR ASPIRING MODELS</p><h2>Ready to be <em>seen?</em></h2><p>Tell us about yourself and your modeling goals. Start your conversation with the agency on WhatsApp.</p><a class="button light" href="https://wa.me/2347069714950?text=Hello%20EL-smart%20Modeling%20Agency%2C%20I%27d%20like%20to%20ask%20about%20modeling%20opportunities." target="_blank" rel="noreferrer">Apply / Enquire on WhatsApp ↗</a></div>
  </section>

  <section class="contact" id="contact">
    <div><p class="eyebrow">GET IN TOUCH</p><h2>Let's create something <em>memorable.</em></h2></div>
    <div class="contact-box"><span>PHONE / WHATSAPP</span><a href="tel:+2347069714950">0706 971 4950</a><a class="whatsapp" href="https://wa.me/2347069714950" target="_blank" rel="noreferrer">Message on WhatsApp ↗</a></div>
  </section>
</main>

<footer><a class="brand" href="#top"><span>EL</span>-smart</a><p>Modeling Agency • Nigeria</p><p>© 2026 EL-smart Modeling Agency</p></footer>
`;
