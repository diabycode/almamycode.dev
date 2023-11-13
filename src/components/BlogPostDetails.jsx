import Markdown from 'react-markdown';

import MarkDown from "markdown-to-jsx";

import {Arrow} from "../assets/svg/SvgForBlueMode.jsx";
import { useEffect, useState } from 'react';

export function BlogPostDetails ( {post, readerCloser} ) {

    const [ markdown, setMarkdown ] = useState("")

    useEffect( () => {
        fetch( post.markdownPath ).then( rp => rp.text() ).then( md => setMarkdown(md) )
    })


    return (
        <>
            <div className='close-btn'>
                <Arrow onclick={() => readerCloser()} />
            </div>
            <div className='heading'>
                <h2>{post.title}</h2>
                <p className='subtitle'>{ post.subtitle }</p>
                <div>
                    <p className="author">— {post.author} <span> · {post.publish_date} </span> </p>
                </div>
                
            </div>

            <div className='content'>
                <MarkDown>
                    { markdown }
                </MarkDown>
            </div>
        </>
    )
}


