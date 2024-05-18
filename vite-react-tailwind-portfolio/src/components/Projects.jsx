import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/img/property.jpg';
import cryptoImg from '../assets/img/crypto.jpg';
import netflixImg from '../assets/img/netflix.jpg';
import twitchImg from '../assets/img/twitch.jpg';

const Projects = () => {
	return (
		<div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
			<p className="text-center py-8">
				Nulla cillum occaecat adipisicing adipisicing voluptate cillum sunt deserunt. Ea ex cupidatat minim mollit. Duis aute tempor laboris qui nisi veniam Lorem. Veniam laboris irure magna qui ad voluptate nulla ullamco ullamco et Lorem minim est. Lorem dolor do voluptate ullamco excepteur occaecat duis ex. Aliqua ut ipsum nulla adipisicing duis sunt nisi sunt eu enim culpa dolore duis.
			</p>
			<div className="grid md:grid-cols-2 gap-12">
				<ProjectItem img={cryptoImg} title="Crypto app" />
				<ProjectItem img={propertyImg} title="Property app" />
				<ProjectItem img={netflixImg} title="Netflix app" />
				<ProjectItem img={twitchImg} title="Twitch app" />
			</div>
		</div>
	);
};

export default Projects;