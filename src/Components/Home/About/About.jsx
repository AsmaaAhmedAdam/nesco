import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useEffect } from "react";
// import NavigationDots from "../NavigationDots/NavigationDots";
import Aos from "aos";
import "aos/dist/aos.css";
import useGetHomePageData from "../../../hooks/pages/useGetHomePageData";

const About = () => {
  const { t, i18n } = useTranslation();

  const [homePageData] = useGetHomePageData();

  console.log(" #############################  homePageData:", homePageData)

  useEffect(() => {
    Aos.init(
      {
        duration: 1000,
        easing: "ease-in-sine",
        // delay: 100
      }
    );
  }, []);
  // snap-y snap-mandatory w-screen h-screen overflow-x-hidden 
  // snap-start h-screen w-screen flex
  return (
    <section className={`${styles.about}`}>
      <div className={`${styles.about__images}`}>
        <div 
          className={`scrollSection lazyload ${styles.imageOne}`} 
         //style={{backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["1"]})`}}
        >
          <div className={styles.imgBox} data-aos="fade-up">
            <div className={i18n.dir() === "rtl" ? styles.gifLeft : styles.gifRight}>
              {/* <img src="/images/gifcoffee_beans.gif" alt="" /> */}
            </div>
            <div className={styles.content}>
              <div className={styles.imgTitle}>
                {/* <h1>{homePageData?.titles?.["1"]} <sup>&#9415;</sup></h1> */}
                <h1>{t("home-about-img1Title")} <sup>&#9415;</sup></h1>
              </div>
              {/* <p className={styles.imgDesc}>{homePageData?.descriptions?.["1"]}</p> */}
              <p className={styles.imgDesc}>{t("home-about-img1Desc")}</p>
            </div>
          </div>
        </div>
        <div 
          className={`scrollSection lazyload ${styles.imageTwo}`}
          //style={{backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["2"]})`}}
        >
          <div className={styles.imgBox} data-aos="fade-up">
            {/* <div className={i18n.dir() === "rtl" ? styles.gifRight : styles.gifLeft}>
              <img src="/images/powder-coffee-ar.gif" alt="" />
            </div> */}
            <div className={styles.imageTwo__content}>
              <div className={styles.imgTitle}>
                {/* <h1>{homePageData?.titles?.["2"]}</h1> */}
                <h1>{t("home-about-img2Title1")}</h1>
                <h1>{t("home-about-img2Title2")}</h1>
              </div>
              {/* <p className={styles.imgDesc}>{homePageData?.descriptions?.["2"]}</p> */}
              <p className={styles.imgDesc}>{t("home-about-img2Desc")}</p>
              <a className={styles.knowMoreBtn} href="/about">{t("home-about-discover")}</a>
            </div>
          </div>
        </div>
        <div 
          className={`scrollSection lazyload ${styles.imageThree}`}
          //style={{backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["3"]})`}}
        >
          <div className={styles.imgBox} data-aos="fade-up">
            {/* <div className={i18n.dir() === "rtl" ? styles.gifLeft : styles.gifRight}>
              <img src="/images/coffee-cup-ar.gif" alt="" />
            </div> */}
            <div className={styles.imageTwo__content}>
              <div className={styles.imgTitle}>
                {/* <h1>{homePageData?.titles?.["3"]}</h1> */}
                <h1>{t("home-about-img3Title1")}</h1>
                <h1>{t("home-about-img3Title2")}</h1>
              </div>
              {/* <p className={styles.imgDesc}>{homePageData?.descriptions?.["3"]}</p> */}
              <p className={styles.imgDesc}>{t("home-about-img3Desc")}</p>
              <a className={styles.knowMoreBtn} href="/our-menu">{t("home-about-more")}</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.container}>
      </div> */}
      {/* <NavigationDots /> */}
    </section>
  )
}

export default About;

