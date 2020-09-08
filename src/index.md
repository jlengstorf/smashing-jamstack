---
layout: default
title: Smashing Jamstack Workshop
---

# {{ title }}

Say hello!

<form action="/.netlify/functions/hello" method="POST">
  <label for="name">
    What should we call you?
    <input type="text" id="name" name="name" />
  </label>
  <button type="submit">Submit</button>
</form>

<pre class="debugger">(the function result goes here)</pre>

<script>
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const name = data.get('name');

    const result = await fetch('/.netlify/functions/hello', {
      method: 'POST',
      body: JSON.stringify({ name }),
    })
      .then((response) => response.text())
      // .then((result) => {
      //   });
        document.querySelector('.debugger').innerText = result;
  });
</script>
