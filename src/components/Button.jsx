
export function Button ({text, href, onClick, children}) {
    return (
        <a href={href} className="btn-link"> 
            { text }
            {children} 
        </a>
    )
}

