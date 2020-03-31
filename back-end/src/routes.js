import express from 'express';

const routes = express.Router();

import SessionController from '~/controllers/SessionController';
import OngController from '~/controllers/OngController';
import IncidentController from '~/controllers/IncidentController';
import ProfileController from '~/controllers/ProfileController';

routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

export default routes;
