# Design

Компоненти з дизайн-системи «Водне поло України»: **BottomNav**, **ListRow**, **NavBar**.

- `tokens.css` / `tokens.json` — токени, від яких залежать усі компоненти (підключайте `tokens.css` першим).
- `components/<Name>/` — `<Name>.css`, `README.md` з правилами, `preview.html` з живим прикладом.
- `assets/icons/` — іконки DuoIcons (MIT) для BottomNav; активні та `*-muted` варіанти.
- Єдиний шрифт — SF Pro (`font-ios`): на пристроях Apple він підставляється системою, окремого підключення не потрібно.
