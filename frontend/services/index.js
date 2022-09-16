import groq from "groq";
import client from "../client";

export const getAllPosts =async ()=>{

    const query = groq`
    *[_type == 'post' && !(_id in path("drafts.**"))]{
        ...,
        title,
        excerpt,
        readTime,
        author,
        "author": author->name,
        categories[] -> {
            title,
            slug
        },
        "authorImage": author->image,
        mainImage{
             asset->{
              _id,
               url
              }
         },
    }  
    `

    const result = await client.fetch(query)

    return result
}
export const getAllAuthors =async ()=>{

    const query = groq`
    *[_type == 'author']{
        name,
        "slug":slug.current,
        "image":image{
                   asset->{
                    _id,
                     url
                    }
               },
          bio,
      }  
    `

    const result = await client.fetch(query)
    return result
}
export const getSingleAuthorDetails =async (slug)=>{

    const query = groq`*[_type == "author" && slug.current == $slug][0]{
        ...,
        "postsCount": count(*[_type=='post' && references(^._id)])
      }`

    const result = await client.fetch(query,{slug})
    return result
}

export const getPostDetails = async (slug) =>{
    
    const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    likes,
    slug,
    love,
    claps,
    party,
    title,
    publishedAt,
    excerpt,
    readTime,
    "name": author->name,
    "categories":categories[0]->title,
    "catSlug":categories[]->slug,
    "authorImage": author->image,
     mainImage{
      asset->{
        _id,
        url
       }
     },
    body,
    'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
        _id, 
        name, 
        email, 
        comment, 
        _createdAt
    },
    'count':count(*[_type == "comment" && post._ref == ^._id && approved == true])
}`;


const result = await client.fetch(query, { slug });
return result

}

export const getFeaturedPosts = async () =>{
    const query = groq`*[_type == 'post' && featuredPost == true]{
        title,
        excerpt,
        slug,
        mainImage{
            asset->{
              _id,
              url
             }
           },
    }`

    const result = await client.fetch(query);
    return result
}

export const getRecentPosts  = async ()=>{
    const query = groq`*[_type == "post"] | order(_createdAt desc)[0..3]{
        title,
        readTime,
        publishedAt,
        excerpt, 
        slug,
        "name": author->name,
        "categories": categories[0]->title,
        "authorImage": author->image,
        mainImage{
             asset->{
              _id,
               url
              }
         },
    }`

    const result = await client.fetch(query)
    return result
}


export const getSimilarPosts = async (categories, slug)=>{
    const query = groq`*[_type == 'post' && (slug.current!= $slug && $categories in categories[]->slug.current) && !(_id in path("drafts.**"))][0..1]{
        title,
        slug,
        excerpt,
        readTime,
        mainImage{
            asset->{
             _id,
              url
             }
        },
        "authorImage": author->image,
        "name": author->name,
        categories[]->{
            title,
            slug
        },
      }
      `

    const result = await client.fetch(query, { categories, slug})

    return result
}

export const getCategories = async ()=>{
    const query = groq`*[_type == 'category']{
        title,
        "slug":slug.current
      }
      `

    const result = await client.fetch(query)

    return result
}

// Todo get all posts related to single category
export const getCategoryPost = async (category)=>{
    const query = groq`*[_type == "post" && $category in categories[]->slug.current]{
        ...,
        "author": author->name,
        "authorImage": author->image,
        categories[] -> {
                title,
                slug
        },
      }
      `

    const result = await client.fetch(query,{category})

    return result
}