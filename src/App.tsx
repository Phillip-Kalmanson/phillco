import { buttonVariants } from "@/components/ui/button";

function App() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen space-y-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background glow */}
      <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 h-[30rem] w-[60rem] rounded-full bg-purple-700 opacity-20 blur-3xl pointer-events-none" />

      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center z-10">
        Vite, React, Shadcn-ui minimal starter
      </h1>
      
      <a
        href="https://github.com/Phillip-Kalmanson/vite-react-tailwind-boilerplate"
        target="_blank"
        rel="noreferrer"
        className={buttonVariants()}
      >
        ⭐️ on GitHub
      </a>
    </main>
  );
}

export default App;
