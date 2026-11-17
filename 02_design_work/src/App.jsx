import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Button } from "./components/ui/button.jsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
function App() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Hero />
      <Button variant="outline">Click me</Button>
      <Header />
      <h1 className="border-2 p-4 rounded-xl text-blue-600 dark:text-sky-400">
        Learn to integrate tailwind
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Card
          title="Buy Python course"
          buttonText="join now"
          imageurl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        />
        <Card
          title="Buy Nodejs course"
          imageurl="https://www.pexels.com/video/captivating-fall-foliage-in-warm-light-39372786/"
        />
        <Card
          title="Fruits and vegetables"
          imageurl="https://www.pexels.com/photo/autumn-harvest-display-with-pomegranate-and-gourds-40504350/"
        />
      </div>
    </>
  );
}

export default App;
