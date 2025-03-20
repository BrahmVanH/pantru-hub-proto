import * as React from 'react';
import { LatLng } from 'leaflet';
export interface FoodPantry {
	name: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	phone: string;
	hours: string;
	inventory: [];
	flags: PantryFlags;
	geo: {
		lat: string;
		lng: string;
	};
}

export interface PantryFlags {
	acceptsDonations: boolean;
	acceptsVolunteers: boolean;
	hasParking: boolean;
	hasDelivery: boolean;
	hasPickup: boolean;
	residencyRequired: boolean;
	applicationRequired: boolean;
	appointmentRequired: boolean;
}



const Card: React.FC<FoodPantry> = (pantry: FoodPantry) => {
	return (
		<div className='flex flex-col p-[16px] h-min border-2 border-primary-blue-3 rounded-lg'>
			<div className='justify-self-start w-full'>
				{/* optional needs help flag */}
				<p>NEEDS HELP</p>
			</div>
			<div className='flex flex-row items-start'>
				<div className='w-1/2'>
					{/* name, flags */}
					<h2>{pantry.name}</h2>
					<div className='flex flex-col'>
						{pantry.flags.acceptsDonations && <span>accepts donations</span>}
						{pantry.flags.acceptsVolunteers && <span>accepts volunteers</span>}
						{pantry.flags.hasParking && <span>has parking</span>}
						{pantry.flags.hasDelivery && <span>has delivery</span>}
						{pantry.flags.hasPickup && <span>has pickup</span>}
						{pantry.flags.residencyRequired && <span>residency required</span>}
						{pantry.flags.applicationRequired && <span>application required</span>}
						{pantry.flags.appointmentRequired && <span>appointment required</span>}
					</div>
				</div>
				<div className='w-1/2'>
					{/*contact and  address */}
					<p>{pantry.phone}</p>
					<p>{pantry.hours}</p>
					<p>{pantry.address}</p>
					<p>
						{pantry.city}, {pantry.state} {pantry.zip}
					</p>
				</div>
			</div>
			<div className='justify-self-end w-full'>{/* buttons */}</div>
		</div>
	);
};
export default Card;
