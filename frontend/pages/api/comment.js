import client from '../../client'

export default async function comment(req, res) {

    const { name, text, email, _id } = JSON.parse(req.body)
    try {
        await client.config({
            token: process.env.SANITY_API_TOKEN_COMMENT
        }).create({
            _type: 'comment',
            name,
            comment: text,
            email,
            post: { 
                _type:'reference',
                _ref: _id
            }
        })
    } catch (err) {
        console.log('error occured while coment',err)
        return res.status(500).json({message:"couldn't sent the message", err})
    }
    console.log("comment submiited")
    return res.status(200).json({message:"comment sent"})
}
  