/* eslint-disable react/prop-types */



const CircularProgressBar = ({ 
    percentage=0, radius=50, strokeWidth=10, radiusOffset=10, textSize=18, textColor="#084170", className 
}) => {
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const circleWidth = ((radius * 2) + radiusOffset).toString() + "px";
    const circleHeight = ((radius * 2) + radiusOffset).toString() + "px";
    const strokeDashoffset = (circumference - (percentage / 100) * circumference);

    return (
        <div 
            style={{ width: circleWidth, height: circleHeight }} 
            className={`relative flexCenter rounded-full ${className}`}>
            <svg
                height={radius * 2}
                width={radius * 2}
                style={{ transform: "rotate(-90deg)" }}
            >
                {/* Background Circle */}
                <circle
                    stroke="#e6e6e6" /* Light gray background */
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                {/* Progress Circle */}
                <circle
                    stroke="#4CAF50" /* Green color for progress */
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference + " " + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            {/* Percentage Text */}
            <div 
                style={{ fontSize: textSize, color: textColor }} 
                className="absolute text-center font-semibold">
                {percentage}%
            </div>
        </div>
    );
};

export default CircularProgressBar;
