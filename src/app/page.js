import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/config/ParticlesComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d1117] z-9999 justify-center mx-auto">
      <ParticlesComponent className="-z-1" />

      <Navbar className="z-1" />
      <div class="container mt-24 mx-auto px-12 py-4 z-1">
        <HeroSection className="z-10" />
        <AchievementsSection />

        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
