# Morlock Software

https://morlock.software

## Development

Edit `src/index.html`, then:

```
npm run dev      # serve src/ locally (uses Tailwind CDN)
npm run build    # build dist/ with inlined assets
npm run start    # build + serve dist/
```

Build requires Python `fonttools` for font subsetting — install once with:

```
python3 -m venv .venv && .venv/bin/pip install fonttools brotli
```
