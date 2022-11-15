import React from 'react';

class ImageList extends React.Component {

    constructor(props) {
        super(props);
    }

    imagesRend(photos) {
        return photos.map(({description, urls, id}) => {
            return <img key={id} src={urls.regular} alt={description} width={300} />
        })
    }

    render() {
        return (
            <div>{ this.imagesRend(this.props.images) }</div>
        )
    }
}

export default ImageList;