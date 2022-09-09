import client from '../../client'

export default async function claps(req, res) {

    const { _id } = JSON.parse(req.body);
    try {
        const data = await client.config({
            token: process.env.SANITY_API_TOKEN_COMMENT
        }).patch(_id).inc({ claps: 1 }).commit();
        res.statusCode = 200
        return res.json({ claps: data.claps })
        
    } catch (err) {
        console.log('error occured while like',err)
        return res.status(500).json({message:"couldn't increment claps", err})
    }
}
  