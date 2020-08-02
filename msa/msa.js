window.onload = function loadCcus() {
  camerasDiv = document.getElementsByClassName("camera-div");
  // add event listener
  for (let item of camerasDiv) {
    item.addEventListener("click", function () {
      const currentCcu = event.currentTarget.dataset.ccu;
      selectCCu(currentCcu);
    });
  }
  // selectDisplay();
};

const state = {
  camera: { name: "", clicked: false },
  display: { name: "", clicked: false },
  specialty: { name: "", clicked: false },
};

const displays = {
  sixteen: [{ name: "4k" }, { name: "Vision Pro" }],
  fifteen: [{ name: "4k" }, { name: "Vision Pro" }, { name: "Vision Elect" }],
};

const monitorBtnDivs = document.getElementsByClassName("monitor-btn-div");

const selectCCu = (currentCcu) => {
  console.log(
    state.camera.name === currentCcu &&
      state.display.name !== "" &&
      state.specialty.name !== ""
  );
  const cameraDisplayDiv = state.camera.name;
  if (
    state.camera.name === currentCcu &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    closeDisplayDiv(cameraDisplayDiv);
    // resetSpecialtyState()
    // closeSpecialtyDiv()
    // resetDisplayState()
    // resetDisplayBtn()
    // resetCCuState()
  } else if (state.camera.name === currentCcu && state.display.name !== "") {
    closeDisplayDiv(cameraDisplayDiv);
    // resetDisplayState()
    // resetDisplayBtn()
    // resetCCuState()
  } else if (state.camera.name === currentCcu) {
    closeDisplayDiv(cameraDisplayDiv);
    state.camera.name = "";
    state.camera.clicked = false;
  } else if (
    state.camera.name !== "" &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    console.log("here");
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    // resetSpecialtyState()
    // closeSpecialtyDiv()
    resetDisplayBtn();
    checkAndSwitchDisplayBtn();
    openMonitorsDiv(currentCcu);
  } else if (state.camera.name !== "" && state.display.name !== "") {
    console.log("ccu and display");
    closeDisplayDiv(cameraDisplayDiv);
    resetDisplayBtn();
    openMonitorsDiv(currentCcu);
  } else if (state.camera.name !== "") {
    closeDisplayDiv(cameraDisplayDiv);
    state.camera.name = currentCcu;
    state.camera.clicked = true;
    openMonitorsDiv(currentCcu);
  } else {
    state.camera.name = currentCcu;
    state.camera.clicked = true;
    openMonitorsDiv(currentCcu);
  }
  selectDisplay();
};

const selectDisplay = (currentDisplay) => {
  for (let item of monitorBtnDivs) {
    item.addEventListener("click", () => {
      setDisplayState(currentDisplay);
      if (item.className === "monitor-btn-div-active") {
        item.className = "monitor-btn-div";
      } else {
        item.className = "monitor-btn-div-active";
      }
    });
  }
};

const setCcuState = (currentCcu) => {
  state.camera.name = currentCcu;
};
const setDisplayState = (currentDisplay) => {
  state.display.name = currentDisplay;
  state.display.clicked = true;
};

const resetDisplayState = () => {
  state.display.name = "";
  state.display.clicked = false;
};

const closeDisplayDiv = (cameraDisplayDiv) => {
  const monitorsDiv = document.getElementById(
    cameraDisplayDiv + "-monitors-div"
  );
  monitorsDiv.className = "monitors-div";
  resetDisplayBtn();
};

const openMonitorsDiv = (currentCcu) => {
  const monitorsDiv = document.getElementById(currentCcu + "-monitors-div");
  monitorsDiv.className = "monitors-div-active";
};

const resetDisplayBtn = () => {
  const displayDivs = document.getElementsByClassName("monitor-btn-div");
  for (let item of displayDivs) {
    if (item.className === "monitor-btn-div-active") {
      item.className === "monitor-btn-div";
    }
  }
  checkAndSwitchDisplayBtn();
};

const checkAndSwitchDisplayBtn = () => {
  const displayBtnDiv = document.getElementById(
    state.camera.name + "-" + state.display.name
  );
  console.log(state.camera.name + "-" + state.display.name);
  if (displayBtnDiv !== null) {
    displayBtnDiv.className = "monitor-btn-div-active";
  } else {
    // resetDisplayState();
  }
};
