---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="pub-filters" role="group" aria-label="Filter publications by type">
  <button type="button" class="pub-filter active" data-filter="all" aria-pressed="true">All</button>
  <button type="button" class="pub-filter" data-filter="conference" aria-pressed="false">Conference</button>
  <button type="button" class="pub-filter" data-filter="journal" aria-pressed="false">Journal</button>
  <button type="button" class="pub-filter" data-filter="workshop" aria-pressed="false">Workshop</button>
  <button type="button" class="pub-filter" data-filter="poster" aria-pressed="false">Poster</button>
  <button type="button" class="pub-filter" data-filter="preprint" aria-pressed="false">Preprint</button>
</div>
<script defer src="{{ '/assets/js/pub-filters.js' | relative_url | bust_file_cache }}"></script>

<div class="publications">

{% bibliography %}

</div>
