# learn-languages

A small offline-first web app for learning French and Arabic through graded reading.
Tap any word in a text to see what it means, hear it, or save it to a spaced-repetition deck.

Live at **https://abb001.github.io/learn-languages/**

## Deploying

1. **Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save.**
2. Wait a minute or two, then open the URL above.

## Installing it on your phone

Open the URL on your phone, then:

- **iPhone:** must be Safari. Share button → *Add to Home Screen*.
- **Android:** Chrome shows an *Install app* prompt, or use ⋮ → *Add to Home screen*.

It then launches fullscreen with its own icon, and works with no connection.
Audio uses the voices already on your device, so that works offline too.

## Files

| File | What it is |
|---|---|
| `content.js` | **All the lessons.** The only file you need to touch to add material. |
| `app.js` | Rendering, word lookup, review scheduling, speech. |
| `app.css` | Styles. |
| `sw.js` | Service worker — makes it offline-capable. |
| `manifest.webmanifest` | Tells the phone it's an installable app. |
| `.nojekyll` | Stops GitHub Pages running the files through Jekyll. |

## Adding a text

Append an object to `DATA.fr.articles` or `DATA.ar.articles` in `content.js`:

```js
{
  id: "fr5",                       // must be unique
  t: "Title",
  tr: "Transliteration",           // Arabic only, optional
  lv: "A2",
  blurb: "One line about it.",
  s: [                             // one entry per sentence
    ["Target sentence.", "English translation.", "translit"]
  ],
  g: {                             // word → meaning, lowercase, no punctuation
    "target": "meaning"
  },
  n: [["Note title", "Explanation, may contain <b>HTML</b>."]]
}
```

Arabic gloss keys are matched loosely: harakat are stripped, أ إ آ are folded to ا,
and a leading الـ or a prefixed و / ل / ب / ف is tried if the exact form misses.
So write the keys in plain unvowelled form.

**After any change, bump `CACHE` in `sw.js`** (`one-page-v1` → `one-page-v2`).
Otherwise installed phones keep serving the old cached version.

## Known limits

- Speech uses the browser's built-in synthesis. French is decent everywhere.
  Arabic depends on the device having an Arabic voice; the app says so if it doesn't.
- Progress lives in `localStorage` on that one device. Clearing site data wipes it,
  and it does not sync between phone and laptop.
