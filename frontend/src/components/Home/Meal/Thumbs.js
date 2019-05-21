import React from 'react';

class Thumbs extends React.Component {
    render() {
        return (
            <div class="rating">
                <div class="like grow">
                    <i class="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
                </div>
                <div class="dislike grow">
                    <i class="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
                </div>
            </div>
        );
    };
}

export default Thumbs;