#!/bin/bash

GREEN='\033[1;32m'
NC='\033[0m'

cd $HOME/goinfre


mkdir homebrew  > /dev/null 2>&1  && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip-components 1 -C homebrew > /dev/null 2>&1
if [ $? -ne 0 ]
then
	ls -l | grep homebrew > /dev/null 2>&1 
	if [ $? == 0 ]
	then
		grep 'eval "$($HOME/goinfre/homebrew/bin/brew shellenv)"' ~/.zshrc > /dev/null 2>&1
		if [ $? -ne 0 ]
		then
			echo 'eval "$($HOME/goinfre/homebrew/bin/brew shellenv)"' >> ~/.zshrc 
			exit 0
		fi
	fi
	exit 1
fi

grep 'eval "$($HOME/goinfre/homebrew/bin/brew shellenv)"' ~/.zshrc > /dev/null 2>&1
if [ $? -ne 0 ]
then
	echo 'eval "$($HOME/goinfre/homebrew/bin/brew shellenv)"' >> ~/.zshrc 
fi

eval "$($HOME/goinfre/homebrew/bin/brew shellenv)"


brew update --force --quiet > /dev/null 2>&1
chmod -R go-w "$(brew --prefix)/share/zsh" > /dev/null 2>&1
if [ $? -ne 0 ]
then
	printf "ERROR"
else
	printf "$GREEN brew installed successfully √$NC\n"
fi
