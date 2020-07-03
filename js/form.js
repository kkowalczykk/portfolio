const form = document.querySelector("#contact-form");

form.setAttribute("novalidate", true);

form.addEventListener("submit", e => {
      e.preventDefault();
      const inputs = form.querySelectorAll("#contact-form input");
      const formData = new FormData();
      for (const el of inputs) {
            formData.append(el.name, el.value)
      }

      const url = form.getAttribute("action");
      const method = form.getAttribute("method");

      fetch(url, {
            method: method.toUpperCase(),
            body: formData
      })
            .then(res => res.json())
            .then(res => console.log(res))
}
)