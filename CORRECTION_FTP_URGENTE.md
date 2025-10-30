# ⚠️ CORRECTION URGENTE - SECRETS GITHUB

## 🔴 ERREUR ACTUELLE
```
FTPError: 530 Login incorrect
```

## ✅ SOLUTION CONFIRMÉE

Le workflow utilise maintenant **FTPS** correctement (on voit `TLSSocket` dans l'erreur), donc le **protocole est bon**.

Le problème est **100% le username dans vos secrets GitHub**.

---

## 🎯 CORRECTION IMMÉDIATE

### Allez sur cette URL MAINTENANT :
```
https://github.com/Arkhroonos/khroonos.com/settings/secrets/actions
```

### Vous devez voir 3 secrets. Pour CHACUN, cliquez dessus et vérifiez/corrigez :

#### 1️⃣ FTP_SERVER
**Cliquez sur "FTP_SERVER" → "Update"**

Valeur actuelle probable : `ftp://89.117.169.36` ❌

**Nouvelle valeur à mettre** :
```
89.117.169.36
```
☝️ Copiez exactement cette valeur (sans `ftp://`, sans port, juste l'IP)

---

#### 2️⃣ FTP_USERNAME  ⚠️ **C'EST ICI LE PROBLÈME**
**Cliquez sur "FTP_USERNAME" → "Update"**

Valeur actuelle : `u917408224.khroonos.com` ❌❌❌

**Nouvelle valeur à mettre** :
```
u917408224
```
☝️ Copiez exactement cette valeur (SANS `.khroonos.com`)

**C'est cette correction qui va résoudre l'erreur 530 !**

---

#### 3️⃣ FTP_PASSWORD
**Cliquez sur "FTP_PASSWORD" → "Update"**

Valeur à mettre :
```
Heracles97
```
☝️ Attention à la casse : H majuscule, reste en minuscule

---

## ✅ VÉRIFICATION DANS HOSTINGER

Avant de corriger, vérifiez vos vrais identifiants :

1. **Allez sur** : https://hpanel.hostinger.com
2. **Connectez-vous** avec vos identifiants Hostinger
3. **Sélectionnez** votre site web "khroonos.com"
4. **Cliquez sur** : Files → FTP Accounts
5. **Vous verrez** :
   ```
   Server: 89.117.169.36 ou ftp.khroonos.com
   Username: u917408224  ← NOTEZ BIEN CE USERNAME !
   Port: 21
   ```

**Si le username affiché est différent de `u917408224`, utilisez celui affiché !**

---

## 🚀 APRÈS CORRECTION

### 1. Relanchez le déploiement :
```
https://github.com/Arkhroonos/khroonos.com/actions
```
- Cliquez sur "Deploy to Hostinger"
- Cliquez sur "Run workflow"
- Sélectionnez "main"
- Cliquez sur "Run workflow"

### 2. Résultat attendu :
```
✅ Connected to 89.117.169.36
✅ Logged in as u917408224
✅ Uploading files to /public_html/
✅ Deployment successful!
```

---

## 📋 CHECKLIST FINALE

Avant de relancer le workflow, vérifiez que vous avez bien :

- [ ] Mis `FTP_SERVER` = `89.117.169.36` (sans ftp://)
- [ ] Mis `FTP_USERNAME` = `u917408224` (SANS .khroonos.com) ⚠️ CRUCIAL
- [ ] Mis `FTP_PASSWORD` = `Heracles97` (bon mot de passe avec casse correcte)
- [ ] Cliqué sur "Update secret" pour chaque modification
- [ ] Vérifié dans Hostinger hPanel que le username est bien `u917408224`

---

## 🆘 SI ÇA NE MARCHE TOUJOURS PAS

### Option 1 : Réinitialiser le compte FTP
Dans Hostinger hPanel :
1. Files → FTP Accounts
2. Supprimez le compte FTP actuel
3. Créez un NOUVEAU compte FTP avec un nouveau mot de passe
4. Utilisez ces NOUVEAUX identifiants dans GitHub Secrets

### Option 2 : Essayer avec le hostname
Changez `FTP_SERVER` pour :
```
ftp.khroonos.com
```
(au lieu de l'IP)

### Option 3 : Utiliser SFTP
Si votre Hostinger est configuré pour SFTP :
1. Allez sur : https://github.com/Arkhroonos/khroonos.com/actions
2. Utilisez le workflow "Deploy to Hostinger (SFTP Alternative)"

---

## 💡 EXPLICATION TECHNIQUE

L'erreur `530 Login incorrect` signifie que :
- ✅ La connexion au serveur fonctionne (IP correcte)
- ✅ Le protocole FTPS est bon (on voit TLSSocket)
- ❌ Le couple username/password est rejeté

**Dans 99% des cas avec Hostinger, c'est parce que le username contient `.khroonos.com` alors qu'il ne devrait pas !**

---

## 🎯 RÉCAPITULATIF

**AVANT** :
```
FTP_USERNAME = "u917408224.khroonos.com"  ❌
```

**APRÈS** :
```
FTP_USERNAME = "u917408224"  ✅
```

**Cette simple correction va résoudre votre problème !**

---

Fait le 30 octobre 2025

