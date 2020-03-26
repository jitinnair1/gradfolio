---
title:
layout: default
permalink: /projects/
published: true
---

{% for project in site.projects %}

{% if project.redirect %}
<div class="projectTile">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        <div class="thumbnail blankbox"></div>
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="projectTile ">
    <div class="thumbnail">
        <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">
        <div class="thumbnail blankbox"></div>
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
