import Hero from "@/components/Hero";
import About from "@/components/About";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Hero />
      
    <Layout>
      <About />
    </Layout>
    </div>
  );
}
