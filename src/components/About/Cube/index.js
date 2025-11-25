import './index.scss'

const techLogos = [
  'java.png',
  'mongo-db.png',
  'node-js.png',
  'postgresql.png',
  'python.png',
  'react.png',
]

const Cube = () => {
  return (
    <div className="stage-cube-container">
      <div className="cube-spinner">
        {techLogos.map((img, idx) => (
          <div className={`face${idx + 1}`} key={idx}>
            <img
              src={require(`../../../assets/image/${img}`)}
              alt={img.split('.')[0]}
              className="tech-icon"
            ></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cube
