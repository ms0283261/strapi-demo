'use strict';

/**
 *  www controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::www.www');
