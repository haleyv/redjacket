export default {
  name: "navItemGroup",
  title: "Layout - Menu Group",
  type: "document",
  fields: [
    { title: "Name", name: "name", type: "string" },
    {
      title: "Nav Items",
      name: "navItems",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "navItem" }],
        },
      ],
    },
  ],
}
