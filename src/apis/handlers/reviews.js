import query from '../../db';

export const getOverall = async (req, res) => {
    const response = await query(`
      FOR p in products
      let avg = AVERAGE(
        FOR x in reviewed
            FILTER x._to == p._id
            RETURN x.rating
        )
        RETURN {
        "rating":avg,
        "productId":p._key,
        "name":p.name,
        "category":p.category
      }
    `);

    res.json(response)
}

const reviews = {
  getOverall
}

export default reviews;
