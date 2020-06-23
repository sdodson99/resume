"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Promise<Object>}
   */
  async findOneByName(ctx) {
    const { name } = ctx.params;

    const result = await strapi.query("experiences").findOne({ name });

    return sanitizeEntity(result, { model: strapi.models.experiences });
  },
};
