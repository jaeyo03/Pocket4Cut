type StarProps = {
  width?: string;
  height?: string;
  color?: string;
};
function StarIcon({ width, height, color }: StarProps) {
  return (
    <svg
      width={width ? width : "15"}
      height={height ? height : "15"}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6241 9.76545L12.5769 12.6715C13.0014 13.963 11.4743 15.0245 10.3467 14.2213L7.81686 12.4172C7.60881 12.2678 7.32171 12.2678 7.1095 12.4172L4.5547 14.1931C3.41877 14.9841 1.9042 13.9025 2.34525 12.6149L3.33555 9.72105C3.41877 9.48292 3.33139 9.21653 3.11918 9.0672L0.589348 7.26305C-0.5341 6.45987 0.0567504 4.72837 1.45066 4.73644L4.59215 4.75259C4.85429 4.75259 5.08314 4.59114 5.16636 4.35301L6.15665 1.45911C6.59771 0.17159 8.47429 0.183698 8.8987 1.47526L9.85155 4.38126C9.93061 4.62343 10.1595 4.78487 10.4216 4.78891L13.5631 4.80506C14.9612 4.81313 15.5312 6.54866 14.3953 7.33974L11.8405 9.11563C11.6283 9.26093 11.5409 9.52732 11.6199 9.76545H11.6241Z"
        fill={color ? color : "#5453EE"}
      />
    </svg>
  );
}

export default StarIcon;
