# Signal

> Ship infrastructure your developers won't hate.

A concept developer-platform landing page — part of the
[Nathan AI Solutions](https://github.com/Nayphilim) portfolio, showcasing a production-quality
build in a specific modern stack.

**Stack:** Astro 7 (static-first + islands), content collections, TypeScript.

## About

An agent-native developer-platform landing page. Static-rendered by Astro, with small islands of
vanilla-TS interactivity: a typewriter terminal + cycling deploy status, feature tabs, an
auto-playing "your agent sets it up" transcript, a monthly/yearly billing toggle, and a seat-count
pricing estimator. The changelog is driven by an Astro content collection.

## Develop

```bash
npm install
make dev      # dev server (http://localhost:4321)
make lint     # astro check + prettier
make test     # vitest (pricing maths)
make build    # static build → dist/
```

## Notes

- Brand, copy, and imagery are fictional concept work for portfolio purposes; not a real product.
- No photography — the UI is pure CSS.

## License

Code is released under the [MIT License](LICENSE).
