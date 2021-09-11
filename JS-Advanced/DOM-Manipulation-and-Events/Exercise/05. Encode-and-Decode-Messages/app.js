function encodeAndDecodeMessages() {
    document.querySelector('#main').addEventListener('click', onClick);

    function onClick(ev) {
        let messageElement = document.querySelectorAll('textarea')[0];
        let receivedElement = document.querySelectorAll('textarea')[1];

        if (ev.target.textContent === 'Encode and send it') {
            let encoded = '';

            for (let i = 0; i < messageElement.value.length; i++) {
                encoded += String.fromCharCode(messageElement.value.charCodeAt(i) + 1);
            }
            
            messageElement.value = encoded;
            receivedElement.value = encoded;

            messageElement.value = '';
        }

        if (ev.target.textContent === 'Decode and read it') {
            let decoded = '';

            for (let i = 0; i < receivedElement.value.length; i++) {
                decoded += String.fromCharCode(receivedElement.value.charCodeAt(i) - 1);
            }

            receivedElement.value = decoded;
        }
    }
}