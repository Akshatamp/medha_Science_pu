Update the landline `BRAND.phone` / `BRAND.phoneRaw` in `src/lib/brand.ts` to the new number so the Top Info Bar, Footer, and any `tel:` links also reflect +91 79964 20113.

- `phone: "0836-2271947"` → `"+91 79964 20113"`
- `phoneRaw: "08362271947"` → `"917996420113"`

After this, no occurrence of the old numbers (`8310432831`, `2271947`) will remain anywhere in the codebase.