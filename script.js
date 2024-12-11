let qrContainer = document.getElementById('qrContainer');
        let qrText = document.getElementById('qrText');
        let genBtn = document.getElementById('genBtn');
        let dowmloadBtn = document.getElementById('downloadBrn');

        const generateQR = (text) => {
            qrContainer.innerHTML = ""; // Clear previous QR code
            if (!text) {
                alert("Please enter some text or URL!");
                return;
            }
            new QRCode(qrContainer, {
                text: text,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        };

        genBtn.addEventListener("click", () => {
            let text = qrText.value.trim(); // Remove extra spaces
            generateQR(text);
            // qrContainer.classList.add('img-show')
            // dowmloadBtn.classList.add('download-active')
        });