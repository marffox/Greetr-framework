
(function(global, $) {

  'use strict';

  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio de sesion'
  };

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.prototype = {

    _fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    _validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    _greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!!';
    },

    _formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this._fullName();
    },

    log: function() {
      if (console)
        console.log(logMessages[this.language] + ': ' + this._fullName());

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this._validate();

      return this;
    },

    HTMLGreeting: function(selector, formal) {
      var greetingMsg = '';

      if (!$) throw 'jQuery is missing';
      if (!selector) throw 'Language selector is missing';

      greetingMsg = formal ? this._formalGreeting() : this._greeting();
      $(selector).html(greetingMsg);

      return this;
    }
  };

  Greetr.init = function(firstName, lastName, language) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || 'en';
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);