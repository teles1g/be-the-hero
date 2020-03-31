import connection from '~/database/connection';
import crypto from 'crypto';

export default {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },
  
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    const ong = await connection('ongs')
      .where('id', id)
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this ID' });
    }
    
    await connection('ongs').where('id', id).delete();

    return res.status(204).send();
  }
};