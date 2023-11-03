import { AnimeOnScroll } from "./animeOnScroll"

export const blogPosts = [
    {
        title: "Lorem ipx sum dolor sit amet consectetur. Pellentesque molestie iaculis auctor a eu. Amet mattis sagittis id cras.",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus ut dolor."
    },
    {
        title: "Lorem x ipsum dolor sit amet consectetur. Pellentesque molestie iaculis auctor a eu. Amet mattis sagittis id cras.",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus ut dolor."
    }
]

export function BlogPosts () {

    return (
        <>
            <AnimeOnScroll>
                <h3 className='extra'> Recently on my blog </h3>

            </AnimeOnScroll>
            <ul>
                { blogPosts.map( post => {
                    return <AnimeOnScroll>
                        <li key={post.title}> <BlogItem title={post.title} content={post.content} />  </li>
                    </AnimeOnScroll>
                    
                })}
            </ul>
        </>
    )
}

export function BlogItem ( { title, content, showLInk } ) {

    return (
        <div className="blog-item">
            <p className="bp-title"> { title } </p>
            <p className="bp-content"> { content } </p>
            <a href={showLInk}> read </a>
        </div>
    )
}



