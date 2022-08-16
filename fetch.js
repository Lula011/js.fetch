(async () => {
    const response = await fetch('https://api.ipify.org/?format=json')
    const data = await response.json()
    let h1 = document.getElementById('userip');
    h1.innerText = 'Tu ip: ' + data.ip
})();