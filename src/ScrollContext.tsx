import React, { createContext, useRef, ReactNode, RefObject, useContext } from 'react';

type ScrollContextType = RefObject<HTMLDivElement> | null;

const ScrollContext = createContext<ScrollContextType>(null);

interface ScrollProviderProps {
	children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
	const outletContainerRef = useRef<HTMLDivElement>(null); // Ref for the Outlet container

	return <ScrollContext.Provider value={outletContainerRef}>{children}</ScrollContext.Provider>;
};

export const useScrollContext = (): ScrollContextType => {
	const context = useContext(ScrollContext);
	if (context === null) {
		throw new Error('useScrollContext must be used within a ScrollProvider');
	}
	return context;
};
