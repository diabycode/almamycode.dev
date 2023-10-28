
export const blogPosts = [
    {
        title: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie iaculis auctor a eu. Amet mattis sagittis id cras.",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus ut dolor."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie iaculis auctor a eu. Amet mattis sagittis id cras.",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus ut dolor."
    }
]

export function BlogItem ( { title, subtitle, showLInk } ) {

    return (
        <div className="blog-item">
            <p className="bp-title"> { title } </p>
            <p className="bp-subtitle"> { subtitle } </p>
            <a href={showLInk}> read </a>
        </div>
    )
}



