function showInputDemo(device) {
    const demo = document.getElementById("input-demo");

    if (device === "keyboard") {
    demo.innerHTML = `
    <h3>Keyboard Input</h3>

    <input
        id="keyboardInput"
        type="text"
        placeholder="Type here"
        oninput="updateKeyboard()"
    >

    <p id="keyboardResult">
        Start typing...
    </p>
`;

    }

    if (device === "mouse") {
        demo.innerHTML = `
            <h3>Mouse Input</h3>

            <div id="mouseBox"
                onclick="mouseClicked()"
                style="
                    width:300px;
                    height:150px;
                    border:2px solid white;
                    margin:20px auto;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    cursor:pointer;
                ">
                Click Me
            </div>

            <p id="mouseResult">
                Waiting for click...
            </p>
        `;
    }

    if (device === "microphone") {
        demo.innerHTML = `
            <h3>Microphone Input</h3>

            <button onclick="simulateMic()">
                🎤 Speak
            </button>

            <p id="micResult">
                Waiting for sound...
            </p>
        `;
    }

    if (device === "camera") {
        demo.innerHTML = `
            <h3>Camera Input</h3>

            <button onclick="simulateCamera()">
                📷 Take Photo
            </button>

            <p id="cameraResult">
                Waiting for image...
            </p>
        `;
    }
}
function updateKeyboard() {                                                                                                                                                
    const text =
        document.getElementById("keyboardInput").value;

    document.getElementById("keyboardResult").innerText =
        `Input received: "${text}"`;
}

function mouseClicked() {
    document.getElementById("mouseResult").innerText =
        "Mouse click detected!";
}

function simulateMic() {
    document.getElementById("micResult").innerHTML =
        `
        Sound waves received<br>
        ↓<br>
        Converted into digital data
        `;
}

function simulateCamera() {
    document.getElementById("cameraResult").innerHTML =
        `
        Image captured<br>
        ↓<br>
        Converted into pixel data
        `;
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

if (nucleus) {

nucleus.addEventListener("click", () => {
    nucleus.classList.toggle("active");
    nucleusCard.classList.toggle("active");
});
}

if (protonCard) {
protonCard.addEventListener("click", () => {

    resetHighlights();

    void proton.offsetWidth;

    protons.forEach(proton => {

    proton.classList.add("proton-highlight");

});
});
}

if (neutronCard) {
neutronCard.addEventListener("click", () => {

    resetHighlights();

    void neutron.offsetWidth;

    neutrons.forEach(neutron => {

    neutron.classList.add("neutron-highlight");

});
});
}

if (electronCard) {
electronCard.addEventListener("click", () => {

    console.log("clicky");

    resetHighlights();

    electrons.forEach(electron => {

        void electron.offsetWidth;

        electron.classList.add("particle-highlight");

    });

});
}