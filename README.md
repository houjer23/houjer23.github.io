# Jianyu Hou — personal website

Static HTML/CSS personal website. No build process, external fonts, or runtime dependencies.

## Preview

Open `index.html` directly in a browser, or run this from the repository directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8000.

## Edit

- `index.html`: brief biography, publications, and experience.
- `assets/css/style.css`: colors, typography, and responsive layouts.
- `assets/js/main.js`: active section navigation.
- `assets/images/`: optimized static publication previews and favicon.

To publish with GitHub Pages, select the `main` branch and repository root in Settings → Pages.

The introduction follows the simple header approach seen on [Jon Barron’s homepage](https://jonbarron.info/): the main name is shown once, with section navigation beside the name on desktop and profile links below the biography. There is no separate logo or repeated name in a top bar.

## Content sources

Resume: `Jianyu Jerry Hou Resume v7.pdf` supplied by Jianyu.

Publication titles, author lists, and preview images: [Weikang Wan’s supplied reference page](https://wkwan7.github.io/).

Descriptions and public links are grounded in the [EgoThumb](https://ego-thumb.github.io/), [DexFLEX](https://dex-flex.github.io/), and [DexSeed](https://dexseed.github.io/) project pages. Conference information follows the supplied resume and subsequent edits; DexSeed has no conference or submission label.

Preview images are resized WebP stills from the reference page’s `EgoThumb.png`, `dexflex.gif`, and `dexseed.gif`. This keeps local previews lightweight and avoids autoplay. No headshot was supplied, so the introduction uses a text layout.

The current layout is deliberately minimal: introduction, publications, and experience. Each experience includes three skills or focus areas. Projects, About, numbered section labels, and repeated contact blocks have been removed.

Earlier experience and the CV link have also been removed. The original resume remains in its supplied Desktop location; a PDF copy is not included in the website.
