export function Section ({children, className, ...props}) {

    return (
        <section id={props.id} className={`section-padding ${className}`}>
            {children}
        </section>
    )

} 