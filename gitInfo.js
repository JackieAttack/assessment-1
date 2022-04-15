/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is software that provides version control, tracking changes, and makes it easier to coordinate work between many programmers on a potentially large program using GitHub."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "GitHub is a website that provides remote hosting of git repositories to allow multiple developers to work on the same program or to share your programs with other people."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "git init is a git command that initializes a local repository in whatever folder you're currently in."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "git clone is a git command that creates a copy of a certain repository or a branch within that repository by providing the URL, making a remote repo into a local repo in whatever directory you're in."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "git status is a git command that gives you information about changes to files in a repo, including if any changes have not been commited or if any files have been added or deleted since last commit."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "git add is a git command that adds files in your working directory to the git staging area, allowing them to be included in your next commit. It's a necissary step to commit your changes and push them to GitHub."

let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "git commit is a git command that saves a snapshot of a repo, tracking any changes and allowing you to go back to that point in the future if you need to. Usually you include a short message explaining the changes since last commit."

let gitCommitCode = 'git commit -m "Initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "git push is a git command that uploads the commits saved in a local repository to a remote repo on Github, allowing you to share changes."