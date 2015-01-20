// definitions
GlobalTemplates = (_.isUndefined(GlobalTemplates)) ? {} : GlobalTemplates;

/* GLOBAL HELPERS
.................................................*/

GlobalTemplates.useHelpers = function(Template) {
  Template.registerHelper('withIndex', function (all) {
    return _.map(all, function(val, index) {
        return {index: index, value: val};
    });
  });

  Template.registerHelper('timestampToDate', function(date) {
    if (_.isDate(date)) {
      return new Date(date);
    }
  });

  Template.registerHelper('centsToDollars', function(cents) {
      if (_.isNumber(cents)) {
        return parseFloat(cents / 100).toFixed(2);
      }
  });
};