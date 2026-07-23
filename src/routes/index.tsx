import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineSparkles, HiOutlineScissors, HiOutlineStar, HiOutlinePencil,
  HiOutlineHeart, HiOutlineClock, HiOutlineChatBubbleLeftRight, HiOutlineHandRaised,
  HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineArrowRight,
  HiOutlineChevronDown, HiChevronLeft, HiChevronRight, HiXMark,
} from "react-icons/hi2";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

import hero from "../assets/hero.jpg";
import bridal from "../assets/bridal.jpg";
import saree from "../assets/saree.jpg";
import indowestern from "../assets/indowestern.jpg";
import kurta from "../assets/kurta.jpg";
import festive from "../assets/festive.jpg";
import party from "../assets/party.jpg";
import craft from "../assets/craft.jpg";
import boutique from "../assets/boutique.jpg";
import measuring from "../assets/measuring.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE = "+91 96520 17575";
const WHATSAPP = "https://wa.me/919652017575";
const ADDRESS = "Level 1, Shameksha Spires, Flat 101, Mathrusree Nagar, Miyapur, Hyderabad 500049";

function Home() {
  return (
    <div className="relative overflow-x-hidden bg-cream text-ink">
      <Loader />
      <Nav />
      <Hero />
      <Marquee />
      <Why />
      <About />
      <Collections />
      <Process />
      <Reviews />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ------------------- Loader ------------------- */
function Loader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-6xl text-gold-gradient">Paani&rsquo;s</div>
            <div className="mt-3 text-[10px] tracking-[0.5em] text-beige">CLOTHING</div>
            <div className="mx-auto mt-6 h-px w-24 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------- Nav ------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "#home"], ["About", "#about"], ["Collections", "#collections"],
    ["Custom", "#process"], ["Gallery", "#gallery"], ["Reviews", "#reviews"], ["Contact", "#contact"],
  ];
  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-cream/80 border-b border-border/50" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#home" className="group">
            <div className="font-display text-2xl md:text-3xl leading-none">Paani<span className="text-gold">&rsquo;s</span></div>
            <div className="text-[9px] tracking-[0.4em] text-muted-foreground mt-0.5">CLOTHING · HYDERABAD</div>
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="text-xs tracking-[0.2em] uppercase text-ink/70 hover:text-ink transition-colors relative group">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href="#booking" className="hidden md:inline-flex btn-gold hover:[&]:btn-gold-hover">Book Appointment</a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ink" aria-label="menu">
            <div className="flex flex-col gap-1.5"><span className="h-px w-6 bg-ink"/><span className="h-px w-6 bg-ink"/></div>
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl lg:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {links.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setOpen(false)} className="font-display text-3xl">{l}</a>
              ))}
              <a href="#booking" onClick={() => setOpen(false)} className="btn-gold mt-4">Book Appointment</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------- Hero ------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={hero} alt="Paani's Clothing designer saree" className="h-full w-full object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold/60"
          style={{ left: `${(i * 73) % 100}%`, top: `${(i * 41) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <motion.div style={{ opacity }} className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-[10px] tracking-[0.5em] text-gold uppercase mb-8">
              <span className="h-px w-10 bg-gold" /> Designer Boutique · Est. Hyderabad
            </div>
            <h1 className="font-display text-white text-[13vw] leading-[0.95] md:text-[6.5rem] lg:text-[8rem]">
              Affordable
              <br />
              <span className="italic text-gold-gradient">Luxury.</span>
              <br />
              Tailored
              <br />
              <span className="italic font-light">perfectly</span> for you.
            </h1>
            <p className="mt-8 max-w-lg text-base md:text-lg text-beige/90 font-light leading-relaxed">
              A couture boutique in Hyderabad crafting custom ethnic wear, Indo-Western silhouettes,
              designer sarees and bridal couture — with exceptional precision.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#booking" className="btn-gold hover:[&]:btn-gold-hover">Book Appointment <HiOutlineArrowRight /></a>
              <a href="#collections" className="btn-ghost text-white border-white/60 hover:bg-white/10">Explore Collection</a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-beige/70"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <HiOutlineChevronDown className="text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------- Marquee ------------------- */
function Marquee() {
  const items = ["Bridal Couture", "Designer Sarees", "Custom Stitching", "Indo-Western", "Festive Wear", "Perfect Fit", "Premium Craftsmanship"];
  return (
    <div className="border-y border-border/60 bg-beige/40 overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-10 font-display text-2xl md:text-3xl italic text-brown flex items-center gap-10">
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------- Why ------------------- */
function Why() {
  const items = [
    { icon: HiOutlineScissors, title: "Perfect Fit", desc: "Every outfit is tailored specifically for you." },
    { icon: HiOutlineSparkles, title: "Premium Stitching", desc: "Exceptional finishing and craftsmanship." },
    { icon: HiOutlineStar, title: "Affordable Luxury", desc: "Luxury fashion without luxury pricing." },
    { icon: HiOutlinePencil, title: "Custom Designs", desc: "Personalized according to your vision." },
    { icon: HiOutlineHeart, title: "High Quality Fabrics", desc: "Carefully selected premium materials." },
    { icon: HiOutlineClock, title: "Timely Delivery", desc: "Outfits delivered on schedule." },
    { icon: HiOutlineChatBubbleLeftRight, title: "Designer Consultation", desc: "Personalized styling guidance." },
    { icon: HiOutlineHandRaised, title: "Elegant Craftsmanship", desc: "Attention to every stitch." },
  ];
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead eyebrow="The Paani's Promise" title={<>Why women choose <em className="font-display italic text-gold-gradient">Paani&rsquo;s</em></>} />
        <div className="mt-20 grid grid-cols-1 gap-px bg-border/70 sm:grid-cols-2 lg:grid-cols-4 border border-border/70">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative bg-cream p-8 md:p-10 min-h-[220px] flex flex-col justify-between hover:bg-beige/40 transition-colors duration-500"
            >
              <it.icon className="text-3xl text-gold" strokeWidth={1} />
              <div>
                <h3 className="font-display text-2xl mt-6">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- About ------------------- */
function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-beige/30 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={craft} alt="Craftsmanship at Paani's Clothing" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-12 w-1/2 aspect-square overflow-hidden border-8 border-cream shadow-xl">
            <img src={measuring} alt="Bespoke measuring" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-4 -left-4 text-[10rem] font-display text-gold/20 leading-none select-none">P</div>
        </motion.div>

        <div>
          <Eyebrow>Our Atelier</Eyebrow>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.02]">
            Where every stitch
            <br /> is a <em className="italic text-gold-gradient">love letter</em>
            <br /> to the wearer.
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-ink/80 max-w-xl font-light">
            <p>At Paani&rsquo;s Clothing, we believe every outfit should feel <em className="italic">personal</em>. From the first consultation to your final fitting, every garment is crafted with precision, passion and quiet elegance.</p>
            <p>Whether it is festive wear, bridal couture, office fashion or everyday elegance — each piece reflects the mastery of our atelier and the vision of the woman who wears it.</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[["12+", "Years"], ["5000+", "Outfits"], ["5.0★", "Rated"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl text-gold-gradient">{n}</div>
                <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Collections ------------------- */
function Collections() {
  const items = [
    { img: saree, name: "Designer Sarees", tag: "Signature" },
    { img: bridal, name: "Bridal Couture", tag: "Wedding" },
    { img: indowestern, name: "Indo-Western", tag: "Modern" },
    { img: kurta, name: "Kurtas", tag: "Everyday" },
    { img: festive, name: "Festive Collection", tag: "Occasion" },
    { img: party, name: "Party Wear", tag: "Evening" },
    { img: g5, name: "Customized Dresses", tag: "Bespoke" },
    { img: g1, name: "Wedding Collection", tag: "Bridal" },
  ];
  return (
    <section id="collections" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead
          eyebrow="Collections"
          title={<>An edit of <em className="italic text-gold-gradient">quiet luxury</em>.</>}
          sub="From bridal couture to everyday elegance — each collection is crafted in-house and can be personalised to your measurements, palette and story."
        />
        <div className="mt-20 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.a
              href="#booking"
              key={it.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="group relative block overflow-hidden bg-beige/30"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={it.img} alt={it.name} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase text-cream/90 bg-ink/40 backdrop-blur px-3 py-1">{it.tag}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-cream">
                <div className="flex items-end justify-between gap-2">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">{it.name}</h3>
                  <HiOutlineArrowRight className="text-xl text-gold translate-x-[-8px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <div className="mt-1 hairline w-16" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Process ------------------- */
function Process() {
  const steps = [
    ["01", "Consultation", "One-on-one styling session to understand your vision."],
    ["02", "Measurements", "Precise measurements taken by our master tailors."],
    ["03", "Fabric Selection", "Curated fabrics from India&rsquo;s finest mills."],
    ["04", "Design Discussion", "Sketches, silhouettes and embellishment sign-off."],
    ["05", "Expert Stitching", "Handcrafted by our in-house artisans."],
    ["06", "Quality Inspection", "Every seam reviewed to couture standard."],
    ["07", "Trial", "Perfect-fit trial at our Miyapur atelier."],
    ["08", "Final Delivery", "Presented beautifully, ready to be worn."],
  ];
  return (
    <section id="process" className="relative py-28 md:py-40 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={boutique} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead
          eyebrow="Custom Stitching"
          title={<>The <em className="italic text-gold-gradient">Paani&rsquo;s</em> process.</>}
          sub="Eight thoughtful steps between your first idea and your finished garment."
          dark
        />
        <div className="mt-20 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="relative"
            >
              <div className="font-display text-6xl text-gold-gradient leading-none">{n}</div>
              <div className="mt-4 h-px bg-gold/40" />
              <h3 className="font-display text-2xl mt-4">{t}</h3>
              <p className="mt-2 text-sm text-cream/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: d }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Reviews ------------------- */
function Reviews() {
  const testimonials = [
    { name: "Namratha Dharmapuri", text: "I had a great experience with Paani Clothing. The stitching was neat, the fitting was perfect, and everything was completed on time." },
    { name: "Abhicharan Thaduri", text: "A wonderful experience at Paani Clothing in Miyapur. The custom outfit fit perfectly, the quality was excellent, and the designs are truly affordable luxury. Highly recommend this boutique for ethnic wear, Indo-western outfits, and customized dresses." },
    { name: "Adarsh Reddy", text: "A fantastic experience with Paani Clothing! I purchased ethnic wear for myself and my child. The designs were traditional yet trendy and stylish." },
  ];
  const themes = ["Perfect Fit", "Premium Stitching", "Affordable Luxury", "Elegant Designs", "Friendly Service", "Timely Delivery"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="reviews" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="text-2xl text-gold tracking-widest">★★★★★</div>
          <div className="font-display text-6xl md:text-7xl">5.0</div>
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">66 Google Reviews</div>
        </div>

        <div className="relative mt-16 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-ink/90">
                &ldquo;{testimonials[idx].text}&rdquo;
              </p>
              <footer className="mt-8 text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
                — {testimonials[idx].name}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-px transition-all ${i === idx ? "w-12 bg-gold" : "w-6 bg-border"}`} aria-label={`Review ${i+1}`} />
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {themes.map(t => (
            <span key={t} className="glass-card px-5 py-2 text-xs tracking-[0.2em] uppercase text-brown">
              ✦ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Gallery ------------------- */
function Gallery() {
  const imgs = [g1, g2, g3, saree, g4, kurta, g5, festive, g6, bridal, party, indowestern];
  const [lb, setLb] = useState<number | null>(null);
  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-beige/20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead
          eyebrow="Gallery"
          title={<>Moments from the <em className="italic text-gold-gradient">atelier</em>.</>}
          sub="A curated look at recent pieces, brides, behind-the-scenes and the joy of a perfect fit."
        />
        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
          {imgs.map((im, i) => (
            <motion.button
              key={i}
              onClick={() => setLb(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="mb-4 block w-full overflow-hidden group relative"
            >
              <img src={im} loading="lazy" alt={`Gallery ${i+1}`} className="w-full transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lb !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLb(null)}
          >
            <button onClick={() => setLb(null)} className="absolute top-6 right-6 text-cream text-3xl"><HiXMark /></button>
            <button
              onClick={(e) => { e.stopPropagation(); setLb((lb + imgs.length - 1) % imgs.length); }}
              className="absolute left-4 md:left-10 text-cream text-3xl md:text-4xl"
            ><HiChevronLeft /></button>
            <motion.img
              key={lb}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={imgs[lb]} alt="" className="max-h-[85vh] max-w-[85vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLb((lb + 1) % imgs.length); }}
              className="absolute right-4 md:right-10 text-cream text-3xl md:text-4xl"
            ><HiChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------- Booking ------------------- */
function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hello Paani's Clothing! I'd like to book an appointment.%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AEmail: ${data.get("email")}%0ADate: ${data.get("date")}%0AOccasion: ${data.get("occasion")}%0ADress: ${data.get("dress")}%0AMessage: ${data.get("message")}`;
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setSubmitted(true);
  };
  const input = "w-full bg-transparent border-b border-border/70 py-4 text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-muted-foreground/60";
  return (
    <section id="booking" className="relative py-28 md:py-40 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brown/20 blur-3xl animate-float" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-5 lg:gap-24">
        <div className="lg:col-span-2">
          <Eyebrow dark>Appointment</Eyebrow>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.02]">
            Book a <em className="italic text-gold-gradient">private</em> consultation.
          </h2>
          <p className="mt-6 text-cream/70 max-w-md font-light leading-relaxed">
            Meet our designers at the Miyapur atelier for a personal styling session. Walk-ins welcome — appointments preferred.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3"><HiOutlineMapPin className="text-gold text-lg" /> Miyapur, Hyderabad</div>
            <div className="flex items-center gap-3"><HiOutlinePhone className="text-gold text-lg" /> {PHONE}</div>
            <div className="flex items-center gap-3"><HiOutlineClock className="text-gold text-lg" /> Open Daily · 10 AM – 7 PM</div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input name="name" required placeholder="Full name" className={input} />
          <input name="phone" required placeholder="Phone number" className={input} />
          <input name="email" type="email" placeholder="Email address" className={`${input} sm:col-span-2`} />
          <input name="date" type="date" className={input} />
          <input name="occasion" placeholder="Occasion (Wedding, Festive...)" className={input} />
          <input name="dress" placeholder="Dress type (Saree, Lehenga...)" className={`${input} sm:col-span-2`} />
          <textarea name="message" rows={3} placeholder="Tell us your vision..." className={`${input} sm:col-span-2 resize-none`} />
          <div className="sm:col-span-2 mt-4">
            <button type="submit" className="btn-gold hover:[&]:btn-gold-hover w-full sm:w-auto">
              {submitted ? "Sent — thank you" : "Book Consultation"} <HiOutlineArrowRight />
            </button>
            <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-cream/40">Your request is sent via WhatsApp — no data stored.</p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ------------------- Contact ------------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead eyebrow="Visit" title={<>Come see us in <em className="italic text-gold-gradient">Miyapur</em>.</>} />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactRow icon={HiOutlineMapPin} title="Address">
              Level 1, Shameksha Spires<br />Flat 101, Mathrusree Nagar<br />Miyapur, Hyderabad, Telangana 500049
            </ContactRow>
            <ContactRow icon={HiOutlinePhone} title="Phone">
              <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">{PHONE}</a>
            </ContactRow>
            <ContactRow icon={HiOutlineClock} title="Hours">
              Open Daily · 10 AM – 7 PM
            </ContactRow>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href={`tel:${PHONE}`} className="btn-ghost">Call Now</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" className="btn-ghost">Directions</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-border/60">
            <iframe
              title="Paani's Clothing location"
              src="https://www.google.com/maps?q=Mathrusree+Nagar+Miyapur+Hyderabad&output=embed"
              className="absolute inset-0 h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <Icon className="text-2xl text-gold shrink-0 mt-1" strokeWidth={1} />
      <div>
        <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">{title}</div>
        <div className="mt-2 font-display text-2xl leading-snug">{children}</div>
      </div>
    </div>
  );
}

/* ------------------- Footer ------------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink text-cream/70 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-4xl text-cream">Paani<span className="text-gold">&rsquo;s</span></div>
            <div className="text-[10px] tracking-[0.4em] mt-2 text-cream/50">CLOTHING · HYDERABAD</div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60 font-light">
              A designer boutique crafting affordable luxury — tailored perfectly for every woman, every occasion.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-gold">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[["Collections","#collections"],["About","#about"],["Reviews","#reviews"],["Book Appointment","#booking"],["Contact","#contact"]].map(([l,h]) => (
                <li key={l}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-gold">Follow</div>
            <div className="mt-5 flex gap-3">
              <a href="#" className="h-10 w-10 grid place-items-center border border-cream/20 hover:border-gold hover:text-gold transition-colors"><FaInstagram /></a>
              <a href="#" className="h-10 w-10 grid place-items-center border border-cream/20 hover:border-gold hover:text-gold transition-colors"><FaFacebookF /></a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center border border-cream/20 hover:border-gold hover:text-gold transition-colors"><FaWhatsapp /></a>
            </div>
            <div className="mt-8 text-xs text-cream/60 space-y-1">
              <div>{PHONE}</div>
              <div>Miyapur, Hyderabad</div>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-cream/40">
          <div>© {new Date().getFullYear()} Paani&rsquo;s Clothing. All rights reserved.</div>
          <div>Crafted with ✦ in Hyderabad</div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------- Floating Actions ------------------- */
function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href={WHATSAPP} target="_blank" rel="noreferrer"
         className="h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp className="text-2xl" />
      </a>
      <a href={`tel:${PHONE}`}
         className="h-14 w-14 grid place-items-center rounded-full bg-ink text-gold shadow-lg hover:scale-110 transition-transform">
        <HiOutlinePhone className="text-2xl" />
      </a>
    </div>
  );
}

/* ------------------- Helpers ------------------- */
function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase ${dark ? "text-gold" : "text-brown"}`}>
      <span className={`h-px w-8 ${dark ? "bg-gold" : "bg-brown"}`} /> {children}
    </div>
  );
}

function SectionHead({ eyebrow, title, sub, dark }: { eyebrow: string; title: React.ReactNode; sub?: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed ${dark ? "text-cream/70" : "text-ink/70"}`}>{sub}</p>}
    </motion.div>
  );
}
