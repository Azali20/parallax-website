import { Parallax } from 'react-parallax';
import Water from '../img/water.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Water} strength={600}>
        <div className='content'>
          <span className='img-txt'>a trip to nature</span>
        </div>
    </Parallax>
);

export default ImageOne