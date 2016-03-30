'use strict';
const isArrays = [require('isarray'),
                  require('jqb-isarray'),
                  require('formula-isarray'),
                  require('is-array'),
                  require('async.util.isarray')];

module.exports = obj => isArrays.every(f => f(obj));
