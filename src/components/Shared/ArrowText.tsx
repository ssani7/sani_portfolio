import { ReactNode } from 'react';
import '../../styles/ArrowText.css';
const ArrowText = ({ children, direction }: { children: ReactNode; direction: 'left' | 'right' }) => {
	return (
		<div className={`arrow-text text-black bg-accent ${direction == 'left' ? 'rotate-180 ' : ''} lg:pr-12 pr-10 pl-5 py-2`}>
			<span className={`${direction == 'left' ? 'rotate-180' : ''} text-xs lg:text-sm`}>{children}</span>
		</div>
	);
};

export default ArrowText;
