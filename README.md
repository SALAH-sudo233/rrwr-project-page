# Right Region, Wrong Reference

Project page for **Right Region, Wrong Reference: Diagnosing Unsupported Grounding in MLLMs**.

The page introduces S²M-Bench, Conditional Box Reuse (CBR), and Adaptive Structured Verification (ASV). It includes a semantic-reference illustration, model-family filtering and search, reported results in CSV, the manuscript, and its appendix.

## Run locally

Open `index.html` directly, or serve this directory with a static HTTP server. No package installation, build system, external fonts, or API keys are needed.

## GitHub Pages

In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, then save. `.nojekyll` keeps the site buildless. All local links are relative and support a repository subpath.

[Official GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Content and evidence

- The included paper is the final local manuscript delivered in this conversation on 2026-10-13 (28 pages, including 16 appendix pages).
- Main mitigation numbers come from manuscript Table 3; individual ASV values come from the appendix's per-model ASV results.
- `assets/results.json` stores the 13 model records. `assets/results.js` contains the same records for offline compatibility. `downloads/results.csv` is the corresponding export.
- Unfiltered FGR is calculated as `(EOH FGR + ROH FGR) / 2`; each stratum contains 2,000 negative queries. Reduction is in percentage points, not relative percent.
- Retention and all-positive mIoU accompany the false-grounding rates. Family comparisons are descriptive.
- The hero interaction is an illustration of semantic validity from the paper's example, not live model inference or an invented model response.
- JEV curves describe training optimization. The training/calibration image overlap and absence of an image-disjoint validation curve remain disclosed. GRPO is a separate exploratory study.
- Author identity, affiliations, acceptance, public benchmark availability, and model checkpoint releases are not invented. Anonymous manuscript attribution is retained.

## Editing

- `index.html`: prose, navigation, downloads, and offline table fallback.
- `styles.css`: responsive layout and visual styling.
- `app.js`: reference toggle and model table filters.
- `assets/`: paper figures, source photograph, and table data.
- `downloads/`: paper, appendix, results, and JEV training values.

For a data revision, keep the JSON, JS, CSV, and static HTML table synchronized. Paper figures and source images retain their original rights and attribution; this repository does not grant a new license over them.

## Website

- Project page: https://salah-sudo233.github.io/rrwr-project-page/
- Repository: https://github.com/SALAH-sudo233/rrwr-project-page
