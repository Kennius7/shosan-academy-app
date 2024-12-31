/* eslint-disable react/prop-types */


const TruncateText = ({ text, wordLimit, className }) => {
    const truncate = (str, limit) => {
        const words = str.split(' ');
        return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : str;
    };

    return <span className={className}>{truncate(text, wordLimit)}</span>;
};

export default TruncateText;
