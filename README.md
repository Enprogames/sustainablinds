# Sustainablinds project
This was created by Ethan Posner, Sebastien Van Den Bremt, and Jasper Charlinski for the Technation Open Innovation Challenge, which can be found [here](https://technationcanada.agorize.com/en).

This project is a simple Django website which can be used to optimally control window blinds in a building with the purpose of reducing heating and cooling energy used. For now, it only displays a concept of how this could be achieved, but in the future, automated window blinds could be connected to the website.

## Installation
1. Install python [here](https://www.python.org/downloads/). Make sure it is added to your PATH environment variable. Otherwise, you won't be able to run python commands from the terminal like this: `python script.py`.
1. Navigate to project folder using `cd 'folder'` in git bash on windows or terminal on linux
2. Run `git clone https://github.com/Enprogames/sustainablinds.git`
3. Move into project directory: `cd sustainablinds`
4. Run setup.sh script: `./setup.sh`. If this is not desired, see alternative instructions below. This does the following:
    - Creates and activates a virtual environment with venv
    - Upgrades pip to latest version and installs all packages from requirements.txt
    - Installs pre-commit hooks as specified in .pre-commit-config.yaml
    - Creates .env file for django secret key. You must copy your django secret key into this file.
    - Creates post-merge hook which will do the following everytime a merge is done:
        - Activate virtual environment
        - Update pip and install any new packages from requirements.txt
    - Create update.sh script which can be used to run post-merge hook manually.
- Alternatively, to setup the project manually and avoid running the setup.sh script, run the following (if using windows, make sure to run windows instructions inside of git bash).
    1. Create python virtual environment using venv
        - On linux: `python3 -m venv venv --prompt sustainablinds`
        - On windows: `python -m venv venv --prompt sustainablinds`
    2. Activate virtual environment
        - On linux: source venv/bin/activate
        - On windows: `source venv/Scripts/activate`
    3. Update python package manager (PIP) to latest version
        - `python -m pip install --upgrade pip`
    4. Install all required packages from requirements.txt
        - `python -m pip install -r requirements.txt`
    5. Setup pre-commit hooks (optional if not contributing to project). This stops you from committing files which are improperly formatted.
        - `python -m pre_commit install`
    6. Create a .env file for the django secret key
        - ```
            cat > .env << EOF
            SECRET_KEY = 'Enter django secret key here'
            EOF
          ```
        - Ask the author for the django secret key

## Usage

1. Make sure all installation instructions were followed correctly and worked without errors. It is crucial that you have all required packages installed from requirements.txt.
2. Make sure you're in the root of the project directory
    - If you're outside of the sustainablinds directory, go into it with `cd sustainablinds`
    - If you're in the django-website directory, run `cd ..`
3. To start the website, run `django-website/manage.py runserver`
4. Click on the link in the terminal, or go to `http://127.0.0.1:8000/` in your browser.

## License

