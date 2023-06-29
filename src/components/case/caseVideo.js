import * as React from "react"
import ModalVideo from "react-modal-video"

class CaseVideo extends React.Component {
  createHTML(props) {
    return { __html: props }
  }
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <React.Fragment>
        <ModalVideo
          channel="vimeo"
          isOpen={this.state.isOpenVimeo}
          videoId={this.props.videoID}
          onClose={() => this.setState({ isOpenVimeo: false })}
        />
        <div className="siteContainer siteContainer--medium">
          <div className="caseVideo">
            <img src={this.props.videoImage} alt={this.props.videoAlt} />
            <button onClick={() => this.setState({ isOpenVimeo: true })}>
              <span className="buttonIcon">
                <svg className="icon">
                  <use xlinkHref="#playVideo"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CaseVideo
