const videoElement = document.getElementById("video");
const button = document.getElementById("toggle");

async function selectMedia() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    console.error("Error selecting media: ", e);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMedia();
