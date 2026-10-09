<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- GitHub Pages build: workflow resolves asset pointer URLs to the Lovable site before building and sets GITHUB_PAGES=1 to prerender static HTML (nitro off) into dist/client. Why: GitHub Pages needs static files and identical image URLs in prerendered HTML and client navigation; normal Lovable builds stay unchanged.
- All committee portraits use MemberCard and the same 4:5 image canvas; match new portrait backgrounds to existing assets without generating or altering faces. Why: one rendering path keeps new and existing members visually consistent.
- Entry-screen dismissal is stored in tab-scoped sessionStorage and checked after hydration. Why: page reloads must not interrupt navigation or introduce server/client rendering mismatches.
