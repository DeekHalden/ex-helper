if (!window.ex) {
  window.ex = {};
  window.ex.customer = {};
}

window.ex.customer.waitForExist = function (selectors, callback) {
  var existInterval = setInterval(function () {
    if (
      selectors.every(function (ss) {
        if (typeof ss === "string") return document.querySelector(ss);
        else if (typeof ss === "function") return ss();
      })
    ) {
      callback();
      clearInterval(existInterval);
      existInterval = null;
    }
  }, 50);

  /* Returning ‘true’ lets Experience Accelerator know 
     to not report a successful application yet.
  
    return true added to line 37
  */
  setTimeout(function () {
    if (!existInterval) {
      // resolve();
    } else {
      clearInterval(existInterval);
      throw "Some of required elements do not exist";
      // reject("Some of required elements do not exist");
    }
  }, 15000);
};
