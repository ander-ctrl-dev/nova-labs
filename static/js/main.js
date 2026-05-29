let and1 = 0;
let and2 = 0;

function updateAndGate() {

    const result = and1 && and2 ? 1 : 0;

    andOutput.textContent = result;

    if (result === 1) {
        andOutput.classList.add("active");
    } else {
        andOutput.classList.remove("active");
    }
}
const andBtn1 = document.getElementById("andInput1");
const andBtn2 = document.getElementById("andInput2");
const andOutput = document.getElementById("andOutput");
if (andBtn1 && andBtn2 && andOutput) {

    andBtn1.addEventListener("click", () => {

        and1 = and1 ? 0 : 1;

        andBtn1.textContent = and1;

        andBtn1.classList.toggle("active");

        updateAndGate();
    });

    andBtn2.addEventListener("click", () => {

        and2 = and2 ? 0 : 1;

        andBtn2.textContent = and2;

        andBtn2.classList.toggle("active");

        updateAndGate();
    });
}

let or1 = 0;
let or2 = 0;

const orBtn1 = document.getElementById("orInput1");
const orBtn2 = document.getElementById("orInput2");
const orOutput = document.getElementById("orOutput");

if (orBtn1 && orBtn2 && orOutput) {

    function updateOrGate() {

        const result = or1 || or2 ? 1 : 0;

        orOutput.textContent = result;

        if (result === 1) {
            orOutput.classList.add("active");
        } else {
            orOutput.classList.remove("active");
        }
    }

    orBtn1.addEventListener("click", () => {

        or1 = or1 ? 0 : 1;

        orBtn1.textContent = or1;

        orBtn1.classList.toggle("active");

        updateOrGate();
    });

    orBtn2.addEventListener("click", () => {

        or2 = or2 ? 0 : 1;

        orBtn2.textContent = or2;

        orBtn2.classList.toggle("active");

        updateOrGate();
    });
}

let notValue = 0;

const notBtn = document.getElementById("notInput");
const notOutput = document.getElementById("notOutput");

if (notBtn && notOutput) {

    function updateNotGate() {

        const result = notValue ? 0 : 1;

        notOutput.textContent = result;

        if (result === 1) {
            notOutput.classList.add("active");
        } else {
            notOutput.classList.remove("active");
        }
    }

    notBtn.addEventListener("click", () => {

        notValue = notValue ? 0 : 1;

        notBtn.textContent = notValue;

        notBtn.classList.toggle("active");

        updateNotGate();
    });
}

let powerOn = false;

const powerLight = document.getElementById("powerLight");
const wire = document.querySelector(".wire");
const switchBtn = document.getElementById("switchBtn");

if (powerLight && wire && switchBtn) {

    switchBtn.addEventListener("click", () => {

        powerOn = !powerOn;

        powerLight.classList.toggle("active");
        wire.classList.toggle("active");

        switchBtn.textContent = powerOn ? "ON" : "OFF";
    });
}

function resetHighlights() {

    protons.forEach(proton => {

    proton.classList.remove("proton-highlight");

});

neutrons.forEach(neutron => {

    neutron.classList.remove("neutron-highlight");

});

    electrons.forEach(electron => {
        electron.classList.remove("particle-highlight");
    });
}
function runFlowSimulation() {

    const boxes =
        document.querySelectorAll(".thought-box");

    const lines =
        document.querySelectorAll(".flow-line");

    boxes.forEach(box => {
        box.classList.remove("flow-active");
    });

    lines.forEach(line => {
        line.classList.remove("line-active");
    });

    boxes.forEach((box, index) => {

        setTimeout(() => {

            box.classList.add("flow-active");

            if (lines[index]) {
                lines[index].classList.add("line-active");
            }

        }, index * 700);

    });
setTimeout(() => {

    boxes.forEach(box => {
        box.classList.remove("flow-active");
    });

    lines.forEach(line => {
        line.classList.remove("line-active");
    });

}, boxes.length * 700 + 1000);

}
function sendEnergy() {

    const pulse = document.getElementById("pulse");
    const ball = document.getElementById("energyBall");

    pulse.style.transition = "none";
    pulse.style.left = "-40px";
    pulse.style.opacity = "1";

    setTimeout(() => {

        pulse.style.transition = "left 1s linear";
        pulse.style.left = "220px";

    }, 50);

    setTimeout(() => {

        ball.style.transform = "translateX(30px)";

        ball.style.boxShadow =
            "0 0 40px cyan";

    }, 1000);

    setTimeout(() => {

        pulse.style.opacity = "0";

    }, 1200);

    setTimeout(() => {

        ball.style.transform = "translateX(0px)";
        ball.style.boxShadow = "none";

    }, 2000);
}
function sendMatterEnergy() {

    const particles =
        document.querySelectorAll(".particle");

    particles.forEach((particle, index) => {

        setTimeout(() => {

            particle.classList.add("active");

            setTimeout(() => {
                particle.classList.remove("active");
            }, 300);

        }, index * 250);

    });

}
function sendWave() {

    const wave =
        document.querySelector(".space-wave-line");

    wave.style.animation = "none";

    wave.offsetHeight;

    wave.style.animation =
        "waveFlow 2s linear";
}

const nucleus = document.querySelector(".demo-nucleus");

const nucleusCard = document.querySelector(".nucleus-card");
const protonCard = document.querySelector(".proton-card");
const neutronCard = document.querySelector(".neutron-card");
const electronCard = document.querySelector(".electron-card");

const proton = document.querySelector(".demo-nucleus");
const neutron = document.querySelector(".demo-nucleus");
const electrons = document.querySelectorAll(".demo-electron");

const protons = document.querySelectorAll(".nucleus-proton");
const neutrons = document.querySelectorAll(".nucleus-neutron");

nucleus.addEventListener("click", () => {
    nucleus.classList.toggle("active");
    nucleusCard.classList.toggle("active");
});
protonCard.addEventListener("click", () => {

    resetHighlights();

    void proton.offsetWidth;

    protons.forEach(proton => {

    proton.classList.add("proton-highlight");

});

});
neutronCard.addEventListener("click", () => {

    resetHighlights();

    void neutron.offsetWidth;

    neutrons.forEach(neutron => {

    neutron.classList.add("neutron-highlight");

});

});
electronCard.addEventListener("click", () => {

    console.log("clicky");

    resetHighlights();

    electrons.forEach(electron => {

        void electron.offsetWidth;

        electron.classList.add("particle-highlight");

    });

});

