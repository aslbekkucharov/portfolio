import * as React from 'react'

import { IconSvgProps } from '@/types'

export const DownloadIcon: React.FC<IconSvgProps> = ({
    size,
    width,
    height,
    ...props
}) => (
    <svg fill="none" height={size || height} width={size || width} {...props}>
        <path
            clipRule="evenodd"
            d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10-5.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
)

export const LinkOutlineIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.616 16.077H7.077q-1.692 0-2.884-1.192T3 12t1.193-2.885t2.884-1.193h3.539v1H7.077q-1.27 0-2.173.904Q4 10.731 4 12t.904 2.173t2.173.904h3.539zM8.5 12.5v-1h7v1zm4.885 3.577v-1h3.538q1.27 0 2.173-.904Q20 13.269 20 12t-.904-2.173t-2.173-.904h-3.538v-1h3.538q1.692 0 2.885 1.192T21 12t-1.193 2.885t-2.884 1.193z"
            fill="currentColor"
        />
    </svg>
)

export const TelegramIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fill="none">
            <g clipPath="url(#akarIconsTelegramFill0)">
                <path
                    clipRule="evenodd"
                    d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            </g>
            <defs>
                <clipPath id="akarIconsTelegramFill0">
                    <path d="M0 0h24v24H0z" fill="#fff" />
                </clipPath>
            </defs>
        </g>
    </svg>
)

export const GithubIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A6.963 6.963 0 0 1 7.5 3.756A6.97 6.97 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
)

export const LinkedInIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"
            fill="currentColor"
        />
    </svg>
)

export const AboutIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.427 16.615v-6.042c0-.997-.444-1.669-1.541-1.669c-.906 0-1.754.614-2.159 1.228v6.483H5.704v-6.042c0-.997-.423-1.669-1.523-1.669c-.905 0-1.734.633-2.158 1.228v6.483H0V7.351h2.023v1.247C2.428 8.04 3.642 7.12 5.068 7.12c1.386 0 2.235.69 2.543 1.688c.52-.825 1.754-1.688 3.16-1.688c1.697 0 2.68.92 2.68 2.8v6.694zM24 12.163c0-2.925-1.788-5.042-4.604-5.042c-2.777 0-4.759 2.174-4.759 4.869c0 2.945 2.079 4.888 4.913 4.89c1.476 0 2.855-.482 3.807-1.368l-.932-1.328c-.68.673-1.747 1.04-2.68 1.04c-1.768 0-2.815-1.174-2.971-2.56H24zm-7.245-.943c.077-1.116.893-2.444 2.622-2.444c1.845 0 2.602 1.347 2.66 2.444z"
            fill="currentColor"
        />
    </svg>
)

export const NewsPaperIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 21q-.825 0-1.412-.587T2 19V3.6q0-.175.15-.238t.275.063l1.25 1.25l1.3-1.325q.15-.15.35-.15t.35.15L7 4.675L8.325 3.35q.15-.15.35-.15t.35.15l1.3 1.325L11.65 3.35q.15-.15.35-.15t.35.15l1.325 1.325l1.3-1.325q.15-.15.35-.15t.35.15L17 4.675l1.325-1.325q.15-.15.35-.15t.35.15l1.3 1.325l1.25-1.25q.125-.125.275-.062T22 3.6V19q0 .825-.588 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"
            fill="currentColor"
        />
    </svg>
)

export const PersonIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
            fill="currentColor"
        />
    </svg>
)

export const HomeIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
            fill="currentColor"
        />
    </svg>
)

export const SunIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
)

export const MoonIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fill="currentColor">
            <path d="M6 .278a.77.77 0 0 1 .08.858a7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316a.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </g>
    </svg>
)

export const EmptyIcon: React.FC<IconSvgProps> = ({
    size,
    height,
    width,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fill="none" fillRule="evenodd">
            <g transform="translate(24 31.67)">
                <ellipse
                    cx="67.797"
                    cy="106.89"
                    fill="#F5F5F7"
                    fillOpacity=".8"
                    rx="67.797"
                    ry="12.668"
                />
                <path
                    d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                    fill="#AEB8C2"
                />
                <path
                    d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                    fill="url(#linearGradient-1)"
                    transform="translate(13.56)"
                />
                <path
                    d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                    fill="#F5F5F7"
                />
                <path
                    d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                    fill="#DCE0E6"
                />
            </g>
            <path
                d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                fill="#DCE0E6"
            />
            <g fill="#FFF" transform="translate(149.65 15.383)">
                <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
            </g>
        </g>
    </svg>
)
