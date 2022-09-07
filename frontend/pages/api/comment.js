import client from '../../client'

export default async function comment(req, res) {

    const { name, text, email, _id } = JSON.parse(req.body)

    client.config({
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


    res.status(200).json({ name: 'John Doe' })


}
  