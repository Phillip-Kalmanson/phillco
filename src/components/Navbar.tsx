import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
  } from "@/components/ui/navigation-menu";
  
  import { cn } from "@/lib/utils";
  
  export default function Navbar() {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-4 w-[200px]">
                <li>
                  <NavigationMenuLink href="#about" className={cn("hover:underline")}>
                    Who I Am
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#interests" className={cn("hover:underline")}>
                    Interests
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuLink href="#projects" className="px-4 py-2 text-sm hover:underline">
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuLink href="#contact" className="px-4 py-2 text-sm hover:underline">
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  