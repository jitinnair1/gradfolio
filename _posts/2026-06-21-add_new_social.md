---
layout: post
title: "Add a new entry to social footer"
---

To add a new entry in the social media footer, you need to make changes at three places.

<!-- more -->

First, add an entry in `_config.yml` under the social links section:

```yml
twitter: "your_username"
```

Now add a block for the new entry in `_includes/social-footer.html` (you can just duplicate any other existing block in the file and modify it as required):

* Change the display name for the title (in the {% raw %}`{{ _locale_string_follow | replace: '[NAME]', 'Twitter' }}`{% endraw %}).
* Update the href attribute for the new entry. Whatever you use as the key ("your_username" in this example) in the `_config.yml` file will be appended to the url as seen below.
* Also, update the `fa-*` class in the HTML block below for the new entry. You can find the classes [here](https://fontawesome.com/search?ip=brands)

{% raw %}
```html
{%- if site.twitter -%}
<a title="{{ _locale_string_follow | replace: '[NAME]', 'Twitter' }}"
class="social-button twitter"
href="https://www.twitter.com/{{ site.twitter }}" itemprop="sameAs"
target="_blank">
<i class="fab fa-twitter"></i>
</a>
```
{% endraw %}

Now add the styles for the new entry in `assets/css/_sass/footer-social.scss`:

(again, you can just reuse an old block in the file)

The pattern below (which is what you would add) works by having a background colour for the icon which is then "inverted" on hover.

You can add a background from the brand colour of the social media platform in question.

```scss
.rounded-social-buttons .fa-twitter,
...
.rounded-social-buttons .social-button.twitter {
  background: #55acee;
}

.rounded-social-buttons .social-button.twitter:hover,
.rounded-social-buttons .social-button.twitter:focus {
  color: #55acee;
  background: #fefefe;
  border-color: #55acee;
}
```
