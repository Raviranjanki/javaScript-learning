(function () {
    const video = document.querySelector(".webcam");
    const canvas = document.querySelector(".video");
    const ctx = canvas.getContext('2d')
    const faceCanvas = document.querySelector(".face");
    const faceCtx = faceCanvas.getContext('2d')

    const faceDetector = new window.FaceDetector();

    async function populatedVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 1280, height: 720 }
        });

        video.srcObject = stream;

        await video.play();
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        faceCanvas.width = video.videoWidth;
        faceCanvas.height = video.videoHeight;
    }


    async function detect() {
        const faces = await faceDetector.detect(video);
        faces.forEach(drawFace)
        requestAnimationFrame(detect)
    }
    function drawFace(face) {
        const { width, height, top, left } = face.boundingBox;
        ctx.strokeRect(left, top, width, height);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        censor(face)
    }
    populatedVideo().then(detect)

    function censor({ boundingBox: face }) {
        faceCtx.imageSmoothingEnabled = false
        const options = {
            SIZE: 10,
            SCALE: 1.35
        }
        const width = face.width * options.SCALE;
        const height = face.height * options.SCALE;
        faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height)
        faceCtx.drawImage(
            faceCanvas,
            face.x,
            face.y,
            options.SIZE,
            options.SIZE,
            // drawing args
            face.x - (width - face.width) / 2,
            face.y - (height - face.height) / 2,
            width,
            height
        );

    }
})()