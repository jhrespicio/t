var form;
var tray = {};
tray.requests = [];
var tempObj = {};
console.log(tray, tempObj);
var file;
function el(id) {
  return document.getElementById(id);
}
function value(id) {
  return document.getElementById(id).value;
}
function innerHtml(id, html) {
  document.getElementById(id).innerHTML = html;
}
function append(html, cont) {
  var div = document.createElement("div");
  div.innerHTML = html;
  el(cont).appendChild(div);
}
async function addName(e) {
  e.preventDefault();
  tray.name = value("addNameInput");
  await ReactDOM.render(<CardHeader name={tray.name} />, el("cardHeader"));
  await ReactDOM.render(
    <Request
      intro="Now let's make your first request."
      decide="I want to..."
    />,
    el("bodyCont")
  );
  el("startBtns").classList.remove("d-none");
  console.log(tray, tempObj);
}
async function reqDoc() {
  el("createTray").classList.add("d-none");
  await ReactDOM.render(<ReqDoc />, el("bodyCont"));
  form = document.getElementById("reqDoc");
  form.addEventListener("submit", reqDocName);
}
async function reqDocName(e) {
  e.preventDefault();
  tempObj.name = value("reqDocName");
  await ReactDOM.render(
    <Signers
      name={tempObj.name}
      intro="Whose signature are you looking for?"
      onClick={() => alert()}
    />,
    el("bodyCont")
  );
  form = document.getElementById("signers");
  form.addEventListener("submit", signers);
  console.log(tray, tempObj);
}
async function signers(e) {
  e.preventDefault();
  var signer = value("signer");
  tempObj.signer = signer;
  console.log(tray, tempObj);
  addDocReq();
}
async function addDocReq() {
  var req = {
    name: tempObj.name,
    signer: tempObj.signer,
  };
  var arr = tray.requests;
  var added = false;
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(req) === JSON.stringify(arr[i])) {
      added = true;
      break;
    }
  }
  if (!added) {
    tray.requests.push(req);
  }
  console.log(tray, tempObj);
  await ReactDOM.render(<CreateCards requests={tray.requests} />, el("cards"));
  if (tray.requests.length !== 0) {
    el("createTray").classList.remove("d-none");
  }
  await ReactDOM.render(
    <Request
      intro="Congrats on making your request! 🎉"
      decide="You can now finish or add another request."
    />,
    el("bodyCont")
  );
}
async function reqSig() {
  await ReactDOM.render(<ReqSig />, el("bodyCont"));
  form = document.getElementById("reqSig");
  form.addEventListener("submit", reqSigName);
  el("createTray").classList.add("d-none");
}
async function reqSigName(e) {
  e.preventDefault();
  tempObj.name = value("reqSigName");
  console.log(tray, tempObj);
  ReactDOM.render(<DocType name={tempObj.name} />, el("bodyCont"));
}
async function reqSigFile() {
  await ReactDOM.render(<FileUpload name={tempObj.name} />, el("bodyCont"));
  form = document.getElementById("uploadFile");
  form.addEventListener("submit", uploadFile);
}
async function uploadFile(e) {
  e.preventDefault();
  file = el("formFile").files[0];
  if (file === undefined) {
    return;
  }
  console.log(file);
  console.log(tray, tempObj);
  addSigFile();
}
async function addSigFile() {
  var req = {
    name: tempObj.name,
    document: "file hash here",
    fileName: file.name,
    fileLocation: "#",
  };
  var arr = tray.requests;
  var added = false;
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(req) === JSON.stringify(arr[i])) {
      added = true;
      break;
    }
  }
  if (!added) {
    tray.requests.push(req);
  }
  console.log(tray, tempObj);
  await ReactDOM.render(<CreateCards requests={tray.requests} />, el("cards"));
  if (tray.requests.length !== 0) {
    el("createTray").classList.remove("d-none");
  }
  await ReactDOM.render(
    <Request
      intro="Congrats on your request! 🎉"
      decide="You can now finish or make another request."
    />,
    el("bodyCont")
  );
}
async function reqSigText() {
  await ReactDOM.render(<ReqText name={tempObj.name} />, el("bodyCont"));
  form = document.getElementById("text");
  form.addEventListener("submit", text);
}
async function text(e) {
  e.preventDefault();
  tempObj.document = el("textArea").value;
  var req = {
    name: tempObj.name,
    document: tempObj.document,
  };
  var arr = tray.requests;
  var added = false;
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(req) === JSON.stringify(arr[i])) {
      added = true;
      break;
    }
  }
  if (!added) {
    tray.requests.push(req);
  }
  console.log(tray, tempObj);
  await ReactDOM.render(<CreateCards requests={tray.requests} />, el("cards"));
  if (tray.requests.length !== 0) {
    el("createTray").classList.remove("d-none");
  }
  await ReactDOM.render(
    <Request
      intro="Congrats on your request! 🎉"
      decide="You can now finish or make another request."
    />,
    el("bodyCont")
  );
}
form = document.getElementById("addName");
form.addEventListener("submit", addName);
