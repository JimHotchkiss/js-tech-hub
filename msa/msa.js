window.onload = function loadCcus() {
  const cameras = [
    {
      name: "1688",
      clicked: false,
    },
    {
      name: "1588",
      clicked: false,
    },
    {
      name: "Precision",
      clicked: false,
    },
    {
      name: "1488",
      clicked: false,
    },
    {
      name: "1288",
      clicked: false,
    },
  ];
  camerasDiv = document.getElementById("cameras-div");
  cameras.map((camera) => {
    const cameraDiv = document.createElement("div");
    cameraDiv.setAttribute("class", "camera-div");
    const arrowDiv = document.createElement("div");
    arrowDiv.setAttribute("class", "arrow-div");
    const cameraTag = document.createElement("p");
    cameraTag.setAttribute("class", "camera-tag");
    const cameraTagDiv = document.createElement("div");
    cameraTagDiv.setAttribute("class", "camera-tag-div");
    cameraTag.innerHTML = camera.name;
    cameraTagDiv.appendChild(cameraTag);
    cameraDiv.appendChild(cameraTagDiv);
    cameraDiv.appendChild(arrowDiv);
    camerasDiv.appendChild(cameraDiv);
  });
};
