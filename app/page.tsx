"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const phone = "9493399149";
const email = "pchsurface.collc@gmail.com";
const instagram = "https://instagram.com/pchsurface";

const quoteLink =
  "mailto:pchsurface.collc@gmail.com?subject=Booking%20Request%20-%20PCH%20Surface&body=Hi%20PCH%20Surface%2C%0A%0AI%20want%20to%20get%20a%20quote.%0A%0AName%3A%0APhone%3A%0AVehicle%3A%0ALocation%3A%0AService%20needed%3A";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-black/5 bg-white/80 px-6 py-4 backdrop-blur-xl md:px-12">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PCH Surface Co"
            width={120}
            height={60}
            priority
            className="h-auto w-36 md:w-48"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-black/70 md:flex">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#showcase">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={quoteLink}
          className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Book Now
        </a>
      </header>

      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-16 md:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl mt-12 md:-mt-16"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
            Premium Mobile Detailing
          </p>

          <h1 className="text-4xl font-bold leading-[1] tracking-tight md:text-6xl">
            From Pacific Coast Highway
            <br />
            To Your Driveway
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600 md:text-xl">
            We come to you
            <br />
            Every time anywhere
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Call Now
            </a>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black px-7 py-3.5 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="pointer-events-none mt-10 md:absolute md:bottom-0 md:right-0 md:w-[68%]"
        >
          <Image
            src="/hero.jpg"
            alt="Luxury mobile detailing by PCH Surface Co"
            width={1600}
            height={1000}
            priority
            className="w-full object-contain"
          />
        </motion.div>
      </section>

      <motion.section
        id="services"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 py-28 md:px-12 md:py-36"
      >
        <p className="mb-10 text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
          We Detail
        </p>

        <div className="grid grid-cols-1 gap-y-6 text-4xl font-bold leading-none tracking-tight md:grid-cols-2 md:gap-x-24 md:text-7xl">
  <p>Cars</p>
  <p>Luxury</p>
  <p>Trucks</p>
  <p>Exotic</p>
  <p>SUVs</p>
  <p>Commercial</p>
  <p>RVs</p>
  <p className="text-zinc-400">Aircraft Coming Soon</p>
</div>
      </motion.section>

      <motion.section
        id="showcase"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-4 py-10 md:px-8"
      >
        <Image
          src="/showcase.jpg2.jpg"
          alt="PCH Surface Co showcase"
          width={1800}
          height={1000}
          className="w-full rounded-[2rem] object-cover shadow-2xl"
        />
      </motion.section>

      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
            Get A Quote
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Quick Easy
            <br />
            Done
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Send us your vehicle, location, and what you need detailed. We’ll
            get back to you with a quote.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={quoteLink}
              className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              Get A Quote
            </a>

            <a
              href={`tel:${phone}`}
              className="rounded-full border border-black px-8 py-4 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              Call / Text
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="grid gap-8 border-t border-black/10 px-6 py-12 text-sm md:grid-cols-3 md:px-12">
        <div>
          <p className="mb-2 text-zinc-500">Call / Text</p>
          <a href={`tel:${phone}`} className="font-bold">
            949 339 9149
          </a>
        </div>

        <div>
          <p className="mb-2 text-zinc-500">Email</p>
          <a href={`mailto:${email}`} className="font-bold">
            {email}
          </a>
        </div>

        <div>
          <p className="mb-2 text-zinc-500">Instagram</p>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            @pchsurface
          </a>
        </div>
      </footer>
    </main>
  );
}