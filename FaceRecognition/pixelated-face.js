(function () {
    const video = document.querySelector(".webcam");
    const canvas = document.querySelector(".video");
    const ctx = canvas.getContext('2d')
    const faceDetector = new window.FaceDetector();

    async function populatedVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 1280, height: 720 }
        });

        video.srcObject = stream;

        await video.play();
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    }

    async function detect() {
        const faces = await faceDetector.detect(video, false);
        faces.forEach(drawFace)
        console.log(faces);
        requestAnimationFrame(detect)
    }
    function drawFace(face) {
        const { width, height, x, y } = face.boundingBox;
        ctx.strokeRect(x, y, width, height);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        censor(face)
    }
    populatedVideo().then(detect)

    function censor({ boundingBox: face }) {
        ctx.imageSmoothingEnabled = false;

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const SIZE = 500;
        const options = {
            SCALE: 1
        }
        const width = face.width * options.SCALE;
        const height = face.height * options.SCALE;
        ctx.drawImage(
            video,
            face.x - 80,
            face.y - 70,
            SIZE,
            SIZE,
            face.x - (width - face.width) / 2,
            face.y - (height - face.height) / 2,
            width,
            height
        );
    }
})()