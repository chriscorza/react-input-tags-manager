import { Component } from 'react'
import PropTypes from 'prop-types';
import Tag from './Tag'
import SuggestionsPanel from './SuggestionsPanel'
import './InputTagsManager.css'

class InputTagsManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            onFocus: false,
            tagText: ''
        }
    }

    handleTagTextChange = ( { target : { value ,name }} ) => {
        
        if( !this.props.submitKeys.includes(value)){
            this.setState({
                tagText: value
            })
        }
    }

    handleKeyPress = ( event ) => {
        console.log(event.key)
        if( this.props.submitKeys.includes(event.key) && this.state.tagText.trim() != '' ){
            console.log('SUBMIT')
            this.submitNewTag();
        }
    }

    submitNewTag = () => {
        this.props.submitNewTag(this.state.tagText);
        this.setState({tagText:''})
    }


    render () {
        return (
            <div className={this.state.onFocus ? this.props.containerClass +' '+ this.props.containerFocusedClass : this.props.containerClass }>
                <div className={this.props.tagContainerClass}>
                    { this.props.tags.map( (tag) => {
                        return <this.props.tagRenderer tag={ tag } removeTag={ this.props.removeTag } />
                    } ) }
                    
                </div>
                <input className={ this.props.inputClass } type="text"
                    value = { this.state.tagText }
                    onChange={this.handleTagTextChange}
                    onKeyPress = {this.handleKeyPress} 
                    onFocus = { () => {
                        this.setState({onFocus:true})
                    }}
                    onBlur = { () => {
                        this.setState({onFocus:false})
                    }}
                />
                <SuggestionsPanel text={this.state.tagText} suggestions={this.props.tags} />
            </div>
        );
    }
    

}

InputTagsManager.propTypes = {
    tags: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    containerClass: PropTypes.string,
    containerFocusedClass: PropTypes.string,
    inputClass: PropTypes.string,
    tagContainerClass: PropTypes.string,
    tagClass: PropTypes.string,
    submitKeys: PropTypes.array,
    submitNewTag: PropTypes.func.isRequired,
    tagRenderer: PropTypes.element,
    removeTag: PropTypes.func.isRequired
}

InputTagsManager.defaultProps = {
    tagRenderer: Tag,
    containerClass: 'input-tags-container',
    containerFocusedClass: 'focus',
    inputClass: 'input-tag',
    tagContainerClass: 'tag-container',
    tagClass: 'tag',
    submitKeys: ['Enter',',']
};

export default InputTagsManager;