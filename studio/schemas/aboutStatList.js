export default {
  name: "aboutStatList",
  title: "Page - About - Stat List",
  type: "document",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "aboutStat" }],
        },
      ],
    },
  ],
}
