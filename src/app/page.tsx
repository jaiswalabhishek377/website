import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import LeetCodeCard from "@/components/LeetCodeCard";
import GitHubSection from "@/components/GitHubSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <LeetCodeCard />
        <GitHubSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
      </main>
      <Footer />
    </>
  );
}
