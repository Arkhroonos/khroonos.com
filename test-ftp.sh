#!/bin/bash

# Script de test de connexion FTP pour Hostinger
# Usage: ./test-ftp.sh

echo "🔍 Test de connexion FTP à Hostinger"
echo "======================================"
echo ""

# Variables (à modifier avec vos vraies valeurs)
FTP_SERVER="89.117.169.36"
FTP_USERNAME="u917408224"  # ESSAYEZ SANS .khroonos.com d'abord
FTP_PASSWORD="Heracles97"

echo "📡 Serveur: $FTP_SERVER"
echo "👤 Username: $FTP_USERNAME"
echo ""

# Test 1: FTP simple (port 21)
echo "Test 1: FTP (port 21)"
echo "---------------------"
ftp -n <<EOF
open $FTP_SERVER 21
user $FTP_USERNAME $FTP_PASSWORD
ls
quit
EOF

echo ""
echo "========================================"
echo ""

# Test 2: FTPS explicite
echo "Test 2: FTPS (port 21 avec TLS)"
echo "--------------------------------"
curl -v --ftp-ssl ftp://$FTP_SERVER:21 --user "$FTP_USERNAME:$FTP_PASSWORD" 2>&1 | grep -E "(Connected|Login|530|421)"

echo ""
echo "========================================"
echo ""
echo "💡 Si vous voyez '530 Login incorrect':"
echo "   1. Vérifiez le username (essayez avec/sans .khroonos.com)"
echo "   2. Vérifiez le mot de passe (attention à la casse)"
echo "   3. Connectez-vous à hPanel Hostinger pour confirmer les identifiants"
echo ""
echo "💡 Si connexion réussie:"
echo "   Mettez à jour les secrets GitHub avec les bonnes valeurs"

