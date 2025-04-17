import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white px-4 text-center space-y-8">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Phillip Kalmanson
        </h1>
        <p className="mt-4 text-xl text-white/90 max-w-xl">
          Fueled by Coca-Cola 🥤, Code, and Curiosity.
          <br />
          I build fast, clean, scalable apps.
        </p>
      </div>
      <div className="space-x-4">
        <Button size="lg">
          <a href="#projects">View My Work</a>
        </Button>
        <Button size="lg">
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
}
