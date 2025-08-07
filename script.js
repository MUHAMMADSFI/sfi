<!-- Placeholder for header -->
<div id="header-include"></div>

<!-- Fetch header.html and inject into page -->
<script>
  fetch("../../includes/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-include").innerHTML = html;

      // Load Google Translate script manually AFTER the HTML is inserted
      const gtScript = document.createElement("script");
      gtScript.type = "text/javascript";
      gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(gtScript);

      // Define the callback function for Google Translate
      window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ar,fr,es,hi,ur',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };
    });
</script>
