import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Home/Services/Services";
import TestSlides from "../../Components/Home/ClassesSlides/TestSlides";
import StoryAboutUs from "../../Components/StoryAboutUs/StoryAboutUs";
import ExpertTrainer from "../../Components/Home/ExpertTrainer/ExpertTrainer";
import Testimonial from "../../Components/Home/Testimonial/Testimonial";
import ContactNow from "../../Components/Home/ContactNow/ContactNow";
import Membership from "../../Components/Home/Membership/Membership";
import RegisterNow from "../../Components/Home/RegisterNow/RegisterNow";
import LeatestBlog from "../../Components/Home/LeatestBlog/LeatestBlog";
import FooterBg from "../../Components/Home/FooterBg/FooterBg";

export default function Home() {
  return (
    <div>
      <Hero />
      <StoryAboutUs/>
      <Services/>
      <TestSlides/>
      <ExpertTrainer/>
      <Testimonial/>
      <ContactNow/>
      <Membership/>
      <RegisterNow/>
      <LeatestBlog/>
      <FooterBg/>
    </div>
  )
}
