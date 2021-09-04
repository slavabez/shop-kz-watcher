import React from "react";

interface ILogoGraphicProps {
  color: string;
  withText?: boolean;
  size?: "sm" | "md" | "lg";
}

function LogoGraphic({ color, withText, size }: ILogoGraphicProps) {
  let sizeValue = "100px";
  switch (size) {
    case "sm":
      sizeValue = "50px";
      break;
    case "md":
      sizeValue = "100px";
      break;
    case "lg":
      sizeValue = "175px";
      break;
    default:
      break;
  }
  return (
    <svg
      width={sizeValue}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
    >
      {!!withText ? (
        <g>
          <g>
            <path
              fill={color}
              d="M107.6,860.42c-1.46,0-2.57-0.36-3.35-1.09c-0.78-0.72-1.38-1.66-1.79-2.81l-22.29-72.17
			c-0.21-0.52-0.31-1.04-0.31-1.56c0-0.94,0.34-1.74,1.01-2.42c0.68-0.67,1.48-1.01,2.42-1.01H97c1.35,0,2.39,0.37,3.12,1.09
			c0.73,0.73,1.19,1.4,1.4,2.02l14.18,48.17l15.12-47.85c0.21-0.73,0.7-1.48,1.48-2.26c0.78-0.78,1.89-1.17,3.35-1.17h8.89
			c1.45,0,2.57,0.39,3.35,1.17c0.78,0.78,1.27,1.53,1.48,2.26l15.12,47.85l14.18-48.17c0.1-0.62,0.55-1.3,1.33-2.02
			c0.78-0.73,1.79-1.09,3.04-1.09h13.72c0.94,0,1.74,0.34,2.42,1.01c0.68,0.68,1.01,1.48,1.01,2.42c0,0.52-0.05,1.04-0.16,1.56
			l-22.45,72.17c-0.31,1.14-0.86,2.08-1.64,2.81c-0.78,0.73-1.9,1.09-3.35,1.09h-12c-1.46,0-2.6-0.36-3.43-1.09
			c-0.83-0.72-1.46-1.66-1.87-2.81l-15.12-46.14l-15.43,46.14c-0.31,1.14-0.88,2.08-1.71,2.81c-0.83,0.73-1.98,1.09-3.43,1.09H107.6
			z"
            />
            <path
              fill={color}
              d="M235.74,861.98c-5.51,0-10.44-1.07-14.81-3.2c-4.36-2.13-7.85-5.01-10.44-8.65c-2.6-3.64-3.9-7.69-3.9-12.16
			c0-7.38,2.99-13.19,8.96-17.46c5.97-4.26,13.85-7.17,23.62-8.73l20.42-2.96v-2.81c0-4.05-0.94-7.17-2.81-9.35
			c-1.87-2.18-5.14-3.27-9.82-3.27c-3.43,0-6.18,0.68-8.26,2.02c-2.08,1.35-3.69,3.12-4.83,5.3c-0.83,1.35-2.03,2.03-3.58,2.03
			h-14.81c-1.14,0-2.03-0.34-2.65-1.01s-0.88-1.48-0.78-2.42c0-1.77,0.68-3.85,2.03-6.24c1.35-2.39,3.43-4.75,6.23-7.09
			c2.81-2.34,6.39-4.29,10.76-5.84c4.36-1.56,9.72-2.34,16.05-2.34c6.55,0,12.16,0.78,16.84,2.34c4.68,1.56,8.42,3.74,11.22,6.55
			c2.81,2.81,4.88,6.06,6.23,9.74c1.35,3.69,2.03,7.66,2.03,11.92v48.17c0,1.14-0.36,2.08-1.09,2.81c-0.73,0.73-1.66,1.09-2.81,1.09
			h-15.28c-1.04,0-1.92-0.36-2.65-1.09c-0.73-0.72-1.09-1.66-1.09-2.81v-5.77c-1.35,1.98-3.17,3.82-5.46,5.53
			c-2.29,1.71-5.02,3.09-8.18,4.13C243.71,861.45,240,861.98,235.74,861.98z M241.97,845.76c3.43,0,6.49-0.73,9.2-2.18
			c2.7-1.45,4.83-3.69,6.39-6.7c1.56-3.01,2.34-6.8,2.34-11.38v-2.65l-14.5,2.34c-5.61,0.93-9.72,2.34-12.31,4.21
			c-2.6,1.87-3.9,4.16-3.9,6.86c0,1.98,0.6,3.69,1.79,5.15c1.19,1.45,2.78,2.55,4.75,3.27C237.71,845.4,239.79,845.76,241.97,845.76
			z"
            />
            <path
              fill={color}
              d="M340.64,860.42c-6.44,0-11.95-1.06-16.52-3.19c-4.57-2.13-8.03-5.43-10.37-9.9
			c-2.34-4.47-3.51-10.08-3.51-16.84v-32.73h-12.16c-1.14,0-2.08-0.36-2.81-1.09c-0.73-0.73-1.09-1.66-1.09-2.81v-10.6
			c0-1.14,0.36-2.08,1.09-2.81c0.72-0.73,1.66-1.09,2.81-1.09h12.16v-25.72c0-1.14,0.39-2.08,1.17-2.81
			c0.78-0.73,1.69-1.09,2.73-1.09h15.28c1.14,0,2.08,0.37,2.81,1.09c0.73,0.73,1.09,1.66,1.09,2.81v25.72h19.48
			c1.04,0,1.92,0.37,2.65,1.09c0.73,0.73,1.09,1.66,1.09,2.81v10.6c0,1.15-0.36,2.08-1.09,2.81c-0.73,0.73-1.61,1.09-2.65,1.09
			h-19.48v30.86c0,3.95,0.7,7.04,2.1,9.28c1.4,2.24,3.87,3.35,7.4,3.35h11.38c1.04,0,1.92,0.37,2.65,1.09
			c0.73,0.73,1.09,1.61,1.09,2.65v11.54c0,1.14-0.36,2.08-1.09,2.81c-0.73,0.73-1.61,1.09-2.65,1.09H340.64z"
            />
            <path
              fill={color}
              d="M407.51,861.98c-7.59,0-14.26-1.4-20.03-4.21c-5.77-2.81-10.31-6.88-13.64-12.24
			c-3.33-5.35-5.14-11.77-5.46-19.25c-0.1-1.66-0.16-3.77-0.16-6.32c0-2.54,0.05-4.65,0.16-6.31c0.31-7.58,2.1-14.05,5.38-19.41
			c3.27-5.35,7.82-9.43,13.64-12.24c5.82-2.81,12.52-4.21,20.11-4.21c6.96,0,12.88,0.96,17.77,2.88c4.88,1.93,8.89,4.34,12,7.25
			c3.12,2.91,5.43,5.95,6.94,9.12c1.5,3.17,2.31,5.95,2.42,8.34c0.1,1.04-0.23,1.95-1.01,2.73c-0.78,0.78-1.69,1.17-2.73,1.17
			h-16.68c-1.04,0-1.85-0.28-2.42-0.86c-0.57-0.57-1.12-1.38-1.64-2.42c-1.46-3.64-3.33-6.24-5.61-7.79
			c-2.29-1.56-5.14-2.34-8.57-2.34c-4.68,0-8.37,1.51-11.07,4.52c-2.7,3.01-4.16,7.69-4.36,14.03c-0.11,4.05-0.11,7.74,0,11.07
			c0.31,6.44,1.79,11.12,4.44,14.03c2.65,2.91,6.31,4.36,10.99,4.36c3.64,0,6.55-0.78,8.73-2.34c2.18-1.56,4-4.16,5.46-7.79
			c0.41-1.04,0.93-1.84,1.56-2.42c0.62-0.57,1.45-0.86,2.49-0.86h16.68c1.04,0,1.95,0.39,2.73,1.17c0.78,0.78,1.12,1.69,1.01,2.73
			c-0.11,1.77-0.6,3.85-1.48,6.23c-0.88,2.39-2.29,4.83-4.21,7.33c-1.92,2.49-4.39,4.81-7.4,6.94c-3.02,2.13-6.68,3.85-10.99,5.15
			C418.24,861.32,413.22,861.98,407.51,861.98z"
            />
            <path
              fill={color}
              d="M465.81,860.42c-1.14,0-2.08-0.36-2.81-1.09c-0.73-0.72-1.09-1.66-1.09-2.81V753.64
			c0-1.14,0.36-2.08,1.09-2.81c0.72-0.73,1.66-1.09,2.81-1.09h16.83c1.04,0,1.92,0.37,2.65,1.09c0.73,0.73,1.09,1.66,1.09,2.81
			v35.07c2.8-3.32,6.23-5.97,10.29-7.95c4.05-1.97,8.94-2.96,14.65-2.96c6.13,0,11.56,1.38,16.29,4.13c4.73,2.75,8.44,6.76,11.14,12
			c2.7,5.25,4.05,11.61,4.05,19.1v43.49c0,1.14-0.37,2.08-1.09,2.81c-0.73,0.73-1.66,1.09-2.8,1.09h-16.99
			c-1.04,0-1.93-0.36-2.65-1.09c-0.73-0.72-1.09-1.66-1.09-2.81v-42.55c0-5.51-1.35-9.79-4.05-12.86c-2.7-3.06-6.55-4.6-11.53-4.6
			c-4.89,0-8.81,1.54-11.77,4.6c-2.96,3.07-4.44,7.36-4.44,12.86v42.55c0,1.14-0.37,2.08-1.09,2.81c-0.73,0.73-1.61,1.09-2.65,1.09
			H465.81z"
            />
            <path
              fill={color}
              d="M597.68,861.98c-11.95,0-21.43-3.32-28.45-9.98c-7.01-6.65-10.73-16.31-11.14-28.99c0-0.83,0-1.95,0-3.35
			c0-1.4,0-2.52,0-3.35c0.41-8,2.23-14.89,5.46-20.65c3.22-5.77,7.74-10.18,13.56-13.25c5.82-3.06,12.63-4.6,20.42-4.6
			c8.73,0,16.03,1.79,21.9,5.38c5.87,3.59,10.29,8.47,13.25,14.65c2.96,6.19,4.44,13.28,4.44,21.28v3.59c0,1.04-0.39,1.92-1.17,2.65
			c-0.78,0.73-1.69,1.09-2.73,1.09h-50.97c0,0.1,0,0.29,0,0.54c0,0.26,0,0.5,0,0.7c0.1,3.33,0.75,6.37,1.95,9.12
			c1.19,2.75,2.91,4.96,5.14,6.62c2.24,1.67,4.91,2.49,8.03,2.49c2.6,0,4.73-0.36,6.39-1.09c1.66-0.72,3.04-1.61,4.13-2.65
			c1.09-1.04,1.89-1.92,2.42-2.65c0.94-1.04,1.69-1.69,2.26-1.95c0.57-0.26,1.48-0.39,2.73-0.39h16.21c1.04,0,1.89,0.29,2.57,0.86
			c0.68,0.57,0.96,1.38,0.86,2.42c-0.11,1.66-0.96,3.72-2.57,6.16c-1.61,2.44-3.98,4.83-7.09,7.17c-3.12,2.34-6.99,4.29-11.61,5.85
			C609.03,861.19,603.71,861.98,597.68,861.98z M582.25,812.25h30.55v-0.31c0-3.74-0.6-6.99-1.79-9.74
			c-1.2-2.75-2.94-4.91-5.22-6.47c-2.29-1.56-5.04-2.34-8.26-2.34c-3.22,0-5.98,0.78-8.26,2.34c-2.29,1.56-4.03,3.72-5.22,6.47
			c-1.2,2.75-1.79,6-1.79,9.74V812.25z"
            />
            <path
              fill={color}
              d="M656.44,860.42c-1.04,0-1.92-0.36-2.65-1.09c-0.73-0.72-1.09-1.66-1.09-2.81v-73.26
			c0-1.04,0.36-1.95,1.09-2.73c0.73-0.78,1.61-1.17,2.65-1.17h15.28c1.04,0,1.95,0.39,2.73,1.17c0.78,0.78,1.17,1.69,1.17,2.73v6.23
			c2.6-3.22,5.79-5.71,9.59-7.48c3.79-1.77,8.18-2.65,13.17-2.65h6.7c1.04,0,1.92,0.37,2.65,1.09c0.73,0.73,1.09,1.66,1.09,2.81
			v13.41c0,1.14-0.36,2.08-1.09,2.81c-0.73,0.73-1.61,1.09-2.65,1.09h-13.72c-4.57,0-8.16,1.27-10.76,3.82
			c-2.6,2.55-3.9,6.16-3.9,10.83v41.31c0,1.14-0.37,2.08-1.09,2.81c-0.73,0.73-1.66,1.09-2.81,1.09H656.44z"
            />
            <path
              fill={color}
              d="M759.17,860.42c-1.14,0-2.08-0.36-2.81-1.09c-0.73-0.72-1.09-1.66-1.09-2.81V753.64
			c0-1.14,0.36-2.08,1.09-2.81c0.73-0.73,1.66-1.09,2.81-1.09h15.28c1.04,0,1.92,0.37,2.65,1.09c0.72,0.73,1.09,1.66,1.09,2.81
			v52.69l24-24.32c0.83-0.72,1.58-1.35,2.26-1.87c0.67-0.52,1.74-0.78,3.19-0.78h17.61c1.04,0,1.87,0.34,2.49,1.01
			c0.62,0.68,0.94,1.48,0.94,2.42c0,0.42-0.11,0.88-0.31,1.4c-0.21,0.52-0.57,0.94-1.09,1.25l-30.08,30.24l33.98,38.81
			c0.94,0.83,1.4,1.66,1.4,2.49c0,0.93-0.34,1.74-1.01,2.42c-0.68,0.68-1.48,1.01-2.42,1.01h-18.08c-1.56,0-2.68-0.26-3.35-0.78
			c-0.68-0.52-1.43-1.14-2.26-1.87l-27.28-30.55v29.31c0,1.14-0.37,2.08-1.09,2.81c-0.73,0.73-1.61,1.09-2.65,1.09H759.17z"
            />
            <path
              fill={color}
              d="M843.65,860.42c-1.04,0-1.92-0.36-2.65-1.09c-0.73-0.72-1.09-1.66-1.09-2.81v-10.45
			c0-1.04,0.23-1.97,0.7-2.81c0.47-0.83,1.01-1.61,1.64-2.34l38.19-43.49h-35.39c-1.14,0-2.08-0.36-2.81-1.09
			c-0.73-0.72-1.09-1.61-1.09-2.65v-10.44c0-1.14,0.36-2.08,1.09-2.81c0.72-0.73,1.66-1.09,2.81-1.09h60.79
			c1.14,0,2.08,0.37,2.81,1.09c0.72,0.73,1.09,1.66,1.09,2.81v11.22c0,0.93-0.21,1.77-0.62,2.49c-0.42,0.73-0.94,1.46-1.56,2.18
			l-37.41,43.18h38.97c1.04,0,1.92,0.37,2.65,1.09c0.72,0.73,1.09,1.61,1.09,2.65v10.45c0,1.14-0.37,2.08-1.09,2.81
			c-0.73,0.73-1.61,1.09-2.65,1.09H843.65z"
            />
            <circle fill={color} cx="712.42" cy="849.25" r="11.17" />
          </g>
          <g>
            <path
              fill={color}
              d="M350.09,588.82l-210.75,69.2c-6.22,1.99-12.61,3.07-18.92,3.07c-9.38,0-18.67-2.24-27.22-6.55
			c-14.44-7.3-25.14-19.75-30.2-35.1c-4.98-15.43-3.73-31.78,3.48-46.22c7.3-14.35,19.75-25.06,35.18-30.12l210.75-69.28l0.08,1.33
			c1.24,19.83,4.98,39.58,11.2,58.75c6.31,19,14.94,37.09,25.72,53.77L350.09,588.82z"
            />
            <path
              fill="none"
              d="M470.07,437.81c-0.08-1.08-0.17-2.24-0.17-3.4c-0.08-2.57-0.17-5.23-0.17-7.8c0,2.66,0.08,5.23,0.25,7.8
			C469.99,435.57,469.99,436.65,470.07,437.81z"
            />
            <path
              fill="none"
              d="M495.46,525.35c-2.57-3.07-4.98-6.22-7.38-9.46c0-0.08-0.08-0.17-0.17-0.25c0,0,0,0,0.08,0
			C490.4,518.96,492.89,522.19,495.46,525.35z"
            />
            <path
              fill="none"
              d="M469.74,426.61c0,2.57,0.08,5.23,0.17,7.8h0.08C469.82,431.84,469.74,429.26,469.74,426.61z"
            />
            <path
              fill="none"
              d="M470.07,437.81c-0.08-1.08-0.17-2.24-0.17-3.4c-0.08-2.57-0.17-5.23-0.17-7.8c0,2.66,0.08,5.23,0.25,7.8
			C469.99,435.57,469.99,436.65,470.07,437.81z"
            />
            <path
              fill="none"
              d="M495.46,525.35c-2.57-3.07-4.98-6.22-7.38-9.46c0-0.08-0.08-0.17-0.17-0.25c0,0,0,0,0.08,0
			C490.4,518.96,492.89,522.19,495.46,525.35z"
            />
            <path
              fill="none"
              d="M469.74,426.61c0,2.57,0.08,5.23,0.17,7.8h0.08C469.82,431.84,469.74,429.26,469.74,426.61z"
            />
            <path
              fill="none"
              d="M488,515.64c-0.08,0-0.08,0-0.08,0c0.08,0.08,0.17,0.17,0.17,0.25C488.08,515.8,488,515.72,488,515.64z
			 M469.99,434.41c-0.17-2.57-0.25-5.14-0.25-7.8c0,2.57,0.08,5.23,0.17,7.8c0,1.16,0.08,2.32,0.17,3.4
			C469.99,436.65,469.99,435.57,469.99,434.41z"
            />
            <path
              fill="none"
              d="M488,515.64c-0.08,0-0.08,0-0.08,0c0.08,0.08,0.17,0.17,0.17,0.25c2.41,3.24,4.81,6.39,7.38,9.46
			C492.89,522.19,490.4,518.96,488,515.64z"
            />
            <path
              fill="none"
              d="M896.56,359.81c-2.07-23.32-7.88-45.97-17.18-67.62c-25.89-35.35-60.57-61.82-100.07-77.25
			c-3.9-1.49-7.8-2.9-11.7-4.15c-2.07-0.66-4.15-1.33-6.14-1.91c-6.97-2.07-14.02-3.82-21.24-5.14c-2.74-0.58-5.48-1.08-8.3-1.49
			c-9.21-1.49-18.59-2.32-28.13-2.66c-60.65-1.99-118.24,19.83-162.46,61.32c-43.73,40.91-69.03,96.33-71.44,156.07
			c0,0.66-0.08,1.41-0.08,2.07c-0.08,2.32-0.08,4.48-0.08,6.72v0.83c0,2.66,0.08,5.23,0.25,7.8c0,1.16,0,2.24,0.08,3.4
			c0,1.16,0.08,2.32,0.17,3.49c0.08,2.32,0.33,4.56,0.58,6.89c1,12.03,3.07,23.9,6.22,35.51c0.91,3.73,1.99,7.38,3.15,11.04
			c1.16,3.73,2.41,7.3,3.82,10.95c1.24,3.32,2.57,6.64,3.98,9.96c2.41,3.32,4.9,6.56,7.47,9.71c1.83,2.24,3.65,4.4,5.64,6.55
			c1.99,2.32,4.07,4.56,6.14,6.72h0.08c2.07,2.24,4.23,4.48,6.47,6.55v0.08c12.78,12.28,26.88,22.98,41.98,31.78
			c3.07,1.83,6.14,3.57,9.29,5.23c1.99,1.08,4.07,2.16,6.14,3.15c3.65,1.74,7.3,3.4,11.04,4.98c14.02,5.97,28.63,10.45,43.73,13.44
			c3.48,0.66,6.97,1.33,10.54,1.83c8.88,1.41,17.92,2.16,27.05,2.49c60.57,1.99,118.24-19.83,162.46-61.23
			c44.14-41.49,69.62-97.66,71.52-158.23c0.08-2.49,0.08-4.98,0.08-7.47C897.64,374,897.31,366.87,896.56,359.81z M761.23,387.78
			h-42.32v154.66c0,14.44-11.7,26.14-26.14,26.14s-26.14-11.7-26.14-26.14V387.78h-42.4c-14.35,0-26.05-11.7-26.05-26.14
			c0-14.35,11.7-26.05,26.05-26.05h136.99c14.44,0,26.14,11.7,26.14,26.05C787.36,376.08,775.67,387.78,761.23,387.78z
			 M761.23,313.68H624.24c-14.35,0-26.05-11.7-26.05-26.14c0-7.22,2.9-13.77,7.63-18.5c4.73-4.73,11.2-7.63,18.42-7.63h136.99
			c14.44,0,26.14,11.7,26.14,26.14C787.36,301.98,775.67,313.68,761.23,313.68z"
            />
            <path
              fill="none"
              d="M470.07,437.81c-0.08-1.08-0.17-2.24-0.17-3.4c-0.08-2.57-0.17-5.23-0.17-7.8c0,2.66,0.08,5.23,0.25,7.8
			C469.99,435.57,469.99,436.65,470.07,437.81z"
            />
            <path
              fill="none"
              d="M495.46,525.35c-2.57-3.07-4.98-6.22-7.38-9.46c0-0.08-0.08-0.17-0.17-0.25c0,0,0,0,0.08,0
			C490.4,518.96,492.89,522.19,495.46,525.35z"
            />
            <path
              fill="none"
              d="M787.36,361.64c0,14.44-11.7,26.14-26.14,26.14h-42.32v154.66c0,14.44-11.7,26.14-26.14,26.14
			s-26.14-11.7-26.14-26.14V387.78h-42.4c-14.35,0-26.05-11.7-26.05-26.14c0-14.35,11.7-26.05,26.05-26.05h136.99
			C775.67,335.59,787.36,347.28,787.36,361.64z"
            />
            <path
              fill={color}
              d="M893.74,283.81c-37.42-85.55-121.72-142.71-215.15-145.7c-2.57-0.08-5.23-0.08-7.8-0.08
			c-130.44,0-239.05,104.05-243.28,235.65c-0.58,19,0.91,37.67,4.48,55.76l-93.93,30.78l0.42,6.47
			c1.24,20.58,5.14,41.07,11.62,61.07c6.55,19.66,15.52,38.5,26.72,55.84l3.4,5.48l108.7-35.68
			c42.4,69.03,117.66,113.59,199.8,116.25c2.66,0.08,5.31,0.17,7.88,0.17c130.68,0,239.05-104.13,243.28-235.65
			C941.61,379.64,925.68,327.7,893.74,283.81z M826.03,546.92c-44.22,41.4-101.89,63.23-162.46,61.23
			c-9.13-0.33-18.17-1.08-27.05-2.49c-3.57-0.5-7.05-1.16-10.54-1.83c-15.1-2.99-29.7-7.47-43.73-13.44
			c-3.73-1.58-7.38-3.24-11.04-4.98c-2.07-1-4.15-2.07-6.14-3.15c-3.15-1.66-6.22-3.4-9.29-5.23c-15.1-8.8-29.21-19.5-41.98-31.78
			v-0.08c-2.24-2.07-4.4-4.31-6.47-6.55h-0.08c-2.07-2.16-4.15-4.4-6.14-6.72c-1.99-2.16-3.82-4.31-5.64-6.55
			c-2.57-3.07-4.98-6.22-7.38-9.46c0-0.08-0.08-0.17-0.17-0.25c0,0,0,0,0.08,0c-1.41-3.32-2.74-6.64-3.98-9.96
			c-1.41-3.65-2.74-7.3-3.82-10.95c-1.24-3.65-2.24-7.38-3.15-11.04c-3.15-11.62-5.23-23.48-6.22-35.51
			c-0.25-2.32-0.5-4.56-0.58-6.89c-0.08-1.16-0.17-2.32-0.17-3.49c-0.08-1.08-0.17-2.24-0.17-3.4c-0.08-2.57-0.17-5.23-0.17-7.8
			v-0.83c0-2.24,0-4.4,0.08-6.72c0-0.66,0.08-1.41,0.08-2.07c2.41-59.74,27.71-115.17,71.44-156.07
			c44.23-41.49,101.81-63.31,162.46-61.32c9.54,0.33,18.92,1.16,28.13,2.66c2.82,0.41,5.56,0.91,8.3,1.49
			c7.22,1.33,14.27,3.07,21.24,5.14c1.99,0.58,4.07,1.24,6.14,1.91c3.9,1.24,7.8,2.66,11.7,4.15c39.5,15.43,74.18,41.9,100.07,77.25
			c9.29,21.66,15.1,44.31,17.18,67.62c0.75,7.05,1.08,14.19,1.08,21.41c0,2.49,0,4.98-0.08,7.47
			C895.65,449.26,870.17,505.43,826.03,546.92z"
            />
            <path
              fill={color}
              d="M787.36,361.64c0,14.44-11.7,26.14-26.14,26.14h-42.32v154.66c0,14.44-11.7,26.14-26.14,26.14
			s-26.14-11.7-26.14-26.14V387.78h-42.4c-14.35,0-26.05-11.7-26.05-26.14c0-14.35,11.7-26.05,26.05-26.05h136.99
			C775.67,335.59,787.36,347.28,787.36,361.64z"
            />
            <path
              fill={color}
              d="M787.36,287.54c0,14.44-11.7,26.14-26.14,26.14H624.24c-14.35,0-26.05-11.7-26.05-26.14
			c0-7.22,2.9-13.77,7.63-18.5c4.73-4.73,11.2-7.63,18.42-7.63h136.99C775.67,261.41,787.36,273.11,787.36,287.54z"
            />
          </g>
        </g>
      ) : (
        <g>
          <path
            fill={color}
            d="M344.02,692.4l-219.29,72.01c-6.48,2.07-13.12,3.19-19.69,3.19c-9.76,0-19.43-2.33-28.32-6.82
		c-15.02-7.6-26.16-20.55-31.43-36.52c-5.18-16.06-3.89-33.07,3.63-48.09c7.6-14.94,20.55-26.07,36.61-31.34l219.3-72.09l0.09,1.38
		c1.29,20.63,5.18,41.18,11.66,61.13c6.56,19.77,15.54,38.59,26.76,55.95L344.02,692.4z"
          />
          <path
            fill="none"
            d="M468.86,535.27c-0.09-1.12-0.17-2.33-0.17-3.54c-0.09-2.68-0.17-5.44-0.17-8.12c0,2.76,0.09,5.44,0.26,8.12
		C468.77,532.94,468.77,534.06,468.86,535.27z"
          />
          <path
            fill="none"
            d="M495.28,626.35c-2.68-3.19-5.18-6.48-7.68-9.84c0-0.09-0.09-0.17-0.17-0.26c0,0,0,0,0.09,0
		C490.01,619.71,492.6,623.07,495.28,626.35z"
          />
          <path
            fill="none"
            d="M468.51,523.61c0,2.68,0.09,5.44,0.17,8.12h0.09C468.6,529.05,468.51,526.38,468.51,523.61z"
          />
          <path
            fill="none"
            d="M468.86,535.27c-0.09-1.12-0.17-2.33-0.17-3.54c-0.09-2.68-0.17-5.44-0.17-8.12c0,2.76,0.09,5.44,0.26,8.12
		C468.77,532.94,468.77,534.06,468.86,535.27z"
          />
          <path
            fill="none"
            d="M495.28,626.35c-2.68-3.19-5.18-6.48-7.68-9.84c0-0.09-0.09-0.17-0.17-0.26c0,0,0,0,0.09,0
		C490.01,619.71,492.6,623.07,495.28,626.35z"
          />
          <path
            fill="none"
            d="M468.51,523.61c0,2.68,0.09,5.44,0.17,8.12h0.09C468.6,529.05,468.51,526.38,468.51,523.61z"
          />
          <path
            fill="none"
            d="M487.51,616.25c-0.09,0-0.09,0-0.09,0c0.09,0.09,0.17,0.17,0.17,0.26
		C487.6,616.42,487.51,616.34,487.51,616.25z M468.77,531.73c-0.17-2.68-0.26-5.35-0.26-8.12c0,2.68,0.09,5.44,0.17,8.12
		c0,1.21,0.09,2.42,0.17,3.54C468.77,534.06,468.77,532.94,468.77,531.73z"
          />
          <path
            fill="none"
            d="M487.51,616.25c-0.09,0-0.09,0-0.09,0c0.09,0.09,0.17,0.17,0.17,0.26c2.5,3.37,5.01,6.65,7.68,9.84
		C492.6,623.07,490.01,619.71,487.51,616.25z"
          />
          <path
            fill="none"
            d="M912.63,454.11c-2.16-24.26-8.2-47.83-17.87-70.36c-26.94-36.78-63.03-64.32-104.12-80.38
		c-4.06-1.55-8.12-3.02-12.17-4.32c-2.16-0.69-4.32-1.38-6.39-1.99c-7.25-2.16-14.59-3.97-22.1-5.35c-2.85-0.6-5.7-1.12-8.63-1.55
		c-9.58-1.55-19.34-2.42-29.27-2.76c-63.11-2.07-123.03,20.63-169.05,63.8c-45.5,42.56-71.83,100.24-74.34,162.4
		c0,0.69-0.09,1.47-0.09,2.16c-0.09,2.42-0.09,4.66-0.09,6.99v0.86c0,2.76,0.09,5.44,0.26,8.12c0,1.21,0,2.33,0.09,3.54
		c0,1.21,0.09,2.42,0.17,3.63c0.09,2.42,0.35,4.75,0.6,7.17c1.04,12.52,3.19,24.86,6.48,36.95c0.95,3.89,2.07,7.68,3.28,11.48
		c1.21,3.89,2.5,7.6,3.97,11.4c1.29,3.45,2.68,6.91,4.14,10.36c2.5,3.45,5.09,6.82,7.77,10.1c1.9,2.33,3.8,4.58,5.87,6.82
		c2.07,2.42,4.23,4.75,6.39,6.99h0.09c2.16,2.33,4.4,4.66,6.73,6.82v0.09c13.3,12.78,27.97,23.92,43.69,33.07
		c3.19,1.9,6.39,3.71,9.67,5.44c2.07,1.12,4.23,2.24,6.39,3.28c3.8,1.81,7.6,3.54,11.48,5.18c14.59,6.22,29.79,10.88,45.5,13.99
		c3.63,0.69,7.25,1.38,10.96,1.9c9.24,1.47,18.65,2.24,28.15,2.59c63.03,2.07,123.03-20.63,169.05-63.72
		c45.93-43.17,72.44-101.62,74.42-164.64c0.09-2.59,0.09-5.18,0.09-7.77C913.75,468.88,913.41,461.45,912.63,454.11z M771.82,483.21
		h-44.03v160.93c0,15.02-12.17,27.2-27.2,27.2c-15.02,0-27.2-12.17-27.2-27.2V483.21h-44.12c-14.94,0-27.11-12.17-27.11-27.2
		c0-14.94,12.17-27.11,27.11-27.11h142.54c15.02,0,27.2,12.17,27.2,27.11C799.01,471.03,786.84,483.21,771.82,483.21z
		 M771.82,406.11H629.27c-14.94,0-27.11-12.17-27.11-27.2c0-7.51,3.02-14.33,7.94-19.25c4.92-4.92,11.66-7.94,19.17-7.94h142.54
		c15.02,0,27.2,12.17,27.2,27.2S786.84,406.11,771.82,406.11z"
          />
          <path
            fill="none"
            d="M468.86,535.27c-0.09-1.12-0.17-2.33-0.17-3.54c-0.09-2.68-0.17-5.44-0.17-8.12c0,2.76,0.09,5.44,0.26,8.12
		C468.77,532.94,468.77,534.06,468.86,535.27z"
          />
          <path
            fill="none"
            d="M495.28,626.35c-2.68-3.19-5.18-6.48-7.68-9.84c0-0.09-0.09-0.17-0.17-0.26c0,0,0,0,0.09,0
		C490.01,619.71,492.6,623.07,495.28,626.35z"
          />
          <path
            fill="none"
            d="M799.01,456.01c0,15.02-12.17,27.2-27.2,27.2h-44.03v160.93c0,15.02-12.17,27.2-27.2,27.2
		c-15.02,0-27.2-12.17-27.2-27.2V483.21h-44.12c-14.94,0-27.11-12.17-27.11-27.2c0-14.94,12.17-27.11,27.11-27.11h142.54
		C786.84,428.9,799.01,441.08,799.01,456.01z"
          />
          <path
            fill={color}
            d="M909.7,375.03c-38.94-89.01-126.66-148.5-223.87-151.61c-2.68-0.09-5.44-0.09-8.12-0.09
		c-135.72,0-248.74,108.27-253.14,245.2c-0.6,19.77,0.95,39.2,4.66,58.02l-97.73,32.03l0.43,6.73c1.29,21.41,5.35,42.74,12.09,63.54
		c6.82,20.46,16.14,40.06,27.8,58.1l3.54,5.7l113.1-37.12c44.12,71.83,122.43,118.19,207.9,120.96c2.76,0.09,5.53,0.17,8.2,0.17
		c135.98,0,248.74-108.35,253.14-245.2C959.51,474.75,942.93,420.7,909.7,375.03z M839.24,648.8
		c-46.02,43.08-106.02,65.79-169.05,63.72c-9.5-0.35-18.91-1.12-28.15-2.59c-3.71-0.52-7.34-1.21-10.96-1.9
		c-15.71-3.11-30.91-7.77-45.5-13.99c-3.88-1.64-7.68-3.37-11.48-5.18c-2.16-1.04-4.32-2.16-6.39-3.28
		c-3.28-1.73-6.48-3.54-9.67-5.44c-15.71-9.15-30.39-20.29-43.69-33.07v-0.09c-2.33-2.16-4.58-4.49-6.73-6.82h-0.09
		c-2.16-2.24-4.32-4.58-6.39-6.99c-2.07-2.24-3.97-4.49-5.87-6.82c-2.68-3.19-5.18-6.48-7.68-9.84c0-0.09-0.09-0.17-0.17-0.26
		c0,0,0,0,0.09,0c-1.47-3.45-2.85-6.91-4.14-10.36c-1.47-3.8-2.85-7.6-3.97-11.4c-1.29-3.8-2.33-7.68-3.28-11.48
		c-3.28-12.09-5.44-24.43-6.48-36.95c-0.26-2.42-0.52-4.75-0.6-7.17c-0.09-1.21-0.17-2.42-0.17-3.63c-0.09-1.12-0.17-2.33-0.17-3.54
		c-0.09-2.68-0.17-5.44-0.17-8.12v-0.86c0-2.33,0-4.58,0.09-6.99c0-0.69,0.09-1.47,0.09-2.16c2.5-62.16,28.84-119.84,74.34-162.4
		c46.02-43.17,105.94-65.87,169.05-63.8c9.93,0.35,19.68,1.21,29.27,2.76c2.94,0.43,5.78,0.95,8.63,1.55
		c7.51,1.38,14.85,3.19,22.1,5.35c2.07,0.6,4.23,1.3,6.39,1.99c4.06,1.3,8.12,2.76,12.17,4.32c41.1,16.06,77.18,43.6,104.12,80.38
		c9.67,22.53,15.71,46.1,17.87,70.36c0.78,7.34,1.12,14.76,1.12,22.28c0,2.59,0,5.18-0.09,7.77
		C911.68,547.18,885.18,605.63,839.24,648.8z"
          />
          <path
            fill={color}
            d="M799.01,456.01c0,15.02-12.17,27.2-27.2,27.2h-44.03v160.93c0,15.02-12.17,27.2-27.2,27.2
		c-15.02,0-27.2-12.17-27.2-27.2V483.21h-44.12c-14.94,0-27.11-12.17-27.11-27.2c0-14.94,12.17-27.11,27.11-27.11h142.54
		C786.84,428.9,799.01,441.08,799.01,456.01z"
          />
          <path
            fill={color}
            d="M799.01,378.91c0,15.02-12.17,27.2-27.2,27.2H629.27c-14.94,0-27.11-12.17-27.11-27.2
		c0-7.51,3.02-14.33,7.94-19.25c4.92-4.92,11.66-7.94,19.17-7.94h142.54C786.84,351.72,799.01,363.89,799.01,378.91z"
          />
        </g>
      )}
    </svg>
  );
}

export default LogoGraphic;