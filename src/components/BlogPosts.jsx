import React, { ReactDOM } from "react";

import { AnimeOnScroll } from "./animeOnScroll";
import profileCoverImage from "../assets/images/blogposts/profile - dark type.png";
import coverImage from "../assets/images/blogposts/blog-cover-img.jpg";
import { BlogPostDetails } from "./BlogPostDetails";

// markdowns
import introduce from "../blogposts/introduce.md";
import repo from "../blogposts/comment-cloner-un-repo.md";

export const blogPosts = [
    {
        id: "001",
        title: "Diaby Almamy Youssouf : Jeune développeur et passionné du numérique ",
        subtitle: "L' occasion d'en découvrir plus sur moi et de mon parcour !",
        content: "Diaby est un jeune entrepreneur passionné de technologie et développeur Python avec plus de quatre ans d'expérience. Depuis son plus jeune âge, il a toujours été intéressé par les technologies émergentes. Il a découvert sa passion pour la programmation en 2017. Après l'obtention de son baccalauréat en 2020, il a décidé de poursuivre ses études en développement d'applications web et mobiles à l'Université Internationale des Sciences et Technologies à Abidjan.",
        author: "Diaby Almamy",
        publish_date: "Oct 25",
        coverImage: profileCoverImage,
        markdownPath: introduce 
    },
    {
        id: "002",
        title: "Comment cloner/installer un dépôt/projet python GitHub et exécuter les fichier en local",
        subtitle: "Lorem ipx sum dolor sit amet consectetur. Pellentesque molestie iaculis auctor a eu. Amet mattis sagittis id cras.",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus ut dolor. Vestibulum ante ipsum primis in faucibus orci luctus ut dolor Vestibulum ante ipsum primis in faucibus orci luctus ut dolor Vestibulum ante ipsum primis in faucibus orci luctus ut dolor Vestibulum ante ipsum primis in faucibus orci luctus ut dolor",
        author: "Diaby Almamy",
        publish_date: "Oct 26",
        coverImage: coverImage,
        markdownPath: repo
    }
]

export function BlogItem ( { 
    postData,
    onOpened
 } ) {

    const {
        id,
        title,
        subtitle,
        content,
        author,
        publish_date,
        coverImage,
        contentMarkdown,
    } = postData

    return (
        <div className="blog-item" onClick={() => onOpened(postData)}>
            <div className="props">
                <p className="author">{author} <span> · {publish_date} </span> </p>
            </div>
            <div className="core">
                <div>
                    <p className="bp-title"> { title } </p>
                    <p className="bp-content"> { content } </p>
                </div>
                <div className="cover-img">
                    <img src={coverImage} alt="post cover image" />
                </div>
            </div>
        </div>
    )
}



