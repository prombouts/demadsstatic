# De Mads public website

This repository is the source for De Mads' public website. It contains the
static website files that are deployed to De Mads' web server.

## Website files

- `index.html` is the website's main page.
- `css/` contains the stylesheets.
- `js/` contains the browser-side JavaScript.
- `images/` contains website images.
- `robots.txt` provides crawler guidance.
- `sitemap.xml` lists the canonical public URL for search engines.

There is no build step or package installation required. To preview changes,
serve the repository with a local web server and open the local address in a
browser. Some embedded content does not work when opening `index.html` directly
as a `file://` URL.

## Publishing

GitHub Actions deploys the website using
[`.github/workflows/ftp-deploy.yml`](.github/workflows/ftp-deploy.yml). It runs
automatically when changes are pushed to `main`; it can also be started
manually from the repository's **Actions** tab.

The workflow uploads files from the repository root to the configured server
directory. It excludes Git metadata, GitHub workflow files, `node_modules`, and
the repository-only `PRODUCT.md` and `DESIGN.md` files.

Configure these settings under the repository's GitHub **Settings → Secrets and
variables → Actions** before deploying:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `FTP_SERVER` | Variable | Yes | FTP server hostname |
| `FTP_SERVER_DIR` | Variable | Yes | Destination directory; it must end with `/` (for example, `public_html/`) |
| `FTP_PORT` | Variable | No | FTP server port; defaults to `21` |
| `FTP_PROTOCOL` | Variable | No | `ftps` by default; supported values are `ftp`, `ftps`, and `ftps-legacy` |
| `FTP_USERNAME` | Secret | Yes | FTP account username |
| `FTP_PASSWORD` | Secret | Yes | FTP account password |

Use FTPS where the hosting provider supports it. Keep credentials in GitHub
Actions secrets; do not add them to repository files.
