import React from 'react';
import style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footer_wrap}>

      <div className={style.footer_top_box}>
        <div className="container">
          <div className={style.footer_top_box_inner}>

            <h3>
              Sign up and try Hexnode free for 14 days!
            </h3>
            <div className={style.input_content_wrapper}>

              <div className={style.input_box}>
                <form action={() => { }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Work Email"
                  />
                  <button type="submit" className="btn">
                    GET STARTED
                  </button>
                </form>
              </div>
              <p className={style.credit_content}>No credit cards required.<a className={style.demo_content} role="link" href="https://www.hexnode.com/mobile-device-management/request-demo/">Request a demo </a></p>

            </div>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom_box}>
        <div className="container">
          <div className={style.footer_bottom_box_inner}>
            <ul>
              <li>
                <a href="">
                  Terms of Use
                </a>
                <a href="">
                  Privacy
                </a>
                <a href="">
                  Cookies
                </a>
              </li>
            </ul>
            <p>
              Copyright © 2025 Mitsogo Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer