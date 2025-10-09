import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const InfoCard = ({ infoCardClass, item, idx }) => {
  return (
    <div className="info-card-container">
      <div className="info-card">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="card">
          {item.content.map((object, i) => {
            if (object.fieldName) {
              return (
                <div
                  key={object + i}
                  className={`${infoCardClass} _${i + idx}`}
                >
                  <h2>{object.fieldName}:</h2>
                  <strong>{object.fieldValue}</strong>
                </div>
              )
            }

            if (object.institution) {
              return (
                <div
                  key={object + i}
                  className={`${infoCardClass} _${i + idx}`}
                >
                  <h2>{object.institution}</h2>
                  <strong>{object.duration}</strong>
                </div>
              )
            }

            if (object.name) {
              return (
                <div
                  key={object + i}
                  className={`${infoCardClass} _${i + idx}`}
                >
                  <h2>{object.name}</h2>
                  {object.description && <p>{object.description}</p>}
                  {object.link && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/maksluczak?tab=repositories"
                    >
                      <FontAwesomeIcon icon={faGithub} color="#ffd700" />
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
