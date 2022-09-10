// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {listDetails, updateThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = listDetails

  const updateImageIcon = isActive ? `thumbnail` : `thumbnail button`

  const onClickThumbnailBtn = () => {
    updateThumbnail(id)
  }

  return (
    <li className="thumbnail-container">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailBtn}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={updateImageIcon}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
