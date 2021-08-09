const video = document.getElementById('video')
const button = document.querySelector("button")

// Turn on webcam
const webcamOn = () => {
  if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          video.srcObject = stream
          video.play()
        })
        .catch(error => console.log(error))
  }
}

// Turn off webcam
const webcamOff = () => {
  try {
  const tracks = video.srcObject.getTracks()
  tracks[0].stop()
  } catch (error) {
    console.log(error)
  }
}

// Give button functionality
button.onclick = () => {
  if (video.srcObject.active) {
    confirm("Do you want to turn off your webcam?")
			&& webcamOff()
  } else {
    confirm("Do you want to turn on your webcam?")
      && webcamOn()
  }
}

// Webcam is on by default when page loads
window.addEventListener("load", webcamOn)