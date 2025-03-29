import React from 'react'

import style from "./style.module.scss";

// add platform logos
import androidLogo from "../../assets/images/android.svg";
import windowsLogo from "../../assets/images/windows.svg";
import iosLogo from "../../assets/images/ios.svg";
import androidTv from "../../assets/images/android-tv.svg";
import appleTv from "../../assets/images/apple-tv.svg";
import amazonFire from "../../assets/images/amazon-fire.webp";

const Platform = () => {

  return (
      <div className={style.platforms}>
          <div className="container">
              <h2 className={style.platforms__title}>Platforms Supported</h2>
              <div className={style.platforms__grid}>
                  <div className={style.platforms__item}>
                      <img src={androidLogo} alt="Android" />
                  </div>

                  <div className={style.platforms__item}>
                      <img src={windowsLogo} alt="Windows" />
                  </div>
                  <div className={style.platforms__item}>
                      <img src={iosLogo} alt="iOS" />
                  </div>
                  <div className={style.platforms__item}>
                      <img src={androidTv} alt="macOS" />
                  </div>
                  <div className={style.platforms__item}>
                      <img src={appleTv} alt="Linux" />
                  </div>
                  <div className={style.platforms__item}>
                      <img src={amazonFire} alt="tvOS" />
                  </div>
              </div>
          </div>
      </div>  )
}

export default Platform