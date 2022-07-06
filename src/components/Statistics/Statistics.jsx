import PropTypes from 'prop-types';
import { StatisticInfo } from './Statistic.styled';



export const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;

    return (
        <>
            <StatisticInfo>Good: <span>{good}</span></StatisticInfo>
            <StatisticInfo>Neutral: <span>{neutral}</span></StatisticInfo>
            <StatisticInfo>Bad: <span>{bad}</span></StatisticInfo>
            <StatisticInfo>Total: <span>{total}</span></StatisticInfo>
            <StatisticInfo>Positive percentage: <span>{positivePercentage}</span></StatisticInfo>
        </>
    )
}


Statistics.propTypes = {
    props: PropTypes.objectOf(PropTypes.number)
}