const Boom = require('boom');

module.exports = server => {
  return async function(req) {
    const { id } = req.params;

    if (id === req.auth.credentials.id) {
      throw Boom.badRequest('You cannot delete yourself');
    }

    try {
      const result = await server.app.db.User.destroy({ where: { id } });
      if (!result) {
        throw new Error('There has been an error deleting this user');
      }
      return { success: true, result };
    } catch (e) {
      throw e;
    }
  };
};
