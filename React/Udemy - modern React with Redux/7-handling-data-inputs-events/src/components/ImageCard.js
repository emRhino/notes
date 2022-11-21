import React from 'react';
import styled from "styled-components";

const ImageWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    max-width: 100%;
`

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();

        this.state = { imageWidth: null }
    }

    componentDidMount = () => {

        this.imageRef.current.addEventListener('load', () => {
            this.setState({ imageWidth: this.imageRef.current.clientWidth});
        })

        
    }


    render() {
        return (
            <ImageWrapper>
                <Image ref={this.imageRef} alt={this.props.image.description} width={this.state.imageWidth} src={this.props.image.urls.regular} />
            </ImageWrapper>
        )
    }
}

export default ImageCard;