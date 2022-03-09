# Sustainablinds project

## Installation
1. Navigate to project folder using `cd 'folder'` in git bash on windows or terminal on linux
2. Run `git clone https://github.com/Enprogames/sustainablinds.git`
3. Move into project directory: `cd sustainablinds`
4. Run setup.sh script: `./setup.sh`. This does the following:
    - Creates and activates a virtual environment with venv
    - Upgrades pip to latest version and installs all packages from requirements.txt
    - Installs pre-commit hooks as specified in .pre-commit-config.yaml
    - Creates .env file for django secret key. You must copy your django secret key into this file.
    - Creates post-merge hook which will do the following everytime a merge is done:
        - Activate virtual environment
        - Update pip and install any new packages from requirements.txt
    - Create update.sh script which can be used to run post-merge hook manually.
