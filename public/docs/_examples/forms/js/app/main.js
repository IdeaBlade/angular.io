// #docregion
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent, { 
      imports: [ng.forms.FormsModule],
      declarations: [app.HeroFormComponent]
    });
  });
})(window.app || (window.app = {}));
