# 🖼️ GESTION DES IMAGES DANS NEXT.JS

## ✅ PROBLÈME RÉSOLU

### Pourquoi les images n'apparaissaient pas ?

**Avant** :
- Les images étaient dans `src/assets/medias/`
- Les chemins utilisaient `src/assets/medias/...`
- ❌ Next.js ne peut pas accéder à `src/` pour les assets statiques

**Après** :
- Les images sont copiées vers `public/medias/`
- Les chemins utilisent `/medias/...`
- ✅ Next.js sert automatiquement les fichiers de `public/`

---

## 📁 STRUCTURE DES ASSETS

```
khroonos.com/
├── src/
│   └── assets/
│       └── medias/          ← Source originale (pour développement)
│           ├── fonts/
│           ├── icons/
│           └── images/
└── public/
    ├── favicon.ico
    └── medias/              ← Copie pour Next.js (build/déploiement)
        ├── fonts/
        ├── icons/
        └── images/
```

---

## 🔧 COMMENT ÇA FONCTIONNE

### 1. Script Automatique

Un script `prebuild` copie automatiquement les assets avant chaque build :

```json
"prebuild": "cp -r src/assets/medias public/ || true"
```

Ce script s'exécute automatiquement avant `npm run build`.

### 2. Chemins dans le Code

**Tous les chemins d'images utilisent maintenant** :
```typescript
// ✅ CORRECT - Chemin depuis public/
'/medias/images/Projects Images/Aichef/Aichef-Logo.svg'

// ❌ INCORRECT - Ancien chemin
'src/assets/medias/images/Projects Images/Aichef/Aichef-Logo.svg'
```

### 3. Fichiers Mis à Jour

- ✅ `src/data/projects.ts` - Tous les chemins d'images
- ✅ `src/data/informations.ts` - Photo de profil
- ✅ `src/data/icons.ts` - Icônes
- ✅ `src/data/softwares.ts` - Logos des technologies
- ✅ `src/views/home.module.scss` - Image de fond CSS

---

## 🚀 UTILISATION

### En Développement

```bash
npm run dev
```

Les images dans `public/medias/` seront automatiquement servies.

### En Production (Build)

```bash
npm run build
```

Le script `prebuild` copie automatiquement `src/assets/medias/` vers `public/medias/`.

---

## 📝 AJOUTER DE NOUVELLES IMAGES

### Option 1 : Ajout Direct dans public/ (Recommandé)

```bash
# Ajoutez vos nouvelles images directement dans public/medias/
cp mon-image.png public/medias/images/
```

Puis utilisez le chemin dans votre code :
```typescript
images: ['/medias/images/mon-image.png']
```

### Option 2 : Ajout dans src/assets/ (avec copie)

```bash
# Ajoutez dans src/assets/medias/
cp mon-image.png src/assets/medias/images/

# Copiez vers public/ manuellement
cp -r src/assets/medias public/

# Ou laissez le script prebuild le faire au prochain build
npm run build
```

---

## 🎯 DÉPLOIEMENT

### GitHub Actions Workflow

Le workflow de déploiement exécute automatiquement :
```yaml
- name: Build project
  run: npm run build  # Exécute prebuild automatiquement
```

✅ **Les images seront toujours copiées vers `public/medias/` avant le build**

### Sur Hostinger

Le dossier `out/` généré par Next.js contient :
```
out/
├── _next/
├── medias/          ← Toutes vos images
│   ├── fonts/
│   ├── icons/
│   └── images/
└── index.html
```

Tout est uploadé automatiquement via FTP.

---

## ⚠️ POINTS IMPORTANTS

### 1. Ne PAS modifier directement public/medias/

Les fichiers dans `public/medias/` sont copiés depuis `src/assets/medias/`.

**Workflow recommandé** :
1. Modifier/ajouter dans `src/assets/medias/`
2. Le script `prebuild` copie vers `public/medias/`
3. Commit `src/assets/medias/` dans Git
4. `public/medias/` est ignoré par Git (géré automatiquement)

### 2. .gitignore

`public/medias/` n'est PAS dans .gitignore car :
- Les assets doivent être déployés
- Le script `prebuild` les génère automatiquement
- Cela garantit que les images sont toujours à jour

### 3. Chemins Absolus vs Relatifs

Next.js préfère les chemins absolus depuis `/` :

✅ **BON** :
```typescript
src="/medias/images/photo.png"
```

❌ **À ÉVITER** :
```typescript
src="../assets/medias/images/photo.png"
```

---

## 🔍 DÉPANNAGE

### Images qui n'apparaissent pas en dev ?

```bash
# 1. Vérifiez que public/medias/ existe
ls -la public/medias/

# 2. Si vide, copiez manuellement
cp -r src/assets/medias public/

# 3. Redémarrez le serveur dev
npm run dev
```

### Images qui n'apparaissent pas en production ?

```bash
# 1. Vérifiez le build local
npm run build
ls -la out/medias/

# 2. Si vide, le prebuild n'a pas fonctionné
# Ajoutez manuellement avant le build :
cp -r src/assets/medias public/
npm run build
```

### Erreur 404 sur les images ?

Vérifiez le chemin dans votre code :
- ✅ Doit commencer par `/medias/`
- ❌ Ne PAS utiliser `src/assets/`
- ❌ Ne PAS utiliser `./medias/` ou `../medias/`

---

## 📊 RÉSUMÉ

| Aspect | Solution |
|--------|----------|
| **Source** | `src/assets/medias/` (édité par vous) |
| **Public** | `public/medias/` (copié automatiquement) |
| **Chemin Code** | `/medias/...` (depuis public/) |
| **Script** | `prebuild` copie automatiquement |
| **Déploiement** | Automatique via GitHub Actions |

---

✨ **Vos images fonctionnent maintenant en dev ET en production !**

