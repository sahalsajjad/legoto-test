import apis from '../index';

const indexHandler = (req, res) => {
  let response = {
    description:"Reference for all endpoints of Legoto API",
    endpoints:apis.map(({path, description}) => ({path, description}))
  }

  res.json(response)
}

export default indexHandler;
