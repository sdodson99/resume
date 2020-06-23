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

    const result = await strapi
      .query("projects")
      .model.query((qb) => {
        qb.where("name", name);
      })
      .fetch({
        withRelated: ["features", "technologies.concepts"],
      });

    const fields = result.toJSON();

    return sanitizeEntity(fields, { model: strapi.models.projects });
  },
};
