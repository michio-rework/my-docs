import { CmsCollection } from "netlify-cms-core";
import BlogPostCollection from "./blog.collection";
import IntroPagesCollection from "./intro.collection";
import DocCollection from "./types";

const faq_collection: CmsCollection = new DocCollection(
  "faqs",
  "Frequently Asked Questions",
  "Question",
  "docs/faq"
);

const core_concepts_collection: CmsCollection = new DocCollection(
  "concepts",
  "Core Concepts",
  "Concept",
  "docs/core-concepts"
);

const cms_collections: CmsCollection[] = [
  IntroPagesCollection,
  BlogPostCollection,
  faq_collection,
  core_concepts_collection,
];

export default cms_collections;
