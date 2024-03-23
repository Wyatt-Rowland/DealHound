You will need to install various packages for this to work. 

You will need node.js

npm install

npm install react

npm install chakra-ui

npm install chakra-ui-react

npm install chakra-ui-icons

npm install react-icons

and maybe more. Paste your error codes into chatgpt and run some of its npms. 

When all that is finished, run 

npm start

to see what the app looks like in a browser. You can go to localhost:3000 to see it. 

To contribute to a project by forking a repository, making changes, and then creating a pull request for approval, follow these steps:
1. Fork the Repository
Go to the GitHub page of the repository you want to fork.
Click on the "Fork" button at the top right corner. This creates a copy of the repository in your GitHub account.
2. Clone the Forked Repository
Open a terminal on your machine and run the following command to clone the forked repository:

git clone <URL-of-your-forked-repository>

Replace <URL-of-your-forked-repository> with the URL of the repository you just forked.

3. Navigate to the Repository Directory
Change to the directory that was created by the clone:

cd <repository-name>

Replace <repository-name> with the name of the directory that Git cloned to.

4. Create a New Branch
It's a good practice to make changes in a new branch rather than directly on the main branch:

git checkout -b <new-branch-name>

Replace <new-branch-name> with a name for your new branch.

5. Make Your Changes
Open the project files in your preferred code editor, make your changes, and save them.

6. Add and Commit Changes
Add the changed files to the staging area:

git add .

Then, commit your changes with a descriptive message:

git commit -m "Describe the changes you made"

7. Push the Changes to Your Fork
Push your branch and changes to your fork on GitHub:

git push -u origin <new-branch-name> !!!!!!!!----- Run git pull origin main before this.

8. Create a Pull Request
Go to your forked repository on GitHub. You should see a prompt to create a pull request for the branch you just pushed. Click "Compare & pull request".
Enter a title and description for your pull request.
Click "Create pull request".
Additional Steps for Keeping Your Fork Updated
If the original repository is updated and you want to keep your fork synchronized:

9. Add the Original Repository as a Remote:

git remote add upstream <URL-of-original-repository>

10. Fetch the Latest Changes from the Original Repository:

git fetch upstream

11. Merge the Changes into Your Local Main Branch
Ensure you're on your main branch:

git checkout main

Merge changes from the original repository's main branch into your local main branch:

git merge upstream/main

Or if the main branch is named differently (like master), replace main with the correct branch name.
12. Push the Updated Main Branch to Your Fork:

git push origin main

This workflow allows you to contribute to projects and keep your fork up to date with the original repository.
