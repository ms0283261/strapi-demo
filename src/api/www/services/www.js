'use strict';

/**
 * www service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::www.www');
