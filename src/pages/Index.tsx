import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import CommunityLove from "@/components/CommunityLove";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <MenuPreview />
          <InstagramFeed />
        <CommunityLove />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
