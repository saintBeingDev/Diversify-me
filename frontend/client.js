// client.js
import sanityClient from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";


export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION,// or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
})



export function urlFor(source){
  return imageUrlBuilder(sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
    apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION,// or the name you chose in step 1
    useCdn: false // `false` if you want to ensure fresh data
  })).image(source);
} 
