window.onload = function loadCcus() {
  camerasDiv = document.getElementsByClassName("camera-div");
  // add event listener
  for (let item of camerasDiv) {
    item.addEventListener("click", function () {
      const currentCcu = event.currentTarget.dataset.ccu;
      selectCCu(currentCcu);
    });
  }
  displayEventListener();
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
    resetCcuState();
    resetDisplayBtn();
    resetDisplayState();
  } else if (state.camera.name === currentCcu) {
    closeDisplayDiv(cameraDisplayDiv);
    resetCcuState();
  } else if (
    state.camera.name !== "" &&
    state.display.name !== "" &&
    state.specialty.name !== ""
  ) {
    console.log("all 3 selected");
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    // resetSpecialtyState()
    // closeSpecialtyDiv()
    reasignDisplayBtn();
    openMonitorsDiv(currentCcu);
  } else if (state.camera.name !== "" && state.display.name !== "") {
    console.log("2 selected");
    setCcuState(currentCcu);
    closeDisplayDiv(cameraDisplayDiv);
    reasignDisplayBtn();
    openMonitorsDiv(currentCcu);
  } else if (state.camera.name !== "") {
    closeDisplayDiv(cameraDisplayDiv);
    state.camera.name = currentCcu;
    state.camera.clicked = true;
    openMonitorsDiv(currentCcu);
  } else {
    console.log("first selection");
    setCcuState(currentCcu);
    openMonitorsDiv(currentCcu);
  }
};

const displayEventListener = () => {
  for (let item of monitorBtnDivs) {
    item.addEventListener("click", () => {
      const currentDisplay = event.currentTarget.dataset.display;
      console.log(currentDisplay, state.display.name);
      if (state.display.name === currentDisplay) {
        resetDisplayState();
        resetDisplayBtn();
      } else {
        console.log("else", item);
        setDisplayState(currentDisplay);
        reasignDisplayBtn();
        // item.className = "monitor-btn-div-active";
      }
    });
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
  console.log("set display state", currentDisplay);
  state.display.name = currentDisplay;
  state.display.clicked = true;
};
const resetDisplayState = () => {
  console.log("reset display state");
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
  console.log("close display div");
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
  console.log("reset display btn");
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
    console.log("not null", state.display);
    displayBtnDiv.className = "monitor-btn-div-active";
  } else {
    resetDisplayState();
  }
};
