class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark border">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Clarisa
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="#">
                Documents
              </a>
              <a class="nav-link" href="#">
                Trays
              </a>
              <a class="nav-link" href="#">
                Settings
              </a>
              <a class="nav-link" href="#">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
class Main extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="mt-4 h4 fw-normal">
              <a href="#" class="text-decoration-none">
                jhrespicio
              </a>{" "}
              /{" "}
              <a href="#" class="text-decoration-none">
                Trays
              </a>{" "}
              /{" "}
              <a href="#" class="text-decoration-none fw-bold">
                Create a tray
              </a>
            </div>

            <div class="mb-5 mt-3">
              <div class="card mb-3">
                <div class="card-header" id="cardHeader">
                  <p class="h5 fw-normal mb-3">
                    First, add a name to your tray.
                  </p>
                  <form class="row g-3 mb-3" id="addName">
                    <div class="col-auto">
                      <input
                        type="text"
                        class="form-control border border-success"
                        id="addNameInput"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div class="col-auto">
                      <button type="submit" class="btn btn-success border">
                        Add name
                      </button>
                    </div>
                  </form>
                </div>
                <div id="cards"></div>
                <div id="bodyCont" a></div>
              </div>
              <span id="startBtns" class="d-none">
                <a
                  class="btn btn-light text-danger border"
                  href="/t"
                  role="button"
                >
                  Cancel
                </a>
              </span>
              <button
                type="button"
                class="btn btn-primary d-none border"
                onClick="createTray()"
                id="createTray"
              >
                Finish
              </button>
            </div>
            <div class="p-5"></div>
          </div>
        </div>
      </div>
    );
  }
}
class CardHeader extends React.Component {
  render() {
    return (
      <div>
        <span className="font-monospace small fw-bold">{this.props.name}</span>{" "}
        <span className="text-muted small float-end">
          Unsaved{" "}
          <button
            type="button"
            class="btn btn-white text-decoration-none btn-sm border"
            onClick="location.reload()"
          >
            Erase
          </button>
        </span>
      </div>
    );
  }
}
class Request extends React.Component {
  render() {
    return (
      <div class="card-body">
        <div className="card">
          <div className="card-body bg-light">
            <h5 class="card-title fw-normal">{this.props.intro}</h5>
            <h5 class="card-title fw-normal text-secondary">
              {this.props.decide}
            </h5>
            <button
              type="button"
              class="btn btn-light border m-2 bg-white border-success"
              onClick={() => reqDoc()}
            >
              Request a document from someone
            </button>
            <button
              type="button"
              class="btn btn-dark m-2 border border-success"
              onClick={() => reqSig()}
            >
              Request someone to sign a document
            </button>
          </div>
        </div>
      </div>
    );
  }
}
class ReqDoc extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div class="card-body bg-light">
            <div className="mb-2">
              <span class="badge fw-normal rounded-pill bg-white text-dark border">
                Document request
              </span>
            </div>
            <p class="h5 fw-normal mb-3">
              What's the document you want to request?
            </p>
            <form class="row g-3" id="reqDoc">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control border border-success"
                  id="reqDocName"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-success border">
                  This document
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
class Signers extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div class="card-header">
            {this.props.name}{" "}
            <span class="badge fw-normal rounded-pill bg-white text-dark border">
              Document request
            </span>
          </div>
          <div class="card-body">
            <p>
              <a href="#" className="text-decoration-none small">
                {this.props.fileName}
              </a>
            </p>
            <h5 class="card-title fw-normal">{this.props.intro}</h5>
            <h5 class="card-title fw-normal text-secondary">
              {this.props.lead}
            </h5>
            <p id="docSigners" class="small text-secondary"></p>
            <form class="row g-3 mb-3" id="signers">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control border border-success"
                  id="signer"
                  placeholder="Account"
                  required
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-success border">
                  This account's signature
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function SignersList(props) {
  const { signers } = props;
  return <span>{signers.map((signer) => signer + " ")}</span>;
}
class Cards extends React.Component {
  render() {
    return <CreateCards requests={this.props.requests} />;
  }
}
function Pill(props) {
  const docReq = props.document;
  if (docReq) {
    return (
      <span class="badge fw-normal rounded-pill bg-dark border">
        Signature request
      </span>
    );
  }
  return (
    <span class="badge fw-normal rounded-pill bg-white text-dark border">
      Document request
    </span>
  );
}
function CardBody(props) {
  const request = props.request;
  if (request.document === undefined) {
    return (
      <div>
        <div class="card-text small text-secondary">{request.signer}</div>
      </div>
    );
  }
  if (request.fileName !== undefined) {
    return (
      <div>
        <div>
          <a href={request.fileLocation} className="text-decoration-none small">
            {request.fileName}
          </a>
        </div>
      </div>
    );
  }
  if (request.document !== undefined && request.fileName === undefined) {
    return (
      <div>
        <div class="card-text small text-secondary">{request.document}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="card-text small text-secondary">{request.signer}</div>
      </div>
    );
  }
}
function CreateCards(props) {
  const { requests } = props;
  return (
    <div>
      {requests.map((request) => (
        <div>
          <div className="ms-3 mt-3 mb-1">
            <span className="small">{request.name}</span>{" "}
            <Pill document={request.document} />
          </div>
          <div class="card mb-3 mx-3">
            <div class="card-body bg-light">
              <CardBody request={request} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
class ReqSig extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div class="card-body bg-light">
            <div className="mb-2">
              <span class="badge fw-normal rounded-pill bg-dark border">
                Signature request
              </span>
            </div>
            <h5 class="card-title fw-normal">Create the document.</h5>
            <h5 class="card-title fw-normal text-secondary mb-3">
              What will you call this document?
            </h5>
            <form class="row g-3" id="reqSig">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control border border-success"
                  id="reqSigName"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-success border">
                  This name
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
class DocType extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div class="card-header">
            {this.props.name}{" "}
            <span class="badge fw-normal rounded-pill bg-dark border">
              Signature request
            </span>
          </div>
          <div class="card-body">
            <h5 class="card-title fw-normal">
              A document can be a file or text.
            </h5>
            <h5 class="card-title fw-normal text-secondary">
              Which one will it be?
            </h5>
            <button
              type="button"
              class="btn btn-dark m-2 border border-success"
              onClick={() => reqSigFile()}
            >
              A file
            </button>
            <button
              type="button"
              class="btn btn-dark m-2 border border-success"
              onClick={() => reqSigText()}
            >
              Text
            </button>
          </div>
        </div>
      </div>
    );
  }
}
class FileUpload extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div class="card-header">
            {this.props.name}{" "}
            <span class="badge fw-normal rounded-pill bg-dark border">
              Signature request
            </span>
          </div>
          <div class="card-body">
            <form class="row g-3" id="uploadFile">
              <div class="col-auto">
                <input
                  class="form-control border border-success"
                  type="file"
                  id="formFile"
                />
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn btn-success border"
                  id="uploadFileBtn"
                >
                  Create document
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
class ReqText extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div class="card-header">
            {this.props.name}{" "}
            <span class="badge fw-normal rounded-pill bg-dark border">
              Signature request
            </span>
          </div>
          <div class="card-body">
            <h5 class="card-title fw-normal mb-3">Add the text</h5>
            <form id="text">
              <div>
                <textarea
                  class="form-control mb-3 border border-success"
                  id="textArea"
                  rows="7"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-success border">
                Create document
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
