import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-24 text-white text-center space-y-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-lg text-white/80">
        Got a cool opportunity, project idea, or just want to say hi? Drop me a message — I'm always open to interesting work.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild>
          <a href="mailto:phillip@example.com">Email Me</a>
        </Button>
        <Button asChild className="gap-2">
          <a href="/resume.pdf" download>
            <Download className="w-4 h-4" />
            Download My Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
