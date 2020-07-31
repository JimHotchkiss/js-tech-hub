window.onload = function loadCcus() {
  camerasDiv = document.getElementsByClassName("camera-div");
  // add event listener
  for (let item of camerasDiv) {
    item.addEventListener("click", function () {
      const currentCcu = event.currentTarget.dataset.ccu;
      setCcuState(currentCcu);
      openMonitorsDiv(currentCcu);
      clearMonitorsHtml();
    });
  }
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
  if (state.camera.name !== "") {
    // closeMonitorsDivs();
  } else {
    state.camera.name = currentCcu;
    state.camera.clicked = true;
  }
};

const clearMonitorsHtml = () => {
  const monitorsDivs = document.getElementsByClassName("monitors-div");
  for (let item of monitorsDivs) {
    console.log(item);
    // while (item.firstChild) {
    //   monitorsDivs.removeChild(item.firstChild);
    // }
  }
};

// const closeMonitorsDivs = () => {
//   const monitorsDivs = document.getElementsByClassName("monitors-div");
//   console.log(monitorsDivs);
//   for (let item of monitorsDivs) {
//     item.className = "monitors-div";
//   }
// };

const openMonitorsDiv = (currentCcu) => {
  const monitorsDiv = document.getElementById(currentCcu + "-monitors-div");
  monitorsDiv.className = "monitors-div-active";
  showMonitors(monitorsDiv, currentCcu);
};

const showMonitors = (monitorsDiv, currentCcu) => {
  let monitors = "";
  if (currentCcu === "1688") {
    monitors = displays.sixteen;
  } else {
    monitors = displays.fifteen;
  }
  monitors.map((monitor) => {
    const monitorBtnDiv = document.createElement("div");
    monitorBtnDiv.setAttribute("class", "monitor-btn-div");
    monitorBtnDiv.setAttribute("data-display", monitor.name);
    const monitorBtnTag = document.createElement("p");
    monitorBtnTag.setAttribute("class", "monitor-btn-tag");
    monitorBtnTag.innerHTML = monitor.name;
    monitorBtnDiv.appendChild(monitorBtnTag);
    monitorsDiv.appendChild(monitorBtnDiv);
  });
};
