---
title: ""
layout: default
permalink: /projects/
published: true
---

<div class="ProjectContainer">
  <div class="gallery">
    {% for project in site.projects %}
      {% if project.redirect %}
        <div class="projectTile">
          <a href="{{ project.redirect }}" target="_blank">
            <span>
              <h2>{{ project.title }}</h2>
              <br/>
              <p>{{ project.description | truncate: 55 }}</p>
            </span>
          </a>
        </div>
      {% else %}
        <div class="projectTile">
          <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">
            <span>
              <h2>{{ project.title }}</h2>
              <br/>
              <p>{{ project.description | truncate: 55 }}</p>
            </span>
          </a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

<div>
  <h3>Other Projects</h3>
  {% if site.data.projects %}
    {% include project_table.html %}
  {% endif %}
</div>

