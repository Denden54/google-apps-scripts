# README : Script de Scan Google Drive pour Google Sheets

## Description
Ce script Google Apps Script est conçu pour scanner un répertoire spécifié dans Google Drive et récupérer des informations sur les éléments partagés dans ce répertoire. Il permet de récupérer les noms des éléments, les adresses e-mail avec lesquelles ils sont partagés, et le chemin d'accès au sein du Drive. Les résultats sont ensuite écrits dans une feuille Google Sheets.

## Fonctionnalités
- **Scan de Répertoire Google Drive**: Scanne un répertoire spécifié et ses sous-répertoires.
- **Modes de Scan**: Possibilité de scanner uniquement les dossiers ou bien les dossiers et les fichiers.
- **Exclusion d'Adresses E-mail**: Exclut certaines adresses e-mail spécifiées.
- **Limitation de Profondeur de Scan**: Option pour limiter la profondeur du scan.
- **Ecriture dans Google Sheets**: Les résultats sont enregistrés dans une feuille Google Sheets.

## Prérequis
- Accès à Google Drive.
- Un document Google Sheets pour enregistrer les résultats.
- Les autorisations nécessaires pour exécuter des scripts Google Apps Script.

## Mise en Place
1. **Ouvrir Google Sheets**:
   - Créez ou ouvrez un document Google Sheets existant.

2. **Créer un Nouveau Script**:
   - Allez dans `Extensions` > `Apps Script`.
   - Supprimez tout code existant et remplacez-le par le script fourni.

3. **Configurer le Script**:
   - Dans le script, remplacez `YOUR_FOLDER_ID` par l'ID du dossier Google Drive que vous souhaitez scanner.
   - Modifiez la liste `excludeAddresses` pour ajouter les adresses e-mail à exclure du résultat.
   - Ajustez la variable `mode` selon que vous souhaitez scanner uniquement les dossiers (`'FOLDERS'`) ou les dossiers et les fichiers (`'ALL'`).
   - Réglez `depthLimit` pour limiter la profondeur du scan, si nécessaire.

4. **Créer la Feuille de Résultats**:
   - Assurez-vous qu'une feuille nommée 'Results' existe dans votre Google Sheets.

5. **Exécuter le Script**:
   - Cliquez sur le bouton `Exécuter` dans l'éditeur de script.

6. **Autoriser l'Exécution**:
   - Lors de la première exécution, Google demandera d'autoriser les permissions nécessaires.

## Utilisation
Après la configuration et l'exécution, le script parcourra le dossier spécifié dans Google Drive et enregistrera les résultats dans la feuille 'Results' de votre Google Sheets. Les résultats incluront le nom de chaque élément, les adresses e-mail avec lesquelles il est partagé (à l'exception des adresses exclues), et le chemin complet du dossier.

## Limitations
- Le temps d'exécution peut être long pour les grands répertoires.
- Les limites de quota de Google Apps Script peuvent affecter le fonctionnement du script sur de très gros volumes de données.


