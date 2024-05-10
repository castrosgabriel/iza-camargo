type DonutProps = {
    color: string;
    className?: string;
    size?: number;
}

const Donut = ({ color, className, size = 120 }: DonutProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 686 686" fill="none">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M343 686C532.434 686 686 532.434 686 343C686 153.566 532.434 0 343 0C153.566 0 0 153.566 0 343C0 532.434 153.566 686 343 686ZM343 482C419.768 482 482 419.768 482 343C482 266.232 419.768 204 343 204C266.232 204 204 266.232 204 343C204 419.768 266.232 482 343 482Z"
                fill={color}
            />
        </svg>
    )
}

export default Donut;