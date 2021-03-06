/**
 * Translator for documentation pages.
 *
 * To enable translation you should include one of language-files in your index.html
 * after <script src='lang/translator.js' type='text/javascript'></script>.
 * For example - <script src='lang/ru.js' type='text/javascript'></script>
 *
 * If you wish to translate some new texsts you should do two things:
 * 1. Add a new phrase pair ("New Phrase": "New Translation") into your language file (for example lang/ru.js). It will be great if you add it in other language files too.
 * 2. Mark that text it templates this way <anyHtmlTag data-sw-translate>New Phrase</anyHtmlTag> or <anyHtmlTag data-sw-translate value='New Phrase'/>.
 * The main thing here is attribute data-sw-translate. Only inner text, title-attribute and value-attribute are going to translate.
 *
 */
SwaggerTranslator = {

    _words:[],

    translate: function() {
    var $this = this;
    $("[data-sw-translate], [data-sw-translate='']").each(
        function() {
            if ($(this).text() && $(this).children().length == 0) {
                $(this).text(
                    $this._tryTranslate($(this).text())
                );
            }

            if ($(this).attr('value')) {
                $(this).attr(
                    'value',
                    $this._tryTranslate($(this).attr('value'))
                );
            }


            if ($(this).attr('title')) {
                $(this).attr(
                    'title',
                    $this._tryTranslate($(this).attr('title'))
                );
            }


            if ($(this).attr('placeholder')) {
                $(this).attr(
                    'placeholder',
                    $this._tryTranslate($(this).attr('placeholder'))
                );
            }
        }
    )
    },

    _tryTranslate: function(word) {
        return this._words[word] != undefined ? this._words[word] : word;
    },

    learn: function(wordsMap) {
        this._words = wordsMap;
    }
}