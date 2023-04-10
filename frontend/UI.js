import RoutineService from './services/RoutineService.js';
import Routines from './/.Routines.json' assert {type: 'json'};
const routineService = new RoutineService();

class UI {
    async renderRoutine() {
	const date = new Date();
	const day = date.getDay();
	//const routines = await RoutineService.getRoutine();
	const routCardsContainer = document.getElementById('routine-cards');
	routCardsContainer.innerHTML = '';
	// This 2 lines work for displaying only current day routine
	const split = ["Rest Day"].concat( Object.keys(Routines));
	let rout = split[day];
	// This 2 lines work for displaying all the data 
	//const split = Object.keys(Routines);
	// Remove forEach fucntion and closing ")}" when deleting  the function
	//split.forEach( rout => {
	    // all the code bellow, retrieve this to work on sunday since no workout matches that day
	const divTitle = document.createElement('div');
	divTitle.className = '';
	divTitle.innerHTML = `
            <div class="card m-2">
                <div class="row">
                    <div class="">  
                        <div class="card-block px-2" id="${rout}">
                            <h2 class="display-3">${rout}</h2>
                        </div>
                    </div>
                </div>
            </div>
        `;
	routCardsContainer.appendChild(divTitle);
	Routines[rout].exercise.forEach(exer => {
		const div = document.createElement('div');
		const exeName = exer.name.toString();
		div.className = '';
		div.innerHTML = `
                <h3>${exer.name}</h3>
                <pre class="card-text">Sets: ${exer.sets}
Reps: ${exer.reps}
Rest Time: ${exer.restTime}
                    </pre>
                <div class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="${exer.name}-lightWeight" value="${exer.name}-lightWeight"/>
                    <label class="form-check-label" for="${exer.name}-lightWeight">Light weight</label>
                    <input class="form-check-input" type="checkbox" id="${exer.name}-heavyWeight" value="${exer.name}-heavyWeight"/>
                    <label class="form-check-label" for="${exer.name}-heavyWeight">Heavy weight</label>
                    <input class="form-check-input" type="checkbox" id="${exer.name}-quickRecover" value="${exer.name}-quickRecover"/>
                    <label class="form-check-label" for="${exer.name}-quickRecover">Quick Recover</label>
                    <input class="form-check-input" type="checkbox" id="${exer.name}-evaluateForm" value="${exer.name}-evaluateForm"/>
                    <label class="form-check-label" for="${exer.name}-evaluateForm">Evaluate Form</label>
                    <label class="floatingInput" for="${exer.name}-weight">Weight</label>
                    <input class="form-check" type="number" id="${exer.name}-weight" value="${exer.name}-weight"/>                
                </div>
                `;
		document.getElementById(rout).appendChild(div);
	});
    //})
    }
}

export default UI;
