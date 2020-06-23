"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Promise<Object>}
   */
  async findOneByName(ctx) {
    const { name } = ctx.params;

    const result = await strapi.query("projects").findOne({ name });

    return sanitizeEntity(result, { model: strapi.models.projects });
  },
};
