import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#head" className="text-xl text-white/90 font-bold">Phillip Kalmanson</a>

        <NavigationMenu>
          <NavigationMenuList className="gap-4 text-sm text-muted-foreground">
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className="hover:text-white/90">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className="hover:text-white/90">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className="hover:text-white/90">Contact</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:text-white/90">Coming Soon: DeepGill</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
