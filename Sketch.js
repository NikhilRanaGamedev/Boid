const flock = [];

let alignSlider, cohesionSlider, seperationSlider;
let amountOfBoids;

function setup()
{
    createCanvas(1900, 890);

    alignSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    seperationSlider = createSlider(0, 5, 1, 0.1);

    amountOfBoids = createInput(100, int);

    for (let i = 0; i < 200; i++)
    {
        flock.push(new Boid());
    }
}

function draw()
{
    background(51);

    for (let boid of flock)
    {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}
