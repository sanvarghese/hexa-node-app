import React, { useState, useEffect } from "react";
import style from "./style.module.scss";

import singleApp from "../../assets/images/single-app-kios-image.webp";

import multiApp from "../../assets/images/multi-app-kiosk-image.webp";
import webKiosk from "../../assets/images/web-based-kiosk-image.webp";
import digitalSignage from "../../assets/images/digital-signage-kiosk-image.webp";
import infoKiosk from "../../assets/images/asam-kiosk-image.webp";

// Add new images for the possibilities section
import deploymentImage from "../../assets/images/effortless-kiosk-deployement-image.webp";
import interfaceImage from "../../assets/images/customized-interface-image.webp";
import possibilitiesImage from "../../assets/images/power-up-protection-image.webp";
import securityImage from "../../assets/images/secure-app-ecosystem.webp";
import userInterfaceImage from "../../assets/images/easy-to-use-interface-image.webp";

const KisokModes = () => {

    const [activeMode, setActiveMode] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [key, setKey] = useState(0); // Add key for forcing re-render
    const [activePossibility, setActivePossibility] = useState(null);

    // const awards = [
    //     {
    //         id: 1,
    //         logo: idcImage,
    //         content:
    //             "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    //     },
    //     {
    //         id: 2,
    //         logo: gartnerImage,
    //         content:
    //             "Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.",
    //     },
    //     {
    //         id: 3,
    //         logo: forresterImage,
    //         content:
    //             "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    //     },
    // ];

    const kioskModes = [
        {
            id: 1,
            title: "Single App Kiosk",
            description: "Powerful Single-App Kiosk solutions for enhanced control",
            features: [
                "Provision the devices to run one specialized application, with limited functionalities.",
                "Customize the device settings to cater to a specific use-case each time.",
                "Use Hexnode's Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
                "Empower your administrators with full control over the kiosk devices.",
            ],
            image: singleApp,
        },
        {
            id: 2,
            title: "Multi-App Kiosk",
            description: "Elevate efficiency with Multi-App Kiosk",
            features: [
                "Limit device access to approved apps, ensuring focus and productivity.",
                "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
                "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
                "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
            ],
            image: multiApp,
        },
        {
            id: 3,
            title: "Web-based Kiosk",
            description: "Explore the new way to manage web apps and websites",
            features: [
                "Let users access essential and approved web apps, website and files only.",
                "Make the best use of website kiosk with Hexnode's advanced settings.",
                "Tailor your experience to match your unique use case.",
                "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
            ],
            image: webKiosk,
        },
        {
            id: 4,
            title: "Digital Signage",
            description: "Capture attention with Digital Signage Kiosks",
            features: [
                "Transform your devices into captivating digital signage kiosks that grab attention.",
                "Engage your audience with vibrant images and seamless video streaming.",
                "Customize media files with trimming, muting, and background music.",
                "Advertise and show off your brand aesthetics to attract customers in different ways.",
                "Take control with Hexnode to reestablish your brand's presence.",
            ],
            image: digitalSignage,
        },
        {
            id: 5,
            title: "Information Kiosk",
            description: "Unlock the power of Autonomous Single App Mode (ASAM)",
            features: [
                "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
                "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
                "Create focused, efficient and secure digital environments to match your requirements.",
                "Configure ASAM effortlessly and elevate your user experience like never before.",
            ],
            image: infoKiosk,
        },
    ];

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

    // const reviews = [
    //     {
    //         id: 1,
    //         image: customer1,
    //         text: "Hexnode is of great value. Works great with Android and iOS!",
    //         name: "Justin Modrak",
    //         company: "Technology Coordinator",
    //     },
    //     {
    //         id: 2,
    //         image: customer2,
    //         text: "Most complete MDM solution I found, and I tested many of them, including major names",
    //         name: "Dalibor Kruljac",
    //         company: "KAMELEYA LTD",
    //     },
    //     {
    //         id: 3,
    //         image: customer3,
    //         text: "It seemed to be in-line with everything we were looking at.",
    //         name: "Chris Robinson",
    //         company: "Executive Account Manager, NCS",
    //     },
    // ];

    // const companyLogos = [
    //     { id: 1, logo: company1 },
    //     { id: 2, logo: company2 },
    //     { id: 3, logo: company3 },
    //     { id: 4, logo: company4 },
    //     { id: 5, logo: company5 },
    //     { id: 6, logo: company6 },
    //     { id: 7, logo: company7 },
    //     { id: 8, logo: company8 },
    //     { id: 9, logo: company9 },
    // ];

    // Set the initial active mode after kioskModes is defined
    useEffect(() => {
        setActiveMode(kioskModes[0]);
        setActivePossibility(possibilities[0].id); // Set first possibility as active
    }, []);

    const handleModeChange = (mode) => {
        setIsAnimating(true);
        setKey((prev) => prev + 1); // Force re-render
        setActiveMode(mode);

        // Reset animation state after animation completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

  return (
        <div className = { style.kioskModes } >
            <div className="container">
                <h2 className={style.kioskModes__title}>
                    Specific kiosk modes for unique use cases
                </h2>

                {/* Title tabs */}
                <div className={style.kioskModes__tabs}>
                    {kioskModes.map((mode) => (
                        <div
                            key={mode.id}
                            className={`${style.kioskModes__tab} ${activeMode && activeMode.id === mode.id ? style.active : ""
                                }`}
                            onClick={() => handleModeChange(mode)}
                        >
                            {mode.title}
                        </div>
                    ))}
                </div>

                {/* Content display */}
                {activeMode && (
                    <div key={key} className={style.kioskModes__contentWrapper}>
                        <div
                            className={`${style.kioskModes__textContent} ${isAnimating ? style.animate : ""
                                }`}
                        >
                            <h3 className={style.kioskModes__description}>
                                {activeMode.description}
                            </h3>
                            <div className={style.kioskModes__features}>
                                {activeMode.features.map((feature, index) => (
                                    <p key={index}>{feature}</p>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`${style.kioskModes__imageContent} ${isAnimating ? style.animate : ""
                                }`}
                        >
                            <img src={activeMode.image} alt={activeMode.title} />
                        </div>
                    </div>
                )}
            </div>
      </div> 
  )
}

export default KisokModes