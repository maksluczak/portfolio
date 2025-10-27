import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const InfoCard = ({ item }) => {
  return (
    <div className="info-card-container fade-in">
      <div className="info-card">
        <h1 className="title">{item.title}</h1>
        <p className="desc">{item.description}</p>

        <div className="card">
          {item.content.map((object, i) => {
            if (object.fieldName) {
              return (
                <div key={i} className={`info-item item-${i}`}>
                  <h2>{object.fieldName}:</h2>
                  <strong>{object.fieldValue}</strong>
                </div>
              )
            }

            if (object.institution) {
              return (
                <div key={i} className={`info-item item-${i}`}>
                  <h2>{object.institution}</h2>
                  <strong>{object.duration}</strong>
                </div>
              )
            }

            if (object.name) {
              return (
                <div key={i} className={`info-item item-${i}`}>
                  <h2>{object.name}</h2>
                  {object.description && <p>{object.description}</p>}
                  {object.link && (
                    <a target="_blank" rel="noreferrer" href={object.link}>
                      <FontAwesomeIcon icon={faGithub} color="#08CB00" />
                    </a>
                  )}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
