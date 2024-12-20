import Banner from '@/components/home/Banner';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Impact from '@/components/home/impact';
import { Projects } from '@/components/home/projects';
import Sections from '@/components/home/sections';
import Footer from '@/components/shared/footer';
import RequestForm from '@/components/shared/request-form';
import { getProjects } from '@/lib/actions/project-actions';

interface Props {
	searchParams: Promise<{
		contact?: string;
	}>;
}

export default async function Home(props: Props) {
	const { contact } = await props.searchParams;
	const projects = await getProjects({
		take: 10,
		orderBy: {
			createdAt: 'asc',
		},
	});
	return (
		<div>
			<Banner />
			<div className="max-w-[1350px] mx-auto">
				<About />
				<Impact />
				<Contact />
				<Projects data={projects} />
				<Sections />
			</div>
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}
