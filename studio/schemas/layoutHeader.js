export default {
  name: "layoutHeader",
  title: "Layout - Header",
  type: "document",
  fields: [
    {
      title: "Header Nav Items",
      name: "navItems",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "navItem" }, { type: "navItemGroup" }],
        },
      ],
    },
    {
      title: "Header CTA",
      name: "cta",
      type: "reference",
      to: [{ type: "homepageLink" }],
    },
  ],
}
