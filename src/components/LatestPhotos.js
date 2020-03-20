import React, {Component} from 'react';
import axios from 'axios';

class LatestPhotos extends Component {

    state = {
        photos: [],
    };

    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=vg1_a62AIx0pw1oS1XyvKcquqlFHVouIfjq1Y7An_A4').then(
            res => this.setState({photos: res.data}),
        );
    }

    render() {
        console.log(this.state.photos);
        return this.state.photos.map((photo) => (
            <div key={photo.id} className="col-lg-3">
                <div className="single-photo-item">
                    <a href={photo.urls.raw} target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={photo.urls.small} alt={photo.alt_description}/>
                        </div>
                        <h5>{photo.alt_description}</h5>
                        <p className="cat-name">-by {photo.user.first_name} {photo.user.last_name}</p>
                    </a>
                </div>
            </div>
        ));
        // return (
        //     <div className="col-lg-3">
        //         <div className="single-photo-item">
        //             <a href="d-block">
        //                 <img src="https://picsum.photos/600/350" alt=""/>
        //                 <h5>Photo Name</h5>
        //                 <p className="cat-name">Category</p>
        //             </a>
        //         </div>
        //     </div>
        // );
    }
}

export default LatestPhotos;