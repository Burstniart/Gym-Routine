import Routines from '../.Routines.json' assert {type: 'json'};

class RoutineService {
    constructor() {
	// Remove localhost on deploy
	//this.URI = 'http://localhost:3000/api/fit'
	//this.URI = '../.routine.json';
    }
    async getRoutine() {
	//const req =  new Request(Routines);
	
	//const res = await fetch('../.Routines.json');
	//const Routines = await res.json();
	//return Routines;
	//return routines;
    }
    
}
export default RoutineService;
