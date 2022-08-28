render = () => {
  let arr = [
    { id: 1, Name: "A" },
    {
      id: 2,
      Name: [
        { id: 31, Name: "A" },
        { id: 32, Name: "A" },
      ],
    },
    {
      id: 3,
      Name: [
        { id: 41, Name: "A" },
        {
          id: 42,
          Name: [
            { id: 51, Name: "A" },
            {
              id: 52,
              Name: [
                { id: 61, Name: "A" },
                { id: 62, Name: "" },
              ],
            },
          ],
        },
      ],
    },
    { id: 4, Name: "D" },
  ];

  const list_container = document.getElementById("list_container");

  function extractValue(arr) {
    const ul = document.createElement("ul");
    arr.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element.id;
      ul.appendChild(li);

      if (Array.isArray(element.Name)) {
        let childList = extractValue(element.Name);
        li.appendChild(childList);
      }
    });
    return ul;
  }
  list_container.appendChild(extractValue(arr));
};
render();
