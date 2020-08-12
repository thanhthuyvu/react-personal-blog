import React, {useState} from 'react';
import UploadForm from './UploadForm';
import Title from './Title';
import ImageGrid from './ImageGrid';
import Modal from './Modal';


const Gallery = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return(
        <div>
        <Title 
            title =  'My Gallery'
            description = 'My pictures'
        />
        <UploadForm/>
        <ImageGrid setSelectedImage = {setSelectedImage}/>
        { selectedImage && <Modal selectedImage = {selectedImage} setSelectedImage = {setSelectedImage} />}
    </div>
    )
}

export default Gallery;