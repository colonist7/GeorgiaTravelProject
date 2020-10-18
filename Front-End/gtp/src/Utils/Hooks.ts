import React, { useEffect, useState } from 'react';

export function useOnMount(init: () => void, delay?: number) {
	useEffect(() => {
		if (delay) {
			setTimeout(() => {
				init();
			}, delay);
		} else {
			init();
		}
	}, []);
}
