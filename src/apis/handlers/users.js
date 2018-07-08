import query from '../../db';

const getAll = async (req, res) => {
  const response = await query(`
    FOR user IN users
      RETURN {
        "userId":user._key,
        "username":user.username,
        "fullname":user.fullname,
        "country":user.country,
        "memberSince":user.memberSince,
        "link":CONCAT(["/users/",user._key]),
        "linkToReviews":CONCAT(["/users/", user._key, "/reviews"])
    }
    `);

  res.json(response);
}

export const getUser = async (req, res) => {
  const response = await query(`
    FOR user IN users
      FILTER user._key == "${req.params.id}"
      RETURN {
        "userId":user._key,
        "username": user.username,
        "fullname": user.fullname,
        "country": user.country,
        "memberSince": user.memberSince,
        "linkToReviews":CONCAT(["/users/", user._key, "/reviews"])
    }
    `);

  res.json(response);
}

export const getAllReviewsMade = async (req, res) => {
  const response = await query(`
      FOR user in users
        FILTER user._key == "${req.params.id}"
        FOR x in reviewed
          FILTER x._from == user._id
          FOR p in products
            FILTER p._id == x._to
          RETURN {
            "product":{
                "productId":p._key,
                "name":p.name,
                "country":p.country,
                "category":p.category,
                "linkToReviews":CONCAT(["/products/",p._key, "/reviews"])
                "rating":x.rating,
          }
    `)
    res.json(response);
}

const users = {
    getAll,
    getUser,
    getAllReviewsMade
}
export default users;
