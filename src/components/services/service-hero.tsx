import LineIcon from '../Icons/line';
import Image from '../shared/image';

export default function ServiceHero() {
	return (
		<div className="flex flex-col gap-12">
			<div className=" grid md:grid-cols-[42%,auto] gap-3">
				<div className="flex flex-col gap-4 md:gap-8">
					<div className=" h-[20rem] w-full md:h-[25rem] xl:h-[40rem]">
						<Image
							src={'feature1.jpg'}
							bucketName="images"
							alt={'Feature Images'}
							className="w-full h-full object-contain"
						/>
					</div>
					<LineIcon />
					<div>
						<p className=" leading-8">
							Over the years, we’ve had the privilege of working with leading
							organizations and activists on projects that drive real change.
							Here are a few examples of our impact:
						</p>
					</div>
				</div>
				<div className="h-full flex items-center">
					<h1 className=" uppercase text-tertiary text-2xl md:text-6xl md:leading-[1.1] font-oswald font-bold">
						Born from a Passion for Storytelling and Social Impact
					</h1>
				</div>
			</div>
			<div>
				<div className="grid md:grid-cols-3 gap-6">
					<div className=" w-full max-w-sm  overflow-hidden rounded-2xl h-40 md:h-96">
						<Image
							src={'borderland1.jpg'}
							bucketName="images"
							alt={'Feature Images'}
							scale={true}
						/>
					</div>
					<div className=" w-full md:mt-60 max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
						<Image
							src={'borderland2.jpg'}
							bucketName="images"
							alt={'Feature Images'}
							scale={true}
						/>
					</div>
					<div className=" w-full max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
						<Image
							src={'borderland3.jpg'}
							bucketName="images"
							alt={'Feature Images'}
							scale={true}
						/>
					</div>
					<div className=" w-full max-w-sm md:-mt-28 overflow-hidden rounded-2xl h-40 md:h-96">
						<Image
							src={'borderland4.jpg'}
							bucketName="images"
							alt={'Feature Images'}
							scale={true}
						/>
					</div>
					<div className=" w-full md:-mt-28 md:col-start-3 max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
						<Image
							src={'borderland5.jpg'}
							bucketName="images"
							alt={'Feature Images'}
							scale={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
