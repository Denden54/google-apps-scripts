function scanDrive() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Results'); // Assurez-vous que cette feuille existe
  const folderId = 'DOSSIER'; // Remplacez par l'ID du dossier
  const excludeAddresses = [ 'exemple1@croix-rouge.fr', 'exemple2@croix-rouge.fr' ]; // Adresses à exclure
  const mode = 'FOLDERS'; // Utilisez 'FOLDERS' pour les dossiers uniquement, ou 'ALL' pour les dossiers et fichiers
  const depthLimit = 2; // 0 pour aucun limite, autrement spécifiez la profondeur
  
  sheet.clear(); // Nettoie la feuille existante
  sheet.appendRow(['Name', 'Shared With', 'Path']); // Entêtes des colonnes

  const rootFolder = DriveApp.getFolderById(folderId);
  scanFolder(rootFolder, '', 0);

  function scanFolder(folder, path, depth) {
    if (depthLimit > 0 && depth > depthLimit) return; // Limite de profondeur
    const fullPath = path + folder.getName() + '/';
    
    // Traiter les fichiers si mode 'ALL'
    if (mode === 'ALL') {
      const files = folder.getFiles();
      while (files.hasNext()) {
        const file = files.next();
        processItem(file, fullPath);
      }
    }

    // Traiter les sous-dossiers
    const subFolders = folder.getFolders();
    while (subFolders.hasNext()) {
      const subFolder = subFolders.next();
      processItem(subFolder, fullPath);
      scanFolder(subFolder, fullPath, depth + 1);
    }
  }

  function processItem(item, path) {
    const sharedUsers = item.getEditors().concat(item.getViewers()).map(user => user.getEmail());
    const filteredUsers = sharedUsers.filter(email => !excludeAddresses.includes(email));
    if (filteredUsers.length > 0) {
      sheet.appendRow([item.getName(), filteredUsers.join(', '), path]);
    }
  }
}

