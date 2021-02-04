import { Component } from 'react'
import PropTypes from 'prop-types';
import './InputTagsManager.css'
import minus from './icons/minus.svg';

class Tag extends Component {



    render () {
        return (
            <div className='tag-pill'>
                <div className='text-side'>
                    { this.props.tag }
                </div>
                <div className='button-side' onClick={ () => this.props.removeTag(this.props.tag)}>
                    X
                </div>
            </div>
        );
    }
    

}

Tag.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired
}

export default Tag;