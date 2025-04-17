import HomePage from "@/pages/HomePage";
import Header from "@/components/sections/NavBar";
export default function App() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <HomePage />
    </section>
  );
}
