class Trays extends React.Component {
  render() {
    return <CreateCardsTrays trays={this.props.trays} />;
  }
}
class CreateCardsTrays extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const id = event.target.id;
    window.open("/tray/?t=" + id, "_blank");
  }
  render() {
    return (
      <div>
        {this.props.trays.map((tray) => (
          <div class="mt-4">
            <div>
              <div>
                <span>
                  <button
                    type="button"
                    class="btn btn-link text-decoration-none px-0"
                    onClick={this.handleClick}
                    id={tray.id}
                  >
                    {tray.name + " "}
                  </button>
                </span>
                <span class="badge fw-normal rounded-pill bg-success border">
                  Serving
                </span>
              </div>
              <div class="small text-secondary mb-2">Created 4 days ago</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
async function renderTrays() {
  ReactDOM.render(
    <Trays trays={lGet("traysClar")} />,
    document.getElementById("cardsTrays")
  );
}
renderTrays();
