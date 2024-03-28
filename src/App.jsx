import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import styles from "./style";
import Chefs from "./components/Chefs";
import WorkingHours from "./components/WorkingHours";
import Reservation from "./components/Reservation";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} relative`}>
            <Navbar />
          </div>
        </div>
        <div className={`relative`}>
          <Hero />
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <AboutUs />
            <Menu />
            <Chefs />
            <WorkingHours />
            <Reservation />
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
