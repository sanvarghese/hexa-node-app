import React from "react";
import style from "./home.module.scss";

import bannerImage from "../assets/images/hexnode-kiosk.webp";
import idcImage from "../assets/images/idc.webp";
import gartnerImage from "../assets/images/gartner.webp";
import forresterImage from "../assets/images/forrester.webp";

import KisokModes from "../components/KisokModes";
import Possibilities from "../components/Possibilities";
import Reviews from "../components/Reviews";
import Platform from "../components/Platforms";

export default function Home() {
	const awards = [
		{
			id: 1,
			logo: idcImage,
			content:
				"Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
		},
		{
			id: 2,
			logo: gartnerImage,
			content:
				"Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.",
		},
		{
			id: 3,
			logo: forresterImage,
			content:
				"Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
		},
	];
	return (
		<div className={style.home}>
			<div className={style.banner}>
				<div className="container">
					<div className={style.banner__inner}>
						<div className={style.banner__left}>
							<h1>
								Turn your devices into kiosks in a few minutes
								with Hexnode UEM
							</h1>
							<form action={() => { }}>
								<input
									type="email"
									name="email"
									placeholder="Your Work Email"
								/>
								<button type="submit" className="btn">
									GET STARTED NOW!
								</button>
							</form>
						</div>
						<div className={style.banner__right}>
							<img src={bannerImage} alt="Hexnode Kiosk" />
						</div>
					</div>
				</div>
			</div>
			<div className={style.awards}>
				<div className="container">
					<div className={style.awards__inner}>
						{awards.map((award, i) => {
							return (
								<>
									{i !== 0 ? (
										<div className={style.awards__seperator}></div>
									) : null}
									<div
										key={award.id}
										className={style.awards__item}
									>
										<img
											src={award.logo}
											alt="Hexnode Kiosk"
										/>
										<p>{award.content}</p>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>

			{/* Kiosk modes section */}
			<KisokModes />

			{/* Possibilities section */}
			<Possibilities />

			{/* Reviews section */}
			<Reviews />

			{/* Platform section */}
			<Platform/>

		</div>
	);
}
