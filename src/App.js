import { IonApp, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar, } from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from "./components/BiorhythmCard";

function App() {
	const [ birthDate, setBirthDate ] = useState()
	const [ targetDate, setTargetDate ] = useState(new Date().toISOString())

	const onBirthDateChange = (event) => {
		setBirthDate(event.detail.value)
	}

	const onTargetDateChange = (event) => {
		setTargetDate(event.detail.value)
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
					<IonLabel position={ `stacked` }>Target Date:</IonLabel>
					<IonDatetime displayFormat={ `D MMM YYYY` } onIonChange={ onTargetDateChange } value={ targetDate }/>
				</IonItem>
				{ birthDate &&
					<BiorhythmCard birthDate={ birthDate } targetDate={ targetDate }/>
				}
			</IonContent>
		</IonApp>
	);
}

export default App;
