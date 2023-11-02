import{motion} from 'framer-motion';

import {Button} from './Button.jsx';

export function Socials () {


    const motionInitial = {
        opacity: 0,
        y: -20,
    }
    const motionAnimate = {
        opacity: 1,
        y: 0,
    }

    return (
        <motion.div className="socials">
            <Button target="_blank"   href="https://www.linkedin.com/in/youssouf-diaby/" 
                motionInitial={motionInitial}
                motionAnimate={{...motionAnimate,
                    transition: {
                        delay: 0.30,
                    }
                }}
            
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.886 2.026 4.421 2.026ZM2.254 21.098H6.532V8.229H2.254V21.098Z" fill="#FBEAFF"/>
                </svg>
            </Button>
            <Button target="_blank"   href="https://web.facebook.com/profile.php?id=100094068235918"
            motionInitial={motionInitial}
            motionAnimate={{...motionAnimate,
                transition: {
                    delay: 0.35,
                }
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.19776 21.5H13.1978V13.49H16.8018L17.1978 9.51H13.1978V7.5C13.1978 7.23478 13.3031 6.98043 13.4907 6.79289C13.6782 6.60536 13.9325 6.5 14.1978 6.5H17.1978V2.5H14.1978C12.8717 2.5 11.5999 3.02678 10.6622 3.96447C9.72454 4.90215 9.19776 6.17392 9.19776 7.5V9.51H7.19776L6.80176 13.49H9.19776V21.5Z" fill="#FBEAFF"/>
                </svg>
            </Button>
            <Button target="_blank"  href="https://github.com/diabycode"
            motionInitial={motionInitial}
            motionAnimate={{...motionAnimate,
                transition: {
                    delay: 0.40,
                }
            }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_11_158)">
                    <path d="M11 0C4.9225 0 0 4.9225 0 11C0 15.8675 3.14875 19.9788 7.52125 21.4363C8.07125 21.5325 8.2775 21.2025 8.2775 20.9137C8.2775 20.6525 8.26375 19.7863 8.26375 18.865C5.5 19.3738 4.785 18.1912 4.565 17.5725C4.44125 17.2563 3.905 16.28 3.4375 16.0187C3.0525 15.8125 2.5025 15.3038 3.42375 15.29C4.29 15.2762 4.90875 16.0875 5.115 16.4175C6.105 18.0812 7.68625 17.6138 8.31875 17.325C8.415 16.61 8.70375 16.1287 9.02 15.8537C6.5725 15.5787 4.015 14.63 4.015 10.4225C4.015 9.22625 4.44125 8.23625 5.1425 7.46625C5.0325 7.19125 4.6475 6.06375 5.2525 4.55125C5.2525 4.55125 6.17375 4.2625 8.2775 5.67875C9.1575 5.43125 10.0925 5.3075 11.0275 5.3075C11.9625 5.3075 12.8975 5.43125 13.7775 5.67875C15.8813 4.24875 16.8025 4.55125 16.8025 4.55125C17.4075 6.06375 17.0225 7.19125 16.9125 7.46625C17.6138 8.23625 18.04 9.2125 18.04 10.4225C18.04 14.6438 15.4688 15.5787 13.0213 15.8537C13.42 16.1975 13.7638 16.8575 13.7638 17.8888C13.7638 19.36 13.75 20.5425 13.75 20.9137C13.75 21.2025 13.9563 21.5462 14.5063 21.4363C16.6901 20.6992 18.5877 19.2958 19.932 17.4237C21.2764 15.5515 21.9996 13.3048 22 11C22 4.9225 17.0775 0 11 0Z" fill="#FBEAFF"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_11_158">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </Button>
        </motion.div>
    )
}