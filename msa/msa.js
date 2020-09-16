window.onload = function loadCcus() {
  ccuEventListener();
  displayEventListener();
  formEventListener();
  specialtiesEventListener();
};

const Store = function _Store() {};

function Store1(camera, display, specialty, {}) {
  (this.camera = camera),
    (this.display = display),
    (this.specialty = specialty),
    (this.setting = {});
}

Store1.prototype.setSettingTitle = function () {
  const settingsContainerId = document.getElementById("settings-container-id");
  const testDiv = documment.createElement("div");
  testDiv.setAttribute("class", "test-div");
  testDiv.innerText = "Test div";
  settingsContainerId.appendChild(testDiv);
};

Store.state = {
  ccu: "",
  display: "",
  specialty: "",
  settings: {},
  changeCcu: (input) => {
    Store.state.ccu = input;
  },
  changeDisplay: (input) => {
    Store.state.display = input;
  },
  changeSpecialty: (input) => {
    Store.state.specialty = input;
  },
  changeSettings: (input) => {
    Store.state.settings = input;
  },
};
const settingsContainer = document.getElementById("settings-container-id");

// 1688 Parameters
const SIXTEENPARAMETERS = [
  "Shutter Mode",
  "Shutter Level",
  "Area",
  "Speed",
  "Photometry Mode",
  "Photometry Peak/Avg",
  "S Gamma",
  "BG Gamma",
  "MPED",
  "BG Point",
  "R Knee Slope",
  "R knee Point",
  "Enhance",
  "Chroma",
  "B Gain",
  "B Hue",
  "R Gain",
  "R Hue",
  "ENV Gain Mode",
  "ENV Manual Gain",
  "ENV Level",
  "ENV BG Offset",
  "ENV Gamma",
  "ENV Max Gain",
  "Size",
  "G Hue",
  "G Gain",
  "R-Ye Hue",
  "R-Ye Gain",
  "Ye Hue",
  "Ye Gain",
  "Ye-G Hue",
  "Ye-G Gain",
  "G-Cy Hue",
  "G-Cy Gain",
  "CY Hue",
  "CY Gain",
  "CY-B Hue",
  "CY-B Gain",
  "B-Mg Hue",
  "B-Mg Gain",
  "Mg Hue",
  "Mg Gain",
  "Mg-R Hue",
  "Mg-R Gain",
];
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
      if (currentCcu === Store.state.ccu) {
        Store.state.changeCcu("");
        Store.state.changeDisplay("");
        Store.state.changeSpecialty("");
        Store.state.changeSettings("");
        clearSettingsHtml();
        hideSettingsContainer();
        removeDisplayBtnHtml();
        toggleSpecialties();
        changeInfoText();
        toggleInfo();
        closeDisplayDiv();
        rotateCloseArrow();
      } else {
        Store.state.changeCcu(currentCcu);
        selectCCu(currentCcu);
      }
    });
  }
};

const formEventListener = () => {
  const formLink = document.getElementById("form-link");
  formLink.addEventListener("click", () => {
    window.open(url);
  });
};

const selectCCu = () => {
  const cameraDisplayDiv = Store.state.ccu;
  if (Store.state.ccu === "1688" && Store.state.display === "Vision Elect") {
    Store.state.changeDisplay("");
    closeDisplayDiv(cameraDisplayDiv);
    openDisplayDiv();
    rotateCloseArrow();
    resetDisplayBtn();
    toggleSpecialties();
    removeSpecialtyHtmlElements();
    changeInfoText();
  } else if (
    Store.state.ccu === "" &&
    Store.state.display !== "" &&
    Store.state.specialty !== ""
  ) {
    toggleSpecialties();
    removeSpecialtyHtmlElements();
    Store.state.specialty("");
    closeDisplayDiv(cameraDisplayDiv);
    removeDisplayBtnHtml();
    resetDisplayBtn();
    Store.state.changeDisplay("");
    rotateCloseArrow();
    Store.state.changeCcu("");
    changeInfoText();
  } else if (Store.state.ccu !== "" && Store.state.display !== "") {
    closeDisplayDiv(cameraDisplayDiv);
    removeDisplayBtnHtml();
    resetDisplayBtn();
    rotateCloseArrow();
    openDisplayDiv(cameraDisplayDiv);
    reasignDisplayBtn();
    rotateOpenArrow();
    changeInfoText();
    listSpecialties();
  } else {
    openDisplayDiv();
    rotateOpenArrow();
    changeInfoText();
  }
};

const rotateOpenArrow = () => {
  const arrowDiv = document.getElementById(Store.state.ccu + "-arrow");
  arrowDiv.classList.add("open");
};
const rotateCloseArrow = () => {
  const arrowDivs = document.getElementsByClassName("arrow-outer-div open");

  for (let item of arrowDivs) {
    item.classList.remove("open");
  }
};

const changeInfoText = () => {
  const infoTag = document.getElementById("info-tag-text");
  if (
    Store.state.ccu !== "" &&
    (Store.state.display !== "") & (Store.state.specialty !== "")
  ) {
    infoTag.innerText = "Select Specialty to populate settings...";
  } else if (
    Store.state.ccu !== "" &&
    (Store.state.display !== "") & (Store.state.specialty === "")
  ) {
    infoTag.innerText = "Select Specialty to populate settings...";
  } else if (
    Store.state.ccu !== "" &&
    (Store.state.display === "") & (Store.state.specialty === "")
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
      if (Store.state.display === currentDisplay) {
        Store.state.changeDisplay("");
        resetDisplayBtn();
        changeInfoText();
        toggleSpecialties();
        removeSpecialtyHtmlElements();
      } else {
        Store.state.changeDisplay(currentDisplay);
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
      if (Store.state.specialty === currentSpecialty) {
        resetSpecialtyState();
        clearSettingsHtml();
      } else {
        Store.state.changeSpecialty(currentSpecialty);
        setSpecialtyBtn();
        toggleInfo();
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
  settingsContainer.classList.toggle("show");
};

const hideSettingsContainer = () => {
  settingsContainer.classList.toggle("show");
};

const showSettings = () => {
  Store.state.settings.map((setting) => {
    const cameraSettingText = document.createElement("p");
    cameraSettingText.setAttribute("class", "camera-setting-text");
    cameraSettingText.innerText = setting;
  });
};

const fetchSettings = () => {
  fetch("./settings.json")
    .then((response) => response.json())
    .then((data) => filterCcu(data));
};

const filterCcu = (data) => {
  data.ccus.map((ccu) => {
    if (ccu[Store.state.ccu]) {
      ccu[Store.state.ccu]["monitors"].map((monitor) => {
        if (monitor[Store.state.display]) {
          monitor[Store.state.display]["specialties"].map((specialty) => {
            if (specialty[Store.state.specialty]) {
              Store.state.changeSettings(specialty[Store.state.specialty]);
              populateSettingsTitle();
            }
          });
        }
      });
    }
  });
};

const populateSettingsTitle = () => {
  const settingsTitleContainer = document.createElement("div");
  settingsTitleContainer.setAttribute("class", "settings-title-container");
  settingsTitleContainer.setAttribute("id", "settings-title-container");
  // // settings-title-camera
  const settingsTitleCamera = document.createElement("div");
  settingsTitleCamera.setAttribute("class", "settings-title-camera");
  // // settings-title-camera-text-div and settings-title-specialty-text-div go in settings-title-camera
  const settingsTitleCameraTextDiv = document.createElement("div");
  settingsTitleCameraTextDiv.setAttribute(
    "class",
    "settings-title-camera-text-div"
  );
  // // p tag goes inside settings-title-camera-text-div
  const settingsTitleCameraTag = document.createElement("p");
  settingsTitleCameraTag.setAttribute("id", "settings-title-camera-tag");
  settingsTitleCameraTag.innerText = "CCU";

  const cameraTagText = document.createElement("p");
  cameraTagText.setAttribute("id", "camera-tag-text");
  cameraTagText.innerText = Store.state.ccu;
  // // put settings-title-camera-tag into settings-title-camera-text-div
  settingsTitleCameraTextDiv.appendChild(settingsTitleCameraTag);
  settingsTitleCameraTextDiv.appendChild(cameraTagText);
  // //put settings-title-camera-text-div inside settings-title-camera
  settingsTitleCamera.appendChild(settingsTitleCameraTextDiv);
  // // put settings-title-camera into settings-title-container
  settingsTitleContainer.appendChild(settingsTitleCamera);
  // // put settings-title-container into settings-container
  settingsContainer.appendChild(settingsTitleContainer);

  // // settings-title-specialty-text-div
  const settingsTitleSpecialtyTextDiv = document.createElement("div");
  settingsTitleSpecialtyTextDiv.setAttribute(
    "class",
    "settings-title-specialty-text-div"
  );
  // // specialty p tag goes inside settings-title-specialty-text-div
  const settingsTitleSpecialtyTag = document.createElement("p");
  settingsTitleSpecialtyTag.setAttribute("id", "settings-title-specialty-tag");
  settingsTitleSpecialtyTag.innerText = "SPECIALTY";
  const specialtyTagText = document.createElement("p");
  specialtyTagText.setAttribute("id", "specialty-tag-text");
  specialtyTagText.innerText = Store.state.specialty;
  settingsTitleSpecialtyTextDiv.appendChild(settingsTitleSpecialtyTag);
  settingsTitleSpecialtyTextDiv.appendChild(specialtyTagText);
  // // settings-title-specialty-text-div goes inside settings-title-camera
  settingsTitleCamera.appendChild(settingsTitleSpecialtyTextDiv);
  // // settings-title-camera goes inside settings-title-container
  settingsTitleContainer.appendChild(settingsTitleCamera);
  // // settings-title-container goes insdie settings-container
  settingsContainer.appendChild(settingsTitleContainer);

  // // Settings-title-display goes inside settings-title-container
  const settingsTitleDisplay = document.createElement("div");
  settingsTitleDisplay.setAttribute("class", "settings-title-display");
  // // // settings-title-display-text-div goes into settings-title-display
  const settingsTitleDisplayTextDiv = document.createElement("div");
  settingsTitleDisplayTextDiv.setAttribute(
    "class",
    "settings-title-display-text-div"
  );
  // // #settings-title-display-tag goes inside settings-title-display-text-div
  const settingsTitleDisplayTag = document.createElement("p");
  settingsTitleDisplayTag.setAttribute("id", "settings-title-display-tag");
  settingsTitleDisplayTag.innerText = "DISPLAY";

  const displayTagText = document.createElement("p");
  displayTagText.setAttribute("id", "display-tag-text");
  displayTagText.innerText = Store.state.display;
  // // settings-title-display-tag goes into settings-title-display-text-div
  settingsTitleDisplayTextDiv.appendChild(settingsTitleDisplayTag);
  settingsTitleDisplayTextDiv.appendChild(displayTagText);
  // // settings-title-display-text-div goes into settings-title-display
  settingsTitleDisplay.appendChild(settingsTitleDisplayTextDiv);
  // // settings-title-display goes inside settings-container-id
  // // settings-title-display-specialty-text-div goes inside settings-title-display
  const settingsTitleDisplaySpecialtyTextDiv = document.createElement("div");
  settingsTitleDisplaySpecialtyTextDiv.setAttribute(
    "class",
    "settings-title-display-specialty-text-div"
  );
  // // settings-title-display-specialty-tag goes inside settings-title-display-specialty-text-div
  const settingsTitleDisplaySpecialtyTag = document.createElement("p");
  settingsTitleDisplaySpecialtyTag.setAttribute(
    "id",
    "settings-title-display-specialty-tag"
  );
  settingsTitleDisplaySpecialtyTag.innerText = "SPECIALTY";
  settingsTitleDisplaySpecialtyTextDiv.appendChild(
    settingsTitleDisplaySpecialtyTag
  );
  const displaySpecialtyTagText = document.createElement("p");
  displaySpecialtyTagText.setAttribute("id", "display-specialty-tag-text");
  displaySpecialtyTagText.innerText = Store.state.specialty;
  // // settings-display-specialty-container
  const settingsDisplaySpecialtyContainer = document.createElement("div");
  settingsDisplaySpecialtyContainer.setAttribute(
    "class",
    "settings-display-specialty-container"
  );
  settingsTitleDisplaySpecialtyTextDiv.appendChild(displaySpecialtyTagText);
  settingsTitleDisplay.appendChild(settingsTitleDisplaySpecialtyTextDiv);
  settingsDisplaySpecialtyContainer.appendChild(settingsTitleDisplay);
  settingsContainer.appendChild(settingsDisplaySpecialtyContainer);

  populateSettingsBody(settingsDisplaySpecialtyContainer);
};

const populateSettingsBody = (settingsDisplaySpecialtyContainer) => {
  const settingsTitleContainer = document.getElementById(
    "settings-title-container"
  );
  const settingsBodyCamera = document.createElement("div");
  settingsBodyCamera.setAttribute("class", "settings-body-camera");
  // camera-settings div goes inside settings-body-camera
  // camera-settings-div goes inside settings-body-camera
  const cameraSettingsDiv = document.createElement("div");
  cameraSettingsDiv.setAttribute("class", "camera-settings-div");
  const cameraParamsDiv = document.createElement("div");
  cameraParamsDiv.setAttribute("class", "camera-params-div");
  // populate params
  SIXTEENPARAMETERS.map((param) => {
    console.log(param);
    // camera-param goes inside camera-settings-div
    const cameraParamDiv = document.createElement("div");
    cameraParamDiv.setAttribute("class", "camera-param-div");
    const cameraParamText = document.createElement("p");
    cameraParamText.setAttribute("class", "camera-param-text");
    cameraParamText.innerText = param;
    cameraParamDiv.appendChild(cameraParamText);
    // camera-param-text goes into camera-param-div
    cameraParamsDiv.appendChild(cameraParamDiv);
  });

  // populate settings
  Store.state.settings.map((setting) => {
    // camera-setting-div goes inside camera-settings-div
    const cameraSettingDiv = document.createElement("div");
    cameraSettingDiv.setAttribute("class", "camera-setting-div");
    const cameraSettingText = document.createElement("p");
    cameraSettingText.setAttribute("class", "camera-setting-text");
    cameraSettingText.innerText = setting;
    cameraSettingDiv.appendChild(cameraSettingText);

    cameraSettingsDiv.appendChild(cameraSettingDiv);
  });

  settingsBodyCamera.appendChild(cameraParamsDiv);
  settingsBodyCamera.appendChild(cameraSettingsDiv);
  settingsTitleContainer.appendChild(settingsBodyCamera);
  // settings-display-specialty-body goes in settings-display-specialty-container
  // const settingsDisplaySpecialtyBody = document.createElement("div");
  // settingsDisplaySpecialtyBody.setAttribute(
  //   "class",
  //   "settings-display-specialty-body"
  // );
  // display-settings div goes inside settings-display-specialty-body
  // const displaySettingsDiv = document.createElement("div");
  // displaySettingsDiv.setAttribute("class", "display-settings-div");
  // settingsDisplaySpecialtyBody.appendChild(displaySettingsDiv);
  // settingsDisplaySpecialtyContainer.appendChild(settingsDisplaySpecialtyBody);
};

const setSpecialtyBtn = () => {
  const specialtyBtn = document.getElementById(Store.state.specialty);
  specialtyBtn.className = "specialty-btn-div-active";
};

const toggleInfo = () => {
  const infoDiv = document.getElementById("info-div-id");
  infoDiv.classList.toggle("hide");
};

const listSpecialties = () => {
  removeSpecialtyHtmlElements();
  toggleSpecialties();
  const specialtiesParentDiv = document.getElementById(
    "specialties-parent-div"
  );
  let specialtiesList = Store.state.ccu + "-" + Store.state.display;
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

const toggleSpecialties = () => {
  const specialtiesDiv = document.getElementById("specialties-div");
  specialtiesDiv.classList.toggle("show");
};

const removeSpecialtyHtmlElements = () => {
  const parentDiv = document.getElementById("specialties-parent-div");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
};

const closeDisplayDiv = () => {
  const monitorsDiv = document.getElementsByClassName("monitors-div active");
  for (let item of monitorsDiv) {
    item.classList.remove("active");
  }
};

const openDisplayDiv = () => {
  const monitorsDiv = document.getElementById(
    Store.state.ccu + "-monitors-div"
  );
  monitorsDiv.classList.add("active");
  assignCurrentDisplays(Store.state.ccu);
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

const showCurrentDisplays = (currentDisplays) => {
  const monitorBtnsDiv = document.getElementById(
    Store.state.ccu + "-monitors-btns-div"
  );
  currentDisplays.map((display) => {
    const monitorBtnDiv = document.createElement("div");
    monitorBtnDiv.setAttribute("id", Store.state.ccu + "-" + display.name);
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
    Store.state.ccu + "-" + Store.state.display
  );
  if (displayBtnDiv !== null) {
    displayBtnDiv.className = "monitor-btn-div-active";
  } else {
    Store.state.changeDisplay("");
  }
};
