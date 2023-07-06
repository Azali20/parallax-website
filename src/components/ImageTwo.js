import { Parallax } from 'react-parallax';
import Natur from '../img/natur.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Natur} strength={600}>
        <div className='content'>
          <span className='img-txt'>a trip to nature</span>
        </div>
    </Parallax>
);

export default ImageOne