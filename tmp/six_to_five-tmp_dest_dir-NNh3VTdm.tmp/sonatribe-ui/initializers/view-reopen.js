import View from "sonatribe-ui/views/view";

export var initialize = function () {
  View.reopenClass({});
};

export default {
  name: "view-reopen",

  initialize: initialize
};
/* container, app */