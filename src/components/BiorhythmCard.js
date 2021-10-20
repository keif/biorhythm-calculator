import React from "react";
import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../services/calculations";

const BiorhythmCard = ({ birthDate, targetDate }) => {
	const formatDate = (isoString) => dayjs(isoString).format(`D MMM YYYY`)
	const headerText = formatDate(targetDate)
	const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate)

	return (
		<IonCard className={ `ion-text-center` }>
			<IonCardHeader>{ headerText }</IonCardHeader>
			<IonCardContent>
				<p>Physical: { physical.toFixed(4) }</p>
				<p>Emotional: { emotional.toFixed(4) }</p>
				<p>Intellectual: { intellectual.toFixed(4) }</p>
			</IonCardContent>
		</IonCard>
	)
}

export default BiorhythmCard
