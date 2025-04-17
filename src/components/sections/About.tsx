import { useState } from "react";
import { cn } from "@/lib/utils"; // If you're using the ShadCN project setup

const images = ["/img0.jpg", "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg"]; // Replace with your actual image filenames

export default function About() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-10">About Me</h2>

      <div className="relative w-full lg:block flex flex-col">
        {/* Carousel floated on large screens, stacked on mobile */}
        <div className="w-96 h-96 lg:float-left mr-6 mb-4 relative rounded-xl overflow-hidden border border-white/10 shadow-md">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                i === current ? "opacity-100" : "opacity-0"
              )}
            />
          ))}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
          >
            ›
          </button>
        </div>

        {/* Wrapped Bio Text */}
        <div className="text-white/90 text-lg leading-8">
          <p>
            I'm a full-stack developer with a strong foundation in computer science and hands-on experience across web development, infrastructure, and AI-driven systems. I've worked in both startup and enterprise environments, giving me a wide perspective on building software that’s scalable, secure, and user-focused. Whether I’m debugging a SQL bottleneck or designing a clean UI, I’m always focused on delivering real, functional outcomes.
          </p>

          <p className="mt-4">
            At <strong>Sterologic</strong>, a tech startup, I worked on the AI team to develop and train a two-stage OCR algorithm for a process mining service. I designed an internal evaluation system to compare model performance across recall and precision metrics, and contributed to platform security by identifying and mitigating vulnerabilities like the Log4J Zero-Day exploit. My work centered around Python, scikit-learn, and PyTorch, and I collaborated across teams using Git, Jira, and Bitbucket to manage and deliver new features.
          </p>

          <p className="mt-4">
            At <strong>GorillaWorks</strong>, I started on the production support team resolving critical SQL issues and system incidents, before transitioning into full-stack development. I led the development of multiple features, including a dynamic mass email campaign system, internal tooling for content management, and performance-optimized reporting dashboards. I also migrated legacy report pages from SQL to NoSQL querying, improving load times by up to 85%. My main stack included C#, .NET, React, Azure, and SQL, working in a Scrum-based agile environment.
          </p>

          <p className="mt-4">
            Outside of work, I build personal projects that combine backend development, automation, and computer vision. I’m currently developing a portfolio site powered by React and Python that features a fish detection API built from scratch. These kinds of projects let me explore new ideas, test tools, and refine my skills in the areas I care most about.
          </p>

          <p className="mt-4">
            When I’m not building things, you’ll probably find me fishing, tinkering with my 3D printer, or sipping a cold Coke mid-debug session. I like the calm and focus of hands-on hobbies, and I carry that same mindset into my dev work — stay curious, iterate fast, and keep learning.
          </p>
        </div>
      </div>
    </section>
  );
}
