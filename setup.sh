#!/bin/bash

function report_result() {
    # Gets the return value '$?'' of the last command and reports success or not
    last_cmd=$?
    if [[ $last_cmd -eq 0 ]]; then
        echo -e "Success."
    else
        echo -e "\nSomething went wrong! Bailing..."
        exit 1
    fi
}

OS=$(uname -a | cut -c1-5)
# venv
## create venv
echo -e "\n*** Checking to see if virtual environment exists"
if [[ -d "/venv" ]]; then
    echo -e "\n*** Creating new virtual environment using python-venv"
    if [[ $OS =~ "Linux" ]]; then
        echo "Making adjustments due to bad choice of operating system"
        python3 -m venv venv --prompt sustainablinds
    else
        python -m venv venv --prompt sustainablinds
    fi
    report_result
else
    echo -e "\n Virtual environment already exists in this directory."
fi

## activate venv
echo -e "\n*** Activating the python virtual environment for this script..."
if [[ $OS =~ "Linux" ]]; then
    source venv/bin/activate
else
    source venv/Scripts/activate
fi
report_result
echo -e "Using: $(which python)"

# upgrade pip
echo -e "\n*** Updating pip to latest version...\n"
python -m pip install --upgrade pip
report_result

# pip install
echo -e "\n*** Installing latest Python requirements...\n"
python -m pip install -r requirements.txt
report_result

# pre-commit install
echo -e "\n*** Installing pre-commit hooks\n"
python -m pre_commit install
report_result

# create .env file
echo -e "\n*** Creating .env file"
cat > .env << EOF
SECRET_KEY = 'Enter django secret key here'
EOF
report_result

# setup post-merge hook
echo -e "\n*** Installing post-merge hooks at .git/hooks/post-merge"
cat > .git/hooks/post-merge << EOF
#!/bin/bash
# This script will run on a successful merge
function report_result() {
    # Gets the return value '$?' of the last command and reports success or not
    if [[ $? -eq 0 ]]; then
        echo -e "Success."
    else
        echo -e "\nSomething went wrong! Bailing..."
        exit 1
    fi
}
echo -e "\n*** Running post-merge hook\n"
# venv
echo -e "\n*** Activating the python virtual environment for this script..."
OS=$(uname -a | cut -c1-5)
if [[ $OS =~ "Linux" ]]; then
    echo "Making adjustments due to bad choice of operating system"
    source venv/bin/activate
else
    source venv/Scripts/activate
fi
report_result
echo -e "Using: $(which python)"
# upgrade pip
echo -e "\n*** Updating pip to latest version...\n"
python -m pip install --upgrade pip
report_result
# pip install
echo -e "\n*** Installing latest Python requirements...\n"
python -m pip install -r requirements.txt
report_result
# pre-commit install
echo -e "\n*** Installing any new pre-commit hooks\n"
python -m pre_commit install
report_result
EOF
report_result

# set post-merge hook as executable
echo -e "\n*** Setting post-merge hook as executable\n"
chmod +x .git/hooks/post-merge
report_result

# creating update.sh, which will simply run the post-merge hook
echo -e "\n*** Creating update.sh file. This will run post-merge hooks...\n"
cat > update.sh << EOF
#!/bin/bash

# run post-merge hook since this will do all necessary updates
source .git/hooks/post-merge
EOF
report_result

echo -e "\nSetup Completed Successfully."
