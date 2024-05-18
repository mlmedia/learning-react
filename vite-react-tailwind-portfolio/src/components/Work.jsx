import React from 'react';
import WorkItem from './WorkItem';

const data = [
	{
		year: 2020,
		title: 'Content Creator',
		duration: '3 years',
		details: 'Amet qui excepteur deserunt ad pariatur reprehenderit dolore sint consectetur anim occaecat occaecat nisi velit. Nisi reprehenderit in sit ad in Lorem mollit aliqua velit enim incididunt laborum commodo. Nisi veniam quis nulla duis amet sunt proident irure nostrud et cupidatat fugiat aliqua. Nisi ipsum labore consequat est exercitation sunt laboris adipisicing.'
	},
	{
		year: 2017,
		title: 'Google',
		duration: '3 years',
		details: 'Amet qui excepteur deserunt ad pariatur reprehenderit dolore sint consectetur anim occaecat occaecat nisi velit. Nisi reprehenderit in sit ad in Lorem mollit aliqua velit enim incididunt laborum commodo. Nisi veniam quis nulla duis amet sunt proident irure nostrud et cupidatat fugiat aliqua. Nisi ipsum labore consequat est exercitation sunt laboris adipisicing.'
	},
	{
		year: 2014,
		title: 'Amazon',
		duration: '3 years',
		details: 'Amet qui excepteur deserunt ad pariatur reprehenderit dolore sint consectetur anim occaecat occaecat nisi velit. Nisi reprehenderit in sit ad in Lorem mollit aliqua velit enim incididunt laborum commodo. Nisi veniam quis nulla duis amet sunt proident irure nostrud et cupidatat fugiat aliqua. Nisi ipsum labore consequat est exercitation sunt laboris adipisicing.'
	}
];
const Work = () => {
	return (
		<div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<h1 className="text-4xl text-center font-bold text-[#001b5e]">Work</h1>
			{data.map((item, idx) => (
				<WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
			))}
		</div>
	);
};

export default Work;