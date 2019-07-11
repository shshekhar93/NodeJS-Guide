## Programs to install
- NodeJS
- Visual Studio Code (Or your favourite editor)
- Git

### Installing NodeJS
Latest NodeJS (LTS) installers can be downloaded from NodeJS website here: https://nodejs.org/en/download/

However, such installations are typically not preferable in development environment for various reason. This installation typically requires administrator privileges, and makes it almost impossible to have more than one versions installed at a time. 

For development environment setup, its preferred to use a tool like NVM (Node Version Manager). Follow the appropriate instructions for your environment below.

#### Mac
- Install command line tools by executing `xcode-select --install`
- Install `nvm` by following the instructions here https://github.com/nvm-sh/nvm#installation-and-update
- Add the four lines printed at end of installation to `~/.profile` file.
- Close and reopen terminal.
- Execute `nvm install v10` to get the latest LTS Node installed on your computer

#### Linux
- Follow the step 2 onwards in previous section, and
- Ensure `python` version 2.7 is installed. If not, install `python2` using your distro's package manager.
- Ensure C and C++ compilers are installed. If not, install your distro's developer package (`build-essential` for Ubuntu, `base-devel` for Arch etc).

#### Windows
There are three options for setting up NodeJS on windows (in order of preference)
1. Enable WSL (Windows Subsystem for Linux), install your favourite linux distro, and follow the steps above. Official Microsoft instructions for using WSL are here https://docs.microsoft.com/en-us/windows/wsl/install-win10.
2. Install a Virtual machine (Virtual Box, Vmware Workstation, etc), install your favourite Linux distro, and follow the steps above.
3. Install NodeJS using the official installer from https://nodejs.org/en/download/

Prefer Option 1 or 2, and only if they don't work / can't be used, use option 3. NodeJS itself will work fine regardless of which option is used, however, getting some of the node modules (libraries for NodeJS) to install is unjustifiably complicated when using option 3.

For ease of use please also install a decent terminal emulator. `ConEmu` and `Cmder` work particularly well in my experience.

### Installing Visual Studio Code
Visual Studio Code can be downloaded for free from their website (https://code.visualstudio.com/Download). Please note that, while I recommend VS Code for it's ease of use with NodeJS, any other editor that you like would also work without any issues.

### Installing git
Depending on your operating system, `git` might have come packaged with your system. If not, download the latest installer from their website https://code.visualstudio.com/Download.
