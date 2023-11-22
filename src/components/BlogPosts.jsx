import React, { ReactDOM } from "react";

import profileCoverImage from "../assets/images/blogposts/profile - dark type.png";
import coverImage from "../assets/images/blogposts/interface-web.png";

// markdowns
import introduce from "../blogposts/introduce.md";
import article2 from "../blogposts/pourquoi-devez-vous-absolument-avoir-un-site-web-pour-votre-entreprise-ou-business.md";


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
        title: "Pourquoi devez-vous absolument avoir un site web pour votre entreprise ou business ?",
        subtitle: "Dans cet article, je vais vous présenter quelques points clés sur le poids qu'a un site web dans votre business.",
        content: `Un site web est une page, une plateforme consultable depuis un navigateur via une adresse URL précise.
        Attention. Je ne vous parle pas d'un profil Facebook, Twitter ou autres... Non !
        Je vous parle de quelque chose de propre à vous, reflétant votre image de marque.
        Nombreux sont les entrepreneurs qui négligent ce détail, surtout les entrepreneurs africains pour qui un site web n'est pas nécessaire.`,
        author: "Diaby Almamy",
        publish_date: "Oct 26",
        coverImage: coverImage,
        markdownPath: article2
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
                    <p className="bp-title"> {"[FR] " + title } </p>
                    <p className="bp-content"> { content } </p>
                </div>
                <div className="cover-img">
                    <img src={coverImage} alt="post cover image" />
                </div>
            </div>
        </div>
    )
}



