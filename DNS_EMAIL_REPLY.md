# Reply to the collaborator (DNS / server info)

> Draft — adjust the greeting/sign-off to your voice before sending.

---

Hi [Name],

Thanks for offering to handle the DNS. We're hosting the site on **GitHub Pages**
(a static host), so there is no separate server or reverse proxy to configure, and
**HTTPS is handled automatically by GitHub** — no manual SSL certificate is needed
on either side.

To point **ai-creative-study.click** (apex domain) at GitHub Pages, please set
these DNS records:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
```

(Optional) to also serve the `www` subdomain, add:

```
CNAME  www   <our-github-username>.github.io
```

The domain is already set in our site configuration, so once these records
propagate, GitHub will automatically issue the SSL certificate and serve the site
over HTTPS. If you'd prefer a CNAME-only setup instead of the apex A records, let
me know and I'll send the exact target.

Please go ahead and update the records whenever convenient, and I'll confirm on my
end once the site resolves.

Thanks!
[Your name]
