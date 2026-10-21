import './index.scss'
import java from '../../../assets/image/java.png'
import csharp from '../../../assets/image/csharp.svg'
import python from '../../../assets/image/python.png'
import docker from '../../../assets/image/docker.svg'
import kubernetes from '../../../assets/image/kubernetes.svg'
import postgresql from '../../../assets/image/postgresql.png'

const techLogos = [
  { src: java, name: 'Java' },
  { src: csharp, name: 'C#' },
  { src: python, name: 'Python' },
  { src: docker, name: 'Docker' },
  { src: kubernetes, name: 'Kubernetes' },
  { src: postgresql, name: 'PostgreSQL' },
]

const Cube = () => (
  <div className="stage-cube-container" aria-hidden="true">
    <div className="cube-spinner">
      {techLogos.map(({ src, name }, idx) => (
        <div className={`face${idx + 1}`} key={name}>
          <img src={src} alt={name} className="tech-icon" />
        </div>
      ))}
    </div>
  </div>
)

export default Cube
