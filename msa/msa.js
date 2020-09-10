window.onload = function loadCcus() {
  ccuEventListener();
  displayEventListener();
  formEventListener();
  specialtiesEventListener();
};

const state = {
  camera: { name: "", clicked: false },
  display: { name: "", clicked: false },
  specialty: { name: "", clicked: false },
  cameraSettings: [],
};

// Specialties
const SPECIALTIES = {
  "1688-4k": [
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap Storz" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "ENT 1" },
    { name: "ENT 2" },
    { name: "ENT 3" },
    { name: "Flexiscope" },
    { name: "Cysto" },
    { name: "Cysto 2" },
    { name: "Laser" },
    { name: "Hystero" },
  ],
  "1688-Vision Pro": [
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap Storz" },
  ],
  "1588-4k": [
    { name: "1588 4k" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap Storz" },
  ],
  "1588-Vision Pro": [
    { name: "1588 VP" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "1588-Vision Elect": [
    { name: "1588 VE" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
  ],
  "1488-4k": [
    { name: "1488 4k" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "1488-Vision Pro": [
    { name: "1488 VP" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
  ],
  "1488-Vision Elect": [
    { name: "1488 VE" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "precision-4k": [
    { name: "Prec 4k" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "precision-Vision Pro": [
    { name: "Prec VP" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "precision-Vision Elect": [
    { name: "Prec VE" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "1288-4k": [
    { name: "1288 4k" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "1288-Vision Pro": [
    { name: "1288 VP" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
  "1288-Vision Elect": [
    { name: "1288 VE" },
    { name: "Arthro 1" },
    { name: "Arthro 2" },
    { name: "Arthro 4/16" },
    { name: "Lap 1" },
    { name: "Lap 2" },
    { name: "Lap 3" },
  ],
};

const displays = {
  sixteen: [{ name: "4k" }, { name: "Vision Pro" }],
  legacy: [{ name: "4k" }, { name: "Vision Pro" }, { name: "Vision Elect" }],
};

const monitorBtnDivs = document.getElementsByClassName("monitor-btn-div");
const url =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=-7udTko5g0WIEFP4H4GeOyvF9t6kmYZAnEVeps1nibRUN1VTTEZYNjZKNDRSWTJXUE00U05NTktIQi4u";

const ccuEventListener = () => {
  camerasDiv = document.getElementsByClassName("camera-div");
  for (let item of camerasDiv) {
    item.addEventListener("click", function () {
      const currentCcu = event.currentTarget.dataset.ccu;
      selectCCu(currentCcu);
    });
  }
};

const formEventListener = () => {
  const formLink = document.getElementById("form-link");
  formLink.addEventListener("click", () => {
    window.open(url);
  });
};

const selectCCu = (currentCcu) => {
  const cameraDisplayDiv = state.camera.name;
  if (currentCcu === "1688" && state.display.name === "Vision Elect") {
    resetDisplayState();
    closeDisplayDiv(cameraDisplayDiv);
    hideSpecialties();
    setCcuState(currentCcu);
    openMonitorsDiv(currentCcu);
    rotateOpenArrow();
    changeInfoText();
  } else if (
    state.camera.name === currentCcu &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    hideSpecialties();
    removeSpecialtyHtmlElements();
    resetSpecialtyState();
    closeDisplayDiv(cameraDisplayDiv);
    removeDisplayBtnHtml();
    resetDisplayBtn();
    resetDisplayState();
    rotateCloseArrow();
    resetCcuState();
    changeInfoText();
  } else if (state.camera.name === currentCcu && state.display.name !== "") {
    removeDisplayBtnHtml();
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    resetCcuState();
    resetDisplayBtn();
    resetDisplayState();
    changeInfoText();
    hideSpecialties();
    removeSpecialtyHtmlElements();
  } else if (state.camera.name === currentCcu) {
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    resetCcuState();
    changeInfoText();
    hideSpecialties();
    removeDisplayBtnHtml();
  } else if (
    state.camera.name !== "" &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    // resetSpecialtyState()
    // closeSpecialtyDiv()
    reasignDisplayBtn();
    openMonitorsDiv(currentCcu);
    rotateCloseArrow();
  } else if (state.camera.name !== "" && state.display.name !== "") {
    removeDisplayBtnHtml();
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    rotateOpenArrow();
    listSpecialties();
    openMonitorsDiv(currentCcu);
    reasignDisplayBtn();
  } else if (state.camera.name !== "") {
    removeDisplayBtnHtml();
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    rotateCloseArrow();
    rotateOpenArrow();
    openMonitorsDiv(currentCcu);
    changeInfoText();
  } else {
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
        changeInfoText();
        hideSpecialties();
        removeSpecialtyHtmlElements();
      } else {
        setDisplayState(currentDisplay);
        resetDisplayBtn();
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
      const currentSpecialty = event.currentTarget.dataset.specialty;
      if (state.specialty.name === currentSpecialty) {
        resetSpecialtyState();
        clearSettingsHtml();
      } else {
        setSpecialtyState(currentSpecialty);
        setSpecialtyBtn();
        hideInfo();
        showSettingsContainer();
        fetchSettings();
      }
    });
  }
};

const clearSettingsHtml = () => {
  const parentDiv = document.getElementById("settings-container-id");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
};

const showSettingsContainer = () => {
  const settingsContainer = document.getElementById("settings-container-id");
  settingsContainer.classList.toggle("show");
  // showSettingsBodyContainer();
  populateSettings(settingsContainer);
};

// const showSettingsBodyContainer = () => {
//   const settingsContainer = document.getElementById(
//     "settings-body-container-id"
//   );
//   settingsContainer.classList.toggle("show");
// };

const fetchSettings = () => {
  fetch("./settings.json")
    .then((response) => response.json())
    .then((data) => filterCcu(data));
};

const filterCcu = (data) => {
  data.ccus.map((ccu) => {
    if (ccu[state.camera.name]) {
      ccu[state.camera.name]["monitors"].map((monitor) => {
        if (monitor[state.display.name]) {
          monitor[state.display.name]["specialties"].map((specialty) => {
            if (specialty[state.specialty.name]) {
              state.cameraSettings = specialty[state.specialty.name];
              // setSettingsState(state.settings[0]["ccu"]);
            }
          });
        }
      });
    }
  });
};

const populateSettings = (settingsContainer) => {
  console.log(state.camera.name, state.display.name, state.specialty.name);
  // settings-title-container
  const settingsTitleContainer = document.createElement("div");
  settingsTitleContainer.setAttribute("class", "settings-title-container");
  // settings-title-camera
  const settingsTitleCamera = document.createElement("div");
  settingsTitleCamera.setAttribute("class", "settings-title-camera");
  // settings-title-camera-text-div and settings-title-specialty-text-div go in settings-title-camera
  const settingsTitleCameraTextDiv = document.createElement("div");
  settingsTitleCameraTextDiv.setAttribute(
    "class",
    "settings-title-camera-text-div"
  );
  // p tag goes inside settings-title-camera-text-div
  const settingsTitleCameraTag = document.createElement("p");
  settingsTitleCameraTag.setAttribute("id", "settings-title-camera-tag");
  settingsTitleCameraTag.innerText = "CCU";

  const cameraTagText = document.createElement("p");
  cameraTagText.setAttribute("id", "camera-tag-text");
  cameraTagText.innerText = state.camera.name;
  // put settings-title-camera-tag into settings-title-camera-text-div
  settingsTitleCameraTextDiv.appendChild(settingsTitleCameraTag);
  settingsTitleCameraTextDiv.appendChild(cameraTagText);
  //put settings-title-camera-text-div inside settings-title-camera
  settingsTitleCamera.appendChild(settingsTitleCameraTextDiv);
  // put settings-title-camera into settings-title-container
  settingsTitleContainer.appendChild(settingsTitleCamera);
  // put settings-title-container into settings-container
  settingsContainer.appendChild(settingsTitleContainer);

  // settings-title-specialty-text-div
  const settingsTitleSpecialtyTextDiv = document.createElement("div");
  settingsTitleSpecialtyTextDiv.setAttribute(
    "class",
    "settings-title-specialty-text-div"
  );
  // specialty p tag goes inside settings-title-specialty-text-div
  const settingsTitleSpecialtyTag = document.createElement("p");
  settingsTitleSpecialtyTag.setAttribute("id", "settings-title-specialty-tag");
  settingsTitleSpecialtyTag.innerText = "SPECIALTY";
  settingsTitleSpecialtyTextDiv.appendChild(settingsTitleSpecialtyTag);
  // settings-title-specialty-text-div goes inside settings-title-camera
  settingsTitleCamera.appendChild(settingsTitleSpecialtyTextDiv);
  // settings-title-camera goes inside settings-title-container
  settingsTitleContainer.appendChild(settingsTitleCamera);
  // settings-title-container goes insdie settings-container
  settingsContainer.appendChild(settingsTitleContainer);

  // Settings-title-display goes inside settings-title-container
  const settingsTitleDisplay = document.createElement("div");
  settingsTitleDisplay.setAttribute("class", "settings-title-display");
  // // settings-title-display-text-div goes into settings-title-display
  const settingsTitleDisplayTextDiv = document.createElement("div");
  settingsTitleDisplayTextDiv.setAttribute(
    "class",
    "settings-title-display-text-div"
  );
  // #settings-title-display-tag goes inside settings-title-display-text-div
  const settingsTitleDisplayTag = document.createElement("p");
  settingsTitleDisplayTag.setAttribute("id", "settings-title-display-tag");
  settingsTitleDisplayTag.innerText = "DISPLAY";
  // settings-title-display-tag goes into settings-title-display-text-div
  settingsTitleDisplayTextDiv.appendChild(settingsTitleDisplayTag);
  // settings-title-display-text-div goes into settings-title-display
  settingsTitleDisplay.appendChild(settingsTitleDisplayTextDiv);
  // settings-title-display goes inside settings-container-id
  // settings-title-display-specialty-text-div goes inside settings-title-display
  const settingsTitleDisplaySpecialtyTextDiv = document.createElement("div");
  settingsTitleDisplaySpecialtyTextDiv.setAttribute(
    "class",
    "settings-title-display-specialty-text-div"
  );
  // settings-title-display-specialty-tag goes inside settings-title-display-specialty-text-div
  const settingsTitleDisplaySpecialtyTag = document.createElement("p");
  settingsTitleDisplaySpecialtyTag.setAttribute(
    "id",
    "settings-title-display-specialty-tag"
  );
  settingsTitleDisplaySpecialtyTag.innerText = "SPECIALTY";
  settingsTitleDisplaySpecialtyTextDiv.appendChild(
    settingsTitleDisplaySpecialtyTag
  );
  settingsTitleDisplay.appendChild(settingsTitleDisplaySpecialtyTextDiv);
  settingsContainer.appendChild(settingsTitleDisplay);
};

const setSpecialtyBtn = () => {
  const specialtyBtn = document.getElementById(state.specialty.name);
  specialtyBtn.className = "specialty-btn-div-active";
};

const hideInfo = () => {
  const infoDiv = document.getElementById("info-div-id");
  infoDiv.className = "info-div-hide";
};

const listSpecialties = () => {
  removeSpecialtyHtmlElements();
  showSpecialties();
  const specialtiesParentDiv = document.getElementById(
    "specialties-parent-div"
  );
  let specialtiesList = state.camera.name + "-" + state.display.name;
  SPECIALTIES[specialtiesList].map((specialty) => {
    const specialityBtnDiv = document.createElement("div");
    specialityBtnDiv.setAttribute("class", "specialty-btn-div");
    specialityBtnDiv.setAttribute("data-specialty", specialty.name);
    specialityBtnDiv.setAttribute("id", specialty.name);
    const specialityBtnTag = document.createElement("p");
    specialityBtnTag.setAttribute("class", "specialty-btn-tag");
    specialityBtnTag.innerHTML = specialty.name;
    specialityBtnDiv.appendChild(specialityBtnTag);
    specialtiesParentDiv.appendChild(specialityBtnDiv);
  });

  specialtiesEventListener();
};

const showSpecialties = () => {
  const specialtiesDiv = document.getElementById("specialties-div");
  if (specialtiesDiv !== null) {
    specialtiesDiv.id = "specialties-div-show";
  }
};

const hideSpecialties = () => {
  const specialtiesDiv = document.getElementById("specialties-div-show");
  if (specialtiesDiv !== null) {
    specialtiesDiv.id = "specialties-div";
  }
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

const setSpecialtyState = (currentSpecialty) => {
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
  assignCurrentDisplays(currentCcu);
};

const assignCurrentDisplays = (currentCcu) => {
  let currentDisplays = "";
  if (currentCcu === "1688") {
    currentDisplays = displays.sixteen;
    showCurrentDisplays(currentDisplays, currentCcu);
  } else {
    currentDisplays = displays.legacy;
    showCurrentDisplays(currentDisplays, currentCcu);
  }
  displayEventListener();
};

const showCurrentDisplays = (currentDisplays, currentCcu) => {
  const monitorBtnsDiv = document.getElementById(
    currentCcu + "-monitors-btns-div"
  );
  currentDisplays.map((display) => {
    const monitorBtnDiv = document.createElement("div");
    monitorBtnDiv.setAttribute("id", currentCcu + "-" + display.name);
    monitorBtnDiv.setAttribute("class", "monitor-btn-div");
    monitorBtnDiv.setAttribute("data-display", display.name);
    const monitorBtnTag = document.createElement("p");
    monitorBtnTag.setAttribute("class", "monitor-btn-tag");
    monitorBtnTag.innerHTML = display.name;
    monitorBtnDiv.appendChild(monitorBtnTag);
    monitorBtnsDiv.appendChild(monitorBtnDiv);
  });
};

const removeDisplayBtnHtml = () => {
  const monitorsBtnDiv = document.getElementsByClassName("monitors-btn-div");
  for (let item of monitorsBtnDiv) {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  }
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
  const displayBtnDiv = document.getElementById(
    state.camera.name + "-" + state.display.name
  );
  if (displayBtnDiv !== null) {
    displayBtnDiv.className = "monitor-btn-div-active";
  } else {
    resetDisplayState();
  }
};
