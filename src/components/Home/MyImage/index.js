import './index.scss'

const img = 'me.png';

const MyImage = () => {
  return (
    <div className="my-image-container">
        <img className="my-image" src={require(`../../../assets/image/${img}`)} alt={img.split('.')[0]} />
    </div>
  )
}

export default MyImage;