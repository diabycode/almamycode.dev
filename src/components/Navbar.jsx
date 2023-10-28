
export function Navbar({className, children}) {

    const links = [
        <a href="#"> Skills </a>,
        <a href="#"> Projects </a>,
        <a href="#"> Blog </a>,
    ]

    return (
        <nav className={className}>
            {children}
            <ul>
                {links.map( (link, index) =>  <li key={index}> {link} </li> )}
            </ul>
        </nav>
    );
}




