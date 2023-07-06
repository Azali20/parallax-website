import { Parallax } from 'react-parallax';
import Earth from '../img/earth.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Earth} strength={600}>
        <div className='content'>
          <span className='img-txt'>a trip to nature</span>
        </div>
    </Parallax>
);

export default ImageOne