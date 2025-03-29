import React, { useState, useEffect } from "react";
import style from "./style.module.scss";

// Add new images for the possibilities section
import deploymentImage from "../../assets/images/effortless-kiosk-deployement-image.webp";
import interfaceImage from "../../assets/images/customized-interface-image.webp";
import possibilitiesImage from "../../assets/images/power-up-protection-image.webp";
import securityImage from "../../assets/images/secure-app-ecosystem.webp";
import userInterfaceImage from "../../assets/images/easy-to-use-interface-image.webp";

const Possibilities = () => {

    const [activePossibility, setActivePossibility] = useState(null);

    const possibilities = [
        {
            id: 1,
            title: "Effortless kiosk deployment & management",
            description:
                "Deploy and manage kiosk devices with ease using Hexnode's intuitive interface. Configure settings, update content, and monitor devices remotely. Streamline your kiosk management process with automated deployment and maintenance tools.",
            image: deploymentImage,
        },
        {
            id: 2,
            title: "Customized interface for brand visibility",
            description:
                "Create a branded experience with custom interfaces, themes, and layouts. Display your company logo, colors, and messaging to reinforce brand identity. Engage users with personalized content and interactive elements.",
            image: interfaceImage,
        },
        {
            id: 3,
            title: "What more can you do with Hexnode kiosk?",
            description:
                "Explore advanced features like content scheduling, analytics tracking, and remote management. Integrate with third-party applications, set up automated workflows, and create dynamic content experiences.",
            image: possibilitiesImage,
        },
        {
            id: 4,
            title: "Secure and update your app ecosystem",
            description:
                "Maintain a secure and up-to-date kiosk environment with automated updates and security patches. Control app versions, manage permissions, and ensure compliance with security standards.",
            image: securityImage,
        },
        {
            id: 5,
            title: "Provide an easy-to-use interface for end-users",
            description:
                "Design intuitive interfaces that guide users through their tasks efficiently. Implement touch-friendly controls, clear navigation, and helpful prompts to enhance user experience.",
            image: userInterfaceImage,
        },
    ];

    // Set the initial active mode after kioskModes is defined
    useEffect(() => {
        setActivePossibility(possibilities[0].id); // Set first possibility as active
    }, []);


    return (

        <div className={style.possibilities}>
            <div className="container">
                <h2 className={style.possibilities__title}>
                    What additional possibilities does the Kiosk mode offer?
                </h2>

                <div className={style.possibilities__content}>
                    {/* Left column - Images (Desktop only) */}
                    <div className={style.possibilities__images}>
                        {possibilities.map((item) => (
                            <div
                                key={item.id}
                                className={`${style.possibilities__imageWrapper} ${activePossibility === item.id ? style.active : ""
                                    }`}
                            >
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>

                    {/* Right column - Headers and Descriptions */}
                    <div className={style.possibilities__list}>
                        {possibilities.map((item) => (
                            <div
                                key={item.id}
                                className={`${style.possibilities__item} ${activePossibility === item.id ? style.active : ""
                                    }`}
                            >
                                <div
                                    className={style.possibilities__header}
                                    onClick={() =>
                                        setActivePossibility(
                                            activePossibility === item.id ? null : item.id
                                        )
                                    }
                                >
                                    <h1>{item.title}</h1>
                                </div>
                                <div className={style.possibilities__description}>
                                    {/* Mobile Image */}
                                    <div className={style.possibilities__imageWrapper}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <p>{item.description}</p>
                                    <div className={style.possibilities__cta}>
                                        <span>TRY FOR FREE</span>
                                        <span className={style.possibilities__arrow}>{">"}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Possibilities