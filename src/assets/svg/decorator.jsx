
export function DarkModeDecorator () {
    return (
        <div className="decorator">
            <svg width="509" height="665" viewBox="0 0 509 665" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_df_23_158)">
                    <path d="M456.859 166.563C456.859 310.157 256.453 612.063 112.859 612.063C-30.7352 612.063 162.859 461.657 162.859 318.063C162.859 174.469 -40.2352 55.0628 103.359 55.0628C246.953 55.0628 456.859 22.9687 456.859 166.563Z" fill="#4F3382"/>
                </g>
                <defs>
                <filter id="filter0_df_23_158" x="0" y="0" width="508.859" height="664.063" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="24.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.2 0 0 0 0 0.509804 0 0 0 0.26 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_158"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_158" result="shape"/>
                    <feGaussianBlur stdDeviation="26" result="effect2_foregroundBlur_23_158"/>
                </filter>
                </defs>
            </svg>
        </div>
    )
}

export function LightModeDecorator () {
    return (
        <div className="decorator">
            <svg width="509" height="665" viewBox="0 0 509 665" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_df_11_141)">
                <path d="M456.859 166.563C456.859 310.157 256.453 612.063 112.859 612.063C-30.7352 612.063 162.859 461.657 162.859 318.063C162.859 174.469 -40.2352 55.0628 103.359 55.0628C246.953 55.0628 456.859 22.9687 456.859 166.563Z" fill="#7B7484" fill-opacity="0.6" shape-rendering="crispEdges"/>
                </g>
                <defs>
                <filter id="filter0_df_11_141" x="0" y="0" width="508.859" height="664.063" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="24.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.2 0 0 0 0 0.509804 0 0 0 0.26 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_141"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_141" result="shape"/>
                    <feGaussianBlur stdDeviation="26" result="effect2_foregroundBlur_11_141"/>
                </filter>
                </defs>
            </svg>
        </div>
    )
}
