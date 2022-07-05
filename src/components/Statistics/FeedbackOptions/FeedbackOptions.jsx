import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonsList = Object.keys(options);

    return (<List>
                {buttonsList.map((item) =>
                    <li key={item}>
                <Button type='button' value={item} onClick={onLeaveFeedback}> {item} </Button>
                </li>)}
            </List>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}