import { FC } from 'react';

import { ReactComponent as ComingSoonIcon } from '../../assets/icons/coming-soon.svg';

const ComingSoon: FC<{}> = () => {
	return (
		<section className="h-full flex items-center justify-center flex-col">
			<ComingSoonIcon className="h-1/4 md:h-3/5 max-w-xs md:max-w-2xl" />
			<h1 className="my-8 text-4xl text-primary">Coming Soon ....</h1>
		</section>
	);
};

export default ComingSoon;