import express from 'express';

const routes = express.Router();

routes.use((req, res, next) => {
  const param = req.queryInt('parametro')
  res.status(202).send("andreayfreddy " + request.query.parametro
 )
})

routes.use((err, req, res, next) => {
  res.status(404).json(err.message)
})

export default routes;