// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {ActiveEventRegistrationStatus} = props

  const renderNoViewText = () => (
    <div className="no-view-container">
      <p className="view-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can after mack you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="register-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-image"
      />
      <h1 className="registrations-closed">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderEventsStatus = () => {
    switch (ActiveEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoViewText()
    }
  }

  return <div className="active-event-container">{renderEventsStatus()}</div>
}
export default ActiveEventRegistrationDetails
