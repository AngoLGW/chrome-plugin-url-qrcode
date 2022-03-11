async function showQrcode() {
  clear();

  let title = document.getElementById("title");
  let icon = document.getElementById("icon");

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);
  title.innerHTML = tab.title;
  icon.src = tab.favIconUrl;

  await QRCode.toCanvas(document.getElementById("canvas"), tab.url);
  console.log("success!");
}

showQrcode();

function clear() {
  let canvas = document.getElementById("canvas");
  var w = canvas.width;
  var h = canvas.height;
  canvas.width = w;
  canvas.height = h;
}
