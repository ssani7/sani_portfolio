import react from '../assets/icons/React-icon.svg.png';
import tail from '../assets/icons/Tailwind_CSS_Logo.svg.png';
import firebase from '../assets/icons/firebase.png';
import mongo from '../assets/icons/mongo.png';

const icons = [
	{ name: 'ReactJs', imagae: react },
	{ name: 'Tailwind', imagae: tail },
	{ name: 'MongoDB', imagae: mongo },
	{ name: 'Fireabase', imagae: firebase },
	{ name: '', imagae: react },
	{ name: '', imagae: react },
];

export const findIcon = (name: string) => {
	const icon = icons.find((i) => i.name === name);
	return icon;
};
