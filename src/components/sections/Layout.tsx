import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows or scrolls */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="p-4 text-sm text-center text-muted-foreground">
        © {new Date().getFullYear()} Phillip Kalmanson. All rights reserved.
      </footer>
    </div>
  );
}
