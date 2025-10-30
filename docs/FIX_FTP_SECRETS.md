# 🔐 GUIDE : Corriger les Secrets GitHub pour Hostinger

## 🚨 Problème Actuel
**Erreur** : `530 Login incorrect`  
**Cause** : Les identifiants FTP dans les secrets GitHub sont incorrects.

---

## ✅ SOLUTION ÉTAPE PAR ÉTAPE

### Étape 1 : Vérifier vos identifiants Hostinger

1. **Connectez-vous à Hostinger** : https://hpanel.hostinger.com
2. Sélectionnez votre site web **khroonos.com**
3. Allez dans **Files** → **FTP Accounts**
4. Vous verrez vos informations FTP :

```
Server/Host: ftp.khroonos.com OU 89.117.169.36
Username: u917408224 (ATTENTION: sans .khroonos.com !)
Port: 21
Protocol: FTP ou FTPS
```

📸 **Astuce** : Prenez une capture d'écran de cette page !

---

### Étape 2 : Mettre à jour les Secrets GitHub

1. **Allez sur GitHub** : https://github.com/Arkhroonos/khroonos.com/settings/secrets/actions

2. **Mettez à jour chaque secret** :

#### Secret 1 : `FTP_SERVER`
- Cliquez sur **FTP_SERVER**
- Cliquez sur **Update**
- Entrez la valeur : `89.117.169.36`
  - ❌ PAS `ftp://89.117.169.36`
  - ❌ PAS `89.117.169.36:21`
  - ✅ JUSTE `89.117.169.36`
- Cliquez sur **Update secret**

#### Secret 2 : `FTP_USERNAME`
- Cliquez sur **FTP_USERNAME**
- Cliquez sur **Update**
- Entrez la valeur : `u917408224`
  - ❌ PAS `u917408224.khroonos.com`
  - ✅ JUSTE `u917408224`
- Cliquez sur **Update secret**

#### Secret 3 : `FTP_PASSWORD`
- Cliquez sur **FTP_PASSWORD**
- Cliquez sur **Update**
- Entrez votre mot de passe : `Heracles97`
  - ⚠️ Attention à la casse (H majuscule)
  - ⚠️ Pas d'espaces avant/après
- Cliquez sur **Update secret**

---

### Étape 3 : Relancer le Déploiement

1. **Allez sur GitHub Actions** : https://github.com/Arkhroonos/khroonos.com/actions
2. Cliquez sur **Deploy to Hostinger** (à gauche)
3. Cliquez sur **Run workflow** (bouton bleu à droite)
4. Sélectionnez **Branch: main**
5. Cliquez sur **Run workflow** (bouton vert)

---

## 🔍 DÉPANNAGE

### Si ça ne marche toujours pas :

#### Problème A : Username incorrect
**Symptôme** : Toujours `530 Login incorrect`

**Solutions** :
1. Dans Hostinger hPanel, vérifiez le username EXACT
2. Essayez avec le domaine : `u917408224.khroonos.com`
3. Créez un NOUVEAU compte FTP dans Hostinger avec un nouveau mot de passe

#### Problème B : Protocole incorrect
**Symptôme** : `Connection timeout` ou `Protocol not supported`

**Solution** : 
- Si Hostinger utilise **SFTP** (port 22), utilisez le workflow alternatif :
  1. Allez sur : https://github.com/Arkhroonos/khroonos.com/actions
  2. Sélectionnez **Deploy to Hostinger (SFTP Alternative)**
  3. Cliquez sur **Run workflow**

#### Problème C : Serveur incorrect
**Symptôme** : `Connection timeout`

**Solutions** :
1. Essayez avec le hostname : `ftp.khroonos.com`
2. Vérifiez que votre domaine pointe vers Hostinger
3. Vérifiez que l'IP est correcte dans Hostinger hPanel

---

## 🧪 TEST LOCAL (Optionnel)

Pour tester la connexion FTP depuis votre ordinateur :

```bash
# Depuis le dossier du projet
./test-ftp.sh
```

Modifiez d'abord les valeurs dans `test-ftp.sh` avec vos vrais identifiants.

---

## 📞 BESOIN D'AIDE HOSTINGER ?

Si rien ne fonctionne, contactez le support Hostinger :
- Chat en direct : https://www.hostinger.fr/contact
- Ils pourront :
  - Vérifier vos identifiants FTP
  - Confirmer le protocole (FTP/FTPS/SFTP)
  - Réinitialiser votre compte FTP

---

## ✨ APRÈS RÉUSSITE

Quand le déploiement fonctionne, vous verrez :
```
✅ Deploy to Hostinger - Success
```

Votre site sera accessible sur : **https://khroonos.com** 🎉

---

## 📝 CHECKLIST

- [ ] J'ai vérifié mes identifiants dans Hostinger hPanel
- [ ] J'ai mis à jour FTP_SERVER (juste l'IP)
- [ ] J'ai mis à jour FTP_USERNAME (sans le domaine)
- [ ] J'ai mis à jour FTP_PASSWORD (bonne casse)
- [ ] J'ai relancé le workflow GitHub Actions
- [ ] Le déploiement a réussi ✅

