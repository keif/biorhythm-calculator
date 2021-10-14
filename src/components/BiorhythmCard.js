import React from "react";
import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import dayjs from "dayjs";

const BiorhythmCard = ({ targetDate }) => {
	const formatDate = (isoString) => dayjs(isoString).format(`D MMM YYYY`)
	const headerText = formatDate(targetDate)

	return (
		<IonCard className={ `ion-text-center` }>
			<IonCardHeader>{ headerText }</IonCardHeader>
			<IonCardContent>
				<p>Physical: 83%</p>
				<p>Emotional: 83%</p>
				<p>Intellectual: 83%</p>
			</IonCardContent>
		</IonCard>
	)
}

export default BiorhythmCard
