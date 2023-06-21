import styles from "./styles";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-stone-950 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-stone-800 ${styles.paddingX} ${styles.flexCenter}`}>
        <Filter />
      </div>

      <div className={`bg-stone-950 ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Scroll>
            <CardList />
          </Scroll>
        </div>
      </div>

      <div className={`bg-stone-950 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
