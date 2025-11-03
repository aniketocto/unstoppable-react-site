// src/components/ServiceSection.jsx
import gsap from "gsap";
import "../assets/css/serviceSection.css";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const btnRef = useRef(null);
  const pointerIdRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    gsap.set(btn, { x: 0, y: 0, rotation: 10 });

    function onPointerDown(e) {
      pointerIdRef.current = e.pointerId;
      btn.setPointerCapture(pointerIdRef.current);
      gsap.killTweensOf(btn);
      btn.classList.add("dragging");
    }

    function onPointerMove(e) {
      if (pointerIdRef.current !== e.pointerId) return;
      btn._dragX = (btn._dragX || 0) + e.movementX;
      btn._dragY = (btn._dragY || 0) + e.movementY;
      const max = 120;
      const dx = Math.max(Math.min(btn._dragX, max), -max);
      const dy = Math.max(Math.min(btn._dragY, max / 2), -max / 2);
      const rot = 10 + dx * 0.08;
      gsap.set(btn, { x: dx, y: dy, rotation: rot });
    }

    function onPointerUp(e) {
      if (pointerIdRef.current !== e.pointerId) return;
      try {
        btn.releasePointerCapture(pointerIdRef.current);
      } catch (err) {}
      pointerIdRef.current = null;
      btn.classList.remove("dragging");

      gsap.to(btn, {
        duration: 1.1,
        x: 0,
        y: 0,
        rotation: 10,
        ease: "elastic.out(1, 0.6)",
        onComplete: () => {
          btn._dragX = 0;
          btn._dragY = 0;
        },
      });
    }

    btn.addEventListener("pointerdown", onPointerDown);
    btn.addEventListener("pointermove", onPointerMove);
    btn.addEventListener("pointerup", onPointerUp);
    btn.addEventListener("pointercancel", onPointerUp);
    btn.addEventListener("pointerleave", onPointerUp);

    return () => {
      btn.removeEventListener("pointerdown", onPointerDown);
      btn.removeEventListener("pointermove", onPointerMove);
      btn.removeEventListener("pointerup", onPointerUp);
      btn.removeEventListener("pointercancel", onPointerUp);
      btn.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  // example services array — replace/add as needed
  const services = [
    {
      title: "Brand Strategy & Identity",
      description: "Build brands that stand out, scale up and stay relevant.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "Brand Discovery & Audit",
        "Brand Strategy & Positioning",
        "Brand Name & Nomenclature",
        "Visual Identity Design",
        "Brand Story, Archetype & Voice Development",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
    {
      title: "Web & App Development",
      description: "Crafting digital experiences that convert and engage.",
      image: "/images_1/service1.png",
      cover: "/images_1/serviceCover.png",
      tags: [
        "UI/UX Design",
        "Frontend & Backend",
        "CMS & Dashboard",
        "Performance Optimization",
      ],
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="service-section">
      <h1 className="service-heading">
        Integrated Growth Solutions <br /> for Every Stage of B<span>us</span>{" "}
        inesses
        <button ref={btnRef} className="cta-interact" aria-label="Case Studies">
          Our Services
        </button>
      </h1>

      <p className="service-text">
        Our ecosystem of services bridges every critical GAP from visibility to
        acquisition to scale.
      </p>

      <div className="service-grid">
        {visibleServices.map((svc, i) => (
          <ServiceCard
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            title={svc.title}
            description={svc.description}
            image={svc.image}
            cover={svc.cover}
            tags={svc.tags}
          />
        ))}
      </div>

      <button className="cta" onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "Show Less" : "View All Services"} <FaArrowRightLong />
      </button>
    </section>
  );
};

export default ServiceSection;
