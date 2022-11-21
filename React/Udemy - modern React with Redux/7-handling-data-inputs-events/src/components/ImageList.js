import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {

    constructor(props) {
        super(props);
    }

    imagesRend(photos) {
        return photos.map((photo) => {
            // return <img key={id} src={urls.regular} alt={description} width={300} />
            return <ImageCard key={photo.id} image={photo} />
        })
    }

    render() {
        return (
            <div>{ this.imagesRend(this.props.images) }</div>
        )
    }
}

export default ImageList;