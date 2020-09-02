---
layout: default
title: Rick & Morty Characters
---

# {{ title }}

<div class="items">

{% for character in characters %}

<div class="item">

![{{character.name}}]({{character.image}})

## {{character.name}}

</div>

{% endfor %}

</div>
