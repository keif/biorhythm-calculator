import { IonApp, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar, } from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from "./components/BiorhythmCard";

function App() {
	const [ birthDate, setBirthDate ] = useState()

	const onBirthDateChange = (event) => {
		setBirthDate(event.detail.value)
	}

	return (
		<IonApp>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Biorhythms</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonItem>
					<IonLabel position={ `stacked` }>Date of
						Birth:</IonLabel>
					<IonDatetime displayFormat={ `D MMM YYYY` } onIonChange={ onBirthDateChange } value={ birthDate }/>
				</IonItem>
				<BiorhythmCard targetDate={ birthDate }/>
			</IonContent>
		</IonApp>
	);
}

export default App;
