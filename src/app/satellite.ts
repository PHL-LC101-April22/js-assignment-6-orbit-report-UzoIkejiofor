export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		
   }
	
	isSpaceDebris(): boolean {

		if(this.type === "Space Debris") {


			return true;
			
		} else {
			return false;
		}
		
   }

}

// TODO 3a: fix isSpaceDebris check
