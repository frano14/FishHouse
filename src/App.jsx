import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "./style";

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
      </div>
    </>
  );
}

export default App;
