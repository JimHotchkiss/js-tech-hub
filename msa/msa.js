window.onload = function loadCcus() {
  ccuEventListener();
  displayEventListener();
  // specialtiesEventListener();
};

const state = {
  camera: { name: "", clicked: false },
  display: { name: "", clicked: false },
  specialty: { name: "", clicked: false },
};

// Specialties
const SPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Arthro 4/16",
  // "Lap 1",
  // "Lap 2",
  // "Lap Storz",
  // "Cysto",
  // "Hysteroscopy",
  // "Flexiscope",
  // "ENT",
  // "Laser",
  // "Microscope",
  // "Standard",
  // "Vein Harvest",
  // "Olympus GI",
];

const displays = {
  sixteen: [{ name: "4k" }, { name: "Vision Pro" }],
  fifteen: [{ name: "4k" }, { name: "Vision Pro" }, { name: "Vision Elect" }],
};

const monitorBtnDivs = document.getElementsByClassName("monitor-btn-div");

const ccuEventListener = () => {
  camerasDiv = document.getElementsByClassName("camera-div");
  // add event listener
  for (let item of camerasDiv) {
    item.addEventListener("click", function () {
      const currentCcu = event.currentTarget.dataset.ccu;
      selectCCu(currentCcu);
    });
  }
};

const selectCCu = (currentCcu) => {
  const cameraDisplayDiv = state.camera.name;
  if (
    state.camera.name === currentCcu &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    console.log("1");
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    // resetSpecialtyState()
    // closeSpecialtyDiv()
    // resetDisplayState()
    // resetDisplayBtn()
    // resetCCuState()
  } else if (state.camera.name === currentCcu && state.display.name !== "") {
    console.log("2");
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    resetCcuState();
    resetDisplayBtn();
    resetDisplayState();
    changeInfoText();
    hideSpecialties();
    removeSpecialtyHtmlElements();
  } else if (state.camera.name === currentCcu) {
    console.log("3");
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    resetCcuState();
    changeInfoText();
    hideSpecialties();
  } else if (
    state.camera.name !== "" &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    console.log("4");
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    // resetSpecialtyState()
    // closeSpecialtyDiv()
    reasignDisplayBtn();
    openMonitorsDiv(currentCcu);
    rotateArrow();
  } else if (state.camera.name !== "" && state.display.name !== "") {
    console.log("5");
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    rotateOpenArrow();
    reasignDisplayBtn();
    openMonitorsDiv(currentCcu);
    changeInfoText();
  } else if (state.camera.name !== "") {
    console.log("6");
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    rotateOpenArrow();
    openMonitorsDiv(currentCcu);
    changeInfoText();
  } else {
    console.log("7");
    setCcuState(currentCcu);
    openMonitorsDiv(currentCcu);
    rotateOpenArrow();
    changeInfoText();
  }
};

const rotateOpenArrow = () => {
  const arrowDiv = document.getElementById(state.camera.name + "-arrow");
  arrowDiv.className = arrowDiv.className + " open";
};
const rotateCloseArrow = () => {
  const arrowDivs = document.getElementsByClassName("arrow-outer-div open");
  for (let item of arrowDivs) {
    item.className = "arrow-outer-div";
  }
};

const changeInfoText = () => {
  const infoTag = document.getElementById("info-tag-text");
  if (
    state.camera.name !== "" &&
    (state.display.name !== "") & (state.specialty.name !== "")
  ) {
    infoTag.innerText = "Select Specialty to populate settings...";
  } else if (
    state.camera.name !== "" &&
    (state.display.name !== "") & (state.specialty.name === "")
  ) {
    infoTag.innerText = "Select Specialty to populate settings...";
  } else if (
    state.camera.name !== "" &&
    (state.display.name === "") & (state.specialty.name === "")
  ) {
    infoTag.innerText =
      "Select a Display and a Specialy to populate settings...";
  } else {
    infoTag.innerText =
      "Select CCU, Display and Specialty to populate settings...";
  }
};

const displayEventListener = () => {
  for (let item of monitorBtnDivs) {
    item.addEventListener("click", () => {
      const currentDisplay = event.currentTarget.dataset.display;
      if (state.display.name === currentDisplay) {
        resetDisplayState();
        resetDisplayBtn();
      } else {
        setDisplayState(currentDisplay);
        reasignDisplayBtn();
        changeInfoText();
        listSpecialties();
      }
    });
  }
};

const specialtiesEventListener = () => {
  const specialityBtnDiv = document.getElementsByClassName("specialty-btn-div");
  for (let item of specialityBtnDiv) {
    item.addEventListener("click", () => {
      alert(event.currentTarget);
    });
  }
};

const listSpecialties = () => {
  showSpecialties();
  const specialtiesParentDiv = document.getElementById(
    "specialties-parent-div"
  );

  SPECIALTIES.map((specialty) => {
    const specialityBtnDiv = document.createElement("div");
    specialityBtnDiv.setAttribute("class", "specialty-btn-div");
    specialityBtnDiv.setAttribute("data-specialty", specialty);
    const specialityBtnTag = document.createElement("p");
    specialityBtnTag.setAttribute("class", "specialty-btn-tag");
    specialityBtnTag.innerHTML = specialty;
    specialityBtnDiv.appendChild(specialityBtnTag);
    specialtiesParentDiv.appendChild(specialityBtnDiv);
  });

  specialtiesEventListener();
};

const showSpecialties = () => {
  const specialtiesDiv = document.getElementById("specialties-div");
  specialtiesDiv.id = "specialties-div-show";
};

const hideSpecialties = () => {
  console.log("hide");
  const specialtiesDiv = document.getElementById("specialties-div-show");
  specialtiesDiv.id = "specialties-div";
};

const removeSpecialtyHtmlElements = () => {
  const parentDiv = document.getElementById("specialties-parent-div");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
};

const setCcuState = (currentCcu) => {
  state.camera.name = currentCcu;
  state.camera.clicked = true;
};
const resetCcuState = () => {
  state.camera.name = "";
  state.camera.clicked = false;
};

const setDisplayState = (currentDisplay) => {
  state.display.name = currentDisplay;
  state.display.clicked = true;
};
const resetDisplayState = () => {
  state.display.name = "";
  state.display.clicked = false;
};

const setSpecialtyState = () => {
  state.specialty.name = currentSpecialty;
  state.specialty.clicked = true;
};
const resetSpecialtyState = () => {
  state.specialty.name = "";
  state.specialty.clicked = false;
};

const closeDisplayDiv = (cameraDisplayDiv) => {
  const monitorsDiv = document.getElementById(
    cameraDisplayDiv + "-monitors-div"
  );
  monitorsDiv.className = "monitors-div";
};

const openMonitorsDiv = (currentCcu) => {
  const monitorsDiv = document.getElementById(currentCcu + "-monitors-div");
  monitorsDiv.className = "monitors-div-active";
};

const resetDisplayBtn = () => {
  const displayBtnDiv = document.getElementsByClassName(
    "monitor-btn-div-active"
  );
  for (let item of displayBtnDiv) {
    item.className = "monitor-btn-div";
  }
};

const reasignDisplayBtn = () => {
  resetDisplayBtn();
  const displayBtnDiv = document.getElementById(
    state.camera.name + "-" + state.display.name
  );
  if (displayBtnDiv !== null) {
    displayBtnDiv.className = "monitor-btn-div-active";
  } else {
    resetDisplayState();
  }
};
