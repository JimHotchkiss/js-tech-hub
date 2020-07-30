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
    console.log(camera.name);
    const cameraDiv = document.createElement("div");
    cameraDiv.setAttribute("class", "camera-div");
    const cameraTag = document.createElement("p");
    cameraTag.setAttribute("class", "camera-tag");
    cameraTag.innerHTML = camera.name;
    cameraDiv.appendChild(cameraTag);
    camerasDiv.appendChild(cameraDiv);
  });
};
