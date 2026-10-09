# WIS Case Detail · Simple Editorial Template

## Principle

Case detail is a portfolio page, not an art-directed magazine layout. The layout
must remain quiet enough that a future editor can replace the content without
touching CSS. A case may have a different story; it does not need a different
composition.

The template intentionally uses one straight reading spine:

1. Single-image cover
2. Brief and metadata
3. Two to four decision blocks
4. Evidence gallery
5. Closing image and credits

There are no staggered columns, negative margins, image clusters, masonry, sticky
sections or per-case layout modes.

## Content contract

The case data file contains identity, one cover image, opening copy, 2–4
decisions, a proof image array, one closing image and credits. Every image lives
in one registry (`src`, `alt`, optional `focal`) and can be used once only.

```js
{
  identity: { couple, title, year, location },
  cover: { lead: 'image-id' },
  firstBrief: { kicker, copy, expanded },
  decisions: [{ kind, title, rationale, images: ['lead', 'support-a', 'support-b'] }],
  proof: ['image-id', 'image-id'],
  closing: { image: 'image-id', copy },
  credits: [{ label, value }]
}
```

Each decision always renders in the same order: text, one full-width lead image,
then two equal supporting images. The proof section always renders a clean,
two-column grid. This is deliberately more conventional than an editorial
collage: it is stable for any mixture of vertical/horizontal source images, easy
to enter, and lets the work carry the page.

## Image rules

All slots use a fixed aspect ratio and `object-fit: cover`; `focal` sets the
subject position. Images never determine their own column span or vertical
offset. The editor changes an image or its focal point, never the CSS.

- Cover / decision lead: 16:9 desktop, 4:5 mobile.
- Supporting and proof images: 3:2 desktop, 4:5 mobile.
- Closing: 3:2 desktop, 4:5 mobile.

## Minimum publish input

- 1 cover image
- 2–4 decisions × 3 images
- 6+ proof images
- 1 closing image
- Full credits

A compact case therefore needs 14 images. C+J uses all 20 local assets: 1 cover,
9 inside three decisions, 9 proof images and 1 close.

`assets/case-template.js` validates required fields, exact decision image count,
minimum proof images, image IDs and duplicate image use. Its internal fixture has
four decisions and 29 unique images to verify the template works beyond C+J.
