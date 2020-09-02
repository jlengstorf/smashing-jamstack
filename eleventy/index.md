---
layout: default
title: My Favorite Movies
---

# {{ title }}

<div class="items">

{% for movie in movies %}

<div class="item">

![{{movie.title}}]({{movie.poster}})

## {{movie.title}}

{{ movie.tagline }}

</div>

{% endfor %}

</div>
