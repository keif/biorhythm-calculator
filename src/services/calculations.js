import dayjs from "dayjs";

export const calculateBiorhythm = (birthDate, targetDate, cycle) => {
	const birthDay = dayjs(birthDate).startOf(`day`)
	const targetDay = dayjs(targetDate).startOf(`day`)
	const diff = targetDay.diff(birthDay, `days`)

	const result = Math.sin(2 * Math.PI * diff / cycle)

	return result
}

export const calculateBiorhythms = (birthDate, targetDate) => {
	return {
		physical: calculateBiorhythm(birthDate, targetDate, 23),
		emotional: calculateBiorhythm(birthDate, targetDate, 28),
		intellectual: calculateBiorhythm(birthDate, targetDate, 33),
	}
}
