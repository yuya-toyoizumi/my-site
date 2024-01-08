import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the note",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the note",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Note],
});
