import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Add review images
import customer1 from "../../assets/images/justin-modrak.webp";
import customer2 from "../../assets/images/dalibor-kruljac.webp";
import customer3 from "../../assets/images/chris-robinson.webp";

// Add company logo images
import company1 from "../../assets/images/costco.svg";
import company2 from "../../assets/images/gorillas.svg";
import company3 from "../../assets/images/hilton.svg";
import company4 from "../../assets/images/lowes.svg";
import company5 from "../../assets/images/marriott-intl.svg";
import company6 from "../../assets/images/merck.svg";
import company7 from "../../assets/images/polaris.svg";
import company8 from "../../assets/images/saic.svg";
import company9 from "../../assets/images/wolt.svg";

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            image: customer1,
            text: "Hexnode is of great value. Works great with Android and iOS!",
            name: "Justin Modrak",
            company: "Technology Coordinator",
            details: "East Troy Community School District",

        },
        {
            id: 2,
            image: customer2,
            text: "Most complete MDM solution I found, and I tested many of them, including major names",
            name: "Dalibor Kruljac",
            company: "KAMELEYA LTD",
        },
        {
            id: 3,
            image: customer3,
            text: "It seemed to be in-line with everything we were looking at.",
            name: "Chris Robinson",
            company: "Executive Account Manager, NCS",
        },
    ];

    const companyLogos = [
        { id: 1, logo: company1 },
        { id: 2, logo: company2 },
        { id: 3, logo: company3 },
        { id: 4, logo: company4 },
        { id: 5, logo: company5 },
        { id: 6, logo: company6 },
        { id: 7, logo: company7 },
        { id: 8, logo: company8 },
        { id: 9, logo: company9 },
    ];


    return (
        <div div className={style.reviews} >
            <div className="container">
                <h2 className={style.reviews__title}>
                    Why should you choose Hexnode?
                </h2>

                <div className={style.reviews__carousel}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        // autoplay={false}
                        speed={2000}
                        breakpoints={{
                            992: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className={style.reviews__card}>
                                    <div className={style.reviews__image}>
                                        <img src={review.image} alt={review.name} />
                                    </div>
                                    <div className={style.reviews__content}>
                                        <p className={style.reviews__text}>"{review.text}"</p>

                                        <div className={style.reviews__info}>
                                            <h3>{review.name}</h3>
                                            <span>{review.company}</span>
                                            {review?.details && (
                                                <>
                                                    <br />
                                                    <span>{review?.details}</span>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={style.reviews__logos}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        speed={3000}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {companyLogos.map((company) => (
                            <SwiperSlide key={company.id}>
                                <div className={style.reviews__logo}>
                                    <img src={company.logo} alt={`Company ${company.id}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Reviews