const flock = [];
// let alignSlider, cohesionSlider, separationSlider;
let predators = [];
let goodCreatureNumber = 300
let predatorNumber = 1

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');

	// alignSlider = createSlider(0, 5, 1, 0.1)
	// cohesionSlider = createSlider(0, 5, 1, 0.1)
	// separationSlider = createSlider(0, 5, 1, 0.1)
	for (let i = 0; i < goodCreatureNumber; i++) {
		flock.push(new Boid(random(width), random(height), 255, 3))
	}

	for (let i = 0; i < predatorNumber; i++) {
		predators.push(new Predator(random(width), random(height), color(255, 0, 0), 5))
	}
}

function draw() {
	background(51)
	for (let boid of flock) {
		boid.show()
		boid.update()

		let flee = boid.survive(predators, 150)
		flee.mult(3)
		boid.applyForce(flee)

		Flock.flock(boid, flock)
	}

	for (let predator of predators) {
		predator.show()
		predator.update()
	}

	if(flock.length < goodCreatureNumber){
		flock.push(random(flock).clone())
	}
}
