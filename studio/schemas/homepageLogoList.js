export default {
  name: "homepageLogoList",
  title: "Page: Home - Customers",
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "Logos",
      name: "logos",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageLogo" }],
        },
      ],
    },
  ],
}
