import { Link } from 'react-router-dom'
import Resume from '../components/Resume'
import './ResumePage.css'

const ResumePage = () => {
  return (
    <div className="resume-page">
      <Resume />
      <div className="back-to-home">
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  )
}

export default ResumePage



