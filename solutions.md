# Git exercises
This short exercise is meant to give a hands-on experience of usual git use
cases. You will need the following commands to complete the tasks:

    git init
    git add
    git commit
    git diff
    git log
    git checkout

1. Create a new directory and initialize a git repository.

    ```bash
    mkdir test-repo && cd test-repo
    git init .
    ```

2. Create a file with dummy content and commit it to your repository.

    ```bash
    date > date.txt
    git add date.txt
    git commit -m "Add test file"
    ```

3. Modify the content of the file and display the changes.

    ```bash
    date >> date.txt
    git diff
    ```

4. Commit the modifications and investigate the history of your repository.

    ```bash
    git commit date.txt
    ```
    OR
    ```bash
    git add date.txt
    git commit
    ```
    OR
    ```bash
    git add -u
    git commit
    ```

    ```bash
    git log
    ```

5. Modify the content of the file, again, but discard the changes.

    ```bash
    date >> date.txt
    git checkout date.txt
    ```


# _Bonus:_ Branches
Branches are a powerful tool to order your commits. The basic commands to
create and interact with branches are ``branch``, ``checkout``, ``merge`` and
``rebase``. Make yourself familiar with their concept by using online source or
the git man page.

There is a nice online tool that allows you to explore branching in git:

https://git-school.github.io/visualizing-git/

It is possible to create dummy commits by simply executing ``git commit``. This
way you can easily create complex repositories with branches and explore their
relation.
