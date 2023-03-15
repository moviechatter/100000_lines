const current_url = window.location.hostname
const scriptUrl = 'https://script.google.com/a/macros/tapsherpa.com/s/AKfycbw-iU_AtSreX8PLBs-qmM7Oon37OHOjU6w-Lzh-TFzs7mPZBec3EZNeOze6kZxSVdvEfQ/exec'

fetch(scriptURL, { method: 'POST', body: current_url})