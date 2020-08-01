window.onload = function loadCcus() {
  camerasDiv = document.getElementsByClassName("camera-div");
  // add event listener
  for (let item of camerasDiv) {
    item.addEventListener("click", function () {
      const currentCcu = event.currentTarget.dataset.ccu;
      setCcuState(currentCcu);
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

const setCcuState = (currentCcu) => {
  const cameraDisplayDiv = state.camera.name;
  if (state.camera.name === currentCcu) {
    closeDisplayDiv(cameraDisplayDiv);
    state.camera.name = "";
    state.clicked = false;
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

const selectDisplay = () => {
  const monitorBtnDivs = document.getElementsByClassName("monitor-btn-div");
  console.log(monitorBtnDivs);
  for (let item of monitorBtnDivs) {
    item.addEventListener("click", () => {
      const selectedDisplay = event.currentTarget.dataset.display;
      const displayBtn = document.getElementById(selectedDisplay);
      displayBtn.className = "monitor-btn-div-active";
      console.log(displayBtn);
    });
  }
};
