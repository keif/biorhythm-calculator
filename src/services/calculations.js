import dayjs from "dayjs";

export const calculateBiorhythm = (birthDate, targetDate, cycle) => {
	const birthDay = dayjs(birthDate).startOf(`day`)
	const targetDay = dayjs(targetDate).startOf(`day`)
	const diff = targetDay.diff(birthDay, `days`)

	return Math.sin(2 * Math.PI * diff / cycle)
}

export const calculateBiorhythms = (birthDate, targetDate) => {
	return {
		physical: calculateBiorhythm(birthDate, targetDate, 23),
		emotional: calculateBiorhythm(birthDate, targetDate, 28),
		intellectual: calculateBiorhythm(birthDate, targetDate, 33),
	}
}
