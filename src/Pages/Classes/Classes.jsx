import BMICalculator from "../../Components/Clasess/BMICalculator ";
// import CalorieCalculator from "../../Components/Clasess/CalorieCalculator ";
import ClasesGrids from "../../Components/Clasess/ClasesGrids";
import ClassTimeTable from "../../Components/Clasess/ClassTimeTable";
import FooterBg from "../../Components/Home/FooterBg/FooterBg";
import RegisterNow from "../../Components/Home/RegisterNow/RegisterNow";
import Hero from "../../Shared/Hero/Hero";

export default function Classes() {
  return (
    <div>
      <Hero />
      <RegisterNow />
      <ClasesGrids />
      <BMICalculator />
      {/* <CalorieCalculator /> */}
      <ClassTimeTable />
      <FooterBg />
    </div>
  )
}
