---
layout: default
title: My Favorite Movies
---

# {{title}}

<div class="items">

{% for character in characters %}

<div class="item">

![{{ character.name }}]({{ character.image }})

## {{ character.name }} {% if character.isMyFavorite == true %}is my favorite{% endif %}

</div>

{% endfor %}

</div>
