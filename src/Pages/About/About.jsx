
import Award from "../../Components/About/Award/Award";
import Stats from "../../Components/About/Stats/Stats";
import StoryAboutUs from "../../Components/About/StoryAboutUs/StoryAboutUs";
import ContactNow from "../../Components/Home/ContactNow/ContactNow";
import ExpertTrainer from "../../Components/Home/ExpertTrainer/ExpertTrainer";
import FooterBg from "../../Components/Home/FooterBg/FooterBg";
import Hero from "../../Shared/Hero/Hero";


export default function About() {
  return (
    <div>
      <Hero/>
      <StoryAboutUs/>
      <Stats/>
      <Award/>
      <ContactNow/>
      <ExpertTrainer/>
      <FooterBg/>
    </div>
  )
}
