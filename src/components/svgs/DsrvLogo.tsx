import * as React from 'react';

type DsrvLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
};

function DsrvLogo(props: DsrvLogoProps) {
    const { width, height, fill } = props;
    return (
        <svg
            width={width || 1056}
            height={height || 301}
            viewBox="0 0 1056 301"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_615:24)" fill={fill || 'none'}>
                <path d="M1018.68 268.92h-.29a10.072 10.072 0 01-6.92-3.412 10.082 10.082 0 01-2.49-7.308v-.24a9.965 9.965 0 01.64-3.859 9.929 9.929 0 012.06-3.321 10.13 10.13 0 013.19-2.272 9.97 9.97 0 013.81-.878 9.434 9.434 0 018.73 6.3h9.66c-.77-3.953-2.93-7.5-6.09-10a18.38 18.38 0 00-12.59-4.44 18.644 18.644 0 00-18.58 18.18 18.45 18.45 0 001.3 7.52 18.47 18.47 0 004.25 6.34 18.755 18.755 0 0013.2 5.43h.42a18.606 18.606 0 0018.09-14.19h-9.66a9.439 9.439 0 01-8.73 6.15z" />
                <path d="M1052.88 243.71a37.383 37.383 0 00-8-11.91 37.192 37.192 0 00-11.91-8 36.8 36.8 0 00-14.57-2.94c-5.01-.014-9.97.986-14.58 2.94a37.427 37.427 0 00-11.91 8 37.427 37.427 0 00-8 11.91 37.486 37.486 0 00-3 14.59 37.424 37.424 0 003 14.57 37.427 37.427 0 008 11.91 37.615 37.615 0 0011.91 8c4.61 1.97 9.57 2.99 14.58 3h.07a37.194 37.194 0 0014.5-3 37.192 37.192 0 0011.91-8 37.383 37.383 0 008-11.91 37.207 37.207 0 002.94-14.57 37.3 37.3 0 00-2.94-14.59zm-7.49 26a29.53 29.53 0 01-6.28 9.31 29.18 29.18 0 01-9.33 6.29 29.007 29.007 0 01-11.41 2.3c-3.92.016-7.81-.766-11.42-2.3a29.28 29.28 0 01-9.32-6.29 29.325 29.325 0 01-6.29-9.31 29.413 29.413 0 01-2.3-11.41c0-3.925.782-7.811 2.3-11.43a29.21 29.21 0 016.29-9.32 29.206 29.206 0 0120.69-8.58h.06c3.92-.006 7.8.776 11.41 2.3a29.295 29.295 0 019.33 6.28 29.618 29.618 0 016.28 9.32 29.326 29.326 0 012.3 11.43c0 3.916-.78 7.793-2.31 11.4v.01zM183.2 23.55C162.89 12.22 134.37 5.97 98.43 5.97H82.29v64.84h25.13c42.58 0 68.75 28.52 68.75 80.08 0 52.73-26.56 79.3-69.14 79.3H82.29v64.84h21.22c90.24 0 146.49-49.22 146.49-144.53 0-58.99-25.78-103.52-66.8-126.95zM0 295.03h73.88v-64.84h-.05V70.81h.05V5.97H0v289.06zM402.73 123.55l-3.17-1.38-17.05 58.46c14.9 7.42 26.47 16.61 26.47 30.46a27.583 27.583 0 01-8.08 19.649 27.588 27.588 0 01-19.65 8.081c-18.36 0-30.08-15.62-30.47-39.45h-73.44v6.26c0 62.11 41.41 94.92 104.3 94.92 62.5 0 100.78-32.81 100.78-88.67 0-37.94-16.02-60.99-79.69-88.33z" />
                <path d="M350.78 167.3c7.82 3.15 16.15 6.26 24 9.7l17-58.26c-24.3-10.93-36.32-18.79-36.32-33.87 0-12.89 11.71-22.65 25.39-22.65 14.45 0 23 7.42 26.17 28.12h73.05c-.39-38.67-15.24-61.72-46.1-77.73A109.931 109.931 0 00382.8.5c-53.12 0-100.78 35.94-100.78 85.16.01 37.5 21.49 62.5 68.76 81.64zM662.89 109.87c0 21.1-10.4 34-28.28 39l36.26 45.57c39.09-11.05 62.73-46.43 62.73-88.91 0-41-21.88-75-53.13-89.07-15.23-6.64-38.28-10.54-68.36-10.54h-16.83v64.84h21.13c27.73.05 46.48 14.11 46.48 39.11z" />
                <path d="M701.36 246.34l-14.94-18.78-24.7-31h.06l-36.49-45.85a82.717 82.717 0 01-9.66.55h-27.35v-.2h-1.42V5.95h-73.88v289.08h73.88v-93.4h2.2l66.8 93.36h84.38l-38.86-48.71-.02.06zM942.72 5.97l-52.65 180.37-6.46 22.36h-.07l-25.2 86.33h63.16l96.87-289.06h-75.65zM824.62 5.97h-75.78l96.49 289.06h4.24l29.26-100.24L824.62 5.97z" />
            </g>
            <defs>
                <clipPath id="clip0_615:24">
                    <path fill={fill || 'none'} transform="translate(0 .5)" d="M0 0H1055.83V300H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default DsrvLogo;