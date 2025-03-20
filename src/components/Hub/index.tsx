import * as React from 'react';
import pantries from '../../lib/data/food-pantries.json';
import zipcodes from '../../lib/data/zipcodes.json';
import Card from './Card';
import { Feature, FeatureCollection } from 'geojson';
import { LatLng } from 'leaflet';
import type { FoodPantry } from './Card';
import { Point } from 'geojson';

// calculate distance between two coordinates using Haversine formula returns distance in miles
const getDistance = (coord1: LatLng, coord2: LatLng) => {
	// Earth's radius in meters
	const R = 6371e3;

	const lat1 = (coord1.lat * Math.PI) / 180;
	const lat2 = (coord2.lat * Math.PI) / 180;
	const deltaLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
	const deltaLon = ((coord2.lng - coord1.lng) * Math.PI) / 180;

	const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	const distance = R * c;
	const distanceInMiles = distance * 0.000621371;

	return distanceInMiles;
};

function convertPantriesGeoJSONtoFoodPantry(pantries: FeatureCollection['features']): FoodPantry[] {
	return pantries.map((pantry: Feature) => {
		const geo = pantry.geometry as Point;
		const lat = geo.coordinates[1];
		const lng = geo.coordinates[0];
		return {
			name: pantry?.properties?.name ?? '',
			address: pantry?.properties?.address ?? '',
			city: pantry?.properties?.city ?? '',
			state: pantry?.properties?.state ?? '',
			zip: pantry?.properties?.zip ?? '',
			phone: pantry?.properties?.phone ?? '',
			hours: pantry?.properties?.hours ?? '',
			inventory: pantry?.properties?.inventory ?? [],
			flags: pantry?.properties?.flags ?? {},
			geo: {
				lat: lat.toString() ?? '',
				lng: lng.toString() ?? '',
			},
		};
	});
}

const Hub: React.FC = () => {
	const [zipcode, setZipcode] = React.useState('');
	const [sortedPantries, setSortedPantries] = React.useState<FoodPantry[] | null>(null);

	React.useEffect(() => {
		const p: FoodPantry[] = convertPantriesGeoJSONtoFoodPantry(pantries.features as Feature[]);
		if (p) {
			setSortedPantries(p);
		}
	}, []);

	React.useEffect(() => {
		if (zipcode.length === 5 && zipcodes[zipcode] && sortedPantries) {
			const [zipLng, zipLat] = zipcodes[zipcode];
			const sorted = sortedPantries?.toSorted((a, b) => {
				const distanceA = getDistance({ lat: parseFloat(a.geo.lat), lng: parseFloat(a.geo.lng) }, { lat: zipLat, lng: zipLng });
				const distanceB = getDistance({ lat: parseFloat(b.geo.lat), lng: parseFloat(b.geo.lng) }, { lat: zipLat, lng: zipLng });
				return distanceB - distanceA;
			});

			setSortedPantries(sorted as FoodPantry[]);
		}
	}, [zipcode, sortedPantries]);
	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		setZipcode(event.target.value);
	}

	return (
		<div className='h-full p-[16px]'>
			<div className='w-full h-min'>
				<input value={zipcode} onChange={handleOnChange} maxLength={5} type='text' className='w-full h-10 border-2 border-gray-300 rounded-lg' placeholder='zip code' />
			</div>
			<div className='grid grid-cols-4 gap-[16px]'>
				{sortedPantries?.map((pantry: FoodPantry) => (
					<Card {...pantry} />
				))}
			</div>
		</div>
	);
};

export default Hub;
