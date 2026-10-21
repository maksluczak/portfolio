import './index.scss'
import photo from '../../../assets/image/me-2.png'
import { profile } from '../../../data'

const MyImage = () => (
  <div className="my-image-container">
    <img className="my-image" src={photo} alt={profile.fullName} />
  </div>
)

export default MyImage
