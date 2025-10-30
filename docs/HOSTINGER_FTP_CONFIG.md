# Configuration des Secrets GitHub pour Hostinger

## Problème Actuel
Erreur `530 Login incorrect` - Les identifiants FTP ne fonctionnent pas.

## Vérification des Secrets GitHub

Allez sur : `https://github.com/Arkhroonos/khroonos.com/settings/secrets/actions`

### Secrets à Configurer

#### 1. FTP_SERVER
**Valeur correcte** : `89.117.169.36`
- ❌ Ne pas mettre : `ftp://89.117.169.36`
- ❌ Ne pas mettre : `89.117.169.36:21`
- ✅ Juste l'IP ou le domaine

#### 2. FTP_USERNAME
**Option 1** (si Hostinger utilise juste le numéro) : `u917408224`
**Option 2** (si format complet requis) : `u917408224.khroonos.com`

**Pour vérifier** : Regardez dans votre panneau Hostinger (hPanel) :
- Allez dans "Files" → "FTP Accounts"
- Le username affiché là est le bon

#### 3. FTP_PASSWORD
**Valeur** : `Heracles97`
- ⚠️ Attention à la casse (H majuscule)
- Pas d'espaces avant/après

## Solutions Possibles

### Solution 1 : Vérifier le Username
Le username Hostinger est généralement au format `uXXXXXXXXX` (juste le numéro).

Essayez :
1. `u917408224` (sans .khroonos.com)
2. Si ça ne marche pas, essayez `u917408224.khroonos.com`

### Solution 2 : Vérifier le Protocole
Hostinger peut utiliser :
- **FTP** (port 21) - Non sécurisé
- **FTPS** (port 21) - FTP avec SSL/TLS ✅ (configuré dans le workflow)
- **SFTP** (port 22) - SSH File Transfer

Le workflow actuel est configuré pour **FTPS**.

### Solution 3 : Vérifier dans hPanel Hostinger

1. Connectez-vous à : `https://hpanel.hostinger.com`
2. Allez dans votre site web
3. Cliquez sur "Files" → "FTP Accounts"
4. Vous verrez :
   - **Hostname** (server)
   - **Username** 
   - **Port**
   - **Protocol** (FTP ou SFTP)
5. Créez un nouveau compte FTP si nécessaire ou réinitialisez le mot de passe

### Solution 4 : Alternative SFTP

Si Hostinger utilise SFTP (plus sécurisé), nous devrons utiliser une action différente.
Vérifiez si le port est 22 → c'est SFTP.

## Comment Mettre à Jour les Secrets

1. Allez sur : `https://github.com/Arkhroonos/khroonos.com/settings/secrets/actions`
2. Cliquez sur chaque secret (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
3. Cliquez sur "Update"
4. Entrez la nouvelle valeur
5. Cliquez sur "Update secret"

## Tester la Configuration

Après avoir mis à jour les secrets :
1. Allez sur : `https://github.com/Arkhroonos/khroonos.com/actions`
2. Cliquez sur "Deploy to Hostinger"
3. Cliquez sur "Run workflow"
4. Sélectionnez "main"
5. Cliquez sur "Run workflow"

## Logs à Vérifier

Si ça échoue encore, vérifiez :
- L'erreur exacte dans les logs GitHub Actions
- `530 Login incorrect` = mauvais username/password
- `Connection timeout` = mauvais server ou port
- `Protocol not supported` = mauvais protocol (FTP vs SFTP)

