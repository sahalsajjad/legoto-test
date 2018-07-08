import query from '../../db';

const getAll = async (req, res) => {
  const response = await query(`
    FOR product IN products
      RETURN {
        "productId":product._key
        "name":product.name,
        "country":product.country,
        "category":product.category,
        "link":CONCAT(["/products/",product._key]),
        "linkToReviews":CONCAT(["/products/",p._key, "/reviews"])
    }
    `);

  res.json(response);
}

export const getProduct = async (req, res) => {
  const response = await query(`
    FOR product IN products
      FILTER product._key == "${req.params.id}"
      RETURN {
        "productId": product._key,
        "name": product.name,
        "country": product.country,
        "category": product.category,
        "linkToReviews":CONCAT(["/products/",p._key, "/reviews"])
        }
    }
    `);

  res.json(response);
}

export const getAllReviews = async (req, res) => {
  const response = await query(`
    FOR product IN products
      FILTER product._key == "${req.params.id}"
      FOR x in reviewed
        FILTER x._to == product._id
        FOR user in users
          FILTER user._id == x._from
        RETURN {
          "rating":x.rating,
          "userId":user._key,
          "username":user.username,
          "fullname":user.fullname,
          "country":user.country,
          "memberSince":user.memberSince,
          "link":CONCAT(["/users/",user._key]),
          "linkToReviews":CONCAT(["/users/",user._key,"/reviews"])
        }
  `);
  res.json(response)
}


const products = {
  getAll,
  getProduct,
  getAllReviews
}

export default products;
