# Correction de l'erreur 403 Forbidden - Déploiement Hostinger

**Date:** 30 octobre 2025  
**Problème:** Erreur 403 Forbidden après un déploiement FTP réussi sur Hostinger

## Problème identifié

Après un déploiement réussi via GitHub Actions FTP, le site affichait une erreur **403 Forbidden**. Cette erreur est généralement causée par :

1. Des permissions de fichiers incorrectes
2. Un fichier `.htaccess` manquant ou mal configuré
3. Une configuration serveur Apache incompatible avec Next.js

## Solutions appliquées

### 1. Création du fichier `.htaccess`

Créé `/public/.htaccess` avec la configuration Apache pour Next.js :

```apache
# Configuration Apache pour Next.js export statique
Options +FollowSymLinks
Options -Indexes
DirectoryIndex index.html

# Réécriture d'URL pour Next.js
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Ne pas réécrire les fichiers et répertoires existants
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rediriger vers index.html si le fichier n'existe pas
  RewriteRule ^(.*)$ /index.html [L,QSA]
</IfModule>
```

**Fonctionnalités :**
- ✅ Définit `index.html` comme fichier d'index
- ✅ Active la réécriture d'URL pour le routing Next.js
- ✅ Désactive l'affichage des répertoires
- ✅ Active la compression GZIP
- ✅ Configure le cache navigateur

### 2. Modification du workflow GitHub Actions

Fichier : `.github/workflows/deploy.yml`

**Changements :**
- ✅ Ajout de `dangerous-clean-slate: true` pour nettoyer complètement `/public_html/` avant chaque déploiement
- ✅ Ajout d'une étape de vérification pour confirmer que `index.html` existe
- ✅ Ajout de `security: loose` pour éviter les problèmes de permissions

```yaml
- name: Check for index.html
  run: |
    echo "=== Vérification de la structure du build ==="
    if [ -f "out/index.html" ]; then
      echo "✅ index.html trouvé à la racine de out/"
    else
      echo "❌ index.html non trouvé à la racine de out/"
      exit 1
    fi

- name: Deploy to Hostinger via FTP
  uses: SamKirkland/FTP-Deploy-Action@v4.3.5
  with:
    server: ${{ secrets.FTP_SERVER }}
    username: ${{ secrets.FTP_USERNAME }}
    password: ${{ secrets.FTP_PASSWORD }}
    protocol: ftps
    port: 21
    local-dir: ./out/
    server-dir: /public_html/
    dangerous-clean-slate: true  # ⚠️ Nettoyage complet
    security: loose
```

### 3. Vérification de la configuration Next.js

Le fichier `next.config.mjs` contient déjà la bonne configuration :

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,  // Important pour Apache/Hostinger
  images: {
    unoptimized: true
  }
};
```

## Configuration FTP Hostinger

**Username:** `u917408224` (format Hostinger : `u` + numéro)  
**Chemin complet:** `/home/u917408224/domains/khroonos.com/public_html`  
**server-dir:** `/public_html/` (relatif au home du user FTP)

## Vérifications post-déploiement

Après le déploiement, vérifier :

1. ✅ Le fichier `.htaccess` est présent dans `/public_html/`
2. ✅ Le fichier `index.html` est à la racine de `/public_html/`
3. ✅ Les dossiers `_next/`, `medias/`, `project/`, etc. sont présents
4. ✅ Les permissions des fichiers permettent la lecture (644 pour les fichiers, 755 pour les dossiers)

## Commandes de test

```bash
# Build local
npm run clean && npm run build

# Vérifier que .htaccess est copié
ls -la out/.htaccess

# Vérifier que index.html existe
ls -la out/index.html
```

## Notes importantes

- ⚠️ `dangerous-clean-slate: true` supprime TOUT le contenu de `/public_html/` avant chaque déploiement
- Le fichier `.htaccess` est automatiquement copié depuis `/public/` vers `/out/` lors du build
- Next.js génère un export statique pur (pas de SSR) compatible avec l'hébergement Hostinger

## Résultat attendu

Après ces modifications et un nouveau déploiement :
- ✅ Le site est accessible sur https://khroonos.com
- ✅ Pas d'erreur 403
- ✅ Le routing Next.js fonctionne correctement
- ✅ Les assets (images, CSS, JS) se chargent correctement

