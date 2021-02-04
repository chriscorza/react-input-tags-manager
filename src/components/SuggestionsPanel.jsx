import { Component } from 'react'
import PropTypes from 'prop-types';

class SuggestionsPanel extends Component {

    filteredSuggestions = () => {
        var filtered = this.props.suggestions.filter( (suggestion) => {
            return suggestion.includes(this.props.text)
        })

        console.log('FILTERED',filtered)
        return filtered
    }

    render () {
        return (
            <div className='autocomplete-items'>
                { this.filteredSuggestions().map( (suggestion) => {
                    return (
                        <div>
                            { suggestion }
                        </div>
                    )
                })}
            </div>
        );
    }
    

}

SuggestionsPanel.propTypes = {
    suggestions: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
}

SuggestionsPanel.defaultProps = {
    suggestions: []
};

export default SuggestionsPanel;