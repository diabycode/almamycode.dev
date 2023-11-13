1. Ouvrir un terminal :
    - Sur Windows : Appuyez sur la touche "Windows" + "R" pour ouvrir la boîte de dialogue "Exécuter". Tapez "cmd" et appuyez sur "Entrée".
    - Sur Mac : Appuyez sur "CMD" + "Barre d'espace" pour ouvrir Spotlight. Tapez "Terminal" et appuyez sur "Entrée".
    - Sur Linux : Appuyez sur "CTRL" + "ALT" + "T" pour ouvrir un terminal.
2. Naviguer vers le dossier où vous souhaitez cloner le projet. Vous pouvez utiliser la commande "cd" pour vous déplacer dans le répertoire parent, puis la commande "ls" pour afficher les fichiers et dossiers présents dans ce répertoire. Par exemple, pour naviguer vers le dossier "Documents" :

    ```bash
    cd Documents
    ls
    ```

3. Cloner le projet à partir du dépôt GitHub en utilisant la commande "git clone". Pour cela, vous avez besoin de l'URL du dépôt GitHub.

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c667191a-c5bb-478b-9267-a34937b26880/Untitled.png)

    Par exemple, si l'URL du dépôt est "**https://github.com/username/repo.git**", vous pouvez utiliser la commande suivante pour cloner le projet :

    ```bash
    git clone https://github.com/username/repo.git
    ```

4. Une fois que le projet a été cloné, naviguez dans le dossier du projet en utilisant la commande "cd". Par exemple, si le nom du dossier du projet est "myproject", utilisez la commande suivante :

    ```bash
    cd myproject
    ```

5. Créez un environnement virtuel pour le projet en utilisant la commande "python -m venv". Vous pouvez donner un nom à votre environnement virtuel. Par exemple, si vous voulez nommer votre environnement virtuel "venv", utilisez la commande suivante :

    ```bash
    python -m venv venv
    ```

6. Activez l'environnement virtuel en utilisant la commande "source" (Mac/Linux) ou "activate" (Windows). Par exemple, pour activer l'environnement virtuel nommé "venv" sur Mac/Linux, utilisez la commande suivante :

    ```bash
    source venv/bin/activate
    ```

    Sur Windows, utilisez plutôt la commande suivante :

    ```bash
    venv\Scripts\activate
    ```

7. Installez les dépendances requises pour le projet à partir du fichier "requirements.txt" en utilisant la commande "pip install". Assurez-vous d'avoir la dernière version de pip installée. Par exemple, pour installer les dépendances à partir du fichier "requirements.txt", utilisez la commande suivante :

    ```bash
    pip install -r requirements.txt
    ```

8. Le projet est maintenant prêt à être exécuté en local ! Vous pouvez exécuter le projet en utilisant la commande appropriée pour le projet.
